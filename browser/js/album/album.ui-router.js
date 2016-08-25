'use strict';

// get all albums
juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/js/album/album.template.ui-router.html'
  });
});

// get one album
juke.config(function ($stateProvider) {
  $stateProvider.state('oneAlbum', {
    url: '/albums/:albumId',
    templateUrl: '/js/album/album.template.ui-router.html',
    controller: function($scope, AlbumFactory, $stateParams){
      $scope.albumId = $stateParams.albumId;
    }
  });
});
