import React from 'react'

export default function MostTypeOfOrder() {
  return (
    <div class="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold leading-loose text-white">
          Most type of order
        </h2>
        <button class="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99976 13.3333C9.80976 13.3333 9.6206 13.2691 9.46643 13.1399L4.46643 8.97328C4.11309 8.67911 4.06476 8.15328 4.35976 7.79995C4.65393 7.44661 5.17893 7.39911 5.53309 7.69328L10.0089 11.4233L14.4773 7.82745C14.8356 7.53911 15.3606 7.59578 15.6489 7.95411C15.9373 8.31245 15.8806 8.83661 15.5223 9.12578L10.5223 13.1491C10.3698 13.2716 10.1848 13.3333 9.99976 13.3333"
              fill="white"
            />
          </svg>
          <span class="text-sm text-white">Today</span>
        </button>
      </div>
      <hr class="border-gray-700" />
      <div class="flex gap-x-7">
        <img width="176" src="/admin/img/chart.svg" alt="" />
        <div class="flex flex-col gap-y-4">
          <div class="flex gap-x-2 items-start">
            <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-red" />
            <div>
              <div class="text-sm font-medium text-white">Dine in</div>
              <div class="text-xs text-gray-500">200 customers</div>
            </div>
          </div>
          <div class="flex gap-x-2 items-start">
            <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-orange" />
            <div>
              <div class="text-sm font-medium text-white">To go</div>
              <div class="text-xs text-gray-500">122 customers</div>
            </div>
          </div>
          <div class="flex gap-x-2 items-start">
            <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-blue" />
            <div>
              <div class="text-sm font-medium text-white">Delivery</div>
              <div class="text-xs text-gray-500">264 customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
