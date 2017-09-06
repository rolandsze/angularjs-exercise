/**
 * User service
 *
 * @dependency: appConfig
 */
myApp.factory('UserService', function($http, appConfig) {
    return {
        getAllUsers: function() {
            return $http({
                method: 'GET',
                url: appConfig.usersApiEndpoint
            }).then(function(response) {
                return response.data;
            }, function() {
                return 'error';
            });
        }
    };
});
