Template.eventPosts.data = function() {
    return eventPosts.find({})
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
        });
    } else {
        $('#event_grid').masonry('reload')
    }
}

