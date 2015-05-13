<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8" />
    <title>Share a Medi-Cal Story</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!-- Styles -->
      <link data-require="bootstrap-css" data-semver="3.3.1" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
    <link data-require="bootstrap@*" data-semver="3.3.2" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
    <style>
        body {
            padding-top: 60px;
        }

        @media (max-width: 979px) {

        /* Remove any padding from the body */
        body {
             padding-top: 0;
        }
        }
    </style>
    <link href="styles/style.css" rel="stylesheet" />
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
  </head>

   <body>


    <main class="app-container">
    <?php
      echo "<h2>Your email has been sent</h2>";
      $ToEmail = $_POST['email'];
      $EmailSubject = 'Test';
      $mailheader = "From: Medi-Cal Matters <no-reply@s15442843.onlinehome-server.com>\r\n";
      $mailheader .= "Reply-To: ".$_POST['email']."\r\n";
      $mailheader .= "CC:".$_POST["email"]."\r\n\r\n";
      $MESSAGE_BODY = "Dear ".$_POST["legislator"].",\r\n\r\n";
      $MESSAGE_BODY .= $_POST["text"];
      $MESSAGE_BODY .= $_POST["sender"];
      mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
    ?>
    </main> <!-- /container -->

    <script data-require="jquery" data-semver="2.1.3" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script data-require="bootstrap" data-semver="3.3.2" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
  </body>

</html>

