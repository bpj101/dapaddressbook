'use strict';

angular.module('AddressBook', [])
  .service('contactService', ['$http',
    function ($http) {
      var contactService = this,
        server = 'http://localhost:9001/contacts';
      contactService.contacts = [];
      $http.get(server)
        .then(function (res) {
          console.log(res);
          while (res.data[0]) {
            contactService.contacts.unshift(res.data.pop());
          }
        });

      contactService.addContact = function (contact) {
        contactService.contacts.push(contact);
      };
    }
  ])
  .controller('ContactCtrl', ['$scope', 'contactService',
    function ($scope, contactService) {
      $scope.contacts = contactService.contacts;
    }
  ])
  .filter('proper', function () {
    return function (name) {
      var type = typeof name;
      if (type !== 'number' && type !== 'string') throw new Error();
      return name.toString().split(' ').map(function (word) {
        return word[0].toUpperCase().concat(word.slice(1));
      }).join(' ');
    };
  })
  .directive('avatar', [

    function () {
      return {
        restrict: 'AE',
        scope: {
          name: '='
        },
        template: '<span class="avatar">{{name[0] | proper}}</span>'
      };
    }
  ])

.controller('AddContact', ['$scope', 'contactService',

  function ($scope, contactService) {
    $scope.addContact = function () {
      contactService.addContact($scope.contact);
    };
  }
]);