Portfolio.Directives.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
		replace: true,
		scope: {
			images: '='
		},
    link: function (scope, elem, attrs) {
 		  scope.pretty_okc1 =[
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

		  scope.pretty_okc2 =[
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
   
    	if (scope.images !== '') {
			  scope.name = scope.images;
			  scope.images = scope[scope.images];
				scope.currentIndex = 0;

				scope.next = function() {
					scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
				};
				
				scope.prev = function() {
					scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
				};

				scope.select = function(index) {
					scope.currentIndex = index;
				}
				
				scope.$watch('currentIndex',function(){
					scope.images.forEach(function(image){
						image.visible = false;
					});

					scope.images[scope.currentIndex].visible = true;
				}); 
    	}
	  },
		template: '<div class="slider {{name}}"><div class="nav"><a ng-click="prev()" class="slider-nav prev">previous</a><span ng-repeat="image in images"><a class="dot" ng-click="select(image.id)" ng-class="{current: currentIndex === image.id}"></a></span><a ng-click="next()" class="slider-nav">next</a></div><div class="slide" ng-repeat="image in images" ng-show="image.visible"><img ng-src="{{image.src}}" /><div class="slide-description" ng-bind-html="image.title"></div></div></div>'
  }
});
