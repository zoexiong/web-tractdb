---
layout: base/freelancer/freelancer
angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/loginApp.js"
  - "{{ site.baseurl }}/js/services/auth.js"
  - "https://code.angularjs.org/1.2.28/angular-route.min.js"
  
---

<!-- Header -->
<header>
  <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <div class="intro-text">
                  <span class="skills">You've logged in!</span>
              </div>
          </div>
      </div>
  </div>
</header>

                  
<div ng-app="loginApp">

<div class="container base-content">
    <div class="row">
    <div ng-controller="logoutController">
    <button ng-click="logout()">logout</button> 
    </div>
    </div>
</div>

<div class="container base-content">
    <div class="row">
    <div ng-controller="authController">
    <button ng-click="checkAuth()">check auth status</button> 
    <p>status:{{"authStatus"|angular}}</p>
     <p>session:{{"session"|angular}}</p>
      <p>account:{{"account"|angular}}</p>
    <a href="/js/views/auth.html">View my account</a>
    </div>
    </div>
</div>



</div>