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

   <body>

    <div id="fb-root"></div>

	<header class="logo group">
	    <figure><img src="http://go.seiu-uhw.org/l/45502/2014-12-02/2byct/45502/28054/SEIU_UHW_Logo_4C_noBG.png" alt="SEIU-UHW"/></figure>
	</header>

    <main class="app-container">

        <section id="body-parts-selection">
            <div id="parts-selector-form" class="form-signin">
                <h2>Which body part did you select?</h2>
                <select id="bodyparts" name="bodyparts">
                    <option value="brain">Brain</option>
                    <option value="heart">Heart</option>
                    <option value="knee">Knee</option>
                    <option value="stomach">Stomach</option>
                    <option value="lungs">Lungs</option>
                    <option value="foot">Foot</option>
                    <option value="leftArm">Left Arm</option>
                    <option value="rightHand">Right Hand</option>
                </select>
                <a class="btn btn-lg btn-primary btn-block" id="next">Next</a>
            </div>
        </section>

        <section id="social-buttons">
            <h2 id="share-title">Share the story with decisionmakers</h2><br/>
            <ul>
            <li id="facebook" class="share"></li>
            <li id="twitter" class="share"></li>
            <li id="emailShare" class="share"></li>
            </ul>
        </section>

        <form id="emailForm" action="email.php" method="post" target="_blank" class="form-signin">
            <h2>Email Text</h2>
	    <p>Dear Speaker Atkins and President Pro Tempore de Leon,</p>
            <div id="my-text-edit" contenteditable="true" class="form-control"></div>
            <textarea id="my-text" name="text" class="form-control" style="display:none;"></textarea>
            <input name="sender" id="sender" type="text" class="form-control" value="<?php
              if (isset($_POST["fname"]) && !empty($_POST["fname"])) {
              echo $_POST['fname'] . " " . $_POST['lname'];
              } else { echo ""; }
             ?>" placeholder="Full Name"></input>
            <input name="email" id="email" type="email" class="form-control" value="<?php echo $_POST['email'];?>" placeholder="Email" required></input>
            <input name="person" id="person" type="hidden"></input>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Send Email</button>
        </form>


    </main> <!-- /container -->

    <script data-require="jquery" data-semver="2.1.3" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script data-require="bootstrap" data-semver="3.3.2" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="js/script.js"></script>
  </body>

</html>
