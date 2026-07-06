import Image from "next/image";
import Script from "next/script";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Website Design & Development",
    label: "Web",
    image: "/images/stock/business-collaboration.jpg",
    alt: "Business team collaborating with laptops",
    description:
      "Modern, mobile-friendly websites that make your business look credible and help customers reach you faster.",
  },
  {
    title: "POS Systems",
    label: "POS",
    image: "/images/stock/pos-system.jpg",
    alt: "Modern touchscreen POS system at a counter",
    description:
      "Sell faster, track stock, manage customers, print receipts, and monitor business performance from one system.",
  },
  {
    title: "School Management Systems",
    label: "SMS",
    image: "/images/stock/school-management.jpg",
    alt: "Students using a laptop in a classroom",
    description:
      "Manage students, parents, teachers, fees, attendance, reports, payroll, announcements, and academic records.",
  },
  {
    title: "Restaurant & Food Ordering Systems",
    label: "Food",
    image: "/images/stock/restaurant-ordering.jpg",
    alt: "Chef using a digital restaurant ordering display",
    description:
      "Take orders, manage menus, track kitchen activity, process payments, and improve customer experience.",
  },
  {
    title: "Hardware & IT Support",
    label: "IT",
    image: "/images/stock/hardware-support.jpg",
    alt: "Technicians repairing computer hardware",
    description:
      "Computer support, hardware setup, networking, troubleshooting, installations, and technical assistance.",
  },
  {
    title: "Custom Business Software",
    label: "Build",
    image: "/images/stock/business-collaboration.jpg",
    alt: "Business professionals reviewing software on a laptop",
    description:
      "Dashboards, reports, inventory systems, booking systems, and management platforms built around your workflow.",
  },
];

