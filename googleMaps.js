<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoc8RwFzArqZcxMsRah0iZaT9pYBIY5Es"></script>

function createMap(){
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.00333, lng: -122.1341},
    zoom: 13
  });

  addMarker({lat: 37.97814, lng: -122.04578}); //(1)Diablo Valley Cremation & Funeral Services
  addMarker({lat: 38.00333, lng: -122.07258}); //(2)Alta Vista Cremation & Funeral Service 
  addMarker({lat: 37.96710, lng: -121.99737}); //(3)Ouimet Bros. Concord Funeral Chapel
  addMarker({lat: 37.89571, lng: -122.07803}); //(4) Hull's Walnut Creek Chapel
  addMarker({lat: 37.93170, lng: -122.06102}); //(5) Oak Park Hills Chapel
  addMarker({lat: 37.89426, lng: -122.05939}); //(6) Neptune Society of Northern California 
  addMarker({lat: 37.94745, lng: -122.10169}); //(7) Oakmont Memorial Park & Mortuary
  addMarker({lat: 37.94439, lng: -122.10643}); //(8) Queen of Heaven Catholic Cemetery & Mortuary
  
//Add Marker Function 

function addMarker(coords){
  const trexMarker = new google.maps.Marker({
    position: coords,
    map: map,
    //title: 'Stan the T-Rex'
 });
  }
}
