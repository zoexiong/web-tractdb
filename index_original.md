---
<<<<<<< HEAD
layout: base/bar/bar-sidebar-none
=======
layout: base/bar-sidebar-none
>>>>>>> 5a86082aae0bbba410c5178ebf724ccc968b178e
title: "title"
title_bar: "title_bar"
title_secondary: "title_secondary"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/serverConfigApp.js"
---

<div ng-app="serverConfigApp" ng-controller="serverConfigController" ng-strict-di>
  <p>Server Config: {{ 'serverConfig' | angular }}</p>
  <br/>
  <br/>
  <p><a href = "/login">Login</a></p>
  <p><a href = "/register">Register</a></p>
</div>