import video from "../assets/images/video.png"  ;
export default function Repair(){
    return(
        <div className="flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center bg-white text-center  border-2 border-x-4  shadow-gray-500  shadow-2xl p-10 m-[5vw] rounded-e-xl mt-28 ">
                <h1 className="text-slate-800 text-4xl font-medium font-roboto">Edición de Videos</h1>
                <img src={video} className="ml-9 object-contain w-96" />
                <p>

                </p>
        </div>
        </div>

    )
}