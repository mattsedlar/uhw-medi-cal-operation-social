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

var parts = {

  brain: {
    twitter: ": When having a stroke, you shouldn't need to worry if your doc takes Medi-Cal. [link to pic]  #AB366 #WeCare4CA #CADem15",
    facebook: "After Luz was rushed to the Emergency Room with a stroke, she discovered the surgeon wouldn’t accept her Medi-Cal coverage, leaving her $25,000 in debt. Read Luz’s story, and take action to fully fund Medi-Cal for California.",
    image: "",
    email: ""
  },

  heart: {
    twitter: "Ricardo has a heart condition, but 5 doctors turned him away b/c he is insured by Medi-Cal. [link to pic] #SB243 #WeCare4CA #CADem15",
    facebook: "Ricardo was born with a heart murmur, but because he is insured by Medi-Cal, he can’t get the regular check ups he needs to stay healthy. Read his story and take action to fully fund Medi-Cal for California.",
    image: "",
    email: ""
  }

};

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
          link: 'http://mattsedlar.net/development/social-media-app/share.php',
          caption: parts[part].facebook
          }, function(response){});
});

$("#twitter").click( function() {
  var twitterUrl = "http://twitter.com/share/?",
  text = "text=" + marks[0].twitter + " " + parts[part].twitter,
  picUrl = "&url=" + parts[part].image;

  var width  = 575,
  height = 400,
  left   = ($(window).width()  - width)  / 2,
  top    = ($(window).height() - height) / 2,
  url    = twitterUrl + text + picUrl,
  opts   = 'status=1' +
           ',width='  + width  +
           ',height=' + height +
           ',top='    + top    +
           ',left='   + left;

  window.open(url, 'twitter', opts);

});


});
