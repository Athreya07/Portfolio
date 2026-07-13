import { useEffect, useState } from 'react';
import { GitBranch } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const id = window.setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <footer className="flex h-7 shrink-0 items-center gap-4 overflow-hidden border-t border-[#30363D] bg-[#0D1117] px-3 text-xs text-[#8B949E]">
      <span className="flex items-center gap-1 text-[#3FB950]"><GitBranch size={13}/> main</span>
      <span>UTF-8</span><span>TypeScript</span><span>Ln 1, Col 1</span><span>Portfolio v1.0.0</span><span className="ml-auto">{time}</span>
    </footer>
  );
}
