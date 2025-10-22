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
export interface Skill {
  name: string;
  icon: string;
}
export interface Project {
  image: string;
  name: string;
  languages: Skill[];
  description: string;
}
export interface Form {
  name: string;
  type: string;
}
export const forms: Form[] = [
  {
    name: "Nombre: ",
    type: "text",
  },
  {
    name: "Apellidos: ",
    type: "text",
  },
  {
    name: "Email: ",
    type: "email",
  },
  {
    name: "Comentarios: ",
    type: "text",
  },
];
export const skills: Skill[] = [
  {
    name: "HTML",
    icon: "devicon:html5",
  },
  {
    name: "CSS",
    icon: "devicon:css3",
  },
  {
    name: "JavaScript",
    icon: "devicon:javascript",
  },
  {
    name: "Vue",
    icon: "devicon:vuejs",
  },
  {
    name: "Sass",
    icon: "devicon:sass",
  },
  {
    name: "Bootstrap",
    icon: "devicon:bootstrap",
  },
  {
    name: "Nuxt",
    icon: "devicon:nuxtjs",
  },
  {
    name: "Java",
    icon: "devicon:java",
  },
  {
    name: "SQL",
    icon: "devicon:mysql",
  },
  {
    name: "Git",
    icon: "devicon:git",
  },
];

function getSkillsByNames(names: string[], skillList: Skill[]): Skill[] {
  return names
    .map((name) => skillList.find((skill) => skill.name === name))
    .filter((skill): skill is Skill => skill !== undefined);
}

export const projects: Project[] = [
  {
    image: "/vue.png",
    name: "Proyecto Vue",
    languages: getSkillsByNames(["Vue", "JavaScript", "Sass"], skills),
    description: "Proyecto con Vue y Sass.",
  },
  {
    image: "/java.png",
    name: "Proyecto Java",
    languages: getSkillsByNames(["Java", "SQL"], skills),
    description: "Backend con Java y MySQL.",
  },
  {
    image: "/nuxt.png",
    name: "Proyecto Nuxt",
    languages: getSkillsByNames(["Nuxt", "SQL"], skills),
    description: "Backend con Nuxt y MySQL.",
  },
];

export const jobs: Jobs[] = [
  {
    name: "Desarrollador Frontend en Indra",
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
