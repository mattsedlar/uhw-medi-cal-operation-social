var marks = [

  {
    name: "Mark Leno",
    emailAddress: "senator.leno@senate.ca.gov",
    recipient: "Jose, age 54, Oakland, Handyman",
    twitter: "No one should have a scheduled surgery cancelled just because their insurance is Medi-Cal @markleno ",
    facebook: "Jose has been turned away from his scheduled hernia surgery twice because he's covered by Medi-Cal. Join the campaign and take action to fully fund Medi-Cal for California.",
    image: "images/jose-b.jpg",
    email: "Surgery is scary, but being turned away at the last minute for a surgery you need is even scarier.<br><br>Just ask Jose Berumen from Oakland, because he's been through it twice.<br><br>Jose is a handyman who had hernia surgery scheduled over a year ago – but when he switched from private insurance to Medi-Cal, his surgery and ongoing treatment were cancelled.<br><br>After months of searching, Jose found another provider who could take his Medi-Cal coverage, although he would have to wait two more months for his surgery. But when Jose showed up for that appointment, he learned that they did not accept new Medi-Cal patients after all.<br><br>When Medi-Cal doesn't fully fund healthcare providers, it's patients like Jose who suffer. Jose is still in pain, and still waiting to find a surgeon who is able to accept Medi-Cal.<br><br>Please support fully funding Medi-Cal, and help Jose and people like him get the care they need.<br><br>Sincerely,<br><br>",
    region: "Bay Area"
  },

  {
    name: "Ricardo Lara",
    emailAddress: "senator.lara@senate.ca.gov",
    recipient: "Lourdes, age 45, Compton",
    twitter: "After an accident, you shouldn't need to wait months for surgery b/c you have Medi-Cal @SenRicardoLara ",
    facebook: "Since her car accident, Lourdes has been unable to get surgery for her torn knee ligament because she has Medi-Cal coverage. Join the campaign and take action to fully fund Medi-Cal.",
    image: "images/lourdes.jpg",
    email: "After a car accident, the last thing you should have to worry about is whether you will get the surgery you need. But Lourdes Ortiz from Compton found herself in just that situation.<br><br>Lourdes was rushed to the hospital, where they found she tore a ligament in her knee. That was more than six months ago – and Lourdes still hasn't been able to see a specialist to perform the surgery she needs to get her back on her feet. The wait hasn't just meant daily pain for Lourdes – it's meant losing her job too.<br><br>Medi-Cal's low payment rates to healthcare providers mean fewer doctors and hospitals are able to provide treatment to new Medi-Cal patients, and that means delays in care that can cause serious complications.<br><br>Please support fully funding Medi-Cal, and help people like Lourdes get the care they need.<br><br>Sincerely,<br><br>",
    region: "Los Angeles"
  },

  {
    name: "Speaker of the Assembly Toni Atkins",
    email: "assemblymember.atkins@asm.ca.gov",
    twitter: "@ToniAtkins",
    region: "Inland Empire"
  },

  {
    name: "Senate President Pro Tem Kevin deLeon",
    email: "senator.deleon@senate.ca.gov",
    recipient: "Tioy, age 19, City of Ione",
    twitter: "When Medi-Cal patients like Tioy have to wait for care, it means higher costs %26 worse health. @kdeleon ",
    facebook: "When does an ingrown toenail turn into emergency surgery? When Medi-Cal patients like Tioy can't get timely care. Join the campaign and take action to fully fund Medi-Cal for California.",
    image: "images/tioy.jpg",
    email: "When does a simple ingrown toenail turn into emergency surgery? When Medi-Cal patients are denied timely care.<br><br>Tioy Mulvil from the city of Ione, California is a Medi-Cal patient with autism.<br><br>When Tioy's mother noticed his ingrown toenail, she worked to get him treatment right away – but he had to wait three months for what should have been a routine procedure. While they were waiting for the appointment, the nail became infected and Tioy had to have emergency surgery on his foot.<br><br>When Medi-Cal patients are forced to wait for care, it means more complicated procedures that cost the state more of our limited healthcare dollars – and it means worse health and longer recovery times for patients like Tioy.<br><br>Please support fully funding Medi-Cal, and help Tioy and others like him get the care they need.<br><br>Sincerely,<br><br>",
    region: "Sacramento"
  },

  {
    name: "Shirley Weber",
    emailAddress: "assemblymember.weber@assembly.ca.gov",
    recipient: "Luz, age 65, San Diego",
    twitter: ".@DrShirleyWeber: having a stroke, you shouldn't need to worry if Medi-Cal will cover your treatment. ",
    facebook: "After Luz was rushed to the ER with a stroke and operated on, she learned her surgeon didn't accept Medi-Cal. Join the campaign and take action to fully fund Medi-Cal for California.",
    image: "images/luz-a.jpg",
    email: "When Luz Arellano was rushed to a San Diego emergency room with a stroke, that was only the start of her problems.<br><br>While she was in recovery, Luz discovered the neurosurgeon who performed her surgery did not accept Medi-Cal – and Luz's family had to pay for the surgery out of pocket.<br><br>On top of that, she began having complications from the surgery – including vision problems – but she is facing a five-month wait to be seen by a specialist.<br><br>Medi-Cal patients like Luz face real problems finding specialists who accept Medi-Cal and provide care in a timely manner. Low Medi-Cal reimbursement rates means fewer doctors can afford to take Medi-Cal, and that means longer wait times and health complications for people like Luz.<br><br>Please support fully funding Medi-Cal, and help Luz and others like her get the care they need.<br><br>Sincerely,<br><br>",
    region: "Orange County",
  }

];


$(document).ready( function() {

  findMark = function() {
    for(x in marks) { if(marks.hasOwnProperty(x)) { if (marks[x].name == target) { return x; } } }
  }

  var targetNo = findMark();

  $("#email-target").append(target);

  // Filling in the div with email text
  $("#my-text-edit").html(marks[targetNo].email);

  $("#social-buttons").css("display","block");
  $( "#emailForm" ).css("display","block");

  // Adding the Medi-Cal patient to the subject line
  var emailSubject = marks[targetNo].recipient.split(",");
  emailSubject = emailSubject[0];
  $( "#person" ).val(emailSubject);

    $("#facebook").click( function() {
          FB.ui({
              method: 'feed',
              link: 'http://www.medi-calmatters.org/splash',
              name: parts[part].name,
              picture: "http://seiuuhw.org/medi-cal-operation/" + parts[part].image,
              description: parts[part].facebook
              }, function(response){});
    });

    $("#twitter").click( function() {
        var twitterUrl = "http://twitter.com/intent/tweet?",
            text = "text=" + parts[part].twitter;
            //add shortened url for images
            hashtags = "&hashtags=MediCalMatters"

        var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = twitterUrl + text + hashtags,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

        window.open(url, 'twitter', opts);

      });


      $("#emailForm").submit( function() {
        $("#emailForm").css("display","none");
        var editText = document.getElementById("my-text-edit").innerHTML,
        emailText = editText.replace(/<br><br>/g,"\r\n\r\n");
        document.getElementById("my-text").value = emailText;

        var startOver = $("<a />", {
          href : "http://seiuuhw.org/medi-cal-operation/",
          text : "Start the game again",
          class : "btn btn-lg btn-primary btn-block form-signin"
        });

        $("main").append("<p>Your email has been sent</p>").append(startOver);

      });


  });

});
