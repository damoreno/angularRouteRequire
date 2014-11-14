define([], function()
{
  variable = document.location;
    return {
        routes: {
            '/init': {
                templateUrl: '/initialPage.html',
                dependencies: [
                    '/initialController'
                ]}
        }
    };
});
