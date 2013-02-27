Meteor.startup(function () {
// code to run on server at startup
    if (events.find().count() === 0) {
      var stuff= [{name:'Language Café - English/French', description:'An event where you can improve your language-skills in a relaxed environment.  Get to know other people with the same interest in language and culture! Lunch is provided.'},
		  {name:'Ovve-Gasque', description:'Celebrate whatever you want with us! Just bring you finest clothing…Ovven!'},
		  {name:'Lunch with Corporate America', description:'A talk about the future of Corporate America, learn money and eat lunch!'},
		  {name: 'Dunder och Brak Barbeque festival! - Nubbedraget.', description: 'Likes barbeque? Wanna party? Come party with us! The grills will be lit at 16:00 and food should be sold shortly after. BYOB.'},
		  {name: 'Game-night', description: 'We have board-games, cards, Magic and candy. What else do you need?'}];
	
      for (var i = 0; i < stuff.length; i++)
        events.insert(stuff[i]);
    }
});