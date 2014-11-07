define([], function()
{
  variable = document.location;
    return {
        routes: {
            '/init': {
                templateUrl: variable+'/initialPage.html',
                dependencies: [
                    variable+'/initialController'
                ]}
        }
    };
});