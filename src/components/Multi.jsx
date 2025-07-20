import React from "react";

export default function Multi() {
  const style = { estilo: "w-20", estdos: "w-30", esttres: "w-40", estcuatro:"w-50" };
  return (
    <div className="mt-44">
      <div className="grid grid-cols-1 grid-rows-10  text-blue-950 w-full p-2 justify-center items-center text-center">
        <div className="font-bold">
          Copias/Impresiones(A4 y A3) <img src="" alt="" />
        </div>
        <div className=" ">Escaneos</div>
        <div className=" ">Anillados</div>
        <div className=" "></div>
        <div className="  ">Tipeos</div>
        <div className="  ">Trámites</div>
        <div className="  ">
          <p>Librería</p>
        </div>
      </div>
    </div>
  );
}
