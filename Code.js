const getLocation = document.getElementById("getlocation");

getLocation.addEventListener('click', evt=>{
    if('geolocation' in navigator){
        let watchID = navigator.geolocation.watchPosition(position=>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let googleMapURL = 'https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=11&size=400x400';
            const mapimage = doucment.getElementById("mapImage");
            mapimage.src = googleMapURL;

            console.log(latitude,longitude);
        },error=>{
            console.log(error.code);
        },{
            enableHighAccuracy:true
        });
        console.log(watchID)
    }else{
        console.log("Not Supported");
    }
})