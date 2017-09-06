/**
 * Overlay controller
 *
 * @dependency: OverlayService
 */
myApp.controller('OverlayController', function($scope, OverlayService) {
    $scope.OverlayService = OverlayService;

    $scope.$watch('OverlayService.isVisible()', function() {
        $scope.isVisible = OverlayService.isVisible();
    });
});
