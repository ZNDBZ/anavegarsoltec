import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import pollo1 from "../assets/images/chick1.jpg";
import pollo2 from "../assets/images/chick2.png";
import frog1 from "../assets/images/frog1.gif";


export default function Carr() {
  const carrusel = [
    { id: 1, text: "Piyo el pollo", color: "text-blue-950 font-bold text-[40px] text-center h-96 gap-4" ,img:  pollo1   },
    { id: 2, text: "Piyo el pollo 2", color: "text-blue-950 font-bold text-[40px] text-center  h-96" ,img:  pollo2   },
    { id: 3, text: "El miki rene", color: "text-blue-950 font-bold text-[40px] text-center  h-96", img:  frog1   },
  ];

  return (
    <div className=" w-full p-4 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className=""
      >
        {carrusel.map((carrusel) => (
          <SwiperSlide key={carrusel.id} >
            <div className={carrusel.color}>
              {carrusel.text} 
              <div className="flex justify-center items-center">
              <img src={carrusel.img} className="object-cover w-64" alt="" />
              </div>
            </div>
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
