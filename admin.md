---
layout: base/freelancer/freelancer
title: "Admin"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/listAccountsApp.js"
---

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<div ng-app="listAccountsApp" ng-controller="listAccountsController" ng-strict-di>
  <div class="base-content">
    <p id="list-accounts">List Accounts: {{ 'accounts' | angular }}</p>
  </div>
</div>

<!--
<div class="container">
    <br> <br> <br> <br> <br> <br>
    <h4>Manage Accounts</h4>
    <br>

    <div class="account-list">
        <div ng-app="listAccountsApp" ng-controller="listAccountsController" ng-strict-di>
 <div ng-repeat="account in accounts">
   <ul> <span><input type="checkbox" name="accountChecked" /></span>
    <span>{{'account.account'|angular}}</span>
 <button type="button" class="btn btn-danger">Delete</button>
       </ul>
</div>
    </div>
    </div>
</div>
<br>
<br>
-->