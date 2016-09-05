---
layout: base/freelancer/freelancer
title: "Login"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/loginApp.js"
---
<head>
<script>
    function changeType()
    {
        document.loginForm.password.type=(document.loginForm.option.value=(document.loginForm.option.value==1)?'-1':'1')=='1'?'password':'text';
    }
</script>
</head>


<div ng-app="loginApp" ng-controller="loginController">
  <div class = "container">
    <div class="wrapper">
      <form ng-submit="submitLoginForm()" id="loginForm" name="loginForm" class="form-signin">       
        <h3 class="form-signin-heading">Please Sign In</h3>
        <hr class="colorgraph"><br>
        <input class="form-control" name="account" placeholder="Account" autofocus="" required="" maxlength="20" ng-model="viewAccount" /><br/>
        <input type="password" class="form-control" name="password" placeholder="Password" required="" maxlength="24" ng-model="viewPassword" /><br/>
        <input type="checkbox" name="option" value='1' onchange="changeType()"/> Show Password <br><br>
        <button class="btn btn-small" name="Cancel" value="Cancel">Cancel</button>
        <button class="btn btn-small btn-primary" name="Login" value="Login" type="submit">Login</button><br/><br/>
        <p><a href = "/register">If you're a new user, register now!</a></p>
        <p><a href = "/forgotPassword">Forgot Password?</a></p>
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
  </style>
</div>
