Meteor.startup(function () {
// code to run on server at startup
    if (eventPosts.find().count() === 0) {
      var stuff= [
      	{
      		"name" : "Language Café - English/French", 
      		"description" : "An event where you can improve your language-skills in a relaxed environment. Learn by listening or by talking to others.  Get to know other people with the same interest in language and culture and get to know people from other countries! Lunch is provided.",
      		"date" : "Every friday at 12:00",
      		"location" : "KTH Library",
      		"organizer" : "KTH language and communication",
      		"color" : "#BDCCD4",
      		"tags" : ["free", "non-alcoholic", "learning", "food"]
      		"imgUrl" : "http://www.pegcitygrub.com.php53-13.ord1-1.websitetestlink.com/wp-content/uploads/2013/01/lepideble.jpg"
      	},
		{
		 	"name" : "Ovve-Gasque", 
		 	"date" : new Date(2013, 10, 24, 18, 00),
		 	"location" : "KTH Haninge",
		 	"organizer" : "Qlubbmästeriet Haninge",
		  	"description" : "Celebrate whatever you want with us! This is the time where the new students get to try on their new clothing: the famous overall. You can also come and just party with us, there will be alot of music and dancing! If you want to, you can also trade your patches with other students.  Just bring you finest clothing…Ovven!",
		  	"color" : "#3FA9F5",
		  	"tags" : ["gasque", "food"],
        	"imgUrl": "http://www.wermlandsnation.se/samojeden/wp-content/uploads/2010/10/gasque.jpg"
			
		},
		{
			"name" : "Lunch with Corporate America",
			"date" : new Date((new Date()).getTime() + 24 * 60 * 60 * 1000),
			"location" : "E1, KTH",
			"organizer" : "THS Näringsliv", 
			"description" : "A talk about the future of Corporate America, learn money and eat lunch! Learn how ideas work and how we want trade to work.",
			"color" : "#FF931E",
			"tags" : ["food", "non-alcoholic", "free"],
			"imgUrl" : "http://lfort.files.wordpress.com/2010/01/corporate_flag.jpg",
		},
		{
			"name" : "Dunder och Brak Barbeque festival! - Nubbedraget.", 
			"date" : new Date("2013-04-13 15:00"),
			"location" : "SU",
			"organizer" : "Dunderligan",
			"description" : "Likes barbeque? Wanna party? Come party with us! The grills will be lit at 16:00 and food should be sold shortly after. Enjoy spring with us with a nice barbeque and relax and forget about all the homework and stress. BYOB.",
			"color" : "#7AC943",
			"tags" : ["festival", "food", "free"],
			"imgUrl" : "http://sphotos-c.ak.fbcdn.net/hphotos-ak-ash3/544216_10151417671968159_2043853965_n.png"
		},
		{
			"name" : "Game-night", 
			"date" : new Date("2013-05-23 17:17"),
			"location" : "META",
			"organizer" : "Qulturnämnd",
			"description" : "We have board-games, cards, Magic and candy. What else do you need? Bring friends and get to know other gamers, while trying to win. See you there!",
			"color" : "#FF7BAC",
			"tags" : ["non-alcoholic", "games", "free"],
			"imgUrl" : "http://www.mynaturalhairevents.com/wp-content/uploads/2012/10/GameNight-10-2012.jpg"
		},
		{
			"name" : "Movie-night",
			"date" : new Date("2013-05-02 20:00"),
			"location" : "Elektro KTH",
			"organizer" : "Elektros kulturnämnd",
			"description" : "We are going to watch the Star Wars-movies in the Ernst Rister order. It is going to be legendary! Want to watch a movie you have never seen and get to know others while discussing how good/bad the movie was? Then come and bring chips!",
			"color" : "#E7A1B0",
			"tags" : ["non-alcoholic", "games and films", "free"],
			"imgUrl" : "http://midyorklib.org/westwinfield/files/2012/07/Movie-Night.jpg"
		},
		{
			"name" : "Maffia-gasque",
			"date" : new Date("2013-03-06 19:00"),
			"location" : "Oasen",
			"organizer" : "Sammhällsprogrammet KTH",
			"description" : "We play the party-game Maffia, while having a great party. It is an offer you cannot refuse! Come and have a good laugh.",
			"color" : "#F75D59",
			"tags" : ["gasque", "food"],
			"imgUrl" : "http://www.vrijspreker.nl/wp/wp-content/media/2008/08/aaa_maffia.jpg"
		},
		{
			"name" : "Banquette with Chemistry",
			"date" : new Date("2013-05-30 20:00"),
			"location" : "Nymble",
			"organizer" : "Chemistry KTH",
			"description" : "Put on your finest gown or tail-coat, and prepare for a night with fine dining and dancing with KTH Chemistry. Enjoy dancing waltz with someone new or enjoy watching others dance this classical dance. It will be an evening to remember!",
			"color" : "#FFE87C",
			"tags" : ["banquette", "dancing"],
			"imgUrl" : "http://www.presentjakt.se/images/products/retailers/babyshop/frack_for_bebisar_fullsize.jpg"
		},
		{
			"name" : "Ponies-meeting",
			"date" : new Date("2013-04-18 21:00"),
			"location" : "SU",
			"organizer" : "Ponies fanclub of Sweden",
			"description" : "Bring all your dolls, let us play! I have the purple one, Twilight Sparkle, which is not gay, and has nothing to do with vampires. Do you think they will ever make a vampire-ponie? It could be with red eyes and a white body. The mane would be all black like it's soul... And Vanity could be totally into goth fashion and stuff. I mean, they have done so many mash-ups already, why not this? Vampires and ponies are the two most hip things right now, it would be amazing to mix! But I am not sure whether the vamponie should be evil or good, deep down. I feel kind of conflicted about that. I mean, if it's good, it would be recurring, but evil, and they would probably have to defeat it and then it would only come back once or twice. What do you think? Come here and let's talk! Oh, I know, we can write fanfiction and then publish is online! Sweet!",
			"color" : "#3BB9FF",
			"tags" : ["ponies", "free"],
			"imgUrl" : "http://2.bp.blogspot.com/-aDFJVvBoYO0/UC3Y3cL7MrI/AAAAAAAAA-Q/NE70SyZ-zc4/s1600/ponies+%25E2%2599%25A5.jpg"
		},
		{
			"name" : "Cookery for students",
			"date" : new Date("2013-09-15 11:30"),
			"location" : "Kitchen at Nymble",
			"organizer" : "KTH health-committee",
			"description" : "As we are all aware, students does not eat as well as they should. So we will teach you everything you need to know! How to make a sandwich, beg for change outside of your local grocery store, cook noodles and stealing. If you are a cop, you should know that we never steal. We are good, healthy citizens. For the rest of you, the garbage can outside of Lidl is mine. If I see anyone of you there, I will murder you and eat your liver. I am watching you... O.o Oh, and I promised Johanna that I would mention that she owns the one outside of Ica folkkungagatan. I don't know how, since there's so many hobos there always, but apparently she won a hobo-fight and got the right to it. They know this, so they might attack you if you try... She guards it pretty well, just saying.",
			"color" : "#57E964",
			"tags" : ["cooking", "food", "learning", "non-alcoholic"],
			"imgUrl" : "http://static.ifood.tv/files/images/ramen%20noodle%20bowl.jpg"
		},
		{
			"name" : "Crash-course in economy",
			"date" : new Date("2013-04-02 16:00"),
			"location" : "Handels",
			"organizer" : "Handels committe for public affairs",
			"description" : "We can do fun stuff too! Like, seriously, we are not all about counting money and ...counting money. This one time before, oh the jolly time, I did something hilarious. You should have seen me! A friend of mine had some money-issues (he was from a different school), and he asked me 'How can you double your money?' To which I replied: 'By folding it in half.'! Hahahahaha, it always gets to me, I am so funny. And there are more fun to be had, so come join us! My friend got kicked out of his house and now lives on the street, though.",
			"color" : "#7AC943",
			"tags" : ["economy", "free", "non-alcoholic"],
			"imgUrl" : "http://www.elks-canada.org/uploads/Image/MoneyTree.jpg"
		},
		{
			"name" : "ThursdayPub",
			"date" : "Every thursday At 17",
			"location" : "QMisk",
			"organizer" : "QMisk",
			"description" : "We have beer, some grub and maybe something else. Big surprise at 11. Can't come but are dying to know what the amazing totally awesome surprise is? Well, too bad. You have to be there or you will be raised to two. It's soooo cool, you are going to drop down dead. Tell your parents, so they know that you know that you will drop dead. We don't want a law-suit on our hands for murder. Like, no, we realy don't want that. Hm, we will have to do something about that. Harry, Harry! Can you fix it so people don't die. What do you mean 'how'? Just do something! Oh, shit, this was not supposed to be typed, erhm, forget it.",
			"color" : "#4C7D7E",
			"tags" : ["pub", "food"],
			"imgUrl" : "http://www.mottagningen.nu/wp-content/uploads/2012/08/beer.png"
		},
		{
			"name" : "Dance-lesson",
			"date" : new Date("2013-09-17 14:00"),
			"location" : "Big Hall",
			"organizer" : "SUS",
			"description" : "Are you an embarrassment for you fellow students on the dancefloor? Always stepping on your partners feet, kneeing your fellow dancers and looking like a complete fool? We'll teach you what you need to know, so don't fret! Soon you'll be less awkward! We can't promise good, though. We used to to it, then this guy came, and w.o.w. I have never met anyone in my entire life that sucked so hard. He was from KTH, I think. Like, I know that they do all of their work sitting oogling a computer, but OMG, has he never walked a step before in his life or what? I think he might have had something wrong in his brain or whatnot. Awefull, just awefull. But you will surely do better! Come, come!",
			"color" : "#C45AEC",
			"tags" : ["learning", "dancing", "free", "non-alcoholic"],
			"imgUrl" : "http://www.thetowersri.com/wp-content/uploads/Tango_milonga.jpg"
		},
		{
			"name" : "Pubrunda",
			"date" : new Date("2013-06-03"),
			"location" : "KTH campus",
			"organizer" : "KTH",
			"description" : "This school-year is done and we shall celebrate it the best way students know how! All our pubs are open, some has food (but you might need to eat something before) and we are all ready to have tons of fun! There are four possible results from this: either you stay kind of sober, and have a good time. You are welcome. Or you stay kind of sober, and thinks it's borring, but don't blame us! We bring the alcohol, we sell the alcohol, the rest is up to you! You could be drunk as fuck and puke, thinking it was the best party ever and totally worth it: You are welcome. You become to drunk and puke and gets robbed: It's your own bloddy fault if you can't hold your alcohol. Don't blame us.",
			"color" : "#F75D59",
			"tags" : ["pub", "food"],
			"imgUrl" : "http://profile.ak.fbcdn.net/hprofile-ak-ash4/373599_178387058927659_840871897_n.jpg"
		},
		{
			"name" : "Role-playing night",
			"date" : new Date("2013-05-01 17:00"),
			"location" : "Loftet",
			"organizer" : "SUS",
			"description" : "We will play the DoD6. Snacks will be available, so bring your sword and prepare for a legendary adventure! But don't stab anyone on your way here, you could get into trouble with the authorities for that. We don't want to tell the public that we approve of violence, that would be troublesome. Trouble we don't need. Which reminds me, you are not allowed to bring any nuts, there might be allergic people in the room. We don't know anyone with allergies, we can't figure out if anyone of the attending people is allergic, but we do not want any risks. This is a safe no-risks event, with fun and adventure! No dwarfs allowed. I hate dwarfs.",
			"color" : "#FFE87C",
			"tags" : ["games and films", "free", "non-alcoholic"],
			"imgUrl": "http://www.wallpaperpimper.com/wallpaper/Art_&_3D/Fantasy/Dnd-Dices-1-1024x768.jpg",
		},
		{
			"name" : "Language Café - Japanese",
			"date" : "Every Monday between 12-13:00",
			"location" : "KTH Library",
			"organizer" : "KTH language and communication",
			"description" : "An event where you can improve your language-skills in a relaxed environment. Get to know other people with the same interest in language and culture! The most important thing is to not be afraid of speaking japanese; you will need to try to learn. There will be students with interest in the language, students learning the lanugage and students who has it as their native language. It's the perfect environment to learn more about not only the language but also the culture. It's fun and learning, but not as borring as those kids-game they made you play when you were a kid, you know, with pussels and weak riddles and stuff. You only played it because it allowed you to use a computer, which was fun, and sometimes there were pretty pictures. But it was always borring. Well, this is waaaaay more fun! Lunch is provided.",
			"color" : "#BDCCD4",
			"tags" : ["learning", "food", "free", "non-alcoholic"],
			"imgUrl" : "http://farm1.static.flickr.com/106/300115482_89aa1f275e.jpg"
		},
		{
			"name" : "Old event that should not be shown",
			"date" : new Date(2012, 0, 0),
			"location" : "Neverland",
			"organizer" : "me i guess",
			"description" : "made to not be shown",
			"color" : "black",
			"tags" : ["old", "not-shown", "you should not see this", "something went wrong!"]
		}];
		stuff.map(function(o) {
			eventPosts.insert(o)
		})
    }
});