const products = [
  {
    name: "Sika POS",
    image: "/images/stock/pos-system.jpg",
    alt: "Touchscreen POS software at a checkout counter",
    summary:
      "Point-of-sale software for shops that need sales, stock, receipts, customers, and performance tracking in one place.",
    details: ["Fast checkout", "Stock control", "Receipt printing"],
  },
  {
    name: "SynOrders",
    image: "/images/stock/restaurant-ordering.jpg",
    alt: "Restaurant kitchen order management screen",
    summary:
      "Restaurant and food ordering tools for menus, orders, kitchen flow, payments, and customer service.",
    details: ["Menu management", "Kitchen tracking", "Order history"],
  },
  {
    name: "School Management SaaS",
    image: "/images/stock/school-management.jpg",
    alt: "Students collaborating with a laptop in class",
    summary:
      "A smart school platform for fees, reports, attendance, payroll, announcements, and academic records.",
    details: ["Student records", "Fees and payroll", "Parent updates"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We understand your business, challenges, and goals.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We map the structure, features, pages, and workflow.",
  },
  {
    step: "03",
    title: "Design",
    description: "We create a clean, professional interface that fits your brand.",
  },
  {
    step: "04",
    title: "Development",
    description: "We build with modern, reliable technologies.",
  },
  {
    step: "05",
    title: "Testing",
    description: "We test carefully so the system works properly.",
  },
  {
    step: "06",
    title: "Launch & Support",
    description: "We help you go live and support you when help is needed.",
  },
];

const stats = [
  { value: "6", label: "Core Services" },
  { value: "3", label: "Featured Products" },
  { value: "2", label: "Direct Phone Lines" },
  { value: "GH", label: "Ghana Focused" },
];

const benefits = [
  "Built for Ghanaian businesses",
  "Modern and mobile-friendly designs",
  "Affordable and scalable systems",
  "Clean dashboards and simple user experience",
  "Reliable support after installation",
  "Solutions built around actual business needs",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#1D1F27]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1E2A44]/10 bg-white/70 shadow-[0_10px_40px_rgba(29,31,39,0.06)] backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 sm:h-22">
          <a href="#top" className="flex items-center" aria-label="DanniTech Solutions home">
            <Image
              src="/images/dannitech-logo.png"
              alt="DanniTech Solutions Logo"
              width={280}
              height={88}
              priority
              className="h-16 object-contain sm:h-[72px]"
              style={{ width: "auto" }}
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#5D6678] transition hover:text-[#005DAA]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/233536324053"
            className="shine-button rounded-full bg-[#129BDB] px-4 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(18,155,219,0.28)] transition hover:-translate-y-0.5 hover:bg-[#005DAA] sm:px-5"
            target="_blank"
            rel="noreferrer"
          >
            Get Started
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-[84svh] overflow-hidden bg-[#071A2A] pt-24 text-white sm:pt-28">
        <Image
          src="/images/stock/business-collaboration.jpg"
          alt="Professionals collaborating around business technology"
          fill
          sizes="100vw"
          priority
          className="animate-hero-image object-cover opacity-20 filter blur-[3px] mix-blend-mode-luminosity"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.94)_0%,rgba(7,26,42,0.86)_50%,rgba(18,155,219,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.12),transparent_35%),linear-gradient(180deg,transparent,rgba(7,26,42,0.96))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/30 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl flex-col px-5 pb-20 sm:px-8 lg:px-10">
          <div className="max-w-4xl pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20">
            <h1 className="animate-rise animation-delay-100 mt-0 max-w-5xl text-4xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Premium digital systems that make Ghanaian businesses faster, smarter, and easier to manage.
            </h1>
            <p className="animate-rise animation-delay-200 mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
              DanniTech Solutions builds websites, POS systems, school management systems, business software,
              and reliable IT solutions for shops, schools, restaurants, offices, and growing companies.
            </p>

            <div className="animate-rise animation-delay-300 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/233536324053"
                className="shine-button rounded-full bg-[#129BDB] px-6 py-4 text-center text-sm font-bold text-white shadow-[0_20px_50px_rgba(18,155,219,0.36)] transition hover:-translate-y-0.5 hover:bg-[#005DAA]"
                target="_blank"
                rel="noreferrer"
              >
                Start on WhatsApp
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/28 bg-white/12 px-6 py-4 text-center text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-[#005DAA]"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="animate-rise animation-delay-400 grid gap-3 pb-2 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div
                key={benefit}
                className="glass-chip flex min-h-20 items-center gap-3 rounded-lg border border-white/18 bg-white/12 px-4 py-4 text-sm font-bold text-white shadow-[0_16px_42px_rgba(0,0,0,0.18)] backdrop-blur-md"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="h-2.5 w-2.5 rounded-sm bg-[#129BDB] shadow-[0_0_18px_rgba(18,155,219,0.9)]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1E2A44]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-6 sm:px-8 lg:grid-cols-4 lg:px-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-rise rounded-lg border border-[#1E2A44]/10 bg-white px-5 py-6 text-center shadow-[0_14px_36px_rgba(29,31,39,0.06)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="text-3xl font-black text-[#129BDB]">{stat.value}</p>
              <p className="mt-2 text-sm font-bold text-[#5D6678]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-[#F7FBFE] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end reveal">
            <div>
              <p className="text-sm font-black text-[#129BDB]">Our Services</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#1D1F27] sm:text-4xl">
                Practical technology for serious business workflows.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#5D6678]">
              From a professional online presence to daily business operations, we build systems that feel clear,
              fast, and easy for your team to use.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="motion-card group reveal overflow-hidden rounded-lg border border-[#1E2A44]/10 bg-white shadow-[0_18px_45px_rgba(29,31,39,0.07)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF7FD]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1280px) 390px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1F27]/45 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/95 text-sm font-black text-[#005DAA] shadow-[0_10px_24px_rgba(29,31,39,0.12)]">
                    {service.label}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#1D1F27]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5D6678]">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl reveal">
            <p className="text-sm font-black text-[#129BDB]">Featured Products</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#1D1F27] sm:text-4xl">
              Ready-made systems with room to customize.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5D6678]">
              Use a proven product as your starting point, then shape the workflow around how your business actually
              runs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="motion-card reveal flex min-h-[390px] flex-col overflow-hidden rounded-lg border border-[#1E2A44]/10 bg-white shadow-[0_18px_45px_rgba(29,31,39,0.07)]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/10] bg-[#EAF7FD]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 390px, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#005DAA]/40 via-transparent to-white/20" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-7 h-2 w-20 rounded-sm bg-gradient-to-r from-[#129BDB] to-[#005DAA]" />
                  <h3 className="text-2xl font-black text-[#1D1F27]">{product.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#5D6678]">{product.summary}</p>
                  <div className="mt-7 space-y-3">
                    {product.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 text-sm font-bold text-[#1D1F27]">
                        <span className="h-2 w-2 rounded-sm bg-[#129BDB]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#F7FBFE] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="reveal flex flex-col justify-between">
              <div>
                <p className="text-sm font-black text-[#129BDB]">Our Process</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#1D1F27] sm:text-4xl">
                  A clean path from idea to launch.
                </h2>
                <p className="mt-5 text-base leading-7 text-[#5D6678]">
                  Every project starts with understanding the real business need, then moves through planning, design,
                  development, testing, launch, and reliable support.
                </p>
              </div>
              <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#1E2A44]/10 bg-white shadow-[0_18px_45px_rgba(29,31,39,0.06)]">
                <Image
                  src="/images/stock/idea-to-launch.png"
                  alt="A clean technology process roadmap screen showing idea to launch flowcharts"
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((item, index) => (
                <article
                  key={item.step}
                  className="motion-card reveal rounded-lg border border-[#1E2A44]/10 bg-white p-6 shadow-[0_18px_45px_rgba(29,31,39,0.06)]"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <p className="text-sm font-black text-[#129BDB]">{item.step}</p>
                  <h3 className="mt-4 text-lg font-black text-[#1D1F27]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5D6678]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#1E2A44]/10 bg-[#F7FBFE] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center reveal">
          <p className="text-sm font-black text-[#129BDB]">Ready to upgrade your business?</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#1D1F27] sm:text-5xl">
            Let&apos;s build a professional digital solution for your business today.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5D6678]">
            DanniTech Solutions builds websites, POS systems, school platforms, food ordering systems, IT support, and custom software for Ghanaian businesses.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/233536324053"
              className="shine-button rounded-full bg-[#129BDB] px-8 py-4 text-sm font-bold text-white shadow-[0_20px_50px_rgba(18,155,219,0.36)] transition hover:-translate-y-0.5 hover:bg-[#005DAA]"
              target="_blank"
              rel="noreferrer"
            >
              Start on WhatsApp
            </a>
            <a
              href="mailto:dannitechsolution@gmail.com"
              className="rounded-full border border-[#1E2A44]/15 bg-white px-8 py-4 text-sm font-bold text-[#1D1F27] transition hover:border-[#129BDB] hover:text-[#005DAA]"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-[#071A2A] text-[#AAB4C8] px-5 pt-16 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Grid */}
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr] pb-12 border-b border-white/5">
            {/* Column 1: Brand & Bio */}
            <div className="flex flex-col gap-4">
              <a href="#top" className="inline-block animate-rise -ml-2" aria-label="DanniTech Solutions home">
                <Image
                  src="/images/dannitech-logo.png"
                  alt="DanniTech Solutions Logo"
                  width={540}
                  height={168}
                  priority
                  className="h-24 object-contain sm:h-28"
                  style={{ width: "auto" }}
                />
              </a>
              <p className="text-sm leading-6 text-white/80 max-w-xs">
                Premium digital systems that make Ghanaian businesses faster, smarter, and easier to manage.
              </p>
              {/* Green status pulse */}
              <div className="mt-2 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                </span>
                <span className="text-xs font-semibold text-white/90">Active Support in Ghana</span>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { label: "Website Development", href: "#services" },
                  { label: "POS Systems", href: "#services" },
                  { label: "School Platforms", href: "#services" },
                  { label: "Food Ordering Systems", href: "#services" },
                  { label: "Hardware & IT Support", href: "#services" },
                  { label: "Custom Software", href: "#services" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#129BDB] opacity-0 transition-all duration-200 group-hover:w-1.5 group-hover:opacity-100" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Featured Products</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { label: "Sika POS", href: "#products" },
                  { label: "SynOrders", href: "#products" },
                  { label: "School Management SaaS", href: "#products" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#129BDB] opacity-0 transition-all duration-200 group-hover:w-1.5 group-hover:opacity-100" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact info */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact & Support</h3>
              <ul className="mt-4 space-y-3.5 text-sm">
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#129BDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Achimota, Accra, Ghana</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#129BDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.099.281L7.1 8c-.495.89-.001 2.01.884 2.502l6.884 3.884c.895.502 2.01-.001 2.502-.884l1.116-1.116a1 1 0 01.281-.099l2.2-.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="flex flex-col">
                    <a href="tel:0548470413" className="transition hover:text-white">0548470413</a>
                    <a href="tel:0599008533" className="transition hover:text-white">0599008533</a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#129BDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:dannitechsolution@gmail.com" className="break-all transition hover:text-white">
                    dannitechsolution@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs pt-6">
            <p className="text-white/60">
              &copy; {new Date().getFullYear()} DanniTech Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#top" className="group flex items-center gap-1.5 font-semibold text-white/80 transition hover:text-[#129BDB]">
                <span>Back to top</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/233536324053"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_36px_rgba(37,211,102,0.42)] transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact DanniTech on WhatsApp"
      >
        {/* Pulsing Outer Glow */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        
        {/* WhatsApp SVG Icon */}
        <svg className="h-9 w-9 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.966.01c3.178.001 6.169 1.24 8.424 3.496 2.254 2.256 3.491 5.25 3.489 8.423-.005 6.617-5.342 11.955-11.914 11.955-2.005-.001-3.975-.508-5.733-1.474L0 24zm6.59-4.846c1.666.988 3.311 1.588 5.318 1.589 5.268.002 9.55-4.282 9.554-9.554.002-2.553-1.002-4.955-2.83-6.782A9.5 9.5 0 0 0 11.97 1.88C6.702 1.88 2.42 6.16 2.416 11.43c-.001 2.024.528 4.001 1.532 5.693l-.997 3.635 3.696-.97zm11.517-5.64c-.267-.134-1.58-.78-1.822-.868-.243-.088-.419-.133-.596.133-.177.266-.685.867-.84 1.045-.154.177-.309.2-.576.066-.267-.133-1.127-.415-2.148-1.326-.794-.709-1.33-1.584-1.486-1.85-.156-.267-.017-.411.117-.544.12-.119.267-.31.4-.466.133-.155.177-.266.267-.443.089-.178.044-.333-.022-.466-.067-.133-.596-1.437-.816-1.97-.215-.518-.432-.447-.597-.456-.153-.008-.33-.009-.508-.009s-.466.067-.71.333c-.244.267-.93.91-.93 2.222 0 1.31.954 2.573 1.088 2.75.133.178 1.88 2.87 4.554 4.024.636.275 1.13.439 1.519.563.639.203 1.22.175 1.678.107.51-.076 1.58-.646 1.802-1.237.222-.593.222-1.1.156-1.2-.067-.101-.244-.155-.511-.29z" />
        </svg>
      </a>

      {/* Scroll Reveal Observer Script */}
      <Script
        id="scroll-reveal-observer"
        strategy="afterInteractive"
      >
        {`
          (function() {
            function initReveal() {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                  }
                });
              }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              });
              
              document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
              });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initReveal);
            } else {
              initReveal();
            }
          })();
        `}
      </Script>
    </main>
  );
}
