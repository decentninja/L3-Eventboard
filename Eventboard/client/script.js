Template.events.data = function() {
    return events.find({})
}

Template.event.selected = function() {
    return Session.equals("selected", this._id) ? "selected" : ''
}

Template.event.events = {
    "click": function(e) {
        if(Session.equals("selected", this._id)) {
            Session.set("selected", null)
        } else {
            Session.set("selected", this._id)
        }
    }
}

Template.events.rendered = function() {
    if (!this._rendered) {
        this._rendered = true
        $('#event_grid').masonry({
    	    itemSelector: '.event',
            /*
            isAnimated: true,
            isFitWidth: true,
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

