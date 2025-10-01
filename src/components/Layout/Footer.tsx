import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer(){
  return(
    <footer className="bg-blue-950 h-[50dvh] grid items-center md:grid-cols-3 text-white font-semibold place-items-center">
      <img src="/logob.png" className="w-[300px]" />
      <div>
        <h2 className="font-bold text-xl">INFORMACION</h2>
        <h3>
            Direccion:
        </h3>
        <h3>
            Telefono:
        </h3>
        <h3>
            Horario de atencion:
        </h3>
      </div>
      <div>
        <h2 className="font-bold text-xl">REDES SOCIALES</h2>
        <div className="flex gap-6 items-center font-bold">
          <a href="https://wa.link/yfn51c">
            <FaWhatsapp className="h-12"/>
          </a>
          <a href='https://www.tiktok.com/@laramedoficial?_t=ZM-900M5z0n944&_r=1'>
            <FaInstagram className="h-12" />
          </a>
          <a href="https://www.facebook.com/share/15VhJR85KF/">
            <FaFacebook className="h-12"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
