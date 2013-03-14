Template.header.tags = function() {
    return Session.get("tags")
}

var filterdPosts = function() {
    var tags = Session.get("tags")
    var search = {
        $or: [
            {date: {$gte: new Date()}},
            {date: /every/}
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

Template.header.allOtherTags = function() {
    // Awesome code to select and sort possible tags by occurrence.
    var posts = filterdPosts()
    var tags = []
    var sessiontags = Session.get("tags")
    posts.map(function(post) {
        post.tags.map(function(tag){
            if(sessiontags.indexOf(tag) == -1) {
                if(tags[tag]) {
                    tags[tag] += 1
                } else {
                    tags[tag] = 1
                }
            }
        })
    })
    var t = []
    for(var key in tags) {
        t.push([key, tags[key]])
    }
    t = t.sort(function(a, b) {return b[1] - a[1]})
    for(var i = 0; i < t.length; i++) {
        t[i] = t[i][0]
    }
    return t
}

Template.header.events = {
    "click .add-tag-tag": function(e) {
        Session.set("tags", Session.get("tags").concat(e.target.text))
    },
    "click .remove-tag-tag": function(e) {
        Session.set("tags", Session.get("tags").filter(function(o) {
            return o != e.target.text
        }))
    }
}

Template.eventPosts.data = function() {
    return filterdPosts
}

Template.eventPosts.rendered = function() {
    if (!this._rendered) {
        this._rendered = true
        $('#event_grid').masonry({
            itemSelector: '.eventPost',
            isFitWidth: true,
            /*
            isAnimated: true,
            animationOptions: {
                duration: 100,
                easing: 'linear',
                queue: false
            }
            */
        })
    } else {
        $('#event_grid').masonry('reload')
    }
}

Template.eventPost.selected = function() {
    return Session.equals("selected", this._id) ? "selected" : ''
}

Template.eventPost.events = {
    "click": function(e) {
        if(Session.equals("selected", this._id)) {
            Session.set("selected", null)
        } else {
            Session.set("selected", this._id)
        }
    }
}

 Meteor.autorun(function () {
    var tags = Session.get("tags")
    if(tags == undefined || tags.length == 0) {
        document.title = "The Eventboard"
    } else {
        document.title = "The Eventboard of " + tags.join(" ") + " events";
    }
});