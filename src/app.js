
angular.module('sortApp', [])


.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchTechnologies   = '';     // set the default search/filter term
  

  // create the list of sushi rolls 
  $scope.employees = [
    { name: 'Jarek Kroczek', technologies: '.NET, JavaScript', team: 'Team Parrots', hobbies: 'Lyzwy, narty, plywanie, planszowki', picture: 'https://theguyfrom4staff.files.wordpress.com/2014/08/this-member-chose-to-be-shown-as-anonymous.png' },
    { name: 'Anna Bak', technologies: 'Java, C++', team: 'Team XXX', hobbies: 'Spotkania u cioci na imieninach', picture: 'https://theguyfrom4staff.files.wordpress.com/2014/08/this-member-chose-to-be-shown-as-anonymous.png' },
    { name: 'Arek Romaniuk', technologies: 'PHP, JavaScript', team: 'Team 010101', hobbies: 'Snowboard, windsurfing', picture: 'https://theguyfrom4staff.files.wordpress.com/2014/08/this-member-chose-to-be-shown-as-anonymous.png' },
    { name: 'Tadeusz Watrobka', technologies: 'Erlang', team: 'Team 70s and 80s', hobbies: 'Karty, szachy', picture: 'https://theguyfrom4staff.files.wordpress.com/2014/08/this-member-chose-to-be-shown-as-anonymous.png' }
  ];
  
});