import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, Code2, Rocket, CheckCircle2, Sparkles } from 'lucide-react';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  GraduationCap, BookOpen, School, Code2, Rocket,
};

type Item = {
  title: string;
  subtitle?: string;
  meta: string;
  body?: string;
  icon?: string;
  score?: string;
  current?: boolean;
  highlights?: string[];
};

export default function Timeline({ title, items }: { title: string; items: Item[] }) {
  const isEducation = title.includes('education');
  return (
    <section>
      <p className="mb-3 text-sm font-semibold text-[#58A6FF]">{title}</p>
      <h2 className="flex items-center gap-2 text-3xl font-bold">
        
        {isEducation ? 'Education' : 'Experience'}
      </h2>
      <p className="mt-3 max-w-2xl text-[#8B949E]">
        {isEducation ? 'The path that shaped my foundation in Computer Science.' : 'What I have been building and where I am headed next.'}
      </p>

      <div className="relative mt-10 pl-12 md:pl-14">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#58A6FF] via-[#A371F7] to-transparent md:left-[23px]" />

        <div className="space-y-8">
          {items.map((item, i) => {
            const Icon = (item.icon && iconMap[item.icon]) || (isEducation ? GraduationCap : Code2);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * .1, duration: .4 }}
                className="relative"
              >
                <span className="absolute -left-12 top-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0D1117] bg-gradient-to-br from-[#58A6FF] to-[#A371F7] shadow-lg md:-left-14 md:h-10 md:w-10">
                  {item.current && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#58A6FF] opacity-40" />}
                  <Icon size={17} className="relative text-[#0D1117]" />
                </span>

                <motion.div
                  whileHover={{ y: -3, borderColor: '#58A6FF70' }}
                  className="rounded-2xl border border-[#30363D] bg-[#161B22] p-5 transition-shadow hover:shadow-[0_10px_30px_-12px_rgba(88,166,255,.35)]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[#30363D] bg-[#0D1117] px-3 py-1 text-xs font-semibold text-[#8B949E]">{item.meta}</span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#3FB950]/40 bg-[#3FB950]/10 px-3 py-1 text-xs font-semibold text-[#3FB950]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3FB950]" /> Current
                      </span>
                    )}
                    {item.score && (
                      <span className="rounded-full border border-[#D29922]/40 bg-[#D29922]/10 px-3 py-1 text-xs font-semibold text-[#D29922]">{item.score}</span>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  {item.subtitle && <p className="mt-1 text-[#F0F6FC]/90">{item.subtitle}</p>}
                  {item.body && <p className="mt-3 leading-7 text-[#8B949E]">{item.body}</p>}

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-[#30363D] pt-4">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#8B949E]">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#3FB950]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
