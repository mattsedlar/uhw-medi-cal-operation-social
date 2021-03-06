var marks = [

  {
    name: "Juan Cervantes",
    twitter: "Juan has suffered prostate pain - without treatment - since he was 8 because he's covered by Medi-Cal.",
    facebook: "Juan Cervantes has suffered constant prostate pain since he was 8 years old. It's nearly impossible for him to find a specialist because he's insured by Medi-Cal. Californians like Juan shouldn't suffer with chronic disease because specialists can't afford to treat new Medi-Cal patients. Join the campaign and take action to fund Medi-Cal.",
    image: "http://www.seiu-uhw.org/files/2015/08/Juan-Cervantes-web.jpg",
  },

  {
    name: "Chanelle Fields",
    twitter: "When kids like Ted get a 104 fever, they shouldn't go untreated just because they are covered by Medi-Cal.",
    facebook: "When Chanelle Fields’ son Ted was running a 104-degree fever, she couldn’t get a doctor to see him because he is covered by Medi-Cal. Kids like Ted shouldn’t be put at risk because there are too few doctors who can afford to accept new Medi-Cal patients. Join the campaign and take action to fund Medi-Cal.",
    image: "http://www.seiu-uhw.org/files/2015/08/Chanelle-Fields-and-Ted-Smart-3.jpg",
  },

  {
    name: "Jocelyn Lopez",
    twitter: "Californians like Jocelyn shouldn’t have to wait a month to get a dangerous staph infection treated",
    facebook: "When Jocelyn Lopez of Desert Hot Springs developed a dangerous and painful staph infection, her doctor told her she’d have to wait more than a month for an appointment because she has Medi-Cal. Instead of waiting, Jocelyn opted for the ER. Californians like Jocelyn shouldn’t have to rely on costly emergency room treatment for basic care. Join the campaign and take action to fund Medi-Cal for California.",
    image: "http://www.seiu-uhw.org/files/2015/08/Jocelyn-Lopez-web-300x300.jpg",
  },

  {
    name: "Jeeni Criscenzo",
    twitter: "Seniors like Jeeni shouldn’t have to suffer without necessary surgery just b/c they’re insured by Medi-Cal",
    facebook: "What if you couldn’t get necessary surgery, because there was no way to see a doctor who could recommend it? Jeeni Criscenzo is facing that problem just because she’s covered by Medi-Cal. Tell legislators to take action NOW to fund Medi-Cal for retirees like Jeeni.",
    image: "http://www.seiu-uhw.org/files/2015/08/Jeeni-Criscenzo-web-300x285.jpg",
  },

  {
    name: "Amanda Rivera",
    twitter: "Amanda’s multiple sclerosis shouldn’t go untreated just because she’s insured by Medi-Cal.",
    facebook: "Multiple Sclerosis (MS) isn’t the kind of disease you can afford to leave untreated – but Amanda Rivera can’t get regular care for her MS just because she’s insured by Medi-Cal. Tell legislators to take action NOW to fund Medi-Cal for people with chronic health conditions, like Amanda.",
    image: "http://www.seiu-uhw.org/files/2015/08/Anita-and-Amanda-Rivera-web-300x300.jpg",
  },

  {
    name: "Christian",
    twitter: "5-year-old Christian is autistic, but because he’s covered by Medi-Cal he hasn’t seen a specialist for months",
    facebook: "Five-year-old Christian is autistic and needs special care, but because he’s covered by Medi-Cal, he hasn’t been able to see a specialist in more than five months. Join us in taking action to fund Medi-Cal.",
    image: "http://www.seiu-uhw.org/files/2015/08/Graciela-and-Christian-Ocegueda-SQ-300x300.jpg",
  }
]

var targetNo,
    contributors = "https://uhw.seiu.org/page/contribute/giveonetimeformedical",
    noncontributors = "https://uhw.seiu.org/page/contribute/buildCOPEforMediCal",
    na = "http://www.seiu-uhw.org/?p=21703";

$(document).ready( function() {

  findMark = function() {
    for(x in marks) { if(marks.hasOwnProperty(x)) { if (marks[x].name == target) { return x; } } }
  }

  // DISPLAY STORIES ON HOVER ONLY

  $(".story-image p").css("display","none");
  $(".story-image").mouseenter(
    function() {
      $( this ).children().fadeIn( 500 );
    });
  $(".story-image").mouseleave(
    function() {
      $( this ).children().fadeOut(100);
    });


    // REDIRECT FUNCTION AFTER SOCIAL MEDIA SHARE

  shareRedirect = function(v) {

    if(v == "yes") { window.location.href = contributors; }

    else if(v == "no") { window.location.href = noncontributors; }

    else { window.location.href = na; }

  }


    $(".facebook").click( function() {

          target = $(this).data("val");

          targetNo = findMark();

          FB.ui({
              method: 'feed',
              link: "http://seiuuhw.org/medi-cal-operation/stories",
              name: marks[targetNo].name,
              picture: marks[targetNo].image,
              description: marks[targetNo].facebook
              }, function(response){

                if (response && !response.error_code) {
                   ga('send', 'event', 'button', 'click', 'facebook-share');
                   shareRedirect(cope);
                }
                else { }

              });

    });

    $(".twitter").hover( function() {

          target = $(this).data("val");

          targetNo = findMark();

        var twitterUrl = "http://twitter.com/intent/tweet?",
            text = "text=" + marks[targetNo].twitter;
            //add shortened url for images
            hashtags = "&hashtags=MediCalMatters"


            $(this).find("a").prop("href",twitterUrl+text+hashtags);


      });


});
