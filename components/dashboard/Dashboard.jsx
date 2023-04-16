import React, { useEffect,useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Accidents from "../accidents/accidents";
import Link from "next/link";
import AddDistress from "../button/AddDistress";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { app, database,db } from "../../config/firebase";
import { collection, query, where,getDocs,addDoc,updateDoc,doc } from "firebase/firestore";
import Map from "../map/Map";
import { getDatabase, ref, onValue,child} from "firebase/database";


export default function Dashboard() {
  const { user, currentUser, logout } = useAuth();
  const router = useRouter();
  console.log(user.phonenumber);
  const dbInstance = collection(database, "users");

  const saveNote = () => {
    addDoc(dbInstance, {
      you: "you go and fuck",
      mobile: user.phonenumber,
    });
  };

  // const rootRef = ref(db);
  // onValue(rootRef, (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data);
  // });

  const rootRef = ref(db);
  const temperatureRef = child(rootRef, 'DHT11');
  const temp=child(temperatureRef,'Temperature');
  const [tempr, setTempr] = useState(null);
  
  // onValue(temp, (snapshot) => {
  //   const temp = snapshot.val();
  //   console.log(Object.values(temp));
  //   // setTempr(Object.values(temp));
  //   // console.log(tempr);
  //   setTempr(latestTemp);


  // })

  useEffect(() => {
    onValue(temp, (snapshot) => {
      const tempVal = snapshot.val();
      const latestTemp = Object.values(tempVal)[Object.values(tempVal).length - 1];
      setTempr(latestTemp);
       
      
    });
  }, [temp]);

  const initialValues = { tittle: "Fire accident", description: "A big building got large fire", intensity: "7", location : {latitude:
    10.0261,
    longitude:
    76.3125},image:"https://bsmedia.business-standard.com/_media/bs/img/article/2022-05/13/full/1652462127-1638.jpg?im=Resize,width=480", datetime: getCurrentDate(), policehelp:true, firehelp: true, ambulancehelp: false, otherhelp: false,imageurl:"" , status:"NEW"};
  function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toISOString(); // return date in ISO format (e.g. "2023-03-06T12:30:00.000Z")
}
  

let cou=0;
  // useEffect(() => {
  //   // if (tempr != null) {
  //     console.log("ejeejej");
  //     const tempInCelsius = Number(tempr).toFixed(2);
  //     console.log(tempInCelsius);
  //     if (tempInCelsius > "39" && cou==0) {
  //       // send sms to user
  //       const dbInstance = collection(database, "accidents");
           
  //           console.log(initialValues);
  //         addDoc(dbInstance, {
  //           ...initialValues,
  //         });
  //         cou=1;


      
  //   }
    

   
  // }, [tempr]);

  const washingtonRef = doc(database, "users","aWiaNO5l536nioSg5ZGI");
  const updatenote = () => {
    updateDoc(washingtonRef, {
      title: "changed",
    
    });
  };




const querySnapshot = async () => {
  const q = query(collection(database, "accidents"), where("otherhelp", "==", true));
  console.log("testing");
  const snap = await getDocs(q);
  console.log(snap);
  snap.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

querySnapshot()


  return (
    <main className="flex flex-col m-0 p-0 bg-white  rounded-2xl h-screen">
      
      <header className="z-40 items-center w-full h-16 bg-white  border-b-2 border-gray-200 shadow-sm mt-2">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                <div className="container relative left-0 z-50 flex w-3/4 h-full">
                  <Link href="/dashboard">
                    {" "}
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="w-40 sm:hidden"
                    />
                  </Link>

                  <div className="relative items-center w-full h-full lg:w-64 group hidden sm:flex">
                    <div className="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                      <svg
                        fill="none"
                        className="relative w-5 h-5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <svg
                      className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                    <input
                      type="text"
                      className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100  text-gray-400 aa-input"
                      placeholder="Search"
                    />
                    <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                      +
                    </div>
                  </div>
                </div>

                <div className="relative flex gap-4 items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                  {user ? (
                    <button
                      className="inline-flex justify-end items-center px-4 py-2  bg-blue-100 shadow-sm hover:bg-red-200 hover:text-red-600 text-blue-600 text-sm  font-medium font-sans rounded-md"
                      onClick={() => {
                        updatenote();
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link href="/signup" passHref>
                        <button>Signup</button>
                      </Link>
                      <Link href="/login" passHref>
                        <button>Login</button>
                      </Link>
                    </>
                  )}
                  {/* notification */}
                  <button >
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z" stroke="#808080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="#808080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="#808080" stroke-width="1.5" stroke-miterlimit="10"/>
                  </svg>
                  </button>

                  <Link href="/dashboard" className="relative block">
                    <img
                      alt="profil"
                      src="https://avatars.githubusercontent.com/u/34004150?v=4"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </Link>
                </div>
              </div>
            </div>
      </header>


      <div className=" flex  h-full  p-0.5" >

   
      
        <div className="flex w-64 m-0 p-0" style={{flex: 0.5}}>
        <Sidebar />
        
        
        </div>

        <div className="flex relative   flex-col px-2 " style={{flex: 3}}>
         <Accidents></Accidents>
        </div>

        <div className=" relative flex flex-col  m-0 p-0  shadow-md  rounded-2xl " style={{flex: 6}}>
          <Map /> 
      </div>

      </div>
    </main>
  );
}
