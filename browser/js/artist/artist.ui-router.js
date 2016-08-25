'use strict';

juke.config(function ($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    templateUrl: '/js/artist/artist.template.ui-router.html'
  });
});
