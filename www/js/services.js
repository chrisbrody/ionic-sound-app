angular.module('songhop.services', [])

.factory('User', function() {

	var o = {
		favorites: []
	}

	o.addSongToFavorites = function(song) {
		// make sure there's a song to add
	    if (!song) return false;

	    // add to favorites array
	    o.favorites.unshift(song);
	}
	return o;
});