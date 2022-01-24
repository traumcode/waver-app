const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
	redirectUri: 'http://localhost:3000'
})

export function getRelatedArtist(artistId) {
	const request = require('request'); // "Request" library
	const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
		},
		form: {
			grant_type: 'client_credentials'
		},
		json: true
	};
	return new Promise(function (resolve, reject) {
		request.post(authOptions, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				// use the access token to access the Spotify Web API
				const token = body.access_token;
				spotifyApi.setAccessToken(token);

				return spotifyApi.getArtistRelatedArtists(`${artistId}`)
					.then(function (data) {
						resolve(data.body)

					}, function (error) {
						console.log(error)
						reject(error)
					})
			}
		});
	})
}

export function getNewestReleases() {
	const request = require('request'); // "Request" library
	const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
		},
		form: {
			grant_type: 'client_credentials'
		},
		json: true
	};
	return new Promise(function (resolve, reject) {
		request.post(authOptions, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				// use the access token to access the Spotify Web API
				const token = body.access_token;
				spotifyApi.setAccessToken(token);

				return spotifyApi.getNewReleases({
						limit: 30,
						offset: 0,
						country: 'RO'
					})
					.then(function (data) {
						resolve(data.body)
					}, function (err) {
						console.log("Something went wrong!", err);
						reject(error)
					});
			}
		});
	})
}

export function getSearchDetails(text) {
	const request = require('request'); // "Request" library
	const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
		},
		form: {
			grant_type: 'client_credentials'
		},
		json: true
	};
	return new Promise(function (resolve, reject) {
		request.post(authOptions, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				// use the access token to access the Spotify Web API
				const token = body.access_token;
				spotifyApi.setAccessToken(token);

				return spotifyApi.searchArtists(`${text}`)
					.then(function (data) {
						resolve(data.body)
					}, function (err) {
						console.log("Something went wrong!", err);
						reject(error)
					});
			}
		});
	})
}

export function getArtistTopTracks(artistId) {
	const request = require('request'); // "Request" library
	const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
		},
		form: {
			grant_type: 'client_credentials'
		},
		json: true
	};
	return new Promise(function (resolve, reject) {
		request.post(authOptions, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				// use the access token to access the Spotify Web API
				const token = body.access_token;
				spotifyApi.setAccessToken(token);

				return spotifyApi.getArtistTopTracks(`${artistId}`, "US")
					.then(function (data) {
						resolve(data.body)
					}, function (err) {
						console.log("Something went wrong!", err);
						reject(error)
					});
			}
		});
	})
}