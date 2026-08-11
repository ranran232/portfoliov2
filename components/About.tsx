import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import CompanyLogo from './CompanyLogo';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

const ACCENT = '#4338CA';
const ACCENT_SOFT = '#EEF2FF';

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
const bio = [
  "I'm an Automation Specialist focused on building systems that turn leads into customers. My experience with GoHighLevel, n8n, APIs, and webhooks allows me to create reliable automations that connect multiple platforms seamlessly.",
  'Alongside automation, I have a full-stack development background. I build modern landing pages, funnels, and internal tools, giving me the flexibility to deliver complete solutions instead of isolated workflows.',
];

const socials = [
  { label: 'LinkedIn', handle: 'linkedin.com/in/randy-olais', href: 'https://www.linkedin.com/in/randy-olais-261305341/', icon: 'linkedin' as const },
  { label: 'GitHub', handle: 'github.com/ranran232', href: 'https://github.com/ranran232', icon: 'github' as const },
];

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: 'GHL Automations',
    description: 'Custom workflows, pipelines, CRM automations and AI agents.',
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />,
  },
  {
    title: 'GHL Conversation AI',
    description: 'AI-powered chat assistants for lead engagement and customer support.',
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    ),
  },
  {
    title: 'GHL Voice AI',
    description: 'Intelligent AI voice agents for inbound calls, outbound follow-ups, and appointment booking.',
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    title: 'SMS & Email Campaigns',
    description: 'Campaign setup, nurture sequences and automated follow-ups.',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7 10-7" />
      </>
    ),
  },
  {
    title: 'GHL Calendar & Booking',
    description: 'Calendar configuration, reminders and appointment workflows.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    title: 'GHL Snapshot Management',
    description: 'Create, update and deploy snapshots across multiple sub-accounts.',
    icon: (
      <>
        <path d="m12 2 10 5-10 5L2 7l10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </>
    ),
  },
  {
    title: 'GHL A2P 10DLC Registration',
    description: 'Complete A2P registration and compliance setup for SMS messaging.',
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Custom Integrations',
    description: 'n8n workflows, APIs, webhooks and third-party integrations.',
    icon: <path d="M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" />,
  },
  {
    title: 'Landing Pages',
    description: 'Modern landing pages and funnels built for conversions.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
      </>
    ),
  },
  {
    title: 'Tracking & Analytics',
    description: 'CAPI, conversion tracking and analytics setup.',
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 13v4M12 9v8M17 5v12" />
      </>
    ),
  },
];

const techStack: { category: string; skills: string[] }[] = [
  { category: 'Automation', skills: ['n8n', 'GoHighLevel', 'Webhooks', 'API Systems'] },
  { category: 'Marketing', skills: ['Meta Ads'] },
  { category: 'AI', skills: ['OpenCode', 'ClaudeCode', 'Ollama', 'OpenRouter'] },
  { category: 'Frontend', skills: ['JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Shadcn'] },
  { category: 'Backend', skills: ['Node.js', 'MySQL', 'MongoDB', 'OAuth', 'JWT', 'Express.js', 'REST'] },
  { category: 'Others', skills: ['GitHub', 'Postman', 'Google Workspace', 'Domain & DNS Configuration'] },
];

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  logo?: string;
}

// Drop a square logo (e.g. 80x80+) in /public/logos and point each entry at
// it. Entries without a `logo` fall back to the company's initials.
const experience: ExperienceEntry[] = [
  {
    role: 'Full Stack Developer / Automation',
    company: 'CeNix Web Development Services',
    period: 'Nov 2024 — Apr 2026',
    logo: '/cenix_logo.jpg',
  },
  {
    role: 'Automation Specialist (part-time)',
    company: 'Clarewood Capital',
    period: 'May 2026 — Present',
    current: true,
    logo: '/clarewood_capital_logo.png',
  },
  {
    role: 'GHL / Automation Specialist',
    company: 'Steady Auto Growth',
    period: 'June 2026 — Present',
    current: true,
    logo: '/sag_logo.png',
  },
];

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------
function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={`${mono.className} text-xs font-medium uppercase tracking-[0.14em] text-gray-400`}>{children}</p>;
}

function IconTile({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: ACCENT_SOFT }}>
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </div>
  );
}

function SocialIcon({ icon }: { icon: 'linkedin' | 'github' }) {
  if (icon === 'linkedin') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9h4v12H3zM9 9h3.6v1.7h.05c.5-.95 1.8-1.95 3.7-1.95 3.95 0 4.65 2.6 4.65 6V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9Z" />
      </svg>
    );
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.4-3.88-1.4-.52-1.35-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.68.42.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export default function AboutSection() {
  return (
    <section
      className={`${display.variable} ${body.variable} ${mono.variable} bg-white py-5 md:py-10`}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-2xl">
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
            About Me
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
            {bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-5 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-gray-700 transition-colors duration-150 hover:border-transparent hover:bg-[#4338CA] hover:text-white"
              >
                <SocialIcon icon={s.icon} />
                <span className="text-sm font-medium">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* What I Can Offer */}
        <div className="mt-10 border-t border-gray-100 pt-10">
          <Eyebrow>Services</Eyebrow>
          <h3 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
            What I Can Offer
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                <IconTile>{service.icon}</IconTile>
                <p className="mt-3 text-sm font-semibold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.title}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-10 border-t border-gray-100 pt-10">
          <Eyebrow>Stack</Eyebrow>
          <h3 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
            Tech Stack
          </h3>

          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="divide-y divide-gray-100">
              {techStack.map((group) => (
                <div key={group.category} className="grid grid-cols-1 gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:items-center sm:gap-6">
                  <p className={`${mono.className} text-xs font-medium uppercase tracking-wider text-gray-400`}>
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${mono.className} rounded-full px-3 py-1 text-[12px] font-medium`}
                        style={{ background: ACCENT_SOFT, color: ACCENT }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-10 border-t border-gray-100 pt-10">
          <Eyebrow>Experience</Eyebrow>
          <h3 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
            Where I&apos;ve Worked
          </h3>

          <div className="relative mt-6 max-w-2xl">
            <ul className="space-y-1">
              {experience.map((entry, i) => {
                const isLast = i === experience.length - 1;
                return (
                  <li key={`${entry.role}-${entry.company}`} className="relative flex gap-4">
                    {/* Logo + connector */}
                    <div className="flex flex-col items-center">
                      <CompanyLogo logo={entry.logo} company={entry.company} />
                      {!isLast && <span className="my-1 w-px flex-1 border-l border-dashed border-gray-200" />}
                    </div>

                    {/* Content */}
                    <div className={isLast ? 'flex-1 pb-1' : 'flex-1 pb-7'}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-[15px] font-semibold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                            {entry.role}
                          </h4>
                        </div>
                        <span className={`${mono.className} text-xs text-gray-400`}>{entry.period}</span>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">{entry.company}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}