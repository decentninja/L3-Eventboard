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
      		"tags" : ["free", "non-alcoholic", "learning", "food"],
          "imgUrl": "http://media.tumblr.com/tumblr_mbelgcuSll1rwy4eh.gif"
      	},
		{
		 	"name" : "Ovve-Gasque", 
		 	"date" : "2013-11-24 At 18:00 o clock",
		 	"location" : "KTH Haninge",
		 	"organizer" : "Qlubbmästeriet Haninge",
		  	"description" : "Celebrate whatever you want with us! Just bring you finest clothing…Ovven!",
		  	"color" : "#3FA9F5",
		  	"tags" : ["gasque", "food"],
        "imgUrl": "http://lh4.ggpht.com/-GQGEHNbfaZE/UB92zVaf32I/AAAAAAAAAFo/8A-QSrqJNoI/44784%252520-%252520animated%252520animation%252520Artist-3dapple%252520centi-pony%252520centipede%252520cuteweird%252520gif%252520Scrunchy_Face%252520Sweetiepede%252520Sweetie_Belle%252520what%252520what_has_science_done%252520wtf.gif"
		},
		{
			"name" : "Lunch with Corporate America",
			"date" : "2013-03-14 Between 12-13:00",
			"location" : "E1, KTH",
			"organizer" : "THS Näringsliv", 
			"description" : "A talk about the future of Corporate America, learn money and eat lunch!",
			"color" : "#FF931E",
			"tags" : ["food", "non-alcoholic", "free"]
		},
		{
			"name" : "Dunder och Brak Barbeque festival! - Nubbedraget.", 
			"date" : "2013-04-13 Between 15-01:00",
			"location" : "SU",
			"organizer" : "Dunderligan",
			"description" : "Likes barbeque? Wanna party? Come party with us! The grills will be lit at 16:00 and food should be sold shortly after. BYOB.",
			"color" : "#7AC943",
			"tags" : ["festival", "food", "free"]
		},
		{
			"name" : "Game-night", 
			"date" : "2013-05-23 At 17:17 o clock",
			"location" : "META",
			"organizer" : "Qulturnämnd",
			"description" : "We have board-games, cards, Magic and candy. What else do you need?",
			"color" : "#FF7BAC",
			"tags" : ["non-alcoholic", "games and films", "free"]
		},
		{
			"name" : "Movie-night",
			"date" : "2013-05-02 At 20:00 o clock",
			"location" : "Elektro KTH",
			"organizer" : "Elektros kulturnämnd",
			"description" : "We are going to watch the Star Wars-movies in the Ernst Rister order. It is going to be legendary!",
			"color" : "#E7A1B0",
			"tags" : ["non-alcoholic", "games and films", "free"]
		},
		{
			"name" : "Maffia-gasque",
			"date" : "2013-03-22 At 19:00 o clock",
			"location" : "Oasen",
			"organizer" : "Sammhällsprogrammet KTH",
			"description" : "We play the party-game Maffia, while having a great party. It is an offer you cannot refuse!",
			"color" : "#F75D59",
			"tags" : ["gasque", "food"]
		},
		{
			"name" : "Banquette at Chemistry",
			"date" : "2013-05-30 At 20:00",
			"location" : "Nymble",
			"organizer" : "Chemistry KTH",
			"description" : "Put on your finest gown or tail-coat, and prepare for a night with fine dining and dancing with KTH Chemistry.",
			"color" : "#FFE87C",
			"tags" : ["banquette", "dancing"]
		},
		{
			"name" : "Ponies-meeting",
			"date" : "2013-04-18 At 21:00 o clock",
			"location" : "SU",
			"organizer" : "Ponies fanclub of Sweden",
			"description" : "Bring all your dolls, let us play!",
			"color" : "#3BB9FF",
			"tags" : ["ponies", "free"]
		},
		{
			"name" : "Cookery for students",
			"date" : "2013-09-15 Between 11-13:30",
			"location" : "Kitchen at Nymble",
			"organizer" : "KTH health-committee",
			"description" : "As we are all aware, students does not eat as well as they should. So we will teach you everything you need to know! How to make a sandwich, beg for change outside of your local grocery store, cook noodles and stealing.",
			"color" : "#57E964",
			"tags" : ["cooking", "food", "learning", "non-alcoholic"]
		},
		{
			"name" : "Crash-course in economy",
			"date" : "2013-04-02 At 16:00 o clock",
			"location" : "Handels",
			"organizer" : "Handels committe for public affairs",
			"description" : "We can do fun stuff too!",
			"color" : "#7AC943",
			"tags" : ["economy", "free", "non-alcoholic"]
		},
		{
			"name" : "ThursdayPub",
			"date" : "2013-10-14 At 17 o clock",
			"location" : "QMisk",
			"organizer" : "QMisk",
			"description" : "We have beer, some grub and maybe something else. Big surprise at 11.",
			"color" : "#4C7D7E",
			"tags" : ["pub", "food"]
		},
		{
			"name" : "Dance-lesson",
			"date" : "2013-09-17 Between 14-17",
			"location" : "Big Hall",
			"organizer" : "SUS",
			"description" : "Are you an embarrassment for you fellow students on the dancefloor? Always stepping on your partners feet, kneeing your fellow dancers and looking like a complete fool? We'll teach you what you need to know, so don't fret! Soon you'll be less awkward!",
			"color" : "#C45AEC",
			"tags" : ["learning", "dancing", "free", "non-alcoholic"]
		},
		{
			"name" : "Pubrunda",
			"date" : "2013-06-03",
			"location" : "KTH campus",
			"organizer" : "KTH",
			"description" : "This school-year is done and we shall celebrate it the best way students know how! All our pubs are open, some has food (but you might need to eat something before) and we are all ready to have tons of fun!",
			"color" : "#F75D59",
			"tags" : ["pub", "food"]
		},
		{
			"name" : "Role-playing night",
			"date" : "2013-05-01 At 17",
			"location" : "Loftet",
			"organizer" : "SUS",
			"description" : "We will play the DoD6. Snacks will be available, so bring your sword and prepare for a legendary adventure!",
			"color" : "#FFE87C",
			"tags" : ["games and films", "free", "non-alcoholic"]
		},
		{
			"name" : "Language Café - Japanese",
			"date" : "Every Monday between 12-13:00",
			"location" : "KTH Library",
			"organizer" : "KTH language and communication",
			"description" : "An event where you can improve your language-skills in a relaxed environment. Get to know other people with the same interest in language and culture! Lunch is provided.",
			"color" : "#BDCCD4",
			"tags" : ["learning", "food", "free", "non-alcoholic"]
		}];
      for (var i = 0; i < stuff.length; i++)
        eventPosts.insert(stuff[i]);
    }
});
