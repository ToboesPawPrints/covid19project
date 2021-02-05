<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoc8RwFzArqZcxMsRah0iZaT9pYBIY5Es"></script>

function createMap(){
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.00333, lng: -122.1341},
    zoom: 13
  });

  addMarker({lat: 37.97814, lng: -122.04578}); //(1)Diablo Valley Cremation & Funeral Services
  addMarker({lat: 38.00333, lng: -122.07258}); //(2)Alta Vista Cremation & Funeral Service 
  



//Add Marker Function 

function addMarker(coords){
  const trexMarker = new google.maps.Marker({
    position: coords,
    map: map,
    //title: 'Stan the T-Rex'
 });
  }
}
