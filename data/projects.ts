export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  href: string;
  /** Whether the card should span 2 columns on desktop */
  wide?: boolean;
}

export const projects: Project[] = [
  {
    slug: "yuna",
    title: "Yuna",
    subtitle: "Magical Reading for Kids · 2023–2025",
    coverImage: "/covers/yuna.png",
    href: "/work/yuna",
  },
  {
    slug: "daki-migration",
    title: "Daki Migration",
    subtitle: "Customer App · 2021–2023",
    coverImage: "/covers/daki-migration.png",
    href: "/work/daki-migration",
  },
  {
    slug: "daki-web",
    title: "Daki Web",
    subtitle: "Website & Brand · 2021–2023",
    coverImage: "/covers/daki-web.png",
    href: "/work/daki-web",
  },
  {
    slug: "owl-sensor",
    title: "Owl Sensor",
    subtitle: "IoT Product · WIP · 2022",
    coverImage: "/covers/owl-sensor.png",
    href: "/work/owl-sensor",
  },
];
