import { useState, useEffect } from "react";

import { app, database,db,storage } from "../config/firebase";
import { collection, addDoc, getDocs,getFirestore  } from "firebase/firestore";

import {

  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { getStorage, ref } from "firebase/storage";





 
  

export default function AddDistressForm() {
  const [file, setFile] = useState(null);
  const [urlkey, seturlkey] = useState("");


  
  // const [todos, setTodos] = useState([]);
  // const db = getFirestore();

 
  // const fetchPost = async () => {
     
  //     await getDocs(collection(db, "accidents"))
  //         .then((querySnapshot)=>{               
  //             const newData = querySnapshot.docs
  //                 .map((doc) => ({...doc.data(), id:doc.id }));
  //             setTodos(newData);                
  //             // console.log(todos, newData);
  //         })
     
  // }
 
  // useEffect(()=>{
  //     fetchPost();
  // }, [])
                
        
        function getCurrentDate() {
            const currentDate = new Date();
            return currentDate.toISOString(); // return date in ISO format (e.g. "2023-03-06T12:30:00.000Z")
        }

        

          const [currentLocation, setCurrentLocation] = useState(null);

          useEffect(() => {
            // Get the user's current location using the Geolocation API
            navigator.geolocation.getCurrentPosition(position => {
              const { latitude, longitude } = position.coords;
              setCurrentLocation({ latitude, longitude });

            });
          }, []);

        //   console.log(currentLocation); // output the constant
          
          
          
          
          const initialValues = { tittle: "", description: "", intensity: "", location : '',image:"", datetime: getCurrentDate(), policehelp:false, firehelp: false, ambulancehelp: false, otherhelp: false,imageurl:"" , status:"NEW"};
          const [formValues, setFormValues] = useState(initialValues);
          const [formErrors, setFormErrors] = useState({});
          const [isSubmit, setIsSubmit] = useState(false);
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormValues({ ...formValues, [name]: value });
          };

          const handlecheck = (e) => {
            const { name, checked } = e.target;
            setFormValues({ ...formValues, [name]: checked });
          };

        
         

          const formhandler = () => {
           const dbInstance = collection(database, "accidents");
           
            console.log(formValues);
          addDoc(dbInstance, {
            ...formValues,
            location: currentLocation,
          });


  };
  
  const getNotes = () => {
    getDocs(dbInstance).then((data) => {
      console.log(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };
  


  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  
  const handleUploadClick = (file) => {
    
    const accidentImagesRef = ref(storage, `images/${file.name}`);
    console.log('uploading:'); 

      console.log(file);
      uploadBytes(accidentImagesRef,file).then((snapshot) => {
        getDownloadURL(accidentImagesRef) 
        .then((url)=>{ 
          console.log(url);
          seturlkey(url);
          setFormValues({ ...formValues, imageurl: url });
        }) 
        .catch((error)=>{ 
        console.log(error); 
        });
      })
  };



          
          return (
            <div className=" flex flex-col justify-center items-center m-auto h-full w-full ">
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
              ) : (
                <pre className=" w-[70%]   text-lg ">
                  {JSON.stringify(formValues, undefined, 2)}
                </pre>
              )}
              <form className="w-[70%]  text-lg p-20 border-1 border-slate-300 rounded bg-slate-100 justify-center items-center">
                <h1>report accident form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                  <div className="field">
                    <label>Tittle</label>
                    <input
                      type="text"
                      name="tittle"
                      placeholder="Tittle"
                      value={formValues.tittle}
                      onChange={handleChange}
                    />
                  </div>
                  <p>{formErrors.username}</p>
                  <div className="field">
                    <label>description</label>
                    <input
                      type="text"
                      name="description"
                      placeholder="description"
                      value={formValues.description}
                      onChange={handleChange}
                    />
                  </div>
                  <p>{formErrors.email}</p>
                  <div className="field">
                    <label>Intensity</label>
                    <input
                      type="range"
                      name="intensity"
                      placeholder="Tittle"
                      value={formValues.intensity}
                      onChange={handleChange}
                      min="1"
                      max="10"
                    />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col">
                      <label>Police</label>
                      <input
                        type="checkbox"
                        checked={formValues.policehelp}
                        name="policehelp"
                        onChange={handlecheck}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Ambulance</label>
                      <input
                        type="checkbox"
                        checked={formValues.ambulancehelp}
                        name="ambulancehelp"
                        onChange={handlecheck}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Other help</label>
                      <input
                        type="checkbox"
                        checked={formValues.otherhelp}
                        name="otherhelp"
                        value={formValues.otherhelp}
                        onChange={handlecheck}
                      />
                    </div>
                    {/* <input
                      type="file"
                      accept="image/*"
                      checked={formValues.image}
                      name="image"
                      onChange={handlecheck}
                    /> */}
                  </div>{" "}
                </div>
              </form>{" "}
              <div>
                  <input type="file" onChange={(event) => handleFileInputChange(event)} />
                  <button onClick={() => handleUploadClick(file)}>Upload</button>
               </div>
              <button onClick={formhandler} className=" bg-blue-300">
                Submit
              </button>
            </div>
          );
        }
        
        

    
