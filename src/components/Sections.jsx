import repair from "../assets/images/repair.jpg";
import marcas from "../assets/images/marcasimp.png";
import pc from "../assets/images/pcimagen.png";
import laptop from "../assets/images/laptop.png";
import amd from "../assets/images/amd.png";
import intel from "../assets/images/intel.png";
import nvidia from "../assets/images/nvidia.png";
import office from "../assets/images/office.png";
import canon from "../assets/images/canon.png";
import autodesk from "../assets/images/Autodesk.png";
import Carr from "./Slider" ;
export default function Section() {
  const tpH1 =
    "text-white font-normal text-10 xl:text-[30px]  font-rubik text-left md:text-[20px]";
  return (
    <section className="grid grid-cols-1 left-10  relative top-16 sm:left-auto xl:top-10 h-full ">
      <h1 className="text-blue-950 mt-16 text-center xl:text-8xl text-5xl font-roboto font-black md:mt-24">
        Anavegar <br /> Soluciones Tec
      </h1>
      <div>
        <h2 className=" flex w-screen justify-center items-center p-5 font-oxygen text-center text-2xl text-blue-950 md:text-3xl">
          Damos mantenimiento y reparacion de equipos como:
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2  ">
        <div className="bg-white flex flex-col gap-6 group relative  overflow-hidden text-center border-2 border-x-4  shadow-gray-500  shadow-2xl p-10 m-[5vw] rounded-e-xl xl:flex-row xl:col-span-2 justify-center items-center">
          <p className="text-slate-800 text-4xl font-bold text-center font-roboto mr-10">
            Impresoras
          </p>
          <img
            src={repair}
            className=" object-contain w-full xl:w-[300px] "
            alt="epson"
          />
          <img
            src={marcas}
            className=" object-contain w-full mt-6 xl:flex-wrap  xl:w-[300px]  "
            alt="marcas"
          />
          <img
            src={canon}
            className="object-contain w-full xl:w-[300px]"
            alt="canon"
          />
          <div className="absolute inset-0 bg-blue-950 rounded-xl bg-opacity-75 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className={tpH1}> Solucionamos problemas: </h4>
            <ul className=" xl:grid xl:grid-cols-3">
              <li className={tpH1}>- Mi impresora bota hojas en blanco </li>
              <li className={tpH1}>- No salen todos los colores completos</li>
              <li className={tpH1}>- Eche la tinta equivocada</li>
              <li className={tpH1}>- La hoja se atasca frecuentemente</li>
              <li className={tpH1}>
                - Mi impresora no permite que imprima ni saque copias{" "}
              </li>
              <li className={tpH1}>
                - Salen rayas en mi impresión.
              </li>
              <li className="text-white text-[5vw] font-rubik text-left mt-10 md:text-[20px] xl:text-[30px] col-span-3  xl:mt-4">
                {" "}
                En caso de un problema particular contactese a nuestro
                Whatsapp:914235453{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white text-center group relative overflow-hidden border-2 border-x-4  shadow-gray-500  shadow-2xl p-10 m-[5vw] rounded-e-xl xl:col-span-2 xl:flex justify-center items-center xl:bottom-24 ">
          <p className="text-slate-800 text-4xl font-bold mr-10">
            Computadoras y laptops
          </p>
          <img
            src={pc}
            className=" object-contain w-full xl:w-[300px]"
            alt=""
          />
          <img
            src={laptop}
            className=" object-contain w-full xl:w-[300px] "
            alt=""
          />
          <div className="flex flex-wrap justify-center items-center gap-5 xl:w-[400px] ">
            <img src={amd} className=" object-contain w-24   " alt="" />
            <img src={intel} className=" object-contain w-24  " alt="" />
            <img src={nvidia} className=" object-contain w-24  " alt="" />
          </div>
          <div className="absolute inset-0 bg-blue-950  rounded-xl p-4 opacity-0 bg-opacity-75 group-hover:opacity-100 transition-opacity duration-300 ">
            <h4 className={tpH1}> Solucionamos problemas como: </h4>
            <ul className="xl:grid xl:grid-cols-3">
              <li className={tpH1}>- Formateos </li>
              <li className={tpH1}>- Sale pantalla azul.</li>
              <li className={tpH1}>- Hace mucho ruido.</li>
              <li className={tpH1}>- No enciende.</li>
              <li className={tpH1}>- Se apaga solo.</li>
              <li className={tpH1}>- Muy lenta para encender y usar.</li>
              <li className={tpH1}>
                - No carga rápido la batería de mi laptop.
              </li>
              <li className={tpH1}>
                - Cambio de pantalla y teclado de laptop{" "}
              </li>

              <li className="text-white text-[5vw] font-rubik text-left mt-10 md:text-[20px] xl:text-[30px] ">
                {" "}
                En caso de un problema particular contactese a nuestro
                Whatsapp:914235453{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 justify-center items-center">
        <h2 className=" flex w-screen justify-center items-center p-5 font-oxygen text-center text-2xl text-blue-950 md:text-3xl">
          También ofrecemos servicios como:
        </h2>
        <div className="group relative overflow-hidden">
          <div className="bg-white flex flex-col justify-center items-center text-center lg:flex lg:flex-row lg:justify-center lg:items-center group relative overflow-hidden border-2 border-x-4  shadow-gray-500  shadow-2xl p-10 m-[5vw] rounded-e-xl">
            <p className="text-slate-800  text-4xl font-medium font-roboto p-20  ">
              Instalación de programas
            </p>
            <img
              src={office}
              className="  object-contain w-full  mt-3 md:flex md:flex-row md:w-96 lg:w-[300px]"
              alt="office"
            />
            <img
              src={autodesk}
              className="  object-contain w-full mt-3 md:flex md:flex-row md:w-96 lg:w-[300px]"
              alt="autodesk"
            />
            <div className="absolute inset-0 bg-blue-950 bg-opacity-75 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className={tpH1}> Los programas que instalamos: </h4>
              <ul>
                <li className={tpH1}>- Word,Excel,PowerPoint </li>
                <li className={tpH1}>- No salen todos los colores completos</li>
                <li className={tpH1}>- Eche la tinta equivocada</li>
                <li className={tpH1}>- La hoja se atasca frecuentemente</li>
                <li className={tpH1}>
                  - Mi impresora no permite que imprima ni saque copias{" "}
                </li>
                <li className="text-white text-[5vw] font-rubik text-left mt-10 md:text-[20px]">
                  {" "}
                  En caso de un problema particular contactese a nuestro
                  Whatsapp:914235453{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carr/>
      </div>
    </section>
  );
}
