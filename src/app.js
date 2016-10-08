
angular.module('sortApp', [])


.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchTechnologies   = '';     // set the default search/filter term
  

  // create the list of sushi rolls 
  $scope.employees = [
    { name: 'Jarek Kroczek', technologies: 'Java', team: 'Team XXX', picture: 'https://theguyfrom4staff.files.wordpress.com/2014/08/this-member-chose-to-be-shown-as-anonymous.png' },
    { name: 'Anna Bak', technologies: 'Java', team: 'Team XXX', picture: 'https://theguyfrom4staff.files.wordpress.com/2014/08/this-member-chose-to-be-shown-as-anonymous.png' },
    { name: 'Arek Romaniuk', technologies: 'Java', team: 'Team XXX', picture: 'https://theguyfrom4staff.files.wordpress.com/2014/08/this-member-chose-to-be-shown-as-anonymous.png' },
    { name: 'Tadeusz Watrobka', technologies: 'Java', team: 'Team XXX', picture: 'https://theguyfrom4staff.files.wordpress.com/2014/08/this-member-chose-to-be-shown-as-anonymous.png' }
  ];
  
});