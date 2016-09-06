---
layout: base/freelancer/freelancer
title: "Reset Password"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/forgotPassword.js"
---
<br><br><br><br><br><br><br><br><br>
<div ng-app="forgotPasswordApp" ng-controller = "resetPasswordController">
  <div class = "container">
    <div class="wrapper">
	  <form ng-submit="submitResetForm()" id="resetForm" name="resetForm" class="form-signin">
		<h3 class="form-signin-heading">Please Reset Your Password Here</h3>
		<hr class="colorgraph"><br>
		<input class="form-control" name="account" placeholder="Account" autofocus="" required="" maxlength="20" ng-model="viewAccount" /><br/>
		<input type="password" class="form-control" name="password" placeholder="Password" required="" maxlength="24" ng-model="viewPassword" /><br/>
        <input type="password" class="form-control" name="confirmPassword" placeholder="Confirm Password" required="" maxlength="24" ng-model="viewConfirmPassword" /><br/>
        <button class="btn btn-small btn-primary" name="Submit" value="Submit" type="submit">Submit</button><br/><br/>
	  </form>
	</div>
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
    .tac {
      font-size: 10px;
    }
  </style>
</div>
