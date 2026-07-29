declare module "*.mp3" {
  const value: any;
  export default value;
}
declare module "use-sound";

interface ExperienceCardProps {
  title: string;
  content: string[];
}

interface ProjectCardProps {
  title: string;
  tags: string[];
  image: any;
  content: string;
  link: string;
  colour: string;
  fit?: "cover" | "contain";
}

interface SectionProps {
  id: string;
}
