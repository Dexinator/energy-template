import svg1 from "./assets/green-1.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";

export const getInvolvedSection = {
  title: "Mantente Informado",
  subheading1_1: "Descubre las",
  subheading1_2: "últimas actualizaciones y mejoras",
  initiatives: [
    {
      title: "Nuevas Funcionalidades",
      description:
        "Conoce en detalle cada nueva herramienta y mejora que incorporamos a nuestro sistema para optimizar la seguridad, la logística y la trazabilidad en tiempo real.",
      visual: svg2,
    },
    {
      title: "Actualizaciones del Producto",
      description:
        "Mantente al día con las últimas versiones de nuestra tecnología. Descubre mejoras en precisión, integración y facilidad de uso para maximizar el rendimiento de tu empresa.",
      visual: svg4,
    },
    {
      title: "Colaboraciones y Expansión",
      description:
        "Explora nuestras nuevas alianzas estratégicas y expansiones de cobertura. Entérate de cómo evolucionamos para ofrecerte soluciones más robustas y adaptadas a tus necesidades.",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "No te pierdas ninguna actualización de SISTEQ Control",
  button: "Mantente informado",
};
