import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolio';

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    // Show feedback immediately so the click always feels responsive.
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Copy the address to the clipboard as a guaranteed fallback.
    navigator.clipboard?.writeText(profile.email).catch(() => {});

    // Open Gmail's web compose window instead of relying on mailto:,
    // since mailto: silently does nothing on machines with no default
    // mail app registered (very common). This works in any browser.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const lines = [
    ['const', 'atharva', '= {'],
    ['  name:', `"${profile.name}"`, ','],
    ['  role:', `"${profile.role}"`, ','],
    ['  education:', `"${profile.education}"`, ','],
    ['  location:', `"${profile.location}"`, ','],
    ['  interests:', '["Artificial Intelligence", "Machine Learning", "Full Stack Development"],'],
    ['  status:', `"${profile.status}"`],
    ['}']
  ];

  return (
    <section className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <p className="mb-3 text-sm font-semibold text-[#58A6FF]">about.ts</p>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Atharva Galwade</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#8B949E]">
          Computer Engineering student and aspiring Software Engineer focused on AI, Machine Learning, backend systems, frontend interfaces, and real-world product building.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#30363D] bg-[#21262D] px-4 py-2 text-sm font-semibold hover:border-[#58A6FF]"><FaGithub size={17}/> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#30363D] px-4 py-2 text-sm font-semibold hover:border-[#58A6FF]"><FaLinkedin size={17}/> LinkedIn</a>
          <button onClick={handleEmailClick} className="relative inline-flex items-center gap-2 rounded-lg border border-[#30363D] bg-[#58A6FF] px-4 py-2 text-sm font-bold text-[#0D1117]">
            {copied ? <Check size={17}/> : <Mail size={17}/>} {copied ? 'Copied!' : 'Email Me'}
          </button>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-lg border border-[#30363D] px-4 py-2 text-sm font-semibold hover:border-[#58A6FF]"><Download size={17}/> Resume</a>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .1 }} className="rounded-2xl border border-[#30363D] bg-[#161B22] p-4 shadow-2xl">
        <div className="mb-4 flex items-center gap-2 border-b border-[#30363D] pb-3 text-xs text-[#8B949E]"><span className="h-3 w-3 rounded-full bg-[#ff5f56]"/><span className="h-3 w-3 rounded-full bg-[#ffbd2e]"/><span className="h-3 w-3 rounded-full bg-[#27c93f]"/><span className="ml-2">atharva.config.ts</span></div>
        <pre className="overflow-auto text-sm leading-7 scrollbar-thin">
          {lines.map((line, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .08 }}>
              <span className="mr-4 select-none text-[#6e7681]">{String(i + 1).padStart(2, '0')}</span>
              {i === 0 && <><span className="code-key">{line[0]}</span> <span className="code-var">{line[1]}</span> <span>{line[2]}</span></>}
              {i > 0 && i < 7 && <><span className="code-prop">{line[0]}</span> <span className="code-str">{line[1]}</span><span>{line[2]}</span></>}
              {i === 7 && <span>{line[0]}</span>}
            </motion.div>
          ))}
        </pre>
      </motion.div>
    </section>
  );
}
