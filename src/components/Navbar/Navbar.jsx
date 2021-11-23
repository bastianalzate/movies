import React from "react";
import { social } from "../../data/socialData";

const NavbarLateral = () => {
    return(
        <div className="w-full h-full">
            <div className="flex w-full h-20 justify-items-start px-10 items-center">
                <span className="text-2xl font-bold">Nombre</span>
            </div>

            <div className="flex flex-col w-full h-auto py-5 my-3">
                <div className="w-full flex justify-items-start px-10"><span className="text-sm font-semibold text-gray-400">Menu</span></div>
                <div className="w-full py-2 flex justify-items-start px-10">
                    <span className="text-lg font-semibold text-gray-800">Browse</span>
                </div>
                <div className="w-full py-2 flex justify-items-start px-10">
                    <span className="text-lg font-semibold text-gray-800">Favoritos</span>
                </div>
            </div>

            <div className="flex flex-col w-full h-auto py-5 my-3">
                <div className="w-full flex justify-items-start px-10"><span className="text-sm font-semibold text-gray-400">Social</span></div>
                <div className="w-full py-2 flex justify-items-start px-10">
                    <span className="text-lg font-semibold text-gray-800">Friends</span>
                </div>
            </div>

            <div className="flex flex-col w-full h-auto py-5 my-3">
                <div className="w-full flex justify-items-start px-10"><span className="text-sm font-semibold text-gray-400">General</span></div>
                <div className="w-full py-2 flex justify-items-start px-10">
                    <span className="text-lg font-semibold text-gray-800">Settings</span>
                </div>
                <div className="w-full py-2 flex justify-items-start px-10">
                    <span className="text-lg font-semibold text-gray-800">Logout</span>
                </div>
            </div>

            <div className="w-full h-10 flex justify-center items-center mt-14">
                {
                    social?.map(icon => <img src={icon.icon} alt="" className="w-8 h-8 mx-2"/>)
                }
            </div>
        </div>
    )
}


export default NavbarLateral;