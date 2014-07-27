
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

  $scope.projects = [
    {
      id: 0,
      abrv: 'tree',
      name: 'Github Tree',
      role: 'Developer',
      thumb: 'images/thumb-tree.png',
      image: 'images/tree.png',
      synopsis: 'Github Tree is a Plugin Chrome for quick-browsing of a Git Repository.',
      description: 'Github Tree was originally a <a href="https://chrome.google.com/webstore/detail/github-tree/ljoidanknjnfhcefkjbhjpmpccgmnobo" target="_blank">plugin for Google Chrome</a> created by <a href="https://github.com/thmzlt/github-tree" target="_blank">thmzlt</a>. When you were viewing a repository on Github, it would add an icon to the Address Bar on Chrome, clicking which would open up a Tree-style file browser for that repo. I loved the idea for the time it saves while trying to drill down to a particular file. The problem I had with it, though, was that it was not available for use with private repositories.<br><br>I rewrote a large degree of his plugin - removing inline CSS, changing the Coffeescript to cleaner Javascript, and adding oAuth support to make it work with private repositories. I have not done a proper release of this yet, but my code is available for browsing <a href="https://github.com/michaelpelletier/github-tree" target="_blank">here</a>. If inclined, you can download a copy <a href="github-tree.crx" target="_blank">here</a>. To install, navigate to chrome://extensions and drag and drop the file onto the window.'
    },
    { 
      id: 1,
      abrv: 'kate',
      name: 'Kate',
      role: 'Designer',
      thumb: 'images/thumb-kate.png',
      image: '',
      slider: 'slide_kate',
      synopsis: 'A portfolio website I designed for a local artist.',
      description: 'The image pictured above is of an in-between state during a Design project, featuring elements both representative of a wireframe and a finished design. It contains no actual content, and only placeholder icons - but it starts to encompass the colours and overall <i>feel</i> of the portfolio. Muted colours were used for the most part, so as not to take away from the content. I also really liked the usage of primary colours for the three pages, "the basics" that surround the artwork.'
    },
    { 
      id: 2,
      abrv: 'chummer',
      name: 'Ready Up, Chummer',
      role: 'Developer / Designer',
      thumb: 'images/thumb-chummer.png',
      image: 'images/chummer.png',
      synopsis: 'Ready Up, Chummer is a character creation tool for the Shadowrun pen and paper game.',
      description: 'I started writing and planning the Ready Up, Chummer app after some friends began exploring the 5th edition of the Shadowrun pen and paper game. At the time, the only other application in existence was <a href="http://dethstrobe.com/omae/" target="_blank">Omae</a>. Omae was the driving force of my desire to make this, because it was an app that was a) slow, b) poorly laid out, and c) very rigid.<br><br>Shadowrun has a "Priority" system, where you rank the things you care most about, so that choosing better Skills means having worse starting money, or magic ability, or attribute points, etc. In a lot of cases with Omae, you had to do a complete refresh of the page to change even the most basic of these things. I built mine with Angular, which ought to make it faster and get rid of some of those problems.<br><br>Since beginning this project, both a version for <a href="http://www.wolflair.com/index.php?context=hero_lab" target="_blank">Herolab</a>, as well as a new edition of <a href="http://forums.shadowruntabletop.com/index.php?topic=17200.0" target="_blank">Chummer</a> have been released. Given that those are both Windows applications, and require you to have them onhand for character creation, I believe there is still a value to be had in mine as a web application.<br><br>This is still very much a Work-In-Progress, but you can view my code at <a href="https://github.com/michaelpelletier/ReadyUpChummer" target="_blank">Github</a> and an early alpha build is accessible <a href="http://mpelletier.net/temp/chummer/" target="_blank">here</a>. Obviously the design is also not even remotely final.'
    },
    { 
      id: 3,
      abvr: 'keenan',
      name: 'Keenan',
      role: 'Designer',
      thumb: 'images/thumb-keenan.png',
      slider: 'slide_keenan',
      image: '',
      synopsis: 'A website mockup for a Chicago-based voice actor / photographer.',
      description: 'A couple years ago, a talented voice actor approached me looking for a design for his website. Above is one of a few mockups that I got started playing with before Keenan decided that he did not really need a personal site. Instead, he created and now runs <a href="http://www.nooctothorpe.com/" target="_blank">No Octothorpe</a>, a blog largely focused on technology, and <a href="http://fkrs.net/" target="_blank">FKRS</a>, a popular podcast. Though this design was scrapped, I am still quite pleased with it.'
    }
  ];


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
