//add map layer
// initialize Leaflet
var map = L.map("map").setView({ lon: 0, lat: 0 }, 2);

// add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);
//

//api
async function getUserIp() {
	const apiKey = ``;
	const response = await fetch(
		`https://geo.ipify.org/api/v2/country,city?apiKey=at_OI2BK3MLwyGUD2MOyNBwqrNTyjIWr&ipAddress=8.8.8.8`
	);

	let valueInput = document.querySelector(".searchInput").value;
}
const api_key = "at_OI2BK3MLwyGUD2MOyNBwqrNTyjIWr";
getUserIp();
