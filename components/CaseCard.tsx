import Link from "next/link";
import { CaseStudy } from "../data/caseStudies";

export default function CaseCard({ data }: { data: CaseStudy }) {
  return (
    <Link href={`/work/${data.slug}`} className="block group">
      <div className="card-dark p-6 md:p-7 h-full transition duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-2">
              {data.heroTag}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {data.title}
            </h3>
          </div>
          <span className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap">
            {data.company}
          </span>
        </div>

        <p className="text-white/70 leading-7 mb-6">{data.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-white/50">{data.category}</span>
          <span className="text-sm text-white group-hover:text-white/80">
            View Case Study →
          </span>
        </div>
      </div>
    </Link>
  );
}