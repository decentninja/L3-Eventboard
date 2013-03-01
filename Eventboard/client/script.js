Template.header.tags = function() {
    return Session.get("tags")
}

Template.eventPosts.data = function() {
    var tags = Session.get("tags")
    if(tags == undefined || tags.length == 0) {
        return eventPosts.find({})
    } else {
        return eventPosts.find({
            tags: {$all: tags}
        })
    }
}

Template.eventPosts.rendered = function() {
    if (!this._rendered) {
        this._rendered = true
        $('#event_grid').masonry({
            itemSelector: '.eventPost',
            isFitWidth: true,
            
            isAnimated: true,
            animationOptions: {
                duration: 100,
                easing: 'linear',
                queue: false
            }
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
        console.log("sdf")
        document.title = "The Eventboard of " + tags.join(" ") + " events";
    }
});