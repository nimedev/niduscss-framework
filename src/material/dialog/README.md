# niduscss-material-dialog
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/niduscss-material-dialog.svg
[npm-url]: https://npmjs.org/package/niduscss-material-dialog

> Material design layout used in dialogs or form for niduscss framework.

## Installation

```console
$ npm install niduscss-material-dialog
```

## Usage

Define the custom properties in a file if you like modify the default values:

Example: create a setting.css file:

```css
:root {
  --Dialog-title: 1.25rem;
  --Dialog-sm-title: 1rem;
  --Dialog-bg-title: 1.5rem;
  --Dialog-btn-color: #3f51b5;
}
```

Import styles:

styles.css:

```css
/* Import first de file with custom properties or declare before import the
   component.
   ========================================================================== */
   
@import "settings";

/* Material components
   ========================================================================== */
@import "niduscss-material-dialog";

/* Other styles */
```

Use in html files

```html
<!-- Login dialog with angular -->
<div class="RcLogin-content">
  <div class="Dialog-header">
    <span class="Dialog-title" translate="ROUTE.LOGIN.TITLE"></span>
  </div>
  <form class="RcLogin-form" name="$ctrl.loginForm" ng-submit="$ctrl.emailLogin()" novalidate>
    <div class="Dialog-body">
      <!-- Mail group -->
      <div class="Form-group">
        <label for="login__email" translate="ROUTE.LOGIN.EMAIL.LABEL"></label>
        <input id="login__email" name="email" ng-model="$ctrl.email" ng-required="true" type="email" autofocus server-error>
        <div class="Form-errorMessage" ng-if="$ctrl.loginForm.email.$dirty || $ctrl.loginForm.email.$touched || $ctrl.loginForm.email.$error.server"
          ng-messages="$ctrl.loginForm.email.$error">
          <div ng-message="server">{{ 'ERRORS.' + $ctrl.errorMessage.email | translate }}</div>
          <div ng-message="email" translate="ROUTE.LOGIN.EMAIL.VALID"></div>
          <div ng-message="required" translate="ROUTE.LOGIN.EMAIL.REQUIRED"></div>
        </div>
      </div>

      <!-- Password group -->
      <div class="Form-group">
        <label for="login__password" translate="ROUTE.LOGIN.PASSWORD.LABEL"></label>
        <input id="login__password" name="password" ng-model="$ctrl.password" ng-required="true" type="password" server-error>
        <div class="Form-errorMessage" ng-if="$ctrl.loginForm.password.$dirty || $ctrl.loginForm.password.$touched || $ctrl.loginForm.password.$error.server"
          ng-messages="$ctrl.loginForm.password.$error">
          <div ng-message="server">{{ 'ERRORS.' + $ctrl.errorMessage.password | translate }}</div>
          <div ng-message="required" translate="ROUTE.LOGIN.PASSWORD.REQUIRED"></div>
        </div>
      </div>

      <!-- Forgot password question -->
      <div class="RcLogin-forgotText">
        <a class="u-primaryColor-df" href="#" ui-sref="requestPwd" translate="ROUTE.LOGIN.FORGOT"></a>
      </div>
    </div>

    <!-- submit -->
    <div class="Dialog-footer">
      <button class="Button Dialog-btn u-primaryBackground-h2" type="submit" ng-disabled="$ctrl.loginForm.$invalid || $ctrl.waiting" translate="ROUTE.LOGIN.BUTTON"
        aria-label="Login button"></button>
    </div>
  </form>
</div>
```

## [Changelog](CHANGELOG.md)