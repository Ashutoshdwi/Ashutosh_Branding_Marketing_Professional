import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-16 border-b border-white/5">
        <div className="container-main">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Ashutosh Dwivedi
          </h1>

          <p className="mt-5 text-lg md:text-2xl text-white/70 max-w-2xl leading-8">
            Branding & Marketing Professional building campaigns that connect,
            perform, and scale.
          </p>
        </div>
      </section>

      {/* CASE STUDIES (SIMPLIFIED) */}
      <section className="section-space">
        <div className="container-main">

          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              Selected Work
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
              Work across branding, performance, and execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/work/acwo-inner-voice" className="group card-dark p-6 md:p-8 hover:border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                Brand Storytelling
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                #SunApneAndarKiAwaaz
              </h3>

              <p className="text-white/60 mb-5">
                Emotional storytelling rooted in introspection.
              </p>

              <span className="text-sm group-hover:underline">
                View Case Study →
              </span>
            </Link>

            <Link href="/work/pvr-exhibitions" className="group card-dark p-6 md:p-8 hover:border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                Exhibition Strategy
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                PVR Exhibition Expansion
              </h3>

              <p className="text-white/60 mb-5">
                Scaled presence through structured execution.
              </p>

              <span className="text-sm group-hover:underline">
                View Case Study →
              </span>
            </Link>

            <Link href="/work/pvr-traffic-growth" className="group card-dark p-6 md:p-8 hover:border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                Creative + Performance
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Targeted Traffic Growth
              </h3>

              <p className="text-white/60 mb-5">
                Grew relevant traffic using niche targeting.
              </p>

              <span className="text-sm group-hover:underline">
                View Case Study →
              </span>
            </Link>

            <Link href="/work/acwo-sms-optimization" className="group card-dark p-6 md:p-8 hover:border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                Audience Insight
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                SMS Communication Optimization
              </h3>

              <p className="text-white/60 mb-5">
                Improved response through language alignment.
              </p>

              <span className="text-sm group-hover:underline">
                View Case Study →
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* IMPACT SNAPSHOT */}
      <section className="section-space border-t border-white/5">
        <div className="container-main">

          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
            Impact Snapshot
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Work measured through attention, traction, and execution.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="card-dark p-6">
              <h3 className="text-2xl font-semibold mb-2">Millions</h3>
              <p className="text-white/60 text-sm">Organic campaign views</p>
            </div>

            <div className="card-dark p-6">
              <h3 className="text-2xl font-semibold mb-2">3–4K → 12–13K</h3>
              <p className="text-white/60 text-sm">Website traffic growth</p>
            </div>

            <div className="card-dark p-6">
              <h3 className="text-2xl font-semibold mb-2">Multi-city</h3>
              <p className="text-white/60 text-sm">Exhibition expansion</p>
            </div>

            <div className="card-dark p-6">
              <h3 className="text-2xl font-semibold mb-2">Brand + Film</h3>
              <p className="text-white/60 text-sm">Creative cross-functionality</p>
            </div>

          </div>
        </div>
      </section>

      {/* FILM SECTION */}
      <section className="section-space border-t border-white/5">
        <div className="container-main">

          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
            Film & Creative
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Beyond marketing — creative exposure
          </h2>

          <p className="text-white/70 max-w-2xl leading-8">
            Experience working around film environments, storytelling formats,
            and creative execution beyond traditional marketing roles.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-space border-t border-white/5">
        <div className="container-main">

          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
            Contact
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s build something meaningful.
          </h2>

          <div className="space-y-3 text-white/70">
            <a href="mailto:yourmail@email.com" className="block hover:text-white">
              yourmail@email.com
            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="block hover:text-white">
              linkedin.com/in/yourprofile
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
