import { useState, useEffect } from "react";
import { ArrowLeft, MapPin, Mail, Phone, ArrowDown, ExternalLink, ChevronRight, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

// ── Images ──────────────────────────────────────────────────────────────────
import imgProfile from "@/imports/Home/3060f798acef1d98543f5a21d315eafac5ed53a2.png";
import imgDeloitte from "@/imports/Home/af5aae2b8260e3deacdbf9fbde48631de7af06d8.png";
import imgUniversity from "@/imports/Home/f1f2dce188a1f2702f5f7215ffe26184f27356db.png";
import imgCodeCamp from "@/imports/Home/b063f0e086ceed44504d530d9bd12a753e99a47f.png";
import imgStoneSoup from "@/imports/Home/ec7724c9479dfc16cc2b404db1f1dcabb72f3a63.png";
import imgStoreStuff from "@/imports/Home/4df7fafd06b5f218d5141bc2069cd6be6d69f34f.png";
import imgFarmingCard from "@/imports/Home/24bc139fdd6f31470b3040d57e66589f245e69e4.png";
import imgPortrait from "@/imports/Home/f028c5c11690422195b96d6578bfe7d05a8eaa88.png";
import imgPortraitOverlay from "@/imports/Home/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgPlaceholder from "@/imports/Home/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgPisces from "@/imports/Cv/2cef0f83c89a90dd86935309216debf93855bb44.png";
// Project-1 images
import imgJourneyMap from "@/imports/Project-1/95964eeaf0c20ee8089f74ab0aa6bd4496474ce3.png";
import imgSitemap from "@/imports/Project-1/4d97aeb35503f151d5f84efd710daa8a5f515e68.png";
import imgDashboardIter1 from "@/imports/Project-1/5253554b9a9898393bfcde94e3ec73ee57659487.png";
import imgDashboardIter2 from "@/imports/Project-1/d28160b394b896b73928c5a4fdde1fbfed8f155b.png";
import imgDashboardFinal from "@/imports/Project-1/18ef73dda2fdf019b90a15b3ba52878868feefa2.png";

type Page = "home" | "cv" | "project-farming";

// ── Tokens ───────────────────────────────────────────────────────────────────
const TEAL = "#b9ccd1";
const CREAM = "#f9fafb";
const sora: React.CSSProperties = { fontFamily: "'Sora', sans-serif", fontWeight: 400 };
const soraBold: React.CSSProperties = { fontFamily: "'Sora', sans-serif", fontWeight: 700 };
const josefin: React.CSSProperties = { fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700 };
const jost: React.CSSProperties = { fontFamily: "'Jost', sans-serif", fontWeight: 300 };

// ── Pill ─────────────────────────────────────────────────────────────────────
function Pill({ label, outlined = false }: { label: string; outlined?: boolean }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs"
      style={{ ...sora, background: outlined ? "white" : "rgba(0,0,0,0.05)", border: outlined ? "1px solid rgba(0,0,0,0.12)" : "none", color: "#1c1b1f", boxShadow: outlined ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
      {label}
    </span>
  );
}

function MethodTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs opacity-80"
      style={{ background: "#f5f5f5", fontFamily: "'Inter', sans-serif", color: "#1c1b1f", letterSpacing: "-0.01em" }}>
      {label}
    </span>
  );
}

