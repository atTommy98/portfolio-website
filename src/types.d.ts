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

interface SectionProps {
  id: string;
  ref: React.Ref;
}
