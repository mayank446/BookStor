import React from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"

function Topbar() {
    const navigate = useNavigate();
    function accountHandler() {
        navigate('/signin')
    }

    return (
        <div className="bg-blue-600 sticky top-0 grid grid-cols-12 w-full h-20 z-50 border-b border-slate-100">
            <div className="flex col-span-1 sm:col-span-2 pl-2 sm:pl-10">
                <img className="h-20 w-20 pb-1 absolute" src={logo} />
            </div>

            <div className="col-span-10 sm:col-span-8 m-2 p-3">
                <div className="flex items-center max-w-64 md:max-w-lg mx-auto">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 dark:text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                            </svg>
                        </div>
                        <input type="text" id="voice-search" className="bg-transparent text-slate-200 border border-slate-200 outline-none rounded-full w-full ps-10 p-2.5" placeholder="Search Books" />
                        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                            <svg className="w-4 h-4 me-2 fill-none stroke-slate-400 hover:stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex col-span-1 sm:col-span-2 justify-end">
                <button 
                    onClick={accountHandler}
                    className="h-10 w-10 my-auto rounded-full overflow-hidden">
                    <img src={avatar} />
                </button>
            </div>
        </div>
    )
}

export default Topbar