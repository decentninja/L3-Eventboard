var Router = Backbone.Router.extend({
	routes: {
		"*tags": "main",
	},
	main: function (path) {
		if(path == "/") {
			Session.set("tags", [])
			Session.set("selected", null)
			return
		}
		if(path.indexOf(":") !== -1) {
			// set selected (modal)
			var parts = path.split(":")
			id = parts[1]
			path = parts[0]
			Session.set("selected", id)
		}
		var tags = path.split("/").filter(String)
		Session.set("tags", tags)
	},
})

var router = new Router()

function updateUrl() {
	var tags = Session.get("tags")
	var selected = Session.get("selected")
	var url = "/"
	if(tags.length != 0) {
		url += tags.join("/")
	}
	if(selected != null) {
		url += ":" + selected
	}
	router.navigate(url, true)
}

Meteor.startup(function () {
	Backbone.history.start({pushState: true});
});