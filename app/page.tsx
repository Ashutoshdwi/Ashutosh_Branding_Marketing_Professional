"use client";

import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import CaseCard from "../components/CaseCard";
import StatCard from "../components/StatCard";
import { caseStudies } from "../data/caseStudies";

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center grid-bg">
        <div className="hero-glow top-[18%] left-[10%]" />
        <div className="container-main pt-28 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/45 mb-6">
              Branding & Marketing Professional
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight">
              Ashutosh <span className="gradient-text">Dwivedi</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-2xl text-white/70 leading-8">
              I build campaigns that connect, perform, and scale — across brand
              storytelling, exhibitions, content, digital growth, and creative
              execution.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="card-dark p-5">
                <div className="text-2xl font-bold">Brand</div>
                <div className="text-white/55 mt-2">Strategy & storytelling</div>
              </div>
              <div className="card-dark p-5">
                <div className="text-2xl font-bold">Execution</div>
                <div className="text-white/55 mt-2">Campaigns, shoots & events</div>
              </div>
              <div className="card-dark p-5">
                <div className="text-2xl font-bold">Growth</div>
                <div className="text-white/55 mt-2">Audience, traffic & content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-space">
        <div className="container-main">
          <SectionHeading
            eyebrow="Selected Work"
            title="Case studies shaped by strategy, storytelling, and execution."
            description="A mix of branding, exhibitions, digital targeting, audience insight, and campaign thinking."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((item) => (
              <CaseCard key={item.slug} data={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-space">
        <div className="container-main">
          <SectionHeading
            eyebrow="About"
            title="A marketer who thinks like a storyteller and executes like a project owner."
            description="My work has lived across brand campaigns, ad shoots, exhibition planning, content direction, and audience-focused communication."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card-dark p-7 md:p-9">
              <h3 className="text-2xl font-bold mb-5">What I bring</h3>
              <div className="space-y-4 text-white/70 leading-7">
                <p>
                  I enjoy building communication that is not just visually good,
                  but strategically sharp and context-aware.
                </p>
                <p>
                  My experience spans brand storytelling, BTL execution,
                  exhibition expansion, targeted audience growth, campaign
                  writing, and cross-functional coordination.
                </p>
                <p>
                  I am especially drawn to work that combines insight, narrative,
                  and real-world execution.
                </p>
              </div>
            </div>

            <div className="card-dark p-7 md:p-9">
              <h3 className="text-2xl font-bold mb-5">Core strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/75">
                <div className="soft-border rounded-2xl p-4">Brand Strategy</div>
                <div className="soft-border rounded-2xl p-4">
                  Content & Creative Direction
                </div>
                <div className="soft-border rounded-2xl p-4">
                  Exhibition & Vendor Management
                </div>
                <div className="soft-border rounded-2xl p-4">
                  Campaign Writing
                </div>
                <div className="soft-border rounded-2xl p-4">
                  Audience Insight
                </div>
                <div className="soft-border rounded-2xl p-4">
                  Digital Growth Thinking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <SectionHeading
            eyebrow="Impact Snapshot"
            title="Work measured through attention, traction, and better execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard value="Millions" label="Organic campaign views" />
            <StatCard value="3–4K → 12–13K" label="Website traffic growth" />
            <StatCard value="Multi-city" label="Expanded exhibition presence" />
            <StatCard value="Brand + Film" label="Creative cross-functionality" />
          </div>
        </div>
      </section>

      {/* PROOF OF WORK / SNAPSHOTS */}
      <section className="section-space border-t border-white/5">
        <div className="container-main">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              Proof of Work
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
              Snapshots from campaigns, exhibitions, and creative execution.
            </h2>

            <p className="mt-4 text-white/65 max-w-2xl leading-8">
              A closer look at the work through actual visuals, execution moments,
              and campaign proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-dark overflow-hidden">
              <img
                src="/snapshots/campaign.jpg"
                alt="Campaign visual"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Campaign Storytelling</h3>
                <p className="text-white/60 text-sm mt-2 leading-6">
                  Visual proof from a campaign built around emotion, introspection,
                  and organic audience resonance.
                </p>
              </div>
            </div>

            <div className="card-dark overflow-hidden">
              <img
                src="/snapshots/traffic.jpg"
                alt="Traffic growth visual"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Traffic Growth</h3>
                <p className="text-white/60 text-sm mt-2 leading-6">
                  Audience-focused digital execution that helped grow website traffic
                  from 3–4K to 12–13K.
                </p>
              </div>
            </div>

            <div className="card-dark overflow-hidden">
              <img
                src="/snapshots/expo.jpg"
                alt="Exhibition visual"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Exhibition Expansion</h3>
                <p className="text-white/60 text-sm mt-2 leading-6">
                  On-ground presence, execution quality, and market exploration
                  through a wider exhibition footprint.
                </p>
              </div>
            </div>

            <div className="card-dark overflow-hidden">
              <img
                src="/snapshots/film.jpg"
                alt="Film visual"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">On-Set Exposure</h3>
                <p className="text-white/60 text-sm mt-2 leading-6">
                  Practical exposure to ad film environments, creative collaboration,
                  and execution on set.
                </p>
              </div>
            </div>

            <div className="card-dark overflow-hidden">
              <img
                src="/snapshots/social.jpg"
                alt="Social proof visual"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Content & Social Thinking</h3>
                <p className="text-white/60 text-sm mt-2 leading-6">
                  Understanding what works creatively and what connects with the
                  audience across digital content formats.
                </p>
              </div>
            </div>

            <div className="card-dark overflow-hidden">
              <img
                src="/snapshots/branding.jpg"
                alt="Branding visual"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Brand Presence</h3>
                <p className="text-white/60 text-sm mt-2 leading-6">
                  Physical brand execution across stalls, layouts, displays, and
                  coordinated visual presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="film" className="section-space">
        <div className="container-main">
          <SectionHeading
            eyebrow="Film & Creative"
            title="Beyond marketing — creative writing, ad-shoot exposure, and production understanding."
            description="A strong part of my work sits at the intersection of brand communication and screen storytelling."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-dark p-6">
              <h3 className="text-xl font-bold mb-3">Screenwriting</h3>
              <p className="text-white/65 leading-7">
                Worked on launch campaign ads focused on establishing brand tone
                while communicating product features clearly.
              </p>
            </div>

            <div className="card-dark p-6">
              <h3 className="text-xl font-bold mb-3">On-set Assistance</h3>
              <p className="text-white/65 leading-7">
                Assisted directors on ad film sets and developed practical
                understanding of shoot flow, coordination, and execution.
              </p>
            </div>

            <div className="card-dark p-6">
              <h3 className="text-xl font-bold mb-3">Pre & Post Knowledge</h3>
              <p className="text-white/65 leading-7">
                Familiar with scripting, prep, shot thinking, and how edits shape
                the final communication outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space">
        <div className="container-main">
          <div className="card-dark p-7 md:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something meaningful."
              description="Open to branding, marketing, content, campaign, and creative opportunities."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white/75">
              <div className="soft-border rounded-2xl p-5">
                <div className="text-white/45 text-sm mb-2">Email</div>
                <div className="font-semibold">drashu211@gmail.com</div>
              </div>

              <div className="soft-border rounded-2xl p-5">
                <div className="text-white/45 text-sm mb-2">Mobile</div>
                <div className="font-semibold">+91 9137421600</div>
              </div>

              <div className="soft-border rounded-2xl p-5">
                <div className="text-white/45 text-sm mb-2">Location</div>
                <div className="font-semibold">Mumbai, India.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
