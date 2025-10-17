export interface Navbar {
  id: number;
  title: string;
  relocation: string;
}
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
    title: "Competencias",
    relocation: "/#Competencias",
  },
  {
    id: 4,
    title: "Proyetos",
    relocation: "/#Proyectos",
  },
  {
    id: 5,
    title: "Contactar",
    relocation: "/#Contactar",
  },
];
