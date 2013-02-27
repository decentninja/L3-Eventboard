Meteor.startup(function () {
// code to run on server at startup
    if (events.find().count() === 0) {
      var stuff= [{name:'stuff', description:'we will do stuff'},
		  {name:'more stuff', description:'we will do more stuff'}];
	
      for (var i = 0; i < stuff.length; i++)
        events.insert(stuff[i]);
    }
});