import fb from "../assets/images/fb.png";
import tiktok from "../assets/images/tiktok.png";
import insta from "../assets/images/insta.png";
export default function Footer() {
  return (
    <div className="w-auto">
      <footer
        className="bg-gradient-to-r  from-blue-950 to-slate-700  flex flex-col
             justify-center items-center z-10 p-2 w-auto "
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-20 font-rubik text-center text-sm text-white ">Siguenos en nuestras  Redes sociales:</p>
          <div>
          <div className="flex flex-row">
          <img src={fb} className="w-10 h-10 md:w-20 md:h-20  " alt="facebook" />
          <img src={tiktok} className="w-10 h-10 md:w-20 md:h-20" alt="tiktok" />
          <img src={insta} className="w-10 h-10 md:w-20 md:h-20" alt="instagram" />
          </div>
          </div>
        </div>
        <h3 className="text-sm font-rubik text-center text-white">
          Copyright© 2025 Anavegar Soluciones / Arequipa,Perú{" "}
        </h3>
      </footer>
    </div>
  );
}
