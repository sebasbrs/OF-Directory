from werkzeug.middleware.proxy_fix import ProxyFix
from flask import Flask, request, render_template, Response
from flask_cors import CORS
import os
import requests
import datetime

app = Flask(__name__)

CORS(app)

app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1)

KEY = os.getenv('RAPIDAPI_KEY')
host = os.getenv('RAPIDAPI_HOST')

### Route

@app.route('/')
def index():
    id = int(request.args.get('id','1'))
    data = requests.get(f'https://onlyfans-api5.p.rapidapi.com/catalog/{id}/publish_date_desc', headers={"x-rapidapi-key": KEY,
          "x-rapidapi-host": host})
    data = data.json()
    models = data['items']
    baseurl = request.url_root
    return render_template("index.html", models=models, base=baseurl)

@app.route('/models/<username>')
def models(username):
    data = requests.get(f'https://onlyfans-api5.p.rapidapi.com/users/{username}', headers={"x-rapidapi-key": KEY,
          "x-rapidapi-host": host})
    data = data.json()
    baseurl = request.url_root
    return render_template("model.html", models=data, base=baseurl)

@app.route('/sitemap')
def sitemap():
    data = requests.get(f'https://onlyfans-api5.p.rapidapi.com/catalog/1/publish_date_desc', headers={"x-rapidapi-key": KEY,
          "x-rapidapi-host": host})
    data = data.json()
    models = data['items']
    xml_data = "<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns='http://www.sitemaps.org/schemas/sitemap-image/1.1'>\n"
    last_mod = datetime.datetime.now().strftime("%Y-%m-%d")
    for model in models:
        xml_data += f"<url>\n<loc>{request.url_root}/models/{model['username']}</loc>\n<lastmod>{last_mod}</lastmod>\n<changefreq>monthly</changefreq>\n</url>\n"
    xml_data += "</urlset>"
    response = Response(xml_data, mimetype='application/xml')
    return response

if __name__ == '__main__':
    app.run(debug=True)