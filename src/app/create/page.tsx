'use client'

import Image from "next/image";
import { useRef } from "react";
import { Upload } from "lucide-react";
import starfilled from "../../../public/star_filled.svg"
import starnotfilled from "../../../public/starNotFilled.svg"

export default function Create() {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <section className="py-25">
            <div className="container">
                <h1 className="text-center text-[var(--salade)]">Add Recipe Recommendation</h1>

                <div className="mt-15 flex items-start justify-between w-full">
                    <div className="bg-gray-200 py-10 px-[120px] inline-flex">
                        <div className="flex justify-center items-center h-20 w-20 bg-gray-700 rounded-full cursor-pointer" onClick={handleClick}>
                            <Upload className="text-white" size={30} />
                            <input type="file" ref={fileInputRef} className="hidden" />
                        </div>
                    </div>

                    <div>
                        <div className="text-[24px] font-bold text-[var(--salade)]">Your Rating</div>
                        <div className="flex items-center gap-3">
                            <button className="cursor-pointer"><Image src={starfilled} alt="" /></button>
                            <button className="cursor-pointer"><Image src={starfilled} alt="" /></button>
                            <button className="cursor-pointer"><Image src={starfilled} alt="" /></button>
                            <button className="cursor-pointer"><Image src={starfilled} alt="" /></button>
                            <button className="cursor-pointer"><Image src={starnotfilled} alt="" /></button>
                        </div>
                    </div>
                </div>

                <form className="mt-6">
                    <div>
                        <label htmlFor="" className="block text-[24px] font-bold text-[var(--salade)]">
                            Recipe Title
                        </label>

                        <input type="text" placeholder="Pancakes with banana" className="block mt-6 w-full border-2 border-black rounded-[15px] py-5 px-8 placeholder:text-black" />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="" className="block text-[24px] font-bold text-[var(--salade)]">
                            Recipe Description
                        </label>
                        <textarea placeholder="Write your description about this recipe" className="block min-h-[144px] mt-6 w-full border-2 border-black rounded-[15px] py-5 px-8 placeholder:text-black" />
                    </div>

                    <div className="mt-[60px] flex justify-end w-full"><button type="submit" className="yellowBtn px-21">Create Recipe</button></div>
                </form>
            </div>
        </section>
    );
}
