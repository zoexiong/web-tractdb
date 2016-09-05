---
layout: base/freelancer/freelancer
title: "Admin"

angular_includes:
  - "{{ site.baseurl }}/app/tractdbConfig.js"
  - "{{ site.baseurl }}/app/listAccountsApp.js"

---




<br/>
<br/>



<br />
<br />
<br>

<div ng-app="listAccountsApp">

<div class="container col-md-3 username">
    <div>
        <div ng-controller="listAccountsController" class="account-list">
             <h4>Manage Accounts</h4>
                <div>
                     <label>Search:</label>
                     <input type="search" ng-model="search" placeholder="Enter to Search">
                </div>
             <div ng-repeat="account in accounts | filter:search | filter:new_search" class="row">
 <input type="checkbox" checklist-model="user.accounts" checklist-value="account"> {{"account" | angular}}
 <div ng-controller="deleteAccountController">
<button type="button" class="btn btn-danger" id="deleteAccountButton" ng-click="deleteSubmit(username)">Delete</button>
</div>
                </div>
        </div>
    </div>
</div>




<div class='container'>
    <div ng-controller='registerController' class='add-account'>
        <div class='col-md-4'>
            <form ng-submit="submitRegisterForm()" id="registerForm" name="registerForm" class="form-signin">
	            <h3 class="form-signin-heading">Add New Account</h3>
	            <hr class="colorgraph"><br>
                <input class="form-control" name="account" placeholder="Account" autofocus="" required="" maxlength="20" ng-model="viewModel.account"/> <br />
                <input type="password" class="form-control" name="password" placeholder="Password" required="" maxlength="24" ng-model="viewModel.password" /> <br />
                <input type="password" class="form-control" name="confirmPassword" placeholder="Confirm Password" required="" maxlength="24" ng-model="viewModel.confirmPassword" /><br/>
                <input class='btn btn-small' type="button" name="clearForm" value="Clear Form" onclick="this.form.reset();">
                <button class="btn btn-small btn-primary" name="Register" value="Register" type="submit">Submit</button> <br/><br/>
            </form>
        </div>
    </div>
</div>

</div>

<script type="text/javascript">
document
    .getElementById("deleteAccountButton")
    .addEventListener("click", function( e ){
        if( ! confirm("Do you really want to delete selected accounts?") ){
            e.preventDefault();
        } else {
       //delete accounts, code need to be added
        }
    });

    </script>