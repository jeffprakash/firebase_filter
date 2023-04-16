import React, { useEffect , useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import './App.css';
// import MapMarker from './Marker';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhcGFub3NraSIsImEiOiJjbGVxMjhjbmowaTZpNDVvNWQ4NTBsc2JtIn0.LFIPoIEmYQJv5bfRPueMQQ';
import { app, database } from "../../config/firebase";
import { collection,  addDoc, getDocs,getFirestore } from "firebase/firestore";


function Map() {


//   const dbInstance = collection(database, "accidents");


//   const getNotes = () => {
//     getDocs(dbInstance)
//         .then((data) => {
//             console.log(data.docs.map((item) => {
//                 return { ...item.data(), id: item.id }
//             }));
//         })
//     }


const [markerData, setmarkerData] = useState([{}]);
const [Location, setLocation] = useState([]);
const [corods, setcorods] = useState([]);
 
const fetchPost = async () => {
  const db = getFirestore();
    await getDocs(collection(db, "accidents"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setmarkerData(newData); 
            setLocation(newData.filter(person => person.location !== "").map(person => person.location));


            
        })
   
}

useEffect(()=>{
    fetchPost();
    // console.log(markerData)
    
    // console.log(corods) 
    // console.log(markerData)
   

    
}, [])


useEffect(() => {
  setcorods( Location.map((item) => [item.longitude, item.latitude]));
}, [Location]);

    

    let cordinaates =[[76.3289828 , 10.0298734],[76.3570,10.1004],[76.3125,10.0261]]
    // console.log( Location.map((item) => [item.longitude, item.latitude]));
    
    // console.log(corods)
        // console.log(markerData)

    // console.log(Location)  
    // useEffect(() => {
    //   const coordinatess = Location.map((item) => [item.longitude, item.latitude]);

    // }, [Location]);

    // console.log(corods)

    

    let longitude,latitude
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            latitude=position.coords.latitude,
            longitude= position.coords.longitude
            // console.log(latitude,longitude)
        }, error => {
          console.log(error);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
      // console.log(latitude,longitude)

    function saveLocationData(){
    }
    

    useEffect(() => {
      
    navigator.geolocation.getCurrentPosition(position => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v11",
        attributionControl: false,
        // style:'mapbox://styles/mapbox/dark-v11',
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 12,
      });

      // const marker = new mapboxgl.Marker({
      //   color: "#ff0000",
      //   draggable: true
      //   }).setLngLat( [position.coords.longitude, position.coords.latitude])
      //   .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
      //   .addTo(map);

        map.addControl(new mapboxgl.NavigationControl(),"bottom-right");
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
            }),"bottom-right");
      

      const markers = corods.map((cordinaate) => {
        return (new mapboxgl.Marker().setLngLat(cordinaate).addTo(map)
        );
      });

    });
  


    }, [corods]);

  return (
    <>
      <div id='map' className='absolute inset-0 m-0 overflow-hidden z-100 shadow-md  rounded-xl ' ></div>
    
      

    </>
  );


  }

  
    export default Map;