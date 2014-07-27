
function MainController($scope,$location) {
  $scope.getRoute = function(path) {
    var route = $location.path().replace('/', '');
    if (route === path) {
      return 'active';
    }
  }
}

function homeCtrl($scope) {

}

function portfolioCtrl($scope) {

}

function resumeCtrl($scope, Blog) {
  // Get Data
  Blog.get({action:'jobs'},function(response){
    $scope.jobs = response.data;
  });

  Blog.get({action:'skills'},function(response){
    $scope.skills = response.data;
  });

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

function blogCtrl($scope, Blog) {
  Blog.get({action:'home'},function(response){
    $scope.posts = response.data;
  });
}

function blogDetailsCtrl($scope, $routeParams, Blog){
  $scope.blogReady = false;

 	Blog.get({blogId:$routeParams.id, action:'blog_details'},function(response) {
    $scope.post = response.data;
    $scope.blogReady = true;
  });


  $scope.pretty_okc1 =[
    {
      src: 'blog/okc/okc1_default.png',
      title: 'The new look of OkCupid with large tiles',
      id: 0
    },
    {
      src: 'blog/okc/okc1_newtiles.png',
      title: 'Pretty_Okc Option 1: Tighter tiles',
      id: 1
    },
    {
      src: 'blog/okc/okc1_widetiles.png',
      title: 'Pretty_Okc Option 2: Wide Tiles',
      id: 2
    },
    {
      src: 'blog/okc/okc1_classic.png',
      title: 'Pretty_Okc Option 3: Classic',
      id: 3
    }
  ];

  $scope.pretty_okc2 =[
    {
      src: 'blog/okc/okc2_options.png',
      title: 'A shot of the Options menu with priority settings',
      id: 0
    },
    {
      src: 'blog/okc/okc2_icon.png',
      title: 'The browser icon displays your unread messages count, updating in real time.',
      id: 1
    },
    {
      src: 'blog/okc/okc2_favouritefilters.png',
      title: 'Filtering rated users by rating. Also - saving notes for users',
      id: 2
    },
    {
      src: 'blog/okc/okc2_favouritelist.png',
      title: 'Adding favourited users to named lists (Screenshot courtesy of Kelly)',
      id: 3
    },
    {
      src: 'blog/okc/okc2_profile.png',
      title: 'Icons on the profile, including enhanced saving to favourites menu',
      id: 4
    },    
  ];






}
