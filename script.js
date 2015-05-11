var marks = [

  {
    name: "Gov. Jerry Brown",
    email: "",
    twitter: "@JerryBrownGov"
  },

  {
    name: "Kevin de León",
    email: "",
    twitter: "@kdeleon"
  },

  {
    name: "Toni Atkins",
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

});