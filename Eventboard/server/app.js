Meteor.startup(function () {
    if (eventPosts.find().count() === 0) {
      var stuff= [
        {
          "description" : "An event where you can improve your language-skills in a relaxed environment.  Get to know other people with the same interest in language and culture! Lunch is provided.",
          "name" : "Language Cafe - English/French",
          "color" : "#BDCCD4",
        },
        {
          "description" : "Celebrate whatever you want with us! Just bring you finest clothing...Ovven!",
          "name" : "Ovve-Gasque",
          "color" : "#3FA9F5",
        },
        {
          "description" : "A talk about the future of Corporate America, learn money and eat lunch!",
          "name" : "Lunch with Corporate America",
          "color" : "#FF931E",
        },
        {
          "description" : "Likes barbeque? Wanna party? Come party with us! The grills will be lit at 16:00 and food should be sold shortly after. BYOB.",
          "name" : "Dunder och Brak Barbeque festival! - Nubbedraget.",
          "color" : "#7AC943",
        },
        {
          "description" : "We have board-games, cards, Magic and candy. What else do you need?",
          "name" : "Game-night",
          "color" : "#FF7BAC",
        }
      ]
      for (var i = 0; i < stuff.length; i++)
        eventPosts.insert(stuff[i]);
    }
});