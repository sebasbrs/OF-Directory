var looks = {
    box: function(event) {
        event.preventDefault();
        const searchbox = document.getElementById('search').value;
        window.location.href = "./models/" + searchbox;
    },

}