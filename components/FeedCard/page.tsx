import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
    return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 trasition-all  cursor-pointer"> 
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1 ">
                <Image 
                    className="rounded-full"
                    src="https://avatars.githubusercontent.com/u/89033216?v=4" 
                    alt="user-image" 
                    height={50} 
                    width={50} 
                />
            </div>
            <div className="col-span-11">
                <h5 className="text-bold">Manoj Kumar Pradhan</h5>
                <p>
                    Gave an interview today for a startup (SDE intern). 2nd ever coding round. 1st one was also for a startup, cracked, offer letter yet to be received :')
                    Today, was given 2 tasks, testing my JS fundamentals. Round 2 @ 6pm. Fingers crossed🧿🤞
                </p>
                <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                    <div>
                        <BiMessageRounded />
                    </div>
                    <div>
                        <FaRetweet />
                    </div>
                    <div>
                        <AiOutlineHeart />
                    </div>
                    <div>
                        <BiUpload />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FeedCard;