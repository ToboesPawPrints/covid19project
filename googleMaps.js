function initMap(){
  // Map options
  var options = {
    zoom:11,
    center:{lat: 38.00333, lng: -122.1341}
    }

    // New map
    var map = new
    google.maps.Map(document.getElementById('map'), options);

    /*
    // Add marker 
    var marker = new google.maps.Marker({
      position:{lat: 37.97814, lng: -122.04578},
      map:map
    });
    
    var infoWindow = new google.maps.InfoWindow({
      content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
    infoWindow.open(map, marker);
    });
    */

  addMarker({
    coords:{lat: 37.97814, lng: -122.04578},
    content:'<h1>Lynn MA</h1>'
  }); //(1)Diablo Valley Cremation & Funeral Services

  addMarker({
    coords:{lat: 38.00333, lng: -122.07258},
    content:'<h1>Lynn MA</h1>'
  }); //(2)Alta Vista Cremation & Funeral Service 

  addMarker({
    coords:{lat: 37.96710, lng: -121.99737}, 
    content:'<h1>Lynn MA</h1>'
  }); //(3)Ouimet Bros. Concord Funeral Chapel

  addMarker({
    coords:{lat: 37.89571, lng: -122.07803},
    content:'<h1>Lynn MA</h1>'
  }); //(4) Hull's Walnut Creek Chapel

  addMarker({
    coords:{lat: 37.93170, lng: -122.06102}, 
    content: ''
  });//(5) Oak Park Hills Chapel

  addMarker({
    coords:{lat: 37.89426, lng: -122.05939}, 
    content: ''
  });//(6) Neptune Society of Northern California

  addMarker({
    coords:{lat: 37.94745, lng: -122.10169}, 
    content: ''
  });//(7) Oakmont Memorial Park & Mortuary

  addMarker({
    coords:{lat: 37.94439, lng: -122.10643}, 
    content: ''
  });//(8) Queen of Heaven Catholic Cemetery & Mortuary


    //Add Marker Function
    function addMarker(props){
      var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      });

      // Check content
      if(props.content){
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });

        marker.addListener('click', function(){
        infoWindow.open(map, marker);
        });
      }
    }
  } 


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoc8RwFzArqZcxMsRah0iZaT9pYBIY5Es"></script>


