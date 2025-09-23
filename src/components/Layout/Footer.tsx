export default function Footer(){
  return(
    <footer className="bg-blue-950 h-[50dvh] grid items-center md:grid-cols-3 text-white">
      <img src="/logob.png" className="w-[300px]" />
      <div>
        <h2>INFORMACION</h2>
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
        <h2>REDES SOCIALES</h2>
      </div>
    </footer>
  );
}
