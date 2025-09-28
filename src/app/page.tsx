"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-slate-100 dark:bg-slate-900 min-h-screen">
      <Nav />
      <Hero />
      <Section id="about" title="About">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="leading-relaxed text-lg text-slate-700 dark:text-slate-300"
        >
          Hi 👋 I’m <span className="font-semibold">Natasha Jha</span>, a Computer Science graduate student at UC Irvine.  
          I specialize in <b>cybersecurity</b>, <b>distributed systems</b>, and <b>software engineering</b>.  
          I’ve interned at Oracle and Viatris, worked on phishing detection, IoT authentication, and LLM security,  
          and I enjoy building solutions where security and usability go hand in hand.
        </motion.p>
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="experience" title="Experience">
        <CardList
          items={[
            {
              logo: "/images/viatris.png",
              title: "Cybersecurity Intern",
              company: "Viatris",
              period: "Sep–Nov 2024",
              bullets: [
                "Studied Operational Technology (OT) cybersecurity, focusing on ICS/SCADA environments and network defense strategies.",
                "Conducted in-depth attack surface analysis using the MITRE ATT&CK for ICS framework, identifying vulnerabilities and recommending preventive security controls.",
                "Worked with incident response planning and penetration testing methodologies in industrial contexts.",
                "Gained exposure to secure coding practices and real-world implementation of defense protocols."
              ],
            },
            {
              logo: "/images/oracle.png",
              title: "Summer Intern",
              company: "Oracle",
              period: "May–Jul 2024",
              bullets: [
                "Engineered and documented SDKs and CLI tools in Java and Python for Oracle Cloud Infrastructure (OCI) AI Language services, streamlining developer workflows.",
                "Designed and deployed a containerized UI platform for large-scale load testing of Oracle’s language models.",
                "Leveraged Docker and Kubernetes to automate orchestration and improve performance benchmarking.",
                "Collaborated with senior engineers to optimize integration capabilities across platforms."
              ],
            },
          ]}
        />
      </Section>

      <Section id="projects" title="Projects">
        <ProjectGallery />
      </Section>

      <Section id="skills" title="Skills">
        <SkillGrid />
      </Section>

      <Section id="contact" title="Contact">
        <ContactSection />
      </Section>

      <Footer />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const sections = ["about", "education", "experience", "projects", "skills", "contact"];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl flex justify-between px-6 py-3 items-center">
        <span className="font-bold text-xl text-indigo-600 dark:text-indigo-400 tracking-wide">
          Natasha Jha
        </span>
        <nav className="flex gap-6 text-sm font-medium">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative group px-2 py-1 transition"
            >
              <span className="text-slate-700 dark:text-slate-200 group-hover:text-indigo-600">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}


