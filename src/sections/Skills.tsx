import { motion } from 'framer-motion';
import { Database, Code2 } from 'lucide-react';
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript,
  SiReact, SiHtml5, SiCss, SiTailwindcss,
  SiFastapi, SiFlask, SiNodedotjs,
  SiMysql, SiFirebase,
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiGit, SiGithub, SiPostman, SiDocker,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { skills } from '../data/portfolio';

type TechMeta = { Icon: IconType; color: string; invert?: boolean };

// Brand icon + official brand color for each skill. `invert: true` = logo is
// too dark for our dark background, so it's rendered in light gray instead.
const techMeta: Record<string, TechMeta> = {
  Python: { Icon: SiPython, color: '#3776AB' },
  'C++': { Icon: SiCplusplus, color: '#00599C' },
  SQL: { Icon: Database as unknown as IconType, color: '#4479A1' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },

  React: { Icon: SiReact, color: '#61DAFB' },
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#1572B6' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },

  FastAPI: { Icon: SiFastapi, color: '#009688' },
  Flask: { Icon: SiFlask, color: '#E7E7E7', invert: true },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },

  MySQL: { Icon: SiMysql, color: '#4479A1' },
  Firebase: { Icon: SiFirebase, color: '#FFCA28' },

  TensorFlow: { Icon: SiTensorflow, color: '#FF6F00' },
  'Scikit-learn': { Icon: SiScikitlearn, color: '#F7931E' },
  Pandas: { Icon: SiPandas, color: '#E7E7E7', invert: true },
  NumPy: { Icon: SiNumpy, color: '#4DABCF' },

  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub, color: '#E7E7E7', invert: true },
  'VS Code': { Icon: Code2 as unknown as IconType, color: '#007ACC' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
};

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section>
      <p className="mb-3 text-sm font-semibold text-[#58A6FF]">skills.json</p>
      <h2 className="text-3xl font-bold md:text-4xl">Technical Skills</h2>
      <p className="mt-3 max-w-2xl text-[#8B949E]">
        A quick tour of the languages, frameworks, and tools I build with day to day.
      </p>

      <div className="mt-8 space-y-4">
        {categories.map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * .08, duration: .4 }}
            className="flex flex-col gap-4 rounded-2xl border border-[#30363D] bg-[#0D1117]/60 p-5 transition-colors hover:border-[#58A6FF]/40 md:flex-row md:items-center"
          >
            {/* Category label */}
            <div className="flex shrink-0 items-center md:w-44">
              <p className="text-lg font-bold text-[#F0F6FC]">{category}</p>
            </div>

            {/* Divider */}
            <div className="hidden h-12 w-px bg-[#30363D] md:block" />

            {/* Logos row */}
            <div className="flex flex-1 flex-wrap items-center gap-x-7 gap-y-4">
              {items.map((item, idx) => {
                const meta = techMeta[item];
                const Icon = meta?.Icon;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * .08 + idx * .04 }}
                    whileHover={{ y: -3, scale: 1.06 }}
                    className="flex w-16 flex-col items-center gap-1.5 text-center"
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#30363D] bg-[#161B22] shadow-sm transition-shadow hover:shadow-[0_6px_18px_-6px_var(--glow)]"
                      style={{ ['--glow' as string]: meta ? `${meta.color}99` : '#58A6FF99' }}
                    >
                      {Icon ? (
                        <Icon size={22} color={meta?.invert ? '#C9D1D9' : meta?.color} />
                      ) : (
                        <span className="text-lg">🔸</span>
                      )}
                    </div>
                    <span className="text-[11px] leading-tight text-[#8B949E]">{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
