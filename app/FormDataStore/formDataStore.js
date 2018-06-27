angular
  .module('myApp')
  .factory('FormDataStore', () => {
    let data;

    return {
      getData () {
        return data ? data : {};
      },

      updateData (account) {
        data = account;
        return data;
      }
    }
  });
