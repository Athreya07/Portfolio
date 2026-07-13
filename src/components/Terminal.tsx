import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { profile, projects, skills } from '../data/portfolio';
import type { SectionId } from '../types/portfolio';

const commands = ['help','about','skills','projects','resume','github','linkedin','contact','clear','date','whoami','pwd'];

export default function Terminal({ onOpen }: { onOpen: (id: SectionId) => void }) {
  const [history, setHistory] = useState<string[]>(['Welcome to AtharvaOS. Type "help" to view commands.']);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { ref.current?.scrollTo({ top: ref.current.scrollHeight }); }, [history]);

  const run = (cmdRaw: string) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') { setHistory([]); return; }
    const responses: Record<string, string> = {
      help: `Available commands: ${commands.join(', ')}`,
      about: `${profile.name} | ${profile.role} | ${profile.location}`,
      skills: Object.entries(skills).map(([k,v]) => `${k}: ${v.join(', ')}`).join('\n'),
      projects: projects.map(p => `✓ ${p.name} — ${p.description}`).join('\n'),
      resume: 'Opening resume tab...',
      github: `Opening ${profile.github} in a new tab...`,
      linkedin: `Opening ${profile.linkedin} in a new tab...`,
      contact: `Reach me at ${profile.email}`,
      date: new Date().toLocaleString(),
      whoami: 'atharva',
      pwd: '/home/atharva/portfolio',
    };
    if (cmd === 'resume') onOpen('resume');
    if (cmd === 'github') window.open(profile.github, '_blank');
    if (cmd === 'linkedin') window.open(profile.linkedin, '_blank');
    if (cmd === 'contact') window.location.href = `mailto:${profile.email}`;
    if (cmd === 'projects') onOpen('projects');
    if (cmd === 'skills') onOpen('skills');
    if (cmd === 'about') onOpen('about');
    setHistory(h => [...h, `atharva@portfolio:~$ ${cmdRaw}`, responses[cmd] ?? `Command not found: ${cmd}. Type help.`]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { run(input); setCmdHistory(h => input ? [...h, input] : h); setCursor(cmdHistory.length + 1); setInput(''); }
    if (e.key === 'ArrowUp') { e.preventDefault(); const next = Math.max(0, cursor - 1); setCursor(next); setInput(cmdHistory[next] ?? input); }
    if (e.key === 'Tab') { e.preventDefault(); const match = commands.find(c => c.startsWith(input)); if (match) setInput(match); }
  };

  return (
    <div className="hidden h-48 shrink-0 border-t border-[#30363D] bg-[#0D1117] md:block">
      <div className="border-b border-[#30363D] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#8B949E]">Terminal</div>
      <div ref={ref} className="h-[calc(100%-37px)] overflow-y-auto p-4 font-mono text-sm scrollbar-thin">
        {history.map((line, i) => <pre key={i} className="whitespace-pre-wrap leading-6 text-[#8B949E]">{line}</pre>)}
        <div className="flex items-center gap-2"><span className="text-[#3FB950]">atharva@portfolio:~$</span><input value={input} onChange={e => setInput(e.target.value)} onKeyDown={onKeyDown} className="flex-1 bg-transparent text-[#F0F6FC] outline-none" autoComplete="off" autoCapitalize="off" /></div>
      </div>
    </div>
  );
}
