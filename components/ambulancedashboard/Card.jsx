import React from 'react'

export default function Card() {
  return (
    <div class="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-red-100 p-1 shadow-xl">
      <a class="block rounded-xl bg-gray-800 p-2 sm:p-4 lg:p-4" href="">
        <div className="flex gap-5 ">
          <div className="">
            {" "}
            <img
              alt="Developer"
              src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              class=" w-24 rounded-full object-cover"
            />
          </div>
          <div className="">
            <div class="">
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                Car accident
              </h3>

              <p class="mt-2 text-sm text-gray-500">20-10-2023</p>
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
 
                          </h3>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
