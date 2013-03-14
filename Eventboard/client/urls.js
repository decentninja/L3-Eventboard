var Router = Backbone.Router.extend({
	routes: {
		"*tags": "main",
	},
	main: function (url) {
		if(url == "") {
			Session.set("tags", [])
		} else {
			Session.set("tags", url.split("/"))
		}
	},
})

var router = new Router()

Meteor.autorun(function() {
	// auto update url
	var tags = Session.get("tags")
	var selected = Session.get("selected")
	var url = ""
	if(tags != undefined) {
		url += tags.join("/")
	}/*
	if(selected != null) {
		url += ":" + selected
	}
	console.log(url)
	*/
	router.navigate(url, true)
})

Meteor.startup(function () {
	Backbone.history.start({pushState: true});
});