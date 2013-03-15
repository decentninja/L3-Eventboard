function getFilteredPosts() {
    var tags = Session.get("tags")
    var search = {
        $or: [
            {date: {$gte: new Date()}},
            {date: /Every/}
        ],
    }
    if(!(tags == undefined || tags.length == 0)) {
        search.tags = {$all: tags}
    }
    var posts = eventPosts.find(search, {sort: {date: 1}})
    if(posts.count() == 0) {
        return [];
    }
    return posts
}

function openModal(modalDiv) {
    $(modalDiv).modal().on('hide', function() {
        Session.set("selected", null)
        updateUrl()
    })
}

var updateUrl //content defined in urls.js