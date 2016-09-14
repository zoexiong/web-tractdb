---
layout: base/freelancer/freelancer

modal-id: 1
date: 2016-07-18
img: cabin.png
alt: image-alt
project-date: July 2014
client: The Client
category: Web Development
description: The description of the project
title: "title"
title_bar: "title_bar"
title_secondary: "title_secondary"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/serverConfigApp.js"
  - "{{ site.baseurl }}/app/routes.js"  
  
---

<br/>
<br/>
<br/>
<br/>

<div ng-app="routeApp">
        <div ng-view></div>
</div>
