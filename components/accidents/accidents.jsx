import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import AccidentsDetails from "./accidentDetails";
import Tabs from "./tabs";

export default function Accidents() {
    const router = useRouter();
    const { user, logout } = useAuth();

    const [open, setOpen] = React.useState(false);

    const opening = () => {
        setOpen(!open);
    };

    return (
        <div className="flex flex-col h-full border-r-2 border-grey-500  mr-0">
            <div className="flex flex-col bg-white" style={{ flex: 1.3 }}>
                {/* heading */}
                <div className=" bg-white flex items-center w-full justify-between	 ">
                    <h1 className=" text-black align-middle  font-sans text-xl font-bold p-3">
                        Accidents
                    </h1>
                    <div className="flex p-5 gap-2">
                        <button>
                            <svg
                                fill="#808080"
                                width="30px"
                                height="30px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z" />
                            </svg>
                        </button>

                        <button>
                            <svg
                                width="30px"
                                height="30px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z"
                                    stroke="#808080"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                                    stroke="#808080"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* heading */}



                {/* stats part */}
                <div className=" bg-white flex w-full  justify-between m-0 p-0	">

                    <div className="flex ml-5">
                        <div className="align-top">
                            <button>
                                <div className="flex flex-row w-[20px] h-[20px]  bg-teal-200  rounded   place-items-center justify-center">
                                    <svg
                                        fill="#2dd4bf"
                                        width="15px"
                                        height="15px"
                                        viewBox="0 0 32 32"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>health</title>
                                        <path d="M29.125 10.375h-7.5v-7.5c0-1.036-0.839-1.875-1.875-1.875h-7.5c-1.036 0-1.875 0.84-1.875 1.875v7.5h-7.5c-1.036 0-1.875 0.84-1.875 1.875v7.5c0 1.036 0.84 1.875 1.875 1.875h7.5v7.5c0 1.036 0.84 1.875 1.875 1.875h7.5c1.036 0 1.875-0.84 1.875-1.875v-7.5h7.5c1.035 0 1.875-0.839 1.875-1.875v-7.5c0-1.036-0.84-1.875-1.875-1.875z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="flex-col h-full w-full  p-0 m-0">
                            <h3 className=" text-gray-400  align-top  font-sans text-sm font-semibold  pl-2 ">New</h3>
                            <h2 className="text-black align-middle  font-sans text-xl font-bold pl-2">24</h2>
                        </div>
                    </div>


                    <div className="flex ml-5 mr-5">
                        <div className="align-top">

                            <button>
                                <div className="flex flex-row w-[20px] h-[20px]  bg-red-300  rounded   place-items-center justify-center">
                                    <svg
                                        width="15px"
                                        height="15px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 8V12L14 14M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 10.1599 20.4478 8.44877 19.5 7.02331"
                                            stroke="#CC3333"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="flex-col h-full w-full  p-0 m-0">
                            <h3 className=" text-gray-400  align-top  font-sans text-sm font-semibold  pl-2 ">Pending</h3>
                            <h2 className="text-black align-middle  font-sans text-xl font-bold pl-2">14</h2>
                        </div>
                    </div>





                    <div className="flex mr-5">
                        <div className="align-top">

                            <button>
                                <div className="flex flex-row w-[20px] h-[20px]  bg-green-300  rounded   place-items-center justify-center">
                                    <svg
                                        width="15px"
                                        height="15px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            stroke="#22c55e"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M7.75 12L10.58 14.83L16.25 9.17004"
                                            stroke="#22c55e"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="flex-col h-full w-full  p-0 m-0">
                            <h3 className=" text-gray-400  align-top  font-sans text-sm font-semibold  pl-2 ">Completed</h3>
                            <h2 className="text-black align-middle  font-sans text-xl font-bold pl-2">44</h2>
                        </div>
                    </div>

                </div>
                {/* stats part */}





                <div className=" px-2 pt-4 bg-grey-500 flex items-center justify-center">
                        <Tabs></Tabs>
                </div>


            </div>

            <div
                className=" h-full mr-2 flex-flex-col bg-white "
                style={{ flex: 3 }}
            >
                <AccidentsDetails />
                <AccidentsDetails />
                <AccidentsDetails />
                <AccidentsDetails />
            </div>
        </div>
    );
}
