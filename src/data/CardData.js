import { FaJs, FaPython, FaJava, FaRust } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si'

const languages = [
  { name: "JavaScript", icon: FaJs , progress: 40},
  { name: "Python", icon: FaPython , progress: 80},
  { name: "Java", icon: FaJava , progress: 60},
  { name: "Rust", icon: FaRust , progress: 80},
  { name: "C++", icon: SiCplusplus, progress:  100}
];

const cards = languages.map((language, index) => ({
  title: language.name,
  description: '',
  icon: language.icon
}));

export default cards;