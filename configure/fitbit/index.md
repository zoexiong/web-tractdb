---
layout: base/freelancer/freelancer
title: "Configure Fitbit"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
---

<header>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
            </div>
        </div>
    </div>
</header>

<div class="container base-content" ng-app="serverConfigApp" ng-controller="serverConfigController" ng-strict-di>
    <div class="row">
        <div class="col-lg-12">
            <a href="https://fitbit.com/oauth2/authorize?response_type=code&client_id=228RY9&redirect_uri=https%3A%2F%2Ftractdb.org%2Fconfigure%2Ffitbit%2Fcallback&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight">Link to Fitbit</a>
        </div>
    </div>
</div>
