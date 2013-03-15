(function() {
	var header = Template.header

	header.tags = function() {
		return Session.get("tags")
	}

	header.allOtherTags = function() {
        // Awesome code to select and sort possible tags by occurrence.
        var posts = getFilteredPosts()
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

    header.events({
    	"click .add-tag-tag": function(e) {
    		Session.set("tags", Session.get("tags").concat(e.target.text))
    		e.preventDefault()
    		updateUrl()
    	},
    	"click .remove-tag-tag": function(e) {
    		Session.set("tags", Session.get("tags").filter(function(o) {
    			return o != e.target.text
    		}))
    		e.preventDefault()
    		updateUrl()
    	}
    })

    Meteor.autorun(function () {
    	var tags = Session.get("tags")
    	if(tags == undefined || tags.length == 0) {
    		document.title = "The Eventboard"
    	} else {
    		document.title = "The Eventboard of " + tags.join(" ") + " events";
    	}
    })

})()