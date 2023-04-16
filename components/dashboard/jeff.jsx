import { collection, query, where,getDocs,addDoc,updateDoc,doc } from "firebase/firestore";
import { app, database,db } from "../../config/firebase";
import React, { useEffect,useState } from "react";





let [filter_data, setStateName] = useState({});

  database.collection("cities").where("capital", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  
  useEffect(() => {
    querySnapshot();
    console.log(filter_data,"filter_data");

  }, []);

  export default function Jeff(){
    return(
        <h1>hello</h1>
    )
  }