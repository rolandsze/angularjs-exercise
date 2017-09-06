/**
 * User controller
 *
 * @dependency: UserService
 */
myApp.controller('UserController', function($scope, UserService) {
    $scope.isLoading = true;

    UserService.getAllUsers().then(function(response) {
        $scope.isLoading = false;

        if (response === 'error') {
            $scope.errorHappened = true;
        } else {
            $scope.errorHappened = false;
            $scope.users = response;
        }
    });
});
