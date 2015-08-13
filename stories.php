<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8" />
    <title>Medi-Cal Operation - Share a Story</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="SEIU-UHW" />
    <!-- Styles -->
    <link data-require="bootstrap-css" data-semver="3.3.1" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
    <link data-require="bootstrap@*" data-semver="3.3.2" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
    <link rel="stylesheet" href="styles/stories.css"/>
    <script>

    window.fbAsyncInit = function() {
    FB.init({
      appId      : '869805636410623',
      xfbml      : true,
      version    : 'v2.3'
    });
    };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
    </script>
  </head>

   <body>
    <?php include_once("analytics.php") ?>

    <div id="fb-root"></div>

    <main class="container" id="app-container">

    <header>
	    <img src="http://www.seiu-uhw.org/files/2011/09/locals2011_01.jpg" width="564" height="106" alt="United Healthcare Workers West - ">
	  </header>

    <div class="row row1">

      <div class="col-sm-6">

        <div class="story-image" id="story-image-1">

          <p>Multiple Sclerosis (MS) isn’t the kind of disease you can afford to leave untreated – but Amanda Rivera can’t get regular care for her MS just because she’s insured by Medi-Cal.</p>

        </div>

      </div>

      <div class="col-sm-6">

          <div class="story-image" id="story-image-2">

            <p>When Chanelle Fields’ son Ted was running a 104-degree fever, she couldn’t get a doctor to see him because he is covered by Medi-Cal.</p>

          </div>

      </div>

    </div> <!-- row one -->

    <div class="row row2">

      <div class="col-sm-6">

          <div class="story-image" id="story-image-3">

            <p>Five-year-old Christian is autistic and needs special care, but because he’s covered by Medi-Cal, he hasn’t been able to see a specialist in more than five months.</p>

          </div>

      </div>

      <div class="col-sm-6">

          <div class="story-image" id="story-image-4">

            <p>What if you couldn’t get necessary surgery, because there was no way to see a doctor who could recommend it? Jeeni Criscenzo is facing that problem just because she’s covered by Medi-Cal.</p>

          </div>

      </div>

    </div> <!-- row two -->

    <div class="row row3">

      <div class="col-sm-6"></div>

      <div class="col-sm-6"></div>

    </div> <!-- row three -->

    </main> <!-- container -->

    <!-- LOADING JAVASCRIPT -->

    <script data-require="jquery" data-semver="2.1.3" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script data-require="bootstrap" data-semver="3.3.2" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="js/script-stories.js"></script>
  </body>

</html>