/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="h-[85vh] flex flex-col justify-center items-center text-center px-6">
      {/* Name Above Picture */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-4"
      >
        Natasha Jha
      </motion.h1>

      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <Image
          src="/images/natasha.jpg"
          alt="Natasha Jha"
          width={180}
          height={180}
          className="rounded-full border-4 border-indigo-500 shadow-lg object-cover"
        />
      </motion.div>

      {/* Title Below Picture */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-indigo-600 to-emerald-500 text-transparent bg-clip-text"
      >
        Masters of Computer Science, UC Irvine
      </motion.h2>

      {/* Expanded About Me */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg max-w-2xl text-slate-600 dark:text-slate-300 leading-relaxed"
      >
        I am a graduate student passionate about building secure, scalable, and human-centric software systems.  
        With hands-on experience in cybersecurity, cloud infrastructure, and applied AI, I strive to bridge the gap  
        between cutting-edge technology and real-world impact. My work spans phishing detection, IoT authentication,  
        and large-scale system design — always with a focus on security, usability, and innovation.
      </motion.p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>
    </section>
  );
}


/* ---------------- SECTION WRAPPER ---------------- */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
function Education() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border bg-white dark:bg-slate-900 p-8 shadow-sm flex items-center gap-4 hover:shadow-md hover:border-indigo-400 transition"
      >
        <Image
          src="/images/ucirvine.png"
          alt="UC Irvine"
          width={56}
          height={56}
          className="object-contain"
        />
        <div>
          <h3 className="font-semibold text-lg">Masters of Computer Science</h3>
          <p className="text-slate-500 text-sm">University of California, Irvine (2025–2026)</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Graduate studies focusing on advanced computer science concepts including cybersecurity, 
            distributed systems, and intelligent software systems.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl border bg-white dark:bg-slate-900 p-8 shadow-sm flex items-center gap-4 hover:shadow-md hover:border-indigo-400 transition"
      >
        <Image
          src="/images/nitw.png"
          alt="NIT Warangal"
          width={56}
          height={56}
          className="object-contain"
        />
        <div>
          <h3 className="font-semibold text-lg">Bachelor of Technology, Computer Science Engineering</h3>
          <p className="text-slate-500 text-sm">NIT Warangal (2021–2025)</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Completed undergraduate coursework with a GPA of 3.7. Core CS courses include Data Structures & Algorithms, 
            Object-Oriented Design, Distributed Systems, and Operating Systems.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function CardList({ items }: { items: { logo: string; title: string; company: string; period: string; bullets: string[] }[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="rounded-xl border bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-md hover:border-indigo-400 transition min-h-[320px]"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <Image
                src={it.logo}
                alt={it.company}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="text-sm text-slate-500">{it.company} — {it.period}</p>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- PROJECTS ---------------- */
function ProjectGallery() {
  const projects = [
    {
      title: "SecURL",
      desc: "Developed a real-time phishing detection system with a dual-phase pipeline combining structural heuristics, SSL validation, domain tokenization, and OCR-based brand verification. Achieved 93.3% accuracy and 3.7s detection latency, with practical applications in SOC alert triage, incident response, and malware defense pipelines.",
      link: "https://github.com/Natashajha1/Phishing_detection",
    },
    {
      title: "Lightweight Mutual Authentication",
      desc: "Designed a lightweight mutual authentication protocol for distributed IoT healthcare systems. Verified using Verifpal & AVISPA formal tools, ensuring resistance to MITM, replay, and impersonation attacks. Optimized cryptographic efficiency and aligned with HIPAA/NIST frameworks for compliance in medical big data environments.",
      link: "https://github.com/Natashajha1/Lightweight-Mutual-Auth-Scheme-for-Healthcare-data",
    },
    {
      title: "Prompt Injection Detection",
      desc: "Built a modular ML pipeline to detect adversarial prompt injections in LLMs using OpenAI, OctoAI, and MiniLM embeddings. Trained classifiers (LogReg, Random Forest, XGBoost) on 467k+ prompts, achieving 87% precision and 0.868 F1 score. Outperformed transformer baselines in accuracy and interpretability, contributing to AI risk management and secure AI governance.",
      link: "https://github.com/Natashajha1/Detecting-prompt-injections-attacks-using-embedding-based-classifiers",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="rounded-xl border bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-lg hover:border-indigo-400 transition flex flex-col min-h-[320px]"
        >
          <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 flex-grow leading-relaxed">{p.desc}</p>
          <span className="text-indigo-600 text-sm mt-4">View Project →</span>
        </motion.a>
      ))}
    </div>
  );
}

/* ---------------- SKILLS ---------------- */
function SkillGrid() {
  const skills = {
    "Programming Languages": ["C++", "Java", "Python", "R"],
    "Web & Frameworks": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Flask"],
    "Databases & Tools": ["MongoDB", "Oracle SQL", "PostgreSQL", "Git", "GitHub"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "OCI (Oracle Cloud)", "Azure (Basics)"],
    "Cybersecurity & Analysis": [
      "Kali Linux",
      "Penetration Testing",
      "MITRE ATT&CK",
      "ICS/SCADA Security",
      "Verifpal",
      "AVISPA",
      "Incident Response",
      "Network Security",
    ],
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {Object.entries(skills).map(([category, items], i) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="rounded-xl border bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-indigo-400 transition"
        >
          <h3 className="font-semibold mb-4 text-lg text-indigo-600 dark:text-indigo-400">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map((s, j) => (
              <span
                key={j}
                className={`px-3 py-1 rounded-full text-sm ${
                  category === "Cybersecurity & Analysis"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200"
                    : "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- CONTACT ---------------- */
function ContactSection() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        Let’s connect! Reach out directly or grab a copy of my resume.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="mailto:natashajha06@gmail.com" className="btn flex items-center gap-2">
          <Mail size={16}/> Email
        </a>
        <Link href="https://github.com/Natashajha1" target="_blank" className="btn flex items-center gap-2">
          <Github size={16}/> GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/natasha-jha-100b89284/" target="_blank" className="btn flex items-center gap-2">
          <Linkedin size={16}/> LinkedIn
        </Link>
        <Link href="https://drive.google.com/file/d/154LotVa6L3OBBMTR2Q4lR_jCkQ0pwDe_/view?usp=drive_link" target="_blank" className="btn-primary flex items-center gap-2">
          <FileText size={16}/> General Resume
        </Link>
        <Link href="https://drive.google.com/file/d/16OoGNrd6eJTTA4YxxjDiqfojOBLnrJ97/view?usp=drive_link" target="_blank" className="btn-secondary flex items-center gap-2">
          <FileText size={16}/> Cybersecurity Resume
        </Link>
      </div>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="mt-16 border-t py-6 text-center text-sm text-slate-500 dark:border-slate-800">
      © {new Date().getFullYear()} Natasha Jha. Built with Next.js, Tailwind, and Framer Motion.
    </footer>
  );
}
