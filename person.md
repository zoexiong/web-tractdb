---
layout: base/freelancer/freelancer
title: "Dashboard - Person"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/loginApp.js"
---

<br><br><br><br><br><br><br><br><br>
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

<div class="col-md-3">
<h3>Join a group</h3>
<p>Join a group by name:</p>
<input name="group" placeholder="Group Name" autofocus="" required="" maxlength="20" ng-model="viewGroupName" /><br/>
 <button ng-click='' class="btn btn-small btn-primary" name="Add" value="Add" type="submit">Join</button><br/><br/>
<p>or join a group by ID:</p>
<input name="group" placeholder="Group ID" autofocus="" required="" maxlength="20" ng-model="viewGroupID" /><br/>
 <button ng-click='' class="btn btn-small btn-primary" name="Add" value="Add" type="submit">Join</button><br/><br/>
 </div>

 <div class="col-md-4">
<h3>Request to retrieve my data</h3>
<p>Request from {{'groupname' | angular}}</p>
<button ng-click='' class="btn" name="Approve" value="Approve" type="submit">Approve</button><br/><br/>
<button type="button" class="btn btn-danger" id="" ng-click="">Decline</button>
<br>
<p>Request from {{'groupname' | angular}}</p>
<button ng-click='' class="btn" name="Approve" value="Approve" type="submit">Approve</button><br/><br/>
<button type="button" class="btn btn-danger" id="" ng-click="">Decline</button>
 </div>


 <div class="col-md-4">
<h3>Manage my authorization</h3>
<p>Group: {{'groupname' | angular}}</p>
<p>Data accessible: {{'access' | angular}}</p>
<button ng-click='' class="btn" name="" value="" type="">Cancel authorization</button><br/><br/>
<br>
<p>Group: {{'groupname' | angular}}</p>
<p>Data accessible: {{'access' | angular}}</p>
<button ng-click='' class="btn" name="" value="" type="">Cancel authorization</button><br/><br/>
<br>
 </div>
 </div>

<div>
<h3>My Report</h3>
Add data visualization here
</div>



  <style>
    .device{
    width:90%;
    }
  </style>



--------
Todo: need to fix style of button (the size is fixed)
need to add controller to show requests send by different groups (ng-repeat)
need to add controller to send request to join group
