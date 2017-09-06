/**
 * Overlay service
 */
myApp.factory('OverlayService', function() {
    var visibility = false;

    return {
        show: function() {
            visibility = true;
        },

        hide: function() {
            visibility = false;
        },

        isVisible: function() {
            return visibility;
        }
    };
});
