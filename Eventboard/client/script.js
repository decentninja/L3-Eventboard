Template.events.events = function() {
    return events.find({})
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

