import React from 'react'
import Sidebar from "../../components/ambulancedashboard/Sidebar";
import StatsCard from '../../components/ambulancedashboard/StatsCard'
import OrderReport from '../../components/ambulancedashboard/OrderReport'
import MostOrdered from '../../components/ambulancedashboard/MostOrdered'
import MostTypeOfOrder from '../../components/ambulancedashboard/MostTypeOfOrder'
import Map from '../../components/map/mapadmin'

export default function index() {
  return (
    <div class="flex w-full min-h-screen font-sans bg-gray-800">
      <Sidebar />
      <main class="flex flex-col flex-1 gap-6 p-4">
        <header className="h-[75%]">
          <div className="px-5">
            <h1 class="text-3xl ml-1 font-semibold leading-loose text-red-300">
              Accidents
            </h1>
            <div class="text-gray-200 ml-1 mb-6">Tuesday 2 Feb, 2021</div>
          </div>
          <div className="px-5">
            <StatsCard />
          </div>
          <div className="relative -mt-16 h-full w-full flex m-0 p-0 shadow-md rounded-2xl">
            <Map />
          </div>
        </header>
      </main>
      <aside class="flex flex-col gap-y-6 pt-6 pr-6 w-96">
        <MostOrdered />
      </aside>
    </div>
  );
}
