'use strict';

angular
  .module('myApp')
  .factory('ShoppingCartStore', function () {

    const state = {
      cartItems: {}
    };

    return {
      getItems() {
        return state.cartItems;
      },
      addItem(item) {
        state.cartItems[item.id] = {
          name: item.name,
          quantity: state.cartItems[item.id] ? state.cartItems[item.id].quantity + 1 : 1
        };
      },
      removeItem(itemId) {
        delete state.cartItems[itemId];
      }
    };

  });
