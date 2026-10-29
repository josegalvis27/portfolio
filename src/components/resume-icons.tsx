import { Mail as MailIcon, MapPin as PinIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const cls = "h-3 w-3";

export const Mail = () => <MailIcon className={cls} />;
export const MapPin = () => <PinIcon className={cls} />;
export const Github = () => <GithubIcon className={cls} />;
export const Linkedin = () => <LinkedinIcon className={cls} />;
