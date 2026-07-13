import { Command, Search, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { sections } from '../data/portfolio';
import type { SectionId } from '../types/portfolio';

type Props = { active: SectionId; onOpen: (id: SectionId) => void; onCommand: () => void };

export default function Sidebar({ active, onOpen, onCommand }: Props) {
  return (
    <aside className="hidden md:flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-[#30363D] bg-[#161B22]/95 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-2 border-b border-[#30363D] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-auto text-xs text-[#8B949E]"></span>
      </div>
      <div className="flex items-center justify-between border-b border-[#30363D] px-4 py-3">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#8B949E]">Explorer</p>
        <button onClick={onCommand} className="rounded-md border border-[#30363D] p-1.5 text-[#8B949E] hover:border-[#58A6FF] hover:text-[#58A6FF]" aria-label="Open command palette">
          <Command size={15} />
        </button>
      </div>
      <button onClick={onCommand} className="mx-3 mt-3 flex items-center gap-2 rounded-lg border border-[#30363D] bg-[#0D1117] px-3 py-2 text-left text-sm text-[#8B949E] hover:border-[#58A6FF]">
        <Search size={15} /> Search files or press Ctrl+K
      </button>
      <nav className="mt-4 flex-1 space-y-1 px-2">
        {sections.map(({ id, label, file, Icon }, index) => (
          <motion.button
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .035 }}
            key={id} onClick={() => onOpen(id)}
            className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${active === id ? 'bg-[#21262D] text-[#F0F6FC]' : 'text-[#8B949E] hover:bg-[#21262D]/70 hover:text-[#F0F6FC]'}`}
          >
            <Icon size={17} className={active === id ? 'text-[#58A6FF]' : 'text-[#8B949E] group-hover:text-[#58A6FF]'} />
            <span className="flex-1">{label}</span>
            <span className="text-[10px] text-[#8B949E]">{file.split('.').pop()}</span>
          </motion.button>
        ))}
      </nav>
      <div className="border-t border-[#30363D] px-4 py-3 text-xs text-[#8B949E]">
        <div className="flex items-center gap-2"><GitBranch size={14} className="text-[#3FB950]" /> main</div>
      </div>
    </aside>
  );
}
