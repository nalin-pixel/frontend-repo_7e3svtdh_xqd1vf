import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, FolderGit2, Rocket } from 'lucide-react'

function SocialLinks() {
  const links = useMemo(() => ([
    { href: 'https://github.com/', label: 'GitHub', icon: Github },
    { href: 'https://linkedin.com/', label: 'LinkedIn', icon: Linkedin },
    { href: '#contact', label: 'Email', icon: Mail },
  ]), [])

  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 hover:bg-white transition-colors shadow-sm border border-white/60"
        >
          <Icon className="h-4 w-4" />
          <span className="text-sm">{label}</span>
        </a>
      ))}
    </div>
  )
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-fuchsia-500 text-white grid place-items-center shadow-md">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block p-5 rounded-2xl bg-white/70 hover:bg-white border border-white/60 hover:border-gray-200 transition-all shadow-sm hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

function SkillTag({ children }) {
  return (
    <span className="text-sm px-3 py-1.5 rounded-full bg-white/70 border border-white/60 shadow-sm">
      {children}
    </span>
  )
}

export default function App() {
  return (
    <div id="home" className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      {/* Top nav */}
      <div className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/60 border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-fuchsia-500" />
            <span className="font-semibold tracking-tight">Developer Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-700 hover:text-gray-900">About</a>
            <a href="#projects" className="text-sm text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#skills" className="text-sm text-gray-700 hover:text-gray-900">Skills</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Hero section with 3D Spline */}
      <section className="relative pt-28 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-white/60 shadow-sm mb-4">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-medium text-gray-700">Available for freelance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-[-0.02em]">
              Building modern, playful, and interactive web experiences
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl">
              I’m a developer focused on crafting delightful UIs, performant backends, and immersive 3D web moments. Let’s bring ideas to life.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white shadow hover:opacity-95">
                <FolderGit2 className="h-5 w-5" />
                <span>View Projects</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/70 border border-white/60 shadow-sm hover:bg-white">
                <Rocket className="h-5 w-5 text-blue-600" />
                <span>Start a project</span>
              </a>
            </div>
            <div className="mt-6 md:hidden">
              <SocialLinks />
            </div>
          </div>

          <div className="relative h-[460px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Soft gradient overlay for vibe - don't block Spline interactions */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Code2} title="About" subtitle="Who I am and how I work" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                I’m a full‑stack developer who loves pairing strong visual design with solid engineering. I enjoy TypeScript, React, Three/Spline, and Python/FastAPI for building reliable, beautiful products.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Outside of coding, I explore motion design, game feel, and new ways to make interfaces feel alive and fun.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow-sm">
              <ul className="space-y-3 text-gray-700">
                <li>• Frontend: React, Vite, Tailwind, Framer Motion, Spline</li>
                <li>• Backend: FastAPI, Node/Express, MongoDB, PostgreSQL</li>
                <li>• Tools: Docker, CI/CD, Testing, Analytics</li>
                <li>• Focus: delightful UX, performance, accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20 sm:py-24 bg-gradient-to-b from-transparent to-blue-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={FolderGit2} title="Featured Projects" subtitle="A few things I’ve built recently" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="3D Playground"
              description="Interactive Spline + React experience with custom controls and animations."
              tags={["React", "Spline", "Framer Motion"]}
              link="https://example.com"
            />
            <ProjectCard
              title="Realtime Dashboard"
              description="Metrics, charts, and alerts for ops teams with role-based access."
              tags={["FastAPI", "WebSockets", "Tailwind"]}
              link="https://example.com"
            />
            <ProjectCard
              title="E‑commerce UI Kit"
              description="Accessible components and templates for modern storefronts."
              tags={["Vite", "TS", "Design Systems"]}
              link="https://example.com"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Sparkles} title="Skills" subtitle="Technologies I enjoy using" />
          <div className="flex flex-wrap gap-3">
            {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Spline', 'Node.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Three.js', 'Vite', 'Docker'].map((s) => (
              <SkillTag key={s}>{s}</SkillTag>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Mail} title="Contact" subtitle="Let’s build something great together" />
          <div className="grid md:grid-cols-2 gap-8">
            <form className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Email" className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="text" placeholder="Subject" className="mt-4 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Tell me about your project..." rows={5} className="mt-4 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="button" onClick={() => alert('Thanks! This demo form does not send yet.')} className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white shadow hover:opacity-95">
                <Mail className="h-5 w-5" />
                <span>Send message</span>
              </button>
            </form>
            <div className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow-sm space-y-4">
              <p className="text-gray-700">Prefer email? Reach me directly:</p>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-blue-600 hover:underline"><Mail className="h-5 w-5" /> hello@example.com</a>
              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/40 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="/test" className="text-xs text-gray-500 hover:text-gray-700">System status</a>
        </div>
      </footer>
    </div>
  )
}
