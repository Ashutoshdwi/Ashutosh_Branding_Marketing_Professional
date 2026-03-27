import Navbar from "../../../components/Navbar";
import { caseStudies } from "../../../data/caseStudies";
import VideoEmbed from "../../../components/VideoEmbed";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = caseStudies.find((item) => item.slug === params.slug);

  if (!data) return notFound();

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-16 border-b border-white/5">
        <div className="container-main">
          <Link
            href="/"
            className="inline-block text-sm text-white/50 hover:text-white mb-8"
          >
            ← Back to Home
          </Link>

          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45 mb-4">
              {data.heroTag}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {data.title}
            </h1>

            <p className="mt-5 text-lg md:text-2xl text-white/70 max-w-3xl leading-8">
              {data.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
                {data.company}
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
                {data.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card-dark p-6">
              <div className="text-white/45 text-sm mb-2">Role</div>
              <div className="text-xl font-semibold">{data.overview.role}</div>
            </div>
            <div className="card-dark p-6">
              <div className="text-white/45 text-sm mb-2">Duration</div>
              <div className="text-xl font-semibold">{data.overview.duration}</div>
            </div>
            <div className="card-dark p-6">
              <div className="text-white/45 text-sm mb-2">Objective</div>
              <div className="text-base text-white/80 leading-7">
                {data.overview.objective}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <div className="space-y-6">
              <div className="card-dark p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Problem</h2>
                <p className="text-white/70 leading-8">{data.problem}</p>
              </div>

              <div className="card-dark p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Insight</h2>
                <p className="text-white/70 leading-8">{data.insight}</p>
              </div>

              <div className="card-dark p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Strategy</h2>
                <div className="space-y-3">
                  {data.strategy.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/8 p-4 text-white/70 leading-7"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-dark p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Execution</h2>
                <div className="space-y-3">
                  {data.execution.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/8 p-4 text-white/70 leading-7"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-dark p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Results</h2>
                <div className="space-y-3">
                  {data.results.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/8 p-4 text-white/70 leading-7"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-dark p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Learning</h2>
                <p className="text-white/70 leading-8">{data.learning}</p>
              </div>
            </div>

            <div className="space-y-6">
              {data.metrics && data.metrics.length > 0 && (
                <div className="card-dark p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-5">Highlights</h3>
                  <div className="space-y-4">
                    {data.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="soft-border rounded-2xl p-4 flex items-center justify-between gap-4"
                      >
                        <span className="text-white/55">{metric.label}</span>
                        <span className="font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.media && data.media.length > 0 && (
                <div className="card-dark p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-5">Media</h3>
                  <div className="space-y-5">
                    {data.media.map((item, index) => {
                      if (item.type === "youtube") {
                        return (
                          <VideoEmbed
                            key={index}
                            url={item.src}
                            title={item.title}
                          />
                        );
                      }

                      return (
                        <div
                          key={index}
                          className="rounded-2xl overflow-hidden border border-white/10"
                        >
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-auto block"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}