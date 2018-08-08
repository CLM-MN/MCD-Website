let map;
let marker;
let infowindow;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 42 lng: -87},
		zoom: 17
	});
	marker = new google.maps.Marker({
		position: {lat: 38.6328. lng: -90.2115},
		map: map,
	});
	infowindow = new google.maps.InfoWindow({
		content: '<strong>Text</strong>'
	});
	marker.addListener('click', function(){
		infowindow.open(map, marker);
	});
	// infowindow.open(map,marker);
}