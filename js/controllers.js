
function MainController($scope, $rootScope, $location) {
  $scope.getRoute = function(path) {
    var route = $location.path().replace('/', '');
    if (route === path) {
      return 'active';
    }
  }

  $(window).scroll(function() {
    $scope.scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $('.bar').css('width', $scope.scrollPercent + "%" );
    $scope.$apply();
  });


  $rootScope.$on('setTitle', function(event, page) {
    $scope.title = page;
  });
}

function homeCtrl($scope, $rootScope) {
  // Set Title
  $rootScope.$emit('setTitle', 'Home');

  $("#doughnutChart").drawDoughnutChart([
    { title: "UX Design",     value:  24 }, 
    { title: "Javascript",    value:  20 }, 
    { title: "Design",        value:  12 },
    { title: "Communication", value:  18 }, 
    { title: "HTML / CSS",    value:  26 }  
  ]);
}

function portfolioCtrl($scope, $rootScope, Blog) {
  // Set Title
  $rootScope.$emit('setTitle', 'Portfolio');
  $scope.loading = true;

  Blog.get({action:'portfolio'},function(response){
    $scope.projects = response.data;
    $scope.loading = false;
  });
}

function projectDetailsCtrl($scope, $rootScope, $routeParams, Blog){
  $scope.projectReady = false;
  $scope.loading = true;

  Blog.get({projectId:$routeParams.id, action:'project_details'},function(response) {
    $scope.project = response.data;
    $scope.projectReady = true;
    $scope.loading = false;
    // Set Title
    $rootScope.$emit('setTitle', $scope.project.title);
  });
}

function resumeCtrl($scope, $rootScope, Blog) {
  // Get Data
  $scope.loading = true;

  Blog.get({action:'skills'},function(response){
    $scope.skills = response.data;
  });

  Blog.get({action:'jobs'},function(response){
    $scope.jobs = response.data;
    $scope.loading = false;
  });

  // Set Title
  $rootScope.$emit('setTitle', 'Resume');

  $scope.limit = function(max){
    var input = [];
    for (var i=1; i<=max; i++) {
      input.push(i);
    } 
    return input;
  };

  $scope.check_ranking = function(skill, index) {
    if (index <= skill) {
      return 'active';
    } else {
      return 'inactive';
    }
  }
}

function blogCtrl($scope, $rootScope, Blog) {
  // Set Title
  $rootScope.$emit('setTitle', 'UX Blog');
  $scope.loading = true;

  Blog.get({action:'blog'},function(response){
    $scope.posts = response.data;
    $scope.loading = false;
  });
}

function blogDetailsCtrl($scope, $rootScope, $routeParams, Blog){
  $scope.blogReady = false;
  $scope.loading = true;

 	Blog.get({blogId:$routeParams.id, action:'blog_details'},function(response) {
    $scope.post = response.data;
    $scope.blogReady = true;
    $scope.loading = false;
    // Set Title
    $rootScope.$emit('setTitle', $scope.post.title);
  });
}
