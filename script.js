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
    name: "Luz Maria Arellano, 65, San Diego",
    twitter: marks[0].twitter + ": having a stroke, you shouldn’t need to worry if Medi-Cal will cover your treatment. [link to pic]  #MediCalMatters #CADem15",
    facebook: "After Luz was rushed to the Emergency Room with a stroke, she discovered that her Medi-Cal insurance wouldn’t cover the surgery. Read Luz’s story, and take action to fully fund Medi-Cal for California.",
    image: "",
    email: "When Luz Arellano was rushed to a San Diego Emergency Room with a stroke, that was only the start of her problems.\n\nWhile she was in recovery, Luz discovered that her Medi-Cal insurance wouldn’t cover the cost of her emergency surgery.\n\nOn top of that, she began having complications from the surgery, including vision problems. Luz was able to get a referral to a specialist, but is facing a 5 month wait to be seen.\n\nMedi-Cal patients like Luz face real problems finding specialists who can afford to accept Medi-Cal coverage and provide care in a timely manner. Low Medi-Cal reimbursement rates mean fewer doctors who can afford to take Medi-Cal, and that means longer wait times and health complications for people like Luz.\n\nPlease support fully funding Medi-Cal, and help Luz and others like her to get the care they need.\n\nSincerely,\n\n"
  },

  heart: {
    name: "Ricardo Ponce, 22, Fresno, Laid Off - Electronics Recycling Worker",
    twitter: "Ricardo has a heart condition, but b/c he has Medi-Cal coverage he can’t get his checkups. [link to pic] " + marks[0].twitter + " #MediCalMatters #CADem15",
    facebook: "Ricardo was born with a heart murmur, but because he is insured by Medi-Cal, he can’t get the regular check ups he needs to stay healthy. Read his story and take action to fully fund Medi-Cal for California.",
    image: "",
    email: ""
  },

  knee: {
    name: "Lourdes Ortiz, 45, Compton",
    twitter: "In an accident each minute counts--you shouldn’t need to travel further for an ER that takes Medi-Cal [link to pic] #MediCalMatters " + marks[0].twitter + " #CADem15",
    facebook: "After a car accident, Lourdes was turned away from the closest hospital, because they couldn’t accept her Medi-Cal coverage. Read her story and take action to fully fund Medi-Cal",
    image: "",
    email: ""
  },

  stomach: {
    name: "Jose Berumen, 54, Oakland, Handyman",
    twitter: "No one should have a scheduled surgery cancelled just because their insurance is Medi-Cal. " + marks[0].twitter + " #MediCalMatters #CADem15",
    facebook: "Jose has been turned away from his scheduled hernia surgery twice because he’s covered by Medi-Cal. Read his story and take action to fully fund Medi-Cal for California.",
    image: "",
    email: ""
  },

  lungs: {
    name: "Kristi Johnson, 32, Fresno, Law Student & Law Clerk",
    twitter: "No one should have to rely on expired asthma medicine b/c they’re covered by Medi-Cal. [link to pic] " + marks[0].twitter + " #MediCalMatters #CADem15",
    facebook: "Imagine being unable to breathe because you can’t use your Medi-Cal coverage to see a doctor for three months. Read Kristi’s story, and take action to fully fund Medi-Cal for California.",
    image: "",
    email: ""
  },

  foot: {
    name: "Tioy Mulvil, 19, Ione",
    twitter: "When Medi-Cal patients like Tioy have to wait for care, it means higher costs & worse health [link to pic] #MediCalMatters " + marks[0].twitter + " #CADem15",
    facebook: "When does an ingrown toenail turn into emergency surgery? When Medi-Cal patients like Tioy can’t get timely care. Read his story and take action to fully fund Medi-Cal for California.",
    image: "",
    email: ""
  },

  leftArm: {
    name: "Jenevy Guzman, 9, Fresno",
    twitter: "9-yo Jenevy went months w/o care for a dangerous allergy, b/c she’s covered by Medi-Cal. [link to pic] " + marks[0].twitter + " #MediCalMatters #CADem15",
    facebook: "It took 9-year-old Jenevy over three months to be able to see a specialist who diagnosed her with a life-threatening allergy. Read her story, and take action to fully fund Medi-Cal for California.",
    image: "",
    email: ""
  },

  rightArm: {
    name: "Gilberto Uribe, 57, Oakland, Mariachi",
    twitter: "How can musician Gilberto work when he has to wait months for an arthritis appointment? [link to pic] #MediCalMatters " + marks[0].twitter + " #CADem15",
    facebook: "As a musician, Gilberto needs his hands in order to work, but because he has Medi-Cal coverage, he has to wait months for an appointment to get his arthritis medicine. Read his story and take action to fully fund Medi-Cal for California.",
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

$("#legislator").val(marks[0].title + " " + marks[0].name);
$("#my-text").html(parts[part].email);

$("#facebook").click( function() {
      FB.ui({
          method: 'feed',
          link: 'http://mattsedlar.net/development/social-media-app/share.php',
          name: parts[part].name,
          caption: parts[part].facebook
          }, function(response){});
});

$("#twitter").click( function() {
    var twitterUrl = "http://twitter.com/share/?",
    text = "text=" + parts[part].twitter,
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

  $("#email").click( function() {
    $.post( "email.php", $( "#emailForm" ).serialize() );
  });

});
