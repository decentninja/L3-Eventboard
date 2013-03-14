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

function updateUrl() {
	var tags = Session.get("tags")
	if(tags != undefined) {
		router.navigate(tags.join("/"), true)
	}
}

Meteor.startup(function () {
	Backbone.history.start({pushState: true});
});