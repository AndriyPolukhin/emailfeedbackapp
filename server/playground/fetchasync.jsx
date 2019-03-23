// write a function to retrieve a blob of json
// make an ajax request!! Use the 'fetch' function.
//
let url = `https://rallycoding.herokuapp.com/api/music_albums`;

function fetchAlbums() {
	fetch(url)
		.then(res => res.json())
		.then(json => console.log(json));
}

let url = `https://rallycoding.herokuapp.com/api/music_albums`;
async function fetchAlbums() {
	const res = await fetch(url);
	const json = await res.json();
	console.log(json);
}
fetchAlbums();

const fetchAlbums = async () => {
	const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
	const json = await res.json();
	console.log(json);
};

fetchAlbums();
