declare module "*.mp3" {
  const value: any;
  export default value;
}
declare module "use-sound";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  content: string;
}

interface ProjectCardProps {
  title: string;
  tags: string[];
  image: any;
  content: string;
  link: string;
  colour: string;
}

interface SectionProps {
  id: string;
}
