define(['app'], function(app)
{
    app.controller('initialController',
    [
        '$scope',

        function($scope)
        {
			$scope.initialPage = {text:"Hello World!"}
        }
    ]);
});