
angular.module('sortApp', [])


.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchTechnologies   = '';     // set the default search/filter term
  

  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'Jarek Kroczek', technologies: 'Java', team: 'Team XXX' },
    { name: 'Anna Bak', technologies: 'Java', team: 'Team XXX' },
    { name: 'Arek Romaniuk', technologies: 'Java', team: 'Team XXX' },
    { name: 'Tadeusz Watrobka', technologies: 'Java', team: 'Team XXX' }
  ];
  
});