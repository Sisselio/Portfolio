export interface Navbar {
  id: number;
  title: string;
  relocation: string;
}
export interface Title {
  salute: string;
  mainTitle: string;
  subTitle: string;
}
export interface SecondTitle {
  title: string;
}
export interface AboutMe {
  firstPart: string;
  secondPart: string;
}
export interface Jobs {
  name: string;
  duration: string;
  description: string;
  actual: boolean;
}
export const jobs: Jobs[] = [
  {
    name: "Desarrollador Frontend en TechNova",
    duration: "Enero 2022 - Presente",
    description:
      "Desarrollo de interfaces web modernas con React y TailwindCSS, colaborando con el equipo de diseño para mejorar la experiencia de usuario.",
    actual: true,
  },
  {
    name: "Ingeniero Frontend Junior en PixelForge",
    duration: "Marzo 2021 - Diciembre 2021",
    description:
      "Apoyo en la construcción de componentes reutilizables en Vue.js y mantenimiento de estilos con SCSS en aplicaciones internas.",
    actual: false,
  },
  {
    name: "UI Developer Freelance",
    duration: "Julio 2020 - Febrero 2021",
    description:
      "Implementación de sitios web responsivos para pequeñas empresas, enfocándose en rendimiento, accesibilidad y compatibilidad entre navegadores.",
    actual: false,
  },
];

export const title: Title = {
  salute: "Hola!",
  mainTitle: "Soy Rubén Collazo",
  subTitle: "Soy un desarrollador frontend en practicas",
};
export const aboutMe: AboutMe = {
  firstPart:
    "Soy Rubén Collazo, desarrollador de aplicaciones web con enfoque en frontend. Actualmente realizo mis prácticas en Alebat, donde estoy aprendiendo tecnologías como Vue.js, Sass, TypeScript y Tailwind CSS, y aplicando mis conocimientos en proyectos reales.",
  secondPart:
    "Me gusta trabajar en equipo, aprender constantemente y superarme en cada proyecto. Me motiva crecer como desarrollador y enfrentar nuevos desafíos en el mundo del desarrollo web.",
};
export const secondTitles: SecondTitle[] = [
  {
    title: "Sobre mí",
  },
  {
    title: "Mi Experiencia",
  },
  {
    title: "Mis competencias",
  },
  {
    title: "Proyectos",
  },
  {
    title: "Contáctame",
  },
];
export const tabs: Navbar[] = [
  {
    id: 1,
    title: "Home",
    relocation: "/#Home",
  },
  {
    id: 2,
    title: "Sobre mí",
    relocation: "/#Sobre mi",
  },
  {
    id: 3,
    title: "Mi experiencia",
    relocation: "/#Mi experiencia",
  },
  {
    id: 4,
    title: "Competencias",
    relocation: "/#Competencias",
  },
  {
    id: 5,
    title: "Proyectos",
    relocation: "/#Proyectos",
  },
  {
    id: 6,
    title: "Contactar",
    relocation: "/#Contactar",
  },
];
