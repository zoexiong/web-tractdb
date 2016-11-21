---
layout: base/freelancer/freelancer
angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/loginApp.js"
  
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

                  

<div class="container base-content" ng-app="loginApp">
    <div class="row">
    <div ng-controller="logoutController">
    <button ng-click="logout()">logout</button> 
    </div>
    </div>
</div>