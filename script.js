var marks = [

  {
    name: "Jerry Brown",
    title: "Governor",
    email: "",
    twitter: "@JerryBrownGov"
  },

  {
    name: "Kevin de León",
    title: "California Senate President pro Tempore",
    email: "",
    twitter: "@kdeleon"
  },

  {
    name: "Toni Atkins",
    title: "California Speaker of the Assembly",
    email: "",
    twitter: "@toniatkins"
  }

];

/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

$(document).ready( function() {

shuffleArray(marks);

$("#facebook").click( function() {
    FB.ui({
        method: 'feed',
        link: 'http://example.com',
        name: "Tell " + marks[0].title + " " + marks[0].name + ": Let's fix Medi-Cal",
        caption: 'Learn more about how we can get Medi-Cal fully funded for patients and care providers.'
        }, function(response){});
});

$("#twitter").click( function() {
  var twitterUrl = "http://twitter.com/share/?",
  text = "text=We need to fix Medi-Cal " + marks[0].twitter,
  quizUrl = "&url=http://example.com";

  var width  = 575,
  height = 400,
  left   = ($(window).width()  - width)  / 2,
  top    = ($(window).height() - height) / 2,
  url    = twitterUrl + text + quizUrl,
  opts   = 'status=1' +
           ',width='  + width  +
           ',height=' + height +
           ',top='    + top    +
           ',left='   + left;

  window.open(url, 'twitter', opts);

});


});
