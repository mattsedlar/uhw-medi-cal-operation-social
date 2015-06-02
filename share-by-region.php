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
    <style>
        body {
            padding-top: 60px;
        }
        .share {
            width: 100px;
            height: 100px;
            margin: 12px 12px 12px 0;
            display: inline-block;
            box-shadow: 3px 3px 5px #888;
            -webkit-box-shadow: 3px 3px 5px #888;
            -moz-box-shadow: 3px 3px 5px #888;
            cursor: pointer;
        }
        .share:last-child { margin-right: 0px; }
        .share:hover {
            transform: scale(1.1,1.1);
            -webkit-transform: scale(1.1,1.1);
            -moz-transform: scale(1.1,1.1);
        }
        #facebook { background: url(images/share-icons.png) 0 0; }
        #twitter { background: url(images/share-icons.png) 207px 0; }
        #emailShare { background: url(images/share-icons.png) 104px 0; }
        @media (max-width: 979px) {
        /* Remove any padding from the body */
        body {
             padding-top: 0;
        }
        }
    </style>
      <link href="styles/style.css" rel="stylesheet" />
      <link href="styles/signup.css" rel="stylesheet" />
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png" />
    <!-- Javascript
    ================================================== -->
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


  <script>

      var target = "<?php

      if(isset($_GET['name'])) {

        echo $_GET['name'];

      }

      else { echo "Mark Leno"; } ?>";

  </script>
   <body>

    <div id="fb-root"></div>

  <header class="logo group">
	    <figure><img src="images/Medi-CalLogo.jpg" alt="Medi-Cal Matters"/></figure>
	</header>

    <main class="app-container">


        <section id="email-intro">
            <h1 id="share-title">Share the story with state legislators</h1><br/>
            <p style="text-align: center">Take the next step by sharing a Medi-Cal story with a key legislator.</p><br/>
        </section>

        <form id="emailForm" action="email-region.php" method="post" class="form-signin" target="hidden-form">
            <h2>Email Text</h2>
	          <p id="email-target">Dear </p>
            <div id="my-text-edit" contenteditable="true" class="form-control"></div>
            <textarea id="my-text" name="text" class="form-control" style="display:none;"></textarea>
            <input name="sender" id="sender" type="text" class="form-control" value="" placeholder="Full Name"></input>
            <input name="email" id="email" type="email" class="form-control" value="" placeholder="Email" required></input>
            <input name="person" id="person" type="hidden"></input>
            <input name="legislator" id="legislator" type="hidden"></input>
            <input name="legislatorEmail" id="legislatorEmail" type="hidden"></input>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Send Email</button>
        </form>


      <section id="social-buttons">
            <h1 id="share-title">Share the story with state legislators</h1><br/>
            <p>Take the next step by sharing a Medi-Cal story with a key legislator.</p><br/>
        <ul>
          <li id="facebook" class="share"></li>
          <li id="twitter" class="share"></li>
        </ul>
      </section>

    </main> <!-- /container -->

    <iframe style="display:none" name="hidden-form"></iframe>

    <script data-require="jquery" data-semver="2.1.3" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script data-require="bootstrap" data-semver="3.3.2" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="js/script-region.js"></script>
  </body>

</html>
