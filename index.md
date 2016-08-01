---
layout: base/bar-sidebar-none
title: "title"
title_bar: "title_bar"
title_secondary: "title_secondary"

angular_includes:
  - "{{ site.baseurl }}/app/serverconfigapp.js"
---

<div ng-app="serverConfigApp" ng-controller="serverConfigController" ng-strict-di>
Server Config: {{ 'serverConfig' | angular }}<br>
</div>
