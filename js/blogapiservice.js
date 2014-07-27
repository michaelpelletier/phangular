var module = angular.module('blogapiservice',['ngResource']);
  module.factory('Blog', function ($resource) {
  return $resource('api.php/:id',{}, {
    update: {method:'PUT'}
  });
});
