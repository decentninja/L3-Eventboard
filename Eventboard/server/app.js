Meteor.startup(function () {
// code to run on server at startup
    if (eventPosts.find().count() === 0) {
      var stuff= [
      	{
      		"name" : "Language Café - English/French", 
      		"description" : "An event where you can improve your language-skills in a relaxed environment.  Get to know other people with the same interest in language and culture! Lunch is provided.",
      		"date" : "Every Friday between 12-13:00",
      		"location" : "KTH Library",
      		"organizer" : "KTH language and communication",
      		"color" : "#BDCCD4",    
      		"tags" : ["free", "non-alcoholic"] 		
      	},
		{
		 	"name" : "Ovve-Gasque", 
		 	"date" : "2013-11-24 At 18:00 o clock",
		 	"location" : "KTH Haninge",
		 	"organizer" : "Qlubbmästeriet Haninge",
		  	"description" : "Celebrate whatever you want with us! Just bring you finest clothing…Ovven!",
		  	"color" : "#3FA9F5",
		  	"tags" : ["gasque"]
		},
		{
			"name" : "Lunch with Corporate America",
			"date" : "2013-03-14 Between 12-13:00",
			"location" : "E1, KTH",
			"organizer" : "THS Näringsliv", 
			"description" : "A talk about the future of Corporate America, learn money and eat lunch!",
			"color" : "#FF931E",
			"tags" : ["lunch", "non-alcoholic"]
		},
		{
			"name" : "Dunder och Brak Barbeque festival! - Nubbedraget.", 
			"date" : "2013-04-13 Between 15-01:00",
			"location" : "SU",
			"organizer" : "Dunderligan",
			"description" : "Likes barbeque? Wanna party? Come party with us! The grills will be lit at 16:00 and food should be sold shortly after. BYOB.",
			"color" : "#7AC943",
			"tags" : ["festival"]
		},
		{
			"name" : "Game-night", 
			"date" : "2013-05-23 At 17:17 o clock",
			"location" : "META",
			"organizer" : "Qulturnämnd",
			"description" : "We have board-games, cards, Magic and candy. What else do you need?",
			"color" : "#FF7BAC",
			"tags" : ["non-alcoholic"]
		},
		{
			"name" : "Movie-night",
			"date" : "2013-05-02 At 20:00 o clock",
			"location" : "Elektro KTH",
			"organizer" : "Elektros kulturnämnd",
			"description" : "We are going to watch the Star Wars-movies in the Ernst Rister order. It is going to be legendary!",
			"color" : "#FF7BAC",
			"tags" : ["non-alcoholic"]
		},
		{
			"name" : "Maffia-gasque",
			"date" : "2013-03-22 At 19:00 o clock",
			"location" : "Oasen",
			"organizer" : "Sammhällsprogrammet KTH",
			"description" : "We play the party-game Maffia, while having a great party. It is an offer you cannot refuse!",
			"color" : "#FF7BAC",
			"tags" : ["gasque"]
		},
		{
			"name" : "Banquett at Chemistry",
			"date" : "2013-05-30 At 20:00",
			"location" : "Nymble",
			"organizer" : "Chemistry KTH",
			"description" : "Put on your finest gown or tail-coat, and prepare for a night with fine dining and dancing with KTH Chemistry.",
			"color" : "#FF7BAC",
			"tags" : ["banquette"]
		},
		{
			"name" : "Ponies-meeting",
			"date" : "2013-04-18 At 21:00 o clock",
			"location" : "SU",
			"organizer" : "Ponies fanclub of Sweden",
			"description" : "Bring all your dolls, let us play!",
			"color" : "#FF7BAC",
			"tags" : ["ponies"]
		},
		{
			"name" : "Cookery for students",
			"date" : "2013-09-15 Between 11-13:30",
			"location" : "Kitchen at Nymble",
			"organizer" : "KTH health-committee",
			"description" : "As we are all aware, students does not eat as well as they should. So we will teach you everything you need to know! How to make a sandwich, beg for change outside of your local grocery store, cook noodles and stealing.",
			"color" : "#FF7BAC",
			"tags" : ["cooking"]
		},
		{
			"name" : "Crash-course in economy",
			"date" : "2013-04-02 At 16:00 o clock",
			"location" : "Handels",
			"organizer" : "Handels committe for public affairs",
			"description" : "We can do fun stuff too!",
			"color" : "#FF7BAC",
			"tags" : ["economy"]
		},
		{
			"name" : "ThursdayPub",
			"date" : "2013-10-14 At 17 o clock",
			"location" : "QMisk",
			"organizer" : "QMisk",
			"description" : "We have beer, some grub and maybe something else. Big surprise at 11.",
			"color" : "#FF7BAC",
			"tags" : ["pub"]
		}];
      for (var i = 0; i < stuff.length; i++)
        eventPosts.insert(stuff[i]);
    }
});
