'use strict';

angular
  .module('myApp')
  .controller('MyAccountCtrl', function (FormDataStore) {
    this.account = FormDataStore.getData();
    this.updateAccount = (account) => {
      this.account = FormDataStore.updateData(account);
    }
  });
