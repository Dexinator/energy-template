import img1 from "./assets/monterrey.jpg";
import img2 from "./assets/madrid.jpg";
import img3 from "./assets/brazil.jpg";

export const projectsSection = {
  title: "Casos de Éxito",
  subheading1_1: "Explora Nuestros ",
  subheading1_2: "Casos de Geolocalización Precisa",
  projects: [
    {
      title: "Optimización de Seguridad en Planta Industrial",
      description:
        "Implementamos geovallas inteligentes y monitoreo en tiempo real para mejorar la seguridad en una planta de manufactura. La solución redujo incidentes en un 40% y optimizó la operatividad del personal.",
      location: "Monterrey, México",
      visual: img1,
    },
    {
      title: "Gestión Avanzada de Flotas Logísticas",
      description:
        "Nuestra tecnología de RTLS permitió a una empresa de logística mejorar la trazabilidad de sus vehículos y reducir tiempos de inactividad, logrando un aumento del 25% en la eficiencia operativa.",
      location: "Madrid, España",
      visual: img2,
    },
    {
      title: "Monitoreo de Activos en Tiempo Real",
      description:
        "Implementamos una solución de rastreo en tiempo real para maquinaria pesada en una operación minera, mejorando la eficiencia del mantenimiento y reduciendo costos operativos en un 30%.",
      location: "Amazonas, Brasil",
      visual: img3,
    },
  ],
  callToAction: "Descubre cómo nuestra tecnología está transformando industrias.",
  button: "Ver Más Casos de Éxito",
};
