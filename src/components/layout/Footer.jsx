const Footer = () => {
  return (
    <div className="flex flex-col text-white w-full">
      <img
        src="/img/logo.svg"
        alt="Logo Movie"
        className="w-[200px] h-[100px] object-cover mx-auto mb-10"
      />
      <div className="flex space-x-2 justify-center mb-10">
        <span>Política de privacidad</span>
        <span>Política de privacidad</span>
        <span>Política de privacidad</span>
        <span>Política de privacidad</span>
        <span>Política de privacidad</span>
        <span>Política de privacidad</span>
        <span>Política de privacidad</span>
        <span>Política de privacidad</span>
      </div>
      <p className="text-center text-sm leading-relaxed text-white max-w-[600px] mx-auto mb-10">
        Disney+ es un servicio por suscripción de pago, su contenido está sujeto
        a disponibilidad. El servicio Disney+ es comercializado por Disney DTC
        LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
      </p>
      <p className="mb-10 text-center">
        © Disney. Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
