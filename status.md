---
layout: base/freelancer/freelancer
title: "Status"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/serverConfigApp.js"
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
            <pre id="server-config">Server Config: {{ 'serverConfig' | angular }}</pre>
        </div>
    </div>
</div>
