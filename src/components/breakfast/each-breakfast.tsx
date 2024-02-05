import React from 'react'
import ProfileNavbar from '../navbar/profile-navbar'

export default function EachBreakfast() {
  return (
    <div className="min-h-screen bg-white">
        <div className="relative">
            <div className="w-full ">
                <img src="https://images.unsplash.com/photo-1552039431-11d2a516d0d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-[300px] object-cover rounded-t-[40px] overflow-hidden"/>
            </div>
            <div className="absolute -bottom-10 left-2">
                <img src="https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="" className="w-24 h-24 object-cover rounded-md"/>
            </div>
            
        </div>
        <div className="flex justify-center mt-5 text-black font-bold">
            <h1 className="ml-3">Nobu V & A Waterfront</h1>
            <li className="ml-3">1 Castle Street, Cape Town</li>
            <li className="ml-3">Since 1990</li>
            <li className="ml-3">9 AM - 10 PM/24/7</li>
        </div>
        <div className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga, cumque autem doloremque praesentium modi in rerum impedit accusamus maiores! Officia illum consectetur reprehenderit sit aliquam doloribus eaque, tenetur unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum natus eveniet non? Cupiditate tempora nisi distinctio possimus praesentium consectetur, maxime cumque vel quis? Animi asperiores culpa blanditiis quaerat deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga, cumque autem doloremque praesentium modi in rerum impedit accusamus maiores! Officia illum consectetur reprehenderit sit aliquam doloribus eaque, tenetur unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum natus eveniet non? Cupiditate tempora nisi distinctio possimus praesentium consectetur, maxime cumque vel quis? Animi asperiores culpa blanditiis quaerat deserunt.
        </div>
    </div>
  )
}
