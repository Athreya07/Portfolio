import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sections } from './data/portfolio';
import Sidebar from './components/Sidebar';
import TabBar from './components/TabBar';
import Editor from './components/Editor';
import Terminal from './components/Terminal';
import StatusBar from './components/StatusBar';
import CommandPalette from './components/CommandPalette';
import Spotlight from './components/Spotlight';
import type { SectionId } from './types/portfolio';

export default function App() {
  const [active, setActive] = useState<SectionId>('about');
  const [openTabs, setOpenTabs] = useState<SectionId[]>(['about']);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const activeTab = useMemo(() => sections.find((s) => s.id === active)!, [active]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && (event.key.toLowerCase() === 'k' || (event.shiftKey && event.key.toLowerCase() === 'p'))) {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openSection = (id: SectionId) => {
    setActive(id);
    setOpenTabs((tabs) => tabs.includes(id) ? tabs : [...tabs, id]);
  };

  const closeTab = (id: SectionId) => {
    setOpenTabs((tabs) => {
      const next = tabs.filter((tab) => tab !== id);
      if (active === id) setActive(next.at(-1) ?? 'about');
      return next.length ? next : ['about'];
    });
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#0D1117] text-[#F0F6FC] grid-bg">
      <Spotlight />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,166,255,.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(163,113,247,.08),transparent_30%)]" />
      <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .55 }} className="relative z-10 flex h-full p-3 gap-3">
        <Sidebar active={active} onOpen={openSection} onCommand={() => setPaletteOpen(true)} />
        <section className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#30363D] bg-[#0D1117]/92 shadow-2xl backdrop-blur">
          <TabBar tabs={openTabs} active={active} onSelect={openSection} onClose={closeTab} />
          <div className="min-h-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <Editor key={active} section={activeTab} onOpen={openSection} />
            </AnimatePresence>
          </div>
          <Terminal onOpen={openSection} />
          <StatusBar />
        </section>
      </motion.div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} onOpen={openSection} />
    </main>
  );
}
