import { motion } from 'framer-motion';
import type { SectionId } from '../types/portfolio';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Timeline from '../sections/Timeline';
import Resume from '../sections/Resume';
import { education, experience } from '../data/portfolio';

type Props = { section: { id: SectionId; file: string; label: string }; onOpen: (id: SectionId) => void };

export default function Editor({ section }: Props) {
  const content = {
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    experience: <Timeline title="experience.md" items={experience} />,
    education: <Timeline title="education.md" items={education} />,
    resume: <Resume />,
  }[section.id];

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: .25 }} className="h-full overflow-y-auto bg-[#0D1117]/80 scrollbar-thin">
      <div className="mx-auto max-w-6xl p-5 md:p-8">{content}</div>
    </motion.div>
  );
}
