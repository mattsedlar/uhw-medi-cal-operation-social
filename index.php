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
    <link href="style.css" rel="stylesheet" />
    <link href="signup.css" rel="stylesheet" />
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!-- Fav and touch icons -->
    <link rel="shortcut icon" href="images/favicon.ico" />
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png" />
    <!-- Javascript
    ================================================== -->
  </head>

   <body>

    <main class="container">


      <h1>Share a Medi-Cal Story</h1>

      <form class="form-signin"  action="http://go.seiu-uhw.org/l/45502/2015-05-06/8d57w" method="post">
        <label for="inputFname" class="sr-only">First Name</label>
        <input name="fname" type="text" id="inputFname" class="form-control" placeholder="First Name" required autofocus>
        <label for="inputLname" class="sr-only">Last Name</label>
        <input name="lname" type="text" id="inputLname" class="form-control" placeholder="Last Name" required autofocus>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
          <p>Which body part did you select?</p>
          <select id="bodyparts" name="bodyparts">
            <option value="arm">Arm</option>
            <option value="leg">Leg</option>
          </select>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Share</button>
      </form>


    </main> <!-- /container -->

    <script data-require="jquery" data-semver="2.1.3" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script data-require="bootstrap" data-semver="3.3.2" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <script src="script.js"></script>

  </body>

</html>