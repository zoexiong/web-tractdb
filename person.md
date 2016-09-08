---
layout: base/freelancer/freelancer
title: "Dashboard - Person"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/userManageGroup.js"
---
<br><br><br><br><br><br><br><br><br>

<div ng-app='userManageGroup'>

<h3>Connect my device</h3>
<br/>
<h4>Choose my device</h4>
<div class="row">
  <div class="col-md-2"><img class='device' src='../img/fitbit.png' /></div>
  <div class="col-md-2"><img class='device' src='../img/jawbone.png' /></div>
 <div class="col-md-2"><img class='device' src='../img/fitbit.png' /></div>
  <div class="col-md-2"><img class='device' src='../img/jawbone.png' /></div>
 <div class="col-md-2"><img class='device' src='../img/fitbit.png' /></div>
  <div class="col-md-2"><img class='device' src='../img/jawbone.png' /></div>
</div>

<br><br><br>
<div class="row">


<div ng-controller='searchGroup'>
<h3>Join a group</h3>
<p>Join a group by name or ID:</p>

<!--need to add filter function-->


<input name="search" placeholder="Search for Group Name or Group ID" autofocus="" required="" maxlength="20" ng-model="searchKeywords" /><br/>  
<!--we have two choices here: display all the groups and add a filter to let user find groups, or give search results based on the keywords entered by users and then let them choose. (jQuery required I guess)-->
<!--<div ng-repeat="group in groups | filter:search | filter:new_search" class="row">-->
<!--<input type="checkbox" checklist-model="" checklist-value=""> -->
<div ng-repeat="group in groups">
<input type="checkbox">
Name: {{"group.name" | angular}}        ID:{{"group.id" | angular}}
</div>
<button ng-click='submitRequest()' class="btn btn-small btn-primary" name="Add" value="Add" type="submit">Join</button><br/><br/>
</div>

<div ng-controller='getRequest' class="col-md-4">
<h3>Request to retrieve my data</h3>
<div ng-repeat='sender in requests'>
<p>Request from <span style="color:blue">{{'sender.group_name' | angular}}</span></p>
<p>Data requested:<span style="color:blue"> {{'sender.data_type' | angular}}</span></p>
<div ng-controller='manageRequest'>
<button ng-click='approveRequest(ID)' class="btn" name="Approve" value="Approve" type="submit">Approve</button><br/><br/>
<button ng-click='declineRequest(ID)' type="button" class="btn btn-danger" id="">Decline</button>
</div>
</div>
</div>

 <div ng-controller='getAuthorization' class="col-md-4">
<h3>Manage my authorization</h3>
<div ng-repeat='auth in auths'>
<p>Group: <span style="color:blue"> {{'auth.group_name' | angular}}</span></p>
<p>Data accessible: <span style="color:blue">{{'auth.data_type' | angular}}</span></p>
<div ng-controller='manageAuthorization'>
<button ng-click='cancelAuth(ID)' class="btn" name="cancel authorization" value="cancelAuth" type="button">Cancel authorization</button><br/><br/>
<br>
</div>
</div>
</div>

<div class='col-md-12'>
<h3>My Report</h3>
Add data visualization here
</div>

</div>



  <style>
    .device{
    width:90%;
    }
  </style>


--------