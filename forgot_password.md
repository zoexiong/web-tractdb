---
layout: base/freelancer/freelancer
title: "Forgot Password - Reset Password"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/forgotPassword.js"
---
<html>

<br><br><br><br><br><br><br><br>
<h3> Forgot Password</h3>
<div ng-app="forgotPasswordApp" ng-controller="forgotPasswordController">
<p align="center">Enter your email address and we will send you a link to reset your password.</p>
<form ng-submit="submitAccount()" id="loginForm" name="loginForm" class="form-signin">
<input class="form-control" name="account" placeholder="Account" autofocus="" required="" maxlength="20" ng-model="viewAccount" /><br/>
<button class="btn btn-small btn-primary" name="Submit" value="Submit" type="submit">Submit</button><br/><br/>
</form>
</div>

  <style>
    .wrapper {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    form {
      width: 320px;
      margin: 0 auto;
    }
    .btn-small {
      width:80px !important;
      display: inline !important;
    }
  </style>

</html>