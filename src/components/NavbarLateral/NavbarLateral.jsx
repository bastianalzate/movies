import React from "react";
import { social } from "../../data/socialData";

const NavbarLateral = () => {
    return(
        <div className="w-full h-full">
            <div className="flex w-full justify-items-start px-6 items-center h-1/5 border-2">
                <span className="text-2xl font-bold">Nombre</span>
            </div>

            <div className="flex flex-col w-full  h-1/5 border-2 py-2">
                <div className="w-full flex justify-items-start px-6"><span className="text-sm font-semibold text-gray-400">Menu</span></div>
                <div className="w-full py-2 flex justify-items-start px-6">
                    <span className="text-lg font-semibold text-gray-800">Browse</span>
                </div>
                <div className="w-full py-2 flex justify-items-start px-6">
                    <span className="text-lg font-semibold text-gray-800">Favoritos</span>
                </div>
            </div>

            <div className="flex flex-col w-full  h-1/5 border-2 py-2">
                <div className="w-full flex justify-items-start px-6"><span className="text-sm font-semibold text-gray-400">Social</span></div>
                <div className="w-full py-2 flex justify-items-start px-6">
                    <span className="text-lg font-semibold text-gray-800">Friends</span>
                </div>
            </div>

            <div className="flex flex-col w-full  h-1/5 border-2 py-2">
                <div className="w-full flex justify-items-start px-6"><span className="text-sm font-semibold text-gray-400">General</span></div>
                <div className="w-full py-2 flex justify-items-start px-6">
                    <span className="text-lg font-semibold text-gray-800">Settings</span>
                </div>
                <div className="w-full py-2 flex justify-items-start px-6">
                    <span className="text-lg font-semibold text-gray-800">Logout</span>
                </div>
            </div>

            <div className="w-full  h-1/5 border-2 flex justify-center items-center ">
                {
                    social?.map(icon => <img src={icon.icon} alt="" className="w-8 h-8 mx-2"/>)
                }
            </div>
        </div>
    )
}


export default NavbarLateral;