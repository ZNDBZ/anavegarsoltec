import { Link } from "react-router-dom";
const Line = () => {
    const styleBorder= "border-2 rounded-full font-rubik p-2 text-[17px]  xl:text[30px] text-center  hover:scale-105"
  return (
    <div > 
      <ul className="flex flex-row gap-9 ">
      <li className={styleBorder} ><Link to="/">Inicio🏚️</Link></li>
      <li className={styleBorder}><Link to="/ubicacion">Ubícanos🗺️</Link></li>
      <li className={styleBorder}><Link to="/multi">MultiServicios digitales Anavegar </Link></li>
      <li> </li>
      </ul>
    </div>
  );
};

export default Line;
