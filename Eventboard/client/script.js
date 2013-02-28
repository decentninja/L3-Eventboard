Template.header.tags = function() {
    return Session.get("tags")
}

Template.eventPosts.data = function() {
    if(Session.get("tags") == [] || Session.get("tags") == null) {
        return eventPosts.find({})
    } else {
        return eventPosts.find({
            tags: {$all: Session.get("tags")}
        })
    }
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
            }*/
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