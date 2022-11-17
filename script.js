//api
const submitInput = document.querySelector(".submitInput");
let searchIp = document.querySelector(".searchInput");
let lon = 0;
let lat = 0;
async function loadApi() {
	let ip = searchIp.value;
	return (
		await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=at_OI2BK3MLwyGUD2MOyNBwqrNTyjIWr&ipAddress=${ip}`
		)
	).json();
}

submitInput.addEventListener("click", async (e) => {
	let data = [];
	let ipVal = document.querySelector(".ipValue");
	let locVal = document.querySelector(".locationValue");
	let timeVal = document.querySelector(".timeValue");
	let ispVal = document.querySelector(".ispValue");
	e.preventDefault();
	try {
		if (!searchIp.value) {
			throw new TypeError("Search input cannot be empty");
		} else {
			data = await loadApi();
			ipVal.textContent = data.ip;
			locVal.textContent = data.location.region;
			timeVal.textContent = data.location.timezone;
			ispVal.textContent = data.isp;
			lon = data.location.lng;
			lat = data.location.lat;
			searchIp.value = ``;
			var marker = L.marker([lat, lon], { icon: myIcon }).addTo(map);
			marker.bindPopup(`Current IP ${data.ip}`).openPopup();
			map.flyTo([lat, lon], 13);
		}
	} catch (e) {
		console.log(e);
		console.log("error");
	}
});
var map = L.map("map").setView([lon, lat], 2);
var myIcon = L.icon({
	iconUrl: "images/icon-location.svg",
	iconAnchor: [22, 94],
	popupAnchor: [0, -70],
});
// add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);
