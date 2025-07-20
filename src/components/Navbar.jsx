import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo3.png";
import { FaTimesCircle } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import Whatsapp from "../assets/images/Whatsapp.png";
import { Link } from "react-router-dom";
import Line from "./Line";

export default function Navbar() {
  const [set, useSet] = useState(false);
  const Toggleset = () => {
    useSet(!set);
  };

  const [fa, useFa] = useState("false");
  const Togglefa = () => {
    useFa(!fa);
  };
  return (
    <>
      <div className="flex flex-row justify-center   items-center fixed z-10 bg-gradient-to-r from-blue-950 to-slate-700 text-white gap-[16vw]  font-bold w-full md:gap-60  lg:gap-20 xl:gap-60 ">
        <img src={logo} className=" object-contain p-3 w-[100px] md:w-[120px] lg:w-[110px]  " alt="anavegar" />

          <AnimatePresence>
          <motion.div
            animate={{ opacity: 1, x: 0, scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className=" flex flex-row  justify-center items-center font-rubik    rounded-full   text-center      border-solid w-[100px]  cursor-pointer   "
          >
              <a className=" flex flex-row gap-4 justify-center items-center w-[120px] " href="#">
              <img
                src={Whatsapp}
                className=" w-[60px] md:w-[70px] "
                alt=""
              />
              <p className="text-[12px] w-44 md:text-[15px] "> Contáctanos dando click </p>
              </a>
              
          </motion.div>

        </AnimatePresence>
      
        <div className="flex justify-center items-center">
          <button className="lg:hidden" onClick={Toggleset}>
            {set === true ? (
              <FaTimesCircle className="size-10 cursor-pointer object-contain md:size-16 " />
            ) : (
              <CgMenuRound className=" size-10 cursor-pointer object-contain md:size-16   " />
            )}
          </button>
          <div className="hidden lg:flex lg:flex-row lg:w-full">
            <Line/>
          </div>
        </div>

        <AnimatePresence>
          {set === true && (
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.35 }}
              className=" bg-white border-4 mt-16  rounded absolute top-8  flex-col md:w-full"
            >
              <ul className="">
                <li className=" py-4 text-blue-950 hover:bg-cyan-300 hover:border-4 hover: scale-105 cursor-pointer text-center text-xl">
                  <Link to="/"> Inicio </Link>
                </li>
                <li className="py-4 text-blue-950 hover:bg-cyan-300 hover:border-4 hover: scale-105 cursor-pointer text-center text-xl">
                  Instalacion de programas
                </li>
                <li className="py-4 text-blue-950 hover:bg-cyan-300 hover:border-4 hover: scale-105 cursor-pointer text-center text-xl">
                  Venta de accesorios
                </li>

                <li className="py-4 text-blue-950 hover:bg-cyan-300 hover:border-4 hover: scale-105 cursor-pointer text-center text-xl">
                  <Link to="/repair"> Edición de videos </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
//bg-gradient-to-r from-blue-950 to-slate-900
//text-[5.3vh]