// ── Step progress bar ─────────────────────────────────────────────────────────
function StepProgress({ active }: { active: 1 | 2 | 3 }) {
  const pct = active === 1 ? "25%" : active === 2 ? "64%" : "100%";
  return (
    <div className="bg-white rounded-3xl px-4 py-5 flex flex-col gap-3 shrink-0 w-56"
      style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.12)" }}>
      <div className="relative h-5 rounded-full" style={{ background: "#d9d9d9" }}>
        <div className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: pct, background: "linear-gradient(to right, #b2dde8, #bdb8db)" }} />
      </div>
      <div className="flex justify-between px-1">
        {[1, 2, 3].map((n) => (
          <span key={n} className="text-xs font-bold"
            style={{ ...soraBold, color: n <= active ? "#000" : "#908e8e" }}>
            Step {n}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Annotation item ──────────────────────────────────────────────────────────
type AnnotationType = "warning" | "success" | "error";
function Annotation({ type, text }: { type: AnnotationType; text: string }) {
  const icon =
    type === "warning" ? <AlertTriangle size={18} className="shrink-0 mt-0.5" style={{ color: "#C95000" }} /> :
    type === "success" ? <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#008A07" }} /> :
    <XCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#B81237" }} />;
  return (
    <div className="flex gap-3 items-start">
      {icon}
      <p className="text-sm text-black/70 leading-relaxed" style={sora}>{text}</p>
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const isInner = page === "cv" || page === "project-farming";
  return (
    <nav className="sticky top-0 z-50 w-full transition-shadow duration-300"
      style={{ background: TEAL, boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "none" }}>
      <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-14 gap-4">
          {isInner ? (
            <button onClick={() => setPage("home")} className="flex items-center gap-1.5 transition-opacity hover:opacity-60 text-sm" style={{ ...jost, color: "#1c1b1f" }}>
              <ArrowLeft size={15} strokeWidth={1.5} /> Return to projects
            </button>
          ) : (
            <button onClick={() => setPage("home")} className="text-xs tracking-widest uppercase opacity-50 hover:opacity-90 transition-opacity" style={{ ...josefin, color: "#1c1b1f" }}>
              Lili Smyth
            </button>
          )}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-5 text-sm" style={{ ...sora, color: "#1c1b1f" }}>
              <button onClick={() => setPage("cv")} className="opacity-60 hover:opacity-100 transition-opacity" style={{ textDecoration: page === "cv" ? "underline" : "none" }}>CV</button>
              <button onClick={() => setPage("home")} className="opacity-60 hover:opacity-100 transition-opacity" style={{ textDecoration: page === "home" ? "underline" : "none" }}>My work</button>
            </div>
            <div className="flex items-center gap-2.5">
              <img src={imgProfile} alt="Lili Smyth" className="w-7 h-7 rounded object-cover" style={{ border: "2px solid rgba(0,0,0,0.15)" }} />
              <a href="mailto:lili.paris@icloud.com" className="opacity-50 hover:opacity-100 transition-opacity" aria-label="Email"><Mail size={17} strokeWidth={1.5} color="#1c1b1f" /></a>
              <a href="tel:+64288532788" className="opacity-50 hover:opacity-100 transition-opacity" aria-label="Phone"><Phone size={17} strokeWidth={1.5} color="#1c1b1f" /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ── Contact footer ────────────────────────────────────────────────────────────
function ContactFooter() {
  return (
    <section style={{ background: TEAL }}>
      <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black font-normal" style={sora}>Work with me</h2>
          <p className="text-base text-black/60 max-w-sm" style={sora}>Open to product design roles — in-house or consultancy.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-2 flex-wrap">
            <a href="https://linkedin.com/in/lilismyth" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:opacity-60 transition-opacity">
              <img src={imgProfile} alt="" className="w-7 h-7 rounded object-cover" style={{ border: "2px solid rgba(0,0,0,0.2)" }} />
              <span className="text-base text-black" style={sora}>linkedin.com/lilismyth</span>
            </a>
            <span className="hidden sm:block text-black/25">·</span>
            <a href="mailto:lili.paris@icloud.com" className="flex items-center gap-2.5 hover:opacity-60 transition-opacity">
              <Mail size={20} strokeWidth={1.5} color="#1c1b1f" />
              <span className="text-base text-black" style={sora}>lili.paris@icloud.com</span>
            </a>
            <span className="hidden sm:block text-black/25">·</span>
            <a href="tel:+64288532788" className="flex items-center gap-2.5 hover:opacity-60 transition-opacity">
              <Phone size={20} strokeWidth={1.5} color="#1c1b1f" />
              <span className="text-base text-black" style={sora}>+64 28 8532 7884</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-8">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <span className="text-xs tracking-widest uppercase opacity-40" style={{ ...josefin, fontSize: 11 }}>Lili Smyth · Product Designer</span>
          <div className="flex items-center gap-8 text-sm" style={sora}>
            <button onClick={() => setPage("cv")} className="text-black/40 hover:text-black transition-colors underline underline-offset-4">CV</button>
            <button onClick={() => setPage("home")} className="text-black/40 hover:text-black transition-colors underline underline-offset-4">My work</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Project card ──────────────────────────────────────────────────────────────
function ProjectCard({ title, subtitle, tags, image, onClick }: { title: string; subtitle: string; tags: string[]; image: string; onClick: () => void }) {
  return (
    <article role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="group cursor-pointer rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#f4f4f4", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 10px 32px rgba(0,0,0,0.12)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"; }}>
      <div className="relative overflow-hidden" style={{ height: "clamp(160px, 22vw, 280px)" }}>
        <div className="absolute top-0 inset-x-0 bg-white h-6 rounded-t-2xl" style={{ border: "1px solid #f2f2f7", borderBottom: "none" }} />
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" style={{ top: 24 }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center" style={{ background: "rgba(185,204,209,0.35)" }}>
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm text-black bg-white" style={sora}>View case study <ChevronRight size={13} /></div>
        </div>
      </div>
      <div className="bg-white px-4 py-5 flex flex-col gap-2.5 rounded-b-2xl">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-black leading-tight" style={josefin}>{title}</p>
            <p className="text-sm text-black/50 mt-0.5" style={jost}>{subtitle}</p>
          </div>
          <ExternalLink size={13} className="shrink-0 mt-0.5 text-black/25 group-hover:text-black/50 transition-colors" />
        </div>
        <div className="flex flex-wrap gap-1.5">{tags.map((t) => <Pill key={t} label={t} />)}</div>
      </div>
    </article>
  );
}

// ── Section label ─────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-black/40 uppercase tracking-widest" style={josefin}>{children}</p>;
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-sm text-black/40 tracking-wide" style={sora}>Product designer · Crafting meaningful digital experiences</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-black font-normal" style={sora}>
              {`I'm Lili Smyth,`}<br />
              <span className="text-black/40">a product designer passionate about</span><br />
              creating intuitive, engaging and accessible digital products.
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center h-11 px-6 rounded-lg text-sm text-white hover:opacity-80 transition-opacity"
              style={{ background: "#676666", ...sora }}>View my work</button>
            <a href="mailto:lili.paris@icloud.com"
              className="inline-flex items-center h-11 px-6 rounded-lg text-sm text-black hover:opacity-60 transition-opacity border border-black"
              style={{ ...sora }}>Get in touch</a>
          </div>
          <div className="pt-2"><ArrowDown size={20} strokeWidth={1.5} className="animate-bounce text-black/30" /></div>
        </div>
      </section>

      <section style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex flex-col gap-6 flex-1 min-w-0">
              <div className="flex flex-col gap-3">
                <SectionLabel>About me</SectionLabel>
                <h2 className="text-2xl md:text-3xl text-black font-normal leading-snug" style={sora}>{`I'm Lili Smyth,`}</h2>
                <p className="text-base md:text-lg text-black leading-relaxed" style={sora}>a product designer passionate about creating intuitive, engaging and accessible digital products solving real user problems through design.</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-black/40" style={sora}>Working with companies such as</p>
                <div className="flex flex-wrap gap-2">
                  {[{ src: imgDeloitte, alt: "Deloitte Digital", maxW: 100 }, { src: imgUniversity, alt: "University of Sydney", maxW: 130 }, { src: imgCodeCamp, alt: "CodeCamp", maxW: 240 }, { src: imgStoneSoup, alt: "Stone & Chalk", maxW: 44 }, { src: imgStoreStuff, alt: "StoreStuff", maxW: 64 }].map(({ src, alt, maxW }) => (
                    <div key={alt} className="bg-white rounded-xl p-3 flex items-center justify-center" style={{ minHeight: 52 }}>
                      <img src={src} alt={alt} className="h-8 object-contain" style={{ maxWidth: maxW }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shrink-0" style={{ width: "clamp(220px, 32vw, 360px)", aspectRatio: "3/4" }}>
              <img src={imgPortrait} alt="Lili Smyth" className="absolute inset-0 w-full h-full object-cover" />
              <img src={imgPortraitOverlay} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
          <div className="flex flex-col gap-8">
            <div><h2 className="text-xl text-black font-normal" style={sora}>Work</h2><p className="text-sm text-black/40 mt-1" style={sora}>Selected case studies</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="Farming disaster relief support tools" subtitle="Custom tool library and dashboard" tags={["Government", "Agriculture", "Detailed design", "User testing"]} image={imgFarmingCard} onClick={() => setPage("project-farming")} />
              <ProjectCard title="My portfolio" subtitle="The end-to-end process of showcasing my work." tags={["User research"]} image={imgPlaceholder} onClick={() => {}} />
              <ProjectCard title="My portfolio" subtitle="The end-to-end process of showcasing my work." tags={["User research"]} image={imgPlaceholder} onClick={() => {}} />
              <ProjectCard title="My portfolio" subtitle="The end-to-end process of showcasing my work." tags={["User research"]} image={imgPlaceholder} onClick={() => {}} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
          <div className="flex flex-col gap-8">
            <div><h2 className="text-xl text-black font-normal" style={sora}>Skills &amp; expertise</h2><p className="text-sm text-black/40 mt-1" style={sora}>What I bring to a team</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[{ title: "Information architecture", desc: "Structuring content and navigation for clarity and flow." }, { title: "Dev handover", desc: "Precise specs and collaborative design-to-dev process." }, { title: "User testing", desc: "Facilitated sessions, synthesis, and actionable recommendations." }, { title: "BA liaison", desc: "Bridging design intent and business requirements." }, { title: "Stakeholder engagement", desc: "Workshops, presentations, and co-design facilitation." }, { title: "Sprint planning", desc: "Agile ceremonies and backlog prioritisation." }, { title: "Platform design", desc: "Scalable systems and design consistency at scale." }].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-5 flex flex-col gap-3" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                  <div className="w-8 h-8 rounded-md" style={{ background: `linear-gradient(135deg, ${TEAL}, #e0eef1)` }} />
                  <p className="text-sm font-bold text-black" style={soraBold}>{title}</p>
                  <p className="text-sm text-black/50 leading-relaxed" style={sora}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
          <div className="flex flex-col gap-8">
            <div><h2 className="text-xl text-black font-normal" style={sora}>Testimonials</h2><p className="text-sm text-black/40 mt-1" style={sora}>What people say</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{ name: "Sarah M.", role: "Senior Manager, Deloitte Digital" }, { name: "James L.", role: "Product Lead, Gov. Department" }, { name: "Priya K.", role: "UX Director" }, { name: "Ben H.", role: "Engineering Lead" }, { name: "Anna T.", role: "Project Manager" }, { name: "Chris W.", role: "Stakeholder, Primary Industries" }].map(({ name, role }) => (
                <div key={name} className="bg-white rounded-xl px-4 py-5 flex flex-col gap-3 border border-black/6" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div><p className="text-sm text-black" style={sora}>{name}</p><p className="text-xs text-black/40 mt-0.5" style={sora}>{role}</p></div>
                  <p className="text-sm text-black/55 leading-relaxed italic" style={sora}>"Lili brings a rare combination of strategic clarity and refined craft to every project. A trusted collaborator."</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}

// ── CV PAGE ───────────────────────────────────────────────────────────────────
function CvPage() {
  return (
    <main>
      <section style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-24 flex flex-col gap-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none text-black font-normal" style={sora}>Lili Smyth</h1>
          <p className="text-xl md:text-2xl text-black/60 font-normal" style={sora}>Product designer</p>
          <div className="flex items-center gap-2 text-black/40 mt-1" style={sora}><MapPin size={16} strokeWidth={1.5} /><span className="text-base">Wellington, New Zealand</span></div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14 flex flex-col gap-5">
          <SectionLabel>About me</SectionLabel>
          <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl" style={sora}>{`I'm a UX Designer at Deloitte Digital, passionate about creating intuitive, human-centred solutions that make an impact. With a strong background in UX/UI, web development, and digital strategy, I enjoy tackling complex challenges across diverse industries. Beyond consulting, I'm also part of the teaching team at the University of Sydney, where I share my knowledge with the next generation of designers. I thrive in collaborative environments, combining technical expertise with a strategic mindset to deliver accessible, scalable, and engaging experiences.`}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {[{ icon: <img src={imgProfile} alt="" className="w-5 h-5 rounded object-cover" />, text: "linkedin.com/lilismyth" }, { icon: <Mail size={17} strokeWidth={1.5} />, text: "lili.paris@icloud.com" }, { icon: <Phone size={17} strokeWidth={1.5} />, text: "+64 28 8532 7884" }].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-black/60 text-sm" style={sora}>{icon}<span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-16">
          <SectionLabel>My portfolio</SectionLabel>
          <div className="flex flex-col gap-5 mt-8">
            {[{ logo: imgDeloitte, logoW: 96, company: "Deloitte Digital", period: "Feb 2023 – present", role: "Product design consultant", tags: ["UX design", "Product design", "Strategy"], desc: "Working across a wide spectrum of clients, industries and product types. I create, explore, validate and deliver design solutions that meet user needs, bringing strong accessibility knowledge and web standards to every engagement." },
              { logo: imgStoreStuff, logoW: 60, company: "StoreStuff", period: "January 2019 – January 2021 · Expert", role: "UX Designer", tags: ["UX design", "Fine design", "Strategy"], desc: "Cross-functional UX designer driving business value while balancing user needs and stakeholder requirements." },
              { logo: imgUniversity, logoW: 128, company: "University of Sydney", period: "Feb 2022 – August 2022 · Casual", role: "Academic tutor", tags: ["Teaching", "Mentoring", "Testing"], desc: "Web design and development tutor within the Design Computing Teaching Team." },
              { logo: imgPisces, logoW: 90, company: "Pisces", period: "November 2020 – February 2021 · Domestic", role: "Web designer", tags: ["Web design", "Fine design", "Branding"], desc: "Designed and developed end-to-end websites for small business owners, translating briefs into polished, brand-consistent digital experiences." },
              { logo: imgStoneSoup, logoW: 44, company: "Stone & Chalk", period: "September 2021 – September 2022 · Domestic", role: "Web designer", tags: ["Web design", "Join design", "Branding"], desc: "a product designer passionate about creating intuitive, engaging and accessible digital products solving real user problems through design." },
              { logo: imgCodeCamp, logoW: 200, company: "CodeCamp", period: "September 2021 – January 2023 · 5 years", role: "Camp teacher", tags: ["Teaching", "Learning"], desc: "Had contact classes of primary school children in STEM classes." }
            ].map(({ logo, logoW, company, period, role, tags, desc }) => (
              <div key={company} className="bg-white rounded-xl p-5 flex flex-col gap-4" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                  <div className="h-10 flex items-center shrink-0"><img src={logo} alt={company} className="h-8 object-contain" style={{ maxWidth: logoW }} /></div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="text-xs text-black/40" style={jost}>{period}</p>
                    <p className="text-sm font-bold text-black" style={soraBold}>{role}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">{tags.map((t) => <Pill key={t} label={t} />)}</div>
                  </div>
                </div>
                <p className="text-sm text-black/55 leading-relaxed" style={sora}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}

// ── PROJECT PAGE ──────────────────────────────────────────────────────────────
function FarmingProjectPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main>
      {/* ── Hero ── */}
      <section style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 pt-10 pb-0 flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-black font-normal max-w-4xl" style={sora}>
            Farming disaster relief support tools
          </h1>
          <div className="flex items-center gap-3 flex-wrap text-base text-black/60" style={sora}>
            <span>Give confidence in daily decisions</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 shrink-0" />
            <span>Encourage proactive preparation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 shrink-0" />
            <span>Build resilience</span>
          </div>
        </div>
      </section>

      {/* ── Jump-to nav ── */}
      <section className="bg-white border-b border-black/6 sticky top-14 z-40">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[{ label: "Our impact", anchor: "proj-impact" }, { label: "The problem", anchor: "proj-problem" }, { label: "Process", anchor: "proj-process" }, { label: "Features", anchor: "proj-features" }].map(({ label, anchor }) => (
              <a key={anchor} href={`#${anchor}`} className="bg-[#f9fafb] rounded-xl p-3.5 flex items-center justify-between gap-2 hover:bg-[#eef2f3] transition-colors text-sm text-black" style={sora}>
                <span>{label}</span><ChevronRight size={13} className="text-black/35" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TL;DR ── */}
      <section style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-6">
          <p className="text-base font-bold text-black" style={soraBold}>TL;DR</p>
          <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl" style={sora}>
            Deloitte was engaged by a government department to design a centralised platform and series of tools that support the primary industry when making decisions during their day to day activities, build resilience through preparation and return to normal following a natural disaster.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Government", "Agriculture", "Detailed design", "User testing"].map((t) => <Pill key={t} label={t} outlined />)}
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section id="proj-impact" className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-8">
          <div><SectionLabel>Impact</SectionLabel><p className="text-base text-black/55 mt-1" style={sora}>Our impact</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{ desc: "Supported 40,000+ primary producers across NSW" }, { desc: "Consolidated 3 legacy apps into one intuitive PWA, enabling shared data and streamlined workflows." }, { desc: "Delivered a federally funded solution mitigating natural disaster impact for primary producers that strengthens long-term industry resilience." }, { desc: "Project outcomes were recognised by the Deloitte AU CTSO of Consulting as a landmark achievement for both the firm and the country and an example of us at our best." }].map(({ desc }, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex flex-col gap-3 border border-black/6">
                <p className="text-sm text-black/70 leading-relaxed" style={sora}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section id="proj-problem" style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-8">
          <SectionLabel>The problem</SectionLabel>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-black/55 uppercase tracking-wide" style={sora}>Current state</p>
            <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl" style={sora}>
              A library of farming decision tools exists in the current state, however users are required to input large amounts of data each session, that cannot be retained or re-used. The current tools are overly complex and their use-cases are not clearly framed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Low tech literacy", points: ["Existing farming decision tools require users to input large amounts of data each session, which cannot be retained or reused.", "The tools are overly complex, and their use-cases are not clearly framed, leading to low adoption.", "Farmers have their own individual offline practices which they have used for generations. Adapting their way of working is a big change."] },
              { label: "On-farm use", points: ["Farmers need to make quick decisions from multiple locations whether that be at a desk or in the paddock.", "The current tools require a lot of data input that farmers may not have on hand and don't have internet connectivity to access.", "The current tools are designed for mobile or desktop use, however primary producers elect to use tablets for farm planning."] },
              { label: "Technically complex", points: ["The existing tools lack design consistency and reusable components, making learning the tools difficult.", "As each tool is independent, making updates is time-consuming and the apps are not designed for future scaling.", "The tools do not align to branding or accessibility requirements.", "The code components for the design library are outdated, meaning \"OOTB development\" requires a library re-build."] },
            ].map(({ label, points }) => (
              <div key={label} className="bg-white rounded-xl p-5 flex flex-col gap-4">
                <p className="text-sm text-black/55" style={sora}>{label}</p>
                <ul className="flex flex-col gap-2 list-disc list-inside">
                  {points.map((p) => <li key={p} className="text-sm text-black/70 leading-relaxed" style={sora}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Objectives ── */}
      <section className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-8">
          <SectionLabel>Objectives</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { objective: "Simplify the experience for farmers with minimal technical expertise.", challenge: "Current tools are overly complex and require significant data input, creating barriers for adoption.", solution: ["Ensure tool use cases are mutually exclusive and clearly framed.", "Design an intuitive, guided interface that minimises complexity, reduces cognitive load, and enables data persistence across sessions.", "The solution should feel familiar and easy to use, even for those with limited digital experience."] },
              { objective: "Enable seamless access in disconnected environments.", challenge: "Farmers often work in remote areas on tablets with low connectivity and need to make quick decisions without delays.", solution: ["Develop a tablet-first design that supports offline functionality for core features and ensures smooth performance in low-bandwidth or disconnected environments.", "Minimise visual elements on screens crucial to offline functionality to ensure a similar experience regardless of location."] },
              { objective: "Accelerate development while ensuring scalability.", challenge: "Current tools are outdated, hard to maintain, and not designed for future growth.", solution: ["Adopt design consistency and limit the number of unique components used in the solution to reduce developer workload. Ensure the platform remains modular and scalable, while prioritising reuse of existing coded components wherever possible to avoid unnecessary rebuilds."] },
            ].map(({ objective, challenge, solution }) => (
              <div key={objective} className="bg-white rounded-xl p-5 flex flex-col gap-4 border border-black/6">
                <div>
                  <p className="text-sm font-bold text-black leading-snug" style={soraBold}>{objective}</p>
                  <p className="text-xs text-black/50 mt-1 leading-relaxed" style={sora}>{challenge}</p>
                </div>
                <div className="border-t border-black/6 pt-4">
                  <ul className="flex flex-col gap-2 list-disc list-inside">
                    {solution.map((s) => <li key={s} className="text-sm text-black/60 leading-relaxed" style={sora}>{s}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section id="proj-process" style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-8">
          <SectionLabel>Process</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: "Step 1", title: "Core use case identification and documentation", desc: "Identify, prioritise and map key use cases, flows and interaction points based on impact and feasibility. Expand on the flows to document the solution design, detailed functionality and user interactions.", methods: ["Workshops", "Flow-mapping", "Journey mapping", "Low-fidelity wireframes"] },
              { step: "Step 2", title: "Information architecture", desc: "Utilise the requirements and user flows to define the information architecture and navigation structure.", methods: ["Dev input", "Site-map"] },
              { step: "Step 3", title: "High-fidelity MVP design", desc: "Design high-fidelity interfaces and flows for the MVP leveraging the design system.", methods: ["Dev input", "UI Design system", "Design jams", "High-fidelity wireframes", "Business rules"] },
            ].map(({ step, title, desc, methods }) => (
              <div key={step} className="bg-white rounded-xl p-5 flex flex-col gap-4">
                <div>
                  <p className="text-xs font-bold text-black" style={soraBold}>{step}</p>
                  <p className="text-sm font-bold text-black/55 mt-1" style={soraBold}>{title}</p>
                </div>
                <p className="text-sm text-black leading-relaxed" style={sora}>{desc}</p>
                <div className="flex flex-wrap gap-2">{methods.map((m) => <MethodTag key={m} label={m} />)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step 1 detail: Journey map ── */}
      <section className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-10">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-black/55" style={sora}>Use case identification and documentation</p>
              <p className="text-xl text-black font-normal" style={sora}>Priority user flows journey map</p>
            </div>
            <StepProgress active={1} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-6">
              {[
                { title: "Account management", text: "At this point in the project, there was a clear tech barrier preventing account management capabilities. This meant that we had to work within the constraint of requiring the user to export and upload a csv file to re-instate their instance. We captured this back and forth through a storyline between the end-user and the system as they use the platform for the 1st time and return at a later stage." },
                { title: "Entry points", text: "It was important to the client that the user can begin their experience with the platform at any stage of the disaster management journey (planning, preparing, responding and recovering). Through banners and tags throughout the journey I helped frame the platform as an everyday BAU touchpoint that can help speed up farmers response to events or help in decision-making after an event has commenced." },
                { title: "Capabilities", text: "To assist in future project stages, capabilities of the platform are placed in context and tagged against the functional spec ID #s for tracking." },
              ].map(({ title, text }) => (
                <div key={title} className="flex flex-col gap-2">
                  <p className="text-sm text-black/55" style={sora}>{title}</p>
                  <p className="text-sm text-black leading-relaxed" style={sora}>{text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}>
              <img src={imgJourneyMap} alt="Priority user flows journey map" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 2 detail: IA / Sitemap ── */}
      <section style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-10">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-black/55" style={sora}>Information architecture</p>
              <p className="text-xl text-black font-normal" style={sora}>Sitemap</p>
            </div>
            <StepProgress active={2} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-6">
              {[
                { text: "As the Deloitte team awaited confirmation of an extension that would include the ability for account management and integration of tools, I developed a sitemap that represented the platform without this capability." },
                { text: "At the 1st visit, all users are required to complete the onboarding steps and provide details about their farm, livestock, pasture and preparedness." },
                { text: "Returning users will land on the dashboard. From here they may access the decision-making tools, their profile or their preparedness plan." },
              ].map(({ text }, i) => (
                <p key={i} className="text-sm text-black leading-relaxed" style={sora}>{text}</p>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}>
              <img src={imgSitemap} alt="Information architecture sitemap" className="w-full h-auto object-contain bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 3 detail: Wireframes & specs ── */}
      <section className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-10">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-black/55" style={sora}>Detailed design</p>
              <p className="text-xl text-black font-normal" style={sora}>Wireframes &amp; specifications</p>
            </div>
            <StepProgress active={3} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-black/6">
              <p className="text-sm text-black leading-relaxed" style={sora}>The detailed design phase of this engagement spanned across <strong>12 weeks</strong>. The screens were divided into <strong>8 use cases</strong> and <strong>27 specifications</strong>, translating to <strong>100+ individual screens</strong>.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-black/6">
              <p className="text-sm text-black leading-relaxed" style={sora}>The sprint cadence involved a tech/dev review touchpoint, frequent meetings with agriculture experts and workshops with the client to refine designs. Each design had approximately <strong>3 iterations</strong> at the high fidelity level, following the client's design system guidelines.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-black/6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-base">⭐</span>
                <p className="text-sm font-bold text-black" style={soraBold}>Scope change</p>
              </div>
              <p className="text-sm text-black leading-relaxed" style={sora}>The largest and most important change to scope was the inclusion of account management, which awarded us an additional <strong>6 weeks</strong> of time to re-design and build the platform with this in mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard Iteration 1 ── */}
      <section style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-8">
          <div>
            <p className="text-sm text-black/55" style={sora}>Example 1 | Dashboard</p>
            <p className="text-xl text-black font-normal" style={sora}>Iteration 1</p>
          </div>
          <p className="text-base text-black leading-relaxed max-w-3xl" style={sora}>The dashboard is the centre of the platform. It displays the key output of all user actions and acts as the main navigation hub to access tools.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-5">
              <Annotation type="warning" text="The 1st iteration of the dashboard included all required tiles for the most part, however the framing and messaging around the preparedness score, the main driver for user action was debated at length. Concerns were raised around what we deem as a 'good' or green score and why the user would continue to use the tool once they've hit it." />
              <Annotation type="warning" text="The component used for the farm overview tiles was claimed to appear clickable, and questioned as to what happened once a user selected this." />
              <Annotation type="warning" text="User understanding and behaviour around the 'plan overview' was a concern at the initial opening of the dashboard. Would the user understand how to use it if we didn't include any examples?" />
              <Annotation type="warning" text="'Tips to improve' was a misunderstood action and lacked clarity of what would improve, — their score? their farm?" />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
              <img src={imgDashboardIter1} alt="Dashboard iteration 1" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard Iteration 2 ── */}
      <section className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-8">
          <div>
            <p className="text-sm text-black/55" style={sora}>Example 1 | Dashboard</p>
            <p className="text-xl text-black font-normal" style={sora}>Iteration 2</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-5">
              <Annotation type="warning" text="To address client concerns, a status was introduced to the preparedness score as to not discourage the users from continuing to use the platform and also not feeling like they failed if they received a lower score. This was received well, however generated extra excitement for the possibilities of this score, and how we can use it to reflect user actions throughout the tool." />
              <Annotation type="success" text="A pre-populated state of the plan was introduced to reduce confusion as to its purpose and trigger users to personalise it." />
              <Annotation type="success" text="The 'edit my farm detail' button was added to the farm overview section to push users to click there to edit, rather than attempt to click the tiles. As the tiles are apart of the OOB DS, we were limited in the styling updates we could make for MVP." />
              <Annotation type="warning" text="As the designs for the tool were being refined during this time, we required surfacing this on the dashboard as a quick-view." />
              <Annotation type="warning" text="An interest in surfacing some contacts/additional information for users to access if in an emergency or wanted to speak to a person was evident." />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
              <img src={imgDashboardIter2} alt="Dashboard iteration 2" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard Final ── */}
      <section id="proj-features" style={{ background: CREAM }}>
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col gap-8">
          <div>
            <p className="text-sm text-black/55" style={sora}>Example 1 | Dashboard</p>
            <p className="text-xl text-black font-normal" style={sora}>Final design</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-5">
              <Annotation type="error" text="Due to tech resource prioritisation and timelines, the pre-populated 'plan' was removed. I included some example of how this may be used to communicate to stakeholders, however an empty state is used by default." />
              <Annotation type="success" text="The preparedness status grew to include a detailed explanation of how the user is doing and encourage completion of activities. We shifted to a star-rating system to remove concerns around users becoming unmotivated once they achieve a high score. Every 30 days this rating will decrease and users are encouraged to update their details to increase it. Greater transparency is provided through the drop down, presenting increases to ratings." />
              <Annotation type="success" text="An example a tool output is shown under 'feed mix' — this is a high-level summary expressing users day to day actions off the back of the tool recommendation, by clicking view/edit feed mix details users can review the full set of data." />
              <Annotation type="success" text="The client requested we add a tool to the tool library called 'contact' but I experimented with adding a dedicated resources section which was well received and will grow post MVP." />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
              <img src={imgDashboardFinal} alt="Dashboard final design" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Return ── */}
      <section className="bg-white">
        <div className="max-w-[1136px] mx-auto px-6 md:px-10 lg:px-16 py-10 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-black/40" style={sora}>More work</p>
          <button onClick={() => setPage("home")} className="flex items-center gap-1.5 text-sm text-black hover:opacity-50 transition-opacity" style={sora}>
            Return to all projects <ChevronRight size={14} />
          </button>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav page={page} setPage={setPage} />
      <div className="flex-1">
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "cv" && <CvPage />}
        {page === "project-farming" && <FarmingProjectPage setPage={setPage} />}
      </div>
      <SiteFooter setPage={setPage} />
    </div>
  );
}
