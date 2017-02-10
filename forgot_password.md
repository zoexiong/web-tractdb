---
layout: base/freelancer/freelancer
title: "Register"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/resetPasswordApp.js"
---

<header>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
            </div>
        </div>
    </div>
</header>

<div class="container base-content" ng-app="resetPasswordApp" ng-controller="resetPasswordController">
    <div class="row">
        <div class="col-lg-12">
            <form ng-submit="submitResetPasswordForm()" id="ResetPasswordForm" name="ResetPasswordForm" class="form-signin">
                <h3 class="form-signin-heading">Please Enter your username and new password</h3>
                <hr class="colorgraph"><br>
                <input class="form-control" name="account" placeholder="Account" autofocus="" required="" maxlength="20" ng-model="viewModel.account" /><br/>
                <input type="password" class="form-control" name="password" placeholder="Password" required="" maxlength="24" ng-model="viewModel.password" /><br/>
                <input type="password" class="form-control" name="confirmPassword" placeholder="Confirm Password" required="" maxlength="24" ng-model="viewModel.confirmPassword" /><br/>
                <button class="btn btn-small" name="Cancel" value="Cancel">Cancel</button>
                <button class="btn btn-small btn-primary" name="Reset" value="Reset" type="submit">Reset</button><br/><br/>
            </form>
        </div>
    </div>
</div>

<!--
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
-->
