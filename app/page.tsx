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

      {/* WORK */}
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

            {/* ACWO */}
            <Link
              href="/work/acwo-inner-voice"
              className="group card-dark p-6 md:p-8 transition hover:border-white/20"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Brand Storytelling
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                #SunApneAndarKiAwaaz
              </h3>

              <p className="text-white/60 leading-7 mb-6">
                An emotional brand film built on introspection and identity.
              </p>

              <span className="text-sm text-white/80 group-hover:underline">
                View Case Study →
              </span>
            </Link>

            {/* PVR EXHIBITION */}
            <Link
              href="/work/pvr-exhibitions"
              className="group card-dark p-6 md:p-8 transition hover:border-white/20"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Exhibition Strategy
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                PVR Exhibition Expansion
              </h3>

              <p className="text-white/60 leading-7 mb-6">
                Built a structured exhibition system and expanded regional presence.
              </p>

              <span className="text-sm text-white/80 group-hover:underline">
                View Case Study →
              </span>
            </Link>

            {/* TRAFFIC */}
            <Link
              href="/work/pvr-traffic-growth"
              className="group card-dark p-6 md:p-8 transition hover:border-white/20"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Creative + Performance
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Targeted Traffic Growth
              </h3>

              <p className="text-white/60 leading-7 mb-6">
                Scaled relevant traffic using niche audience targeting and creative.
              </p>

              <span className="text-sm text-white/80 group-hover:underline">
                View Case Study →
              </span>
            </Link>

            {/* SMS */}
            <Link
              href="/work/acwo-sms-optimization"
              className="group card-dark p-6 md:p-8 transition hover:border-white/20"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Audience Insight
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                SMS Communication Optimization
              </h3>

              <p className="text-white/60 leading-7 mb-6">
                Improved response by aligning messaging with audience language.
              </p>

              <span className="text-sm text-white/80 group-hover:underline">
                View Case Study →
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-space border-t border-white/5">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              About
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Building clarity between brand, audience, and execution.
            </h2>

            <p className="text-white/70 leading-8">
              I work at the intersection of branding, marketing, and execution —
              focusing on ideas that are not just creative, but meaningful and scalable.
              My approach combines emotional storytelling, structured thinking, and
              practical execution to build campaigns that perform.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-space border-t border-white/5">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              Contact
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Let’s build something meaningful.
            </h2>

            <div className="space-y-4 text-white/70">
              <a
                href="mailto:yourmail@email.com"
                className="block hover:text-white"
              >
                yourmail@email.com
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="block hover:text-white"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
