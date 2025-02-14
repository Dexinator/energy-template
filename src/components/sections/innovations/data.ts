import imgGrid from "./assets/inno-grid.webp";
import imgSolar from "./assets/inno-panel.webp";
import imgWind from "./assets/inno-wind.webp";

export const innovationsSection = {
  title: "¿Cómo Funciona Nuestra Tecnología?",
  subheading1_1: "Conoce el funcionamiento",
  subheading1_2: "de nuestra geolocalización Indoor",
  innovations: [
    {
      title: "Celdas Virtuales y Anclas",
      description:
        "Nuestro sistema se basa en la creación de celdas virtuales con anclas estratégicamente ubicadas. Estas anclas actúan como puntos de referencia para rastrear en tiempo real cualquier activo dentro de la zona monitoreada.",
      visual: imgGrid,
    },
    {
      title: "Dispositivos RTLS en Objetos y Personas",
      description:
        "Cada objeto o persona a monitorear cuenta con un dispositivo RTLS que emite señales de posicionamiento. Esto permite un seguimiento preciso y continuo de su ubicación en el espacio definido.",
      visual: imgSolar,
    },
    {
      title: "Monitoreo y Análisis en Tiempo Real",
      description:
        "La información capturada se procesa en tiempo real para generar reportes, alertas y optimizaciones. Nuestro software permite la integración con otras plataformas para mejorar la toma de decisiones y la seguridad operativa.",
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Descubre cómo nuestra tecnología transforma la geolocalización Indoor",
  button: "Saber más",
};
