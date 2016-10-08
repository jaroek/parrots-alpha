angular.module('sortApp', [])


.controller('newsController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchTechnologies   = '';     // set the default search/filter term
  
  $scope.employees = [
    { headline: 'Powitanie nowego kolegi ;)', datetime: '08 października 2016 12:00', place: 'kuchnia', team: 'Team Parrots', description: 'Dołączył dziś do zespołu! Powitaj nowego kolegę i wpadnij na ciasto ;)' },
  ];
  
});
