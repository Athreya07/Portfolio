import { motion } from 'framer-motion';
import { Code2, GitFork, Star, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold text-[#58A6FF]">projects.tsx</p>
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <p className="mt-3 max-w-2xl text-[#8B949E]">GitHub-style repository cards for the projects recruiters should notice first.</p>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article key={project.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .06 }} className="group rounded-2xl border border-[#30363D] bg-[#161B22] p-5 transition hover:-translate-y-1 hover:border-[#58A6FF]/70 hover:shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-[#58A6FF]"><Code2 size={20} /> {project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#8B949E]">{project.description}</p>
              </div>
              <a href={project.github} target="_blank" aria-label={`Open ${project.name}`} className="rounded-lg border border-[#30363D] p-2 text-[#8B949E] group-hover:border-[#58A6FF] group-hover:text-[#58A6FF]"><ExternalLink size={17}/></a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">{project.techStack.map((tech) => <span key={tech} className="rounded-full border border-[#30363D] bg-[#21262D] px-3 py-1 text-xs text-[#F0F6FC]">{tech}</span>)}</div>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-[#8B949E]">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#58A6FF]" />{project.language}</span>
              <span className="flex items-center gap-1"><Star size={14} />{project.stars}</span>
              <span className="flex items-center gap-1"><GitFork size={14} />{project.forks}</span>
              <span>{project.updated}</span>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div><p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#3FB950]">Features</p>{project.features.slice(0,3).map(f => <p key={f} className="text-sm text-[#8B949E]">✓ {f}</p>)}</div>
              <div><p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#D29922]">Challenges</p>{project.challenges.slice(0,3).map(c => <p key={c} className="text-sm text-[#8B949E]">• {c}</p>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
