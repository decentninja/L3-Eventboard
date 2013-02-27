Template.events.events = function() {
    return events.find({})
}

Template.events.rendered = function() {
    if (!this._rendered) {
        this._rendered = true
        $('#event_grid').masonry({
	    // options
    	    itemSelector : '.event',
	    columnWidth : 240
        });
    } else {
        $('#event_grid').masonry('reload')
    }
}

