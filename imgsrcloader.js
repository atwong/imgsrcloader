angular.module("imgsrcloader", [])
    .directive("imgSrcLoader", function() {
        return {
            scope: {
                uri: '@',
	    },
            controller: ['$scope', '$http', function($scope, $http) {
	        $scope.getimage = function(uri) {
                    return $http({method:'GET',
                                  url: uri,
                                  responseType: 'blob'}).
                        then(function(response) {
                            return window.URL.createObjectURL(response.data);
			});
		};
            }],
            link: function(scope, element, attrs) {
		scope.getimage(scope.uri).
                    then(function(localURI) {
			element.attr("src", localURI);
                    });
            }
	};
    });


