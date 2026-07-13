import { Download, FileText } from 'lucide-react';
import { MdPreview } from 'react-icons/md';

export default function Resume() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold text-[#58A6FF]">resume.pdf</p>
      <h2 className="text-3xl font-bold">Resume</h2>
      <div className="mt-6 rounded-2xl border border-[#30363D] bg-[#161B22] p-8 text-center">
        <FileText className="mx-auto text-[#58A6FF]" size={54} />
        <h3 className="mt-4 text-xl font-bold"></h3>
        <p className="mx-auto mt-2 max-w-xl text-[#8B949E]"> <code className="text-[#58A6FF]"></code></p>
        <a href="/resume.pdf" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#58A6FF] px-5 py-2 font-bold text-[#0D1117]"><MdPreview size={18}/> Preview Resume</a>
      </div>
    </section>
  );  
}
