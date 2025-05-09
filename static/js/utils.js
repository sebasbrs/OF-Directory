var looks = {
    box: function(event) {
        event.preventDefault();
        const searchbox = document.getElementById('search').value;
        window.location.href = "./models/" + searchbox;
    },

}

var navig = {
    prev: function() {
        const queryString = window.location.search;
        const currId = new URLSearchParams(queryString);
        const id = currId.has('id')? currId.get('id') : 1;
        const prevId = parseInt(id) - 1;
        if (prevId < 1) {
            alert("You are in the first page");
            return;
        }
        window.location.href = "./?id=" + prevId;
    },
    next: function() {
        const queryString = window.location.search;
        const currId = new URLSearchParams(queryString);
        const id = currId.has('id')? currId.get('id') : 1;
        const nextId = parseInt(id) + 1;
        window.location.href = "./?id=" + nextId;
        
    },
    back: function() {
        window.history.back();
    }

}