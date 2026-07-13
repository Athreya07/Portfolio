import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { sections } from '../data/portfolio';
import type { SectionId } from '../types/portfolio';

type Props = { tabs: SectionId[]; active: SectionId; onSelect: (id: SectionId) => void; onClose: (id: SectionId) => void };

export default function TabBar({ tabs, active, onSelect, onClose }: Props) {
  return (
    <div className="flex h-11 shrink-0 overflow-x-auto border-b border-[#30363D] bg-[#161B22] scrollbar-thin">
      {tabs.map((id) => {
        const section = sections.find((s) => s.id === id)!;
        return (
          <motion.div layout key={id} className={`group flex min-w-fit items-center gap-2 border-r border-[#30363D] px-3 text-sm ${active === id ? 'bg-[#0D1117] text-[#F0F6FC]' : 'bg-[#161B22] text-[#8B949E] hover:text-[#F0F6FC]'}`}>
            <button onClick={() => onSelect(id)} className="flex items-center gap-2 py-3">
              <section.Icon size={15} className={active === id ? 'text-[#58A6FF]' : ''} /> {section.file}
            </button>
            <button onClick={() => onClose(id)} className="rounded p-1 opacity-60 hover:bg-[#30363D] hover:opacity-100" aria-label={`Close ${section.file}`}><X size={14} /></button>
          </motion.div>
        );
      })}
    </div>
  );
}
