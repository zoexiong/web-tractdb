---
layout: base/freelancer/freelancer
title: "Register"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/registerApp.js"
---

<header>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
            </div>
        </div>
    </div>
</header>

<div class="container base-content" ng-app="registerApp" ng-controller="registerController">
    <div class="row">
        <div class="col-lg-12">
            <form ng-submit="submitRegisterForm()" id="registerForm" name="registerForm" class="form-signin">
                <h3 class="form-signin-heading">Please Register</h3>
                <hr class="colorgraph"><br>
                <input class="form-control" name="account" placeholder="Account" autofocus="" required="" maxlength="20" ng-model="viewModel.account" /><br/>
                <input type="password" class="form-control" name="password" placeholder="Password" required="" maxlength="24" ng-model="viewModel.password" /><br/>
                <input type="password" class="form-control" name="confirmPassword" placeholder="Confirm Password" required="" maxlength="24" ng-model="viewModel.confirmPassword" /><br/>
                <p class = "tac">By clicking on "Register", I agree to the <a href = "/tac">Terms and Conditions</a></p>
                <button class="btn btn-small" name="Cancel" value="Cancel">Cancel</button>
                <button class="btn btn-small btn-primary" name="Register" value="Register" type="submit">Register</button><br/><br/>
                <p><a href = "/login">If you're already signed up, login now!</a></p>
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
