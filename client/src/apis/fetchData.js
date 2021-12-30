import axios from "axios";


export const getSearchDetailsAPI = async (artist, genre, style, page) => {
	const URL = `https://api.discogs.com/database/search?q=${artist}&genre=${genre}&style=${style}&per_page=20&page=${page}&key=VqZUFKLkvLwyMDTEGzsX&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY`;

	try {
		const { data } = await axios.get(URL);
		console.log(data)
		return data;
	} catch (error) {
		console.log(error)
	}
}


export const genresAPI = () => {
	return {
		electronic: {
			styles: {
				house: "",
				techno: "",
				experimental: "",
				ambient: "",
				electro: "",
				trance: "",
				downtempo: "",
				disco: "",
				industrial: "",
				deep: "",
				tech: "",
			},
			utils: {
				genre: "electronic",
				photo:
					"https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg",
			},
		},
		rock: {
			styles: {
				pop: "",
				punk: "",
				indie: "",
				alternative: "",
				hardcore: "",
				rock: "",
				psychedelic: "",
				black: "",
				experimental: "",
			},
			utils: {
				genre: "rock",
				photo: "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg",
			},
		},
		"hip+hop": {
			styles: {
				gangsta: "",
				instrumental: "",
				experimental: "",
			},
			utils: {
				genre: "hip+hop",
				photo:
					"https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg",
			},
		},
		jazz: {
			styles: {
				swing: "",
				vocal: "",
				fusion: "",
			},
			utils: {
				genre: "jazz",
				photo: "https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg",
			},
		},
		classical: {
			styles: {
				baroque: "",
				choral: "",
				contemporary: "",
				medieval: "",
				modern: "",
				opera: "",
				romantic: "",
			},
			utils: {
				genre: "classical",
				photo:
					"https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg",
			},
		},
		pop: {
			styles: {
				ballad: "",
				bollywood: "",
				bubblegum: "",
				europop: "",
				schlager: "",
				vocal: "",
				novelty: "",
			},
			utils: {
				genre: "pop",
				photo:
					"https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg",
			},
		},
	};
};

export const getArtistReleases = async (artistId, page) => {
	const URL = `https://api.discogs.com/artists/${artistId}/releases?sort=year&sort_order=desc&page=${page}&per_page=30&&key=VqZUFKLkvLwyMDTEGzsX&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY`

	try {
		const { data } = await axios.get(URL);
		return data;
	} catch (error) {
		console.log(error)
	}
}

export const getArtistDetails = async (artistId) => {
	const URL = `https://api.discogs.com/artists/${artistId}?&key=VqZUFKLkvLwyMDTEGzsX&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY`

	try {
		const { data } = await axios.get(URL)
		return data;
	} catch (error) {
		console.log(error)
	}
}

export const getReleaseDetails = async (releaseId) => {
	const URL = `https://api.discogs.com/releases/${releaseId}?&key=VqZUFKLkvLwyMDTEGzsX&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY`

	try {
		const { data } = await axios.get(URL)
		return data;

	} catch (error) {
		console.log(error)
	}
}

export const getSearchDetailsNewestReleases = async () => {
	const URL = 'https://api.discogs.com/database/search?q=&year=2021&key=VqZUFKLkvLwyMDTEGzsX&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY'

	try {
		const { data } = await axios.get(URL);
		return data;
	} catch (error) {
		console.log(error)
	}
}

export const getGlobalTopCharts = async () => {
	const options = {
		method: 'GET',
		url: 'https://spotify-charts.p.rapidapi.com/daily-global-chart',
		headers: {
			'x-rapidapi-host': 'spotify-charts.p.rapidapi.com',
			'x-rapidapi-key': '1d48b64081mshfa8eb2b0fef7034p1d4c45jsne8b01abcf5ef'
		}
	};
	axios.request(options).then(function (response) {
		console.log(response.data)
	}).catch(function (error) {
		console.error(error)
	})
}