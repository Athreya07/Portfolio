import { useEffect, useState } from 'react';
import { Command } from 'lucide-react';
import { sections } from '../data/portfolio';
import type { SectionId } from '../types/portfolio';

export default function CommandPalette({ open, onClose, onOpen }: { open: boolean; onClose: () => void; onOpen: (id: SectionId) => void }) {
  const [query, setQuery] = useState('');
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'k' || (e.shiftKey && e.key.toLowerCase() === 'p'))) { e.preventDefault(); open ? onClose() : null; }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const filtered = sections.filter(s => `${s.label} ${s.file}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="absolute inset-0 z-50 flex items-start justify-center bg-black/50 pt-24 backdrop-blur-sm" onMouseDown={onClose}>
      <div onMouseDown={e => e.stopPropagation()} className="w-[min(640px,92vw)] overflow-hidden rounded-2xl border border-[#30363D] bg-[#161B22] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-[#30363D] px-4 py-3"><Command className="text-[#58A6FF]"/><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Search files or commands..." className="flex-1 bg-transparent text-[#F0F6FC] outline-none"/></div>
        <div className="max-h-80 overflow-y-auto p-2 scrollbar-thin">
          {filtered.map(s => <button key={s.id} onClick={() => { onOpen(s.id); onClose(); }} className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-[#8B949E] hover:bg-[#21262D] hover:text-[#F0F6FC]"><s.Icon size={17}/><span className="flex-1">Open {s.label}</span><span>{s.file}</span></button>)}
        </div>
      </div>
    </div>
  );
}
