---
layout: base/freelancer/freelancer
title: "Login"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/loginApp.js"
  - "{{ site.baseurl }}/js/controllers/personController.js"
  - "{{ site.baseurl }}/app/routes.js"  
---
<head>
<script>
    function changeType()
    {
        document.loginForm.password.type=(document.loginForm.option.value=(document.loginForm.option.value==1)?'-1':'1')=='1'?'password':'text';
    }
</script>
</head>

<br><br><br><br><br><br><br>

<div ng-app='loginRoute'>
  <div class = "container">
      <div ng-view></div>
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
 