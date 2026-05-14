import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, FileText, Truck, Droplet, Package,
  Shield, Users, Target, MapPinned, Wrench, HardHat, ShoppingBag,
  ChevronRight, Star, Award, TrendingUp, CheckCircle,
} from 'lucide-react';
import logoArman from '../imports/ChatGPT_Image_14_Mei_2026__14.27.39.png';
import iraPhoto1 from '../imports/WhatsApp_Image_2026-05-14_at_13.55.34.jpeg';
import iraPhoto2 from '../imports/WhatsApp_Image_2026-05-14_at_13.55.34__1_.jpeg';
import iraPhoto3 from '../imports/WhatsApp_Image_2026-05-14_at_13.55.35.jpeg';
import iraPhoto4 from '../imports/WhatsApp_Image_2026-05-14_at_13.55.35__1_.jpeg';
import iraPhoto5 from '../imports/WhatsApp_Image_2026-05-14_at_13.55.36.jpeg';
import iraPhoto6 from '../imports/WhatsApp_Image_2026-05-14_at_13.55.36__1_.jpeg';
import iraPhoto7 from '../imports/WhatsApp_Image_2026-05-14_at_13.55.36__2_.jpeg';

// ── Scroll-reveal hook ──────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ── Section wrapper with fade-up animation ──────────────────────────────────
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // SEO meta tags + favicon
  useEffect(() => {
    document.title = 'PT ARMAN JAYA MANDIRI – Mitra Industri Pertambangan Balikpapan';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'PT ARMAN JAYA MANDIRI – perusahaan berbasis di Balikpapan, Kalimantan Timur, bergerak di bidang pemompaan tambang, transportasi, reparasi mesin, dan perdagangan umum.';

    // Favicon
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
    link.href = logoArman;
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'portofolio', label: 'Portofolio' },
    { id: 'legalitas', label: 'Legalitas' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const stats = [
    { icon: Award, value: '5+', label: 'Tahun Pengalaman' },
    { icon: CheckCircle, value: '50+', label: 'Proyek Selesai' },
    { icon: Users, value: '30+', label: 'Klien Puas' },
    { icon: TrendingUp, value: '6', label: 'Bidang Layanan' },
  ];

  const services: { Icon: React.ElementType; title: string; desc: string }[] = [
    { Icon: HardHat, title: 'Aktivitas Penunjang Pertambangan', desc: 'Menyediakan layanan penunjang operasional sektor pertambangan termasuk pemompaan air dan lumpur tambang.' },
    { Icon: Droplet, title: 'Pertambangan Batu Bara', desc: 'Terlibat pada rantai bisnis pertambangan batu bara untuk mendukung efisiensi ruang lingkup pekerjaan usaha.' },
    { Icon: Wrench, title: 'Reparasi Mesin untuk Keperluan Umum', desc: 'Memberikan layanan perbaikan dan pemeliharaan mesin untuk mendukung kelangsungan operasional industri.' },
    { Icon: Truck, title: 'Angkutan Bermotor dan Barang Umum', desc: 'Melayani kebutuhan angkutan dan mobilitas operasional, mencakup distribusi barang umum yang cepat dan tepat.' },
    { Icon: Package, title: 'Penyewaan Alat Konstruksi dan Operator', desc: 'Memberikan layanan penyewaan alat konstruksi dengan operator berpengalaman untuk kebutuhan proyek Anda.' },
    { Icon: ShoppingBag, title: 'Perdagangan Besar', desc: 'Menjalankan kegiatan perdagangan besar untuk memenuhi berbagai kebutuhan sektor usaha, industri, dan proyek.' },
  ];

  const whyUs: { Icon: React.ElementType; title: string; desc: string }[] = [
    { Icon: Shield, title: 'Berpengalaman', desc: 'Didukung oleh tim berpengalaman di industri pertambangan, konstruksi, dan logistik.' },
    { Icon: Target, title: 'Layanan Terintegrasi', desc: 'Menyediakan berbagai layanan terintegrasi untuk kebutuhan operasional dan bisnis.' },
    { Icon: Users, title: 'Komitmen pada Kualitas', desc: 'Berkomitmen memberikan hasil kerja berkualitas, keselamatan kerja, dan kepuasan pelanggan.' },
    { Icon: MapPinned, title: 'Berbasis di Balikpapan', desc: 'Lokasi strategis di Kalimantan Timur, dekat dengan kawasan industri dan pertambangan.' },
  ];

  const testimonials = [
    { name: 'Budi Santoso', role: 'Site Manager, PT Kaltim Prima Coal', text: 'PT ARMAN JAYA MANDIRI adalah mitra kerja yang sangat profesional. Layanan pemompaan mereka cepat, tepat, dan tidak pernah mengecewakan. Kami sangat merekomendasikan.', stars: 5 },
    { name: 'Hendra Wijaya', role: 'Direktur Operasional, CV Borneo Logistik', text: 'Layanan transportasi dan angkutan yang mereka berikan selalu on-time dan peralatan selalu terawat. Sangat membantu kelancaran distribusi proyek kami.', stars: 5 },
    { name: 'Ahmad Fauzi', role: 'Pengawas Proyek, PT Bangun Nusantara', text: 'Sudah beberapa proyek kami andalkan jasa reparasi mesin dan penyewaan alat dari PT ARMAN JAYA MANDIRI. Tim mereka responsif dan solusinya selalu tepat sasaran.', stars: 5 },
  ];

  const portfolioCategories = [
    {
      label: 'Semua',
      items: [
        { img: iraPhoto3, title: 'Operasional Pompa Apung', location: 'Site PT. IRA, Kalsel', tag: 'Pemompaan' },
        { img: iraPhoto1, title: 'Unit Pompa Tambang', location: 'Site PT. IRA, Kalsel', tag: 'Pemompaan' },
        { img: iraPhoto4, title: 'Pemompaan Air Tambang', location: 'Site PT. IRA, Kalsel', tag: 'Pemompaan' },
        { img: iraPhoto2, title: 'Tim Operator Pompa', location: 'Site PT. IRA, Kalsel', tag: 'Pemompaan' },
        { img: iraPhoto5, title: 'Mobilisasi Pontoon Pompa', location: 'Site PT. IRA, Kalsel', tag: 'Transportasi' },
        { img: iraPhoto6, title: 'Pengiriman Alat Pompa', location: 'Site PT. IRA, Kalsel', tag: 'Transportasi' },
        { img: iraPhoto7, title: 'Angkutan Alat Berat', location: 'Site PT. IRA, Kalsel', tag: 'Transportasi' },
        { img: 'https://images.unsplash.com/photo-1523660778745-247ed0bcce31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800', title: 'Operasional Angkutan Tambang', location: 'Kalimantan Timur', tag: 'Transportasi' },
        { img: 'https://images.unsplash.com/photo-1680463990599-9d318aaecf71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800', title: 'Penggalian Tambang Batu Bara', location: 'Kalimantan Timur', tag: 'Pertambangan' },
      ],
    },
  ];

  const [activeTag, setActiveTag] = useState('Semua');
  const portfolioTags = ['Semua', 'Pemompaan', 'Transportasi', 'Pertambangan'];
  const allItems = portfolioCategories[0].items;
  const filteredPortfolio = activeTag === 'Semua' ? allItems : allItems.filter(i => i.tag === activeTag);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Floating WhatsApp Button ───────────────────────────────────────── */}
      <a
        href="https://wa.me/6282165429971"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:bg-[#1ebe5d] transition-all hover:scale-105"
        style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
      >
        {/* WhatsApp SVG icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.1 1.518 5.83L.057 23.215a.75.75 0 00.921.921l5.385-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.796-.527-5.374-1.446l-.385-.228-3.994 1.084 1.084-3.994-.228-.385A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
        </svg>
        WhatsApp
      </a>

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(11,31,51,0.98)' : '#0B1F33',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <img src={logoArman} alt="PT ARMAN JAYA MANDIRI" className="h-12 w-auto" />
            </div>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-300 hover:text-[#F97316] transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  {label}
                </button>
              ))}
              <a
                href="https://wa.me/6282165429971"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316] text-white px-5 py-2.5 rounded-lg hover:bg-[#ea6a0f] transition-colors text-sm"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Hubungi Kami
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B1F33] border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(({ id, label }) => (
                <button key={id} onClick={() => scrollToSection(id)} className="block w-full text-left text-gray-300 hover:text-[#F97316] py-2 text-sm">
                  {label}
                </button>
              ))}
              <a
                href="https://wa.me/6282165429971"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#F97316] text-white px-6 py-2.5 rounded-lg hover:bg-[#ea6a0f] transition-colors mt-2 text-sm"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section id="home" className="relative pt-20 min-h-[760px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1690897606066-0aa88b849203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mining equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/85 to-[#0B1F33]/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div
              className="inline-block mb-5 px-4 py-1.5 border border-[#F97316]/50 rounded-full"
              style={{ background: 'rgba(249,115,22,0.1)', opacity: 1, transition: 'opacity 0.8s ease' }}
            >
              <span className="text-[#F97316] text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>
                Berbasis di Balikpapan, Kalimantan Timur
              </span>
            </div>

            <h1 className="text-white mb-5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: '1.15' }}>
              Solusi Terintegrasi untuk{' '}
              <span className="text-[#F97316]">Pertambangan</span>,{' '}
              <span className="text-[#F97316]">Konstruksi</span>, &{' '}
              <span className="text-[#F97316]">Logistik</span>
            </h1>

            <p className="text-gray-300 mb-9 leading-relaxed" style={{ fontSize: '1.05rem' }}>
              Mitra profesional industri di Kalimantan Timur — andal, berpengalaman, dan siap mendukung operasional proyek Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6282165429971"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-lg hover:bg-[#ea6a0f] transition-all hover:shadow-lg hover:shadow-orange-500/30"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Hubungi Kami <ChevronRight size={18} />
              </a>
              <button
                onClick={() => scrollToSection('layanan')}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0B1F33] transition-all"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Lihat Layanan Kami <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F97316] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <Reveal key={i} delay={i * 80} className="text-center">
                <div className="text-white/80 flex justify-center mb-2">
                  <Icon size={28} />
                </div>
                <div className="text-white" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '2rem' }}>{value}</div>
                <div className="text-white/80 text-sm mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────────────────── */}
      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-[#F97316] text-xs uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>TENTANG KAMI</span>
              <h2 className="text-[#0B1F33] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
                Mitra Industri yang Profesional dan Terpercaya
              </h2>
              <p className="text-[#4B5563] mb-4 leading-relaxed">
                PT ARMAN JAYA MANDIRI adalah perusahaan yang berlokasi di Balikpapan, Kalimantan Timur, dengan fokus pada layanan jasa pemompaan air dan lumpur tambang, transportasi, reparasi mesin, serta perdagangan umum.
              </p>
              <p className="text-[#4B5563] mb-8 leading-relaxed">
                Dengan lokasi strategis di Kalimantan Timur yang dekat dengan kawasan industri dan pertambangan, kami siap menjadi mitra kerja terpercaya yang berorientasi pada kualitas dan keselamatan kerja.
              </p>
              <div className="flex flex-col gap-3 mb-9">
                {['Legalitas perusahaan lengkap & terdaftar resmi','Tim berpengalaman di sektor pertambangan & konstruksi','Layanan responsif 24 jam untuk kebutuhan darurat'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#F97316] flex-shrink-0" />
                    <span className="text-[#4B5563] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/6282165429971"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F97316] text-white px-7 py-3.5 rounded-lg hover:bg-[#ea6a0f] transition-colors"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Hubungi Kami <ChevronRight size={18} />
              </a>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1652303518379-c0ef1c9fb2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Industrial operations"
                  className="w-full rounded-2xl shadow-2xl object-cover h-[460px]"
                />
                <div className="absolute -bottom-5 -left-5 bg-[#F97316] text-white rounded-2xl px-6 py-4 shadow-xl">
                  <div className="text-2xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>5+</div>
                  <div className="text-sm text-white/90">Tahun Beroperasi</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────────── */}
      <section id="layanan" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-[#F97316] text-xs uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>LAYANAN KAMI</span>
            <h2 className="text-[#0B1F33] mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
              Solusi Lengkap untuk Berbagai Kebutuhan Industri
            </h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto">
              Kami menyediakan layanan terintegrasi yang mendukung kebutuhan operasional tambang, konstruksi, transportasi, dan perdagangan umum.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => {
              const Icon = svc.Icon;
              return (
                <Reveal key={i} delay={i * 70}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 h-full">
                    <div className="w-14 h-14 bg-[#FFF3E8] rounded-2xl flex items-center justify-center mb-6">
                      <Icon size={28} className="text-[#F97316]" />
                    </div>
                    <h3 className="text-[#0B1F33] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem' }}>
                      {svc.title}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed text-sm">{svc.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0B1F33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-[#F97316] text-xs uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>KENAPA MEMILIH KAMI</span>
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
              Keunggulan PT ARMAN JAYA MANDIRI
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => {
              const Icon = item.Icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="text-center p-8 rounded-2xl border border-white/10 hover:border-[#F97316]/40 transition-all h-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(249,115,22,0.18)' }}>
                      <Icon size={30} className="text-white" />
                    </div>
                    <h3 className="text-white mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Portfolio ──────────────────────────────────────────────────────── */}
      <section id="portofolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <span className="text-[#F97316] text-xs uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>PORTOFOLIO</span>
            <h2 className="text-[#0B1F33] mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
              Dokumentasi Proyek Kami
            </h2>
            <p className="text-[#4B5563] max-w-xl mx-auto">
              Dokumentasi nyata proyek yang telah kami kerjakan bersama mitra dan klien.
            </p>
          </Reveal>

          {/* Filter tabs */}
          <Reveal className="flex flex-wrap justify-center gap-3 mb-10">
            {portfolioTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-5 py-2 rounded-full text-sm transition-all"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  background: activeTag === tag ? '#F97316' : '#F5F7FA',
                  color: activeTag === tag ? '#fff' : '#4B5563',
                  border: activeTag === tag ? '2px solid #F97316' : '2px solid transparent',
                }}
              >
                {tag}
              </button>
            ))}
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, i) => (
              <Reveal key={`${activeTag}-${i}`} delay={i * 60}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/20 to-transparent flex items-end p-5">
                    <div>
                      <span className="inline-block bg-[#F97316] text-white text-xs px-2.5 py-0.5 rounded-full mb-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>{item.tag}</span>
                      <p className="text-white text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{item.title}</p>
                      <p className="text-gray-300 text-xs flex items-center gap-1 mt-1">
                        <MapPin size={11} /> {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-[#F97316] text-xs uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>TESTIMONI</span>
            <h2 className="text-[#0B1F33] mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
              Apa Kata Klien Kami
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star key={s} size={16} className="text-[#F97316] fill-[#F97316]" />
                    ))}
                  </div>
                  <p className="text-[#4B5563] leading-relaxed text-sm mb-6 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center text-white" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[#0B1F33] text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>{t.name}</p>
                      <p className="text-[#6B7280] text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Legality ───────────────────────────────────────────────────────── */}
      <section id="legalitas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-[#F97316] text-xs uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>LEGALITAS</span>
            <h2 className="text-[#0B1F33] mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
              Legalitas Perusahaan
            </h2>
          </Reveal>

          <Reveal>
            <div className="bg-[#F5F7FA] rounded-2xl p-8 md:p-12 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  {[
                    { Icon: FileText, label: 'Nama Perusahaan', value: 'PT ARMAN JAYA MANDIRI', href: undefined },
                    { Icon: MapPin, label: 'Alamat', value: 'Jl. Dr. Sutomo No. 71, Sumber Rejo, Balikpapan Tengah, Kota Balikpapan, Kalimantan Timur 76124', href: undefined },
                  ].map(({ Icon, label, value, href }, i) => (
                    <div key={i} className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 bg-[#FFF3E8] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="text-[#F97316]" size={20} />
                      </div>
                      <div>
                        <span className="text-[#F97316] text-xs uppercase tracking-wide block mb-1" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>{label}</span>
                        {href ? <a href={href} className="text-[#1F2937] hover:text-[#F97316] transition-colors">{value}</a> : <span className="text-[#1F2937]" style={{ fontFamily: 'var(--font-body)', fontWeight: label === 'Nama Perusahaan' ? 600 : 400 }}>{value}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {[
                    { Icon: Mail, label: 'Email', value: 'sales@armanjayamandiri.com', href: 'mailto:sales@armanjayamandiri.com' },
                    { Icon: Phone, label: 'Telepon / WhatsApp', value: '+62 821-6542-9971', href: 'https://wa.me/6282165429971' },
                  ].map(({ Icon, label, value, href }, i) => (
                    <div key={i} className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 bg-[#FFF3E8] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="text-[#F97316]" size={20} />
                      </div>
                      <div>
                        <span className="text-[#F97316] text-xs uppercase tracking-wide block mb-1" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>{label}</span>
                        <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-[#1F2937] hover:text-[#F97316] transition-colors">{value}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-[#6B7280] text-center text-sm">
                  Perusahaan telah terdaftar secara resmi melalui sistem perizinan berusaha di Indonesia. Dokumen legalitas dapat disediakan untuk kebutuhan kerja sama resmi.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Google Maps ────────────────────────────────────────────────────── */}
      <section id="kontak" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-[#F97316] text-xs uppercase tracking-widest mb-3 block" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>LOKASI KAMI</span>
            <h2 className="text-[#0B1F33] mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
              Temukan Kami di Balikpapan
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <Reveal className="space-y-5">
              {[
                { Icon: MapPin, title: 'Alamat', content: 'Jl. Dr. Sutomo No. 71, Sumber Rejo, Balikpapan Tengah, Kota Balikpapan, Kalimantan Timur 76124', href: undefined },
                { Icon: Phone, title: 'WhatsApp / Telepon', content: '+62 821-6542-9971', href: 'https://wa.me/6282165429971' },
                { Icon: Mail, title: 'Email', content: 'sales@armanjayamandiri.com', href: 'mailto:sales@armanjayamandiri.com' },
              ].map(({ Icon, title, content, href }, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFF3E8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#F97316]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-[#0B1F33] mb-1" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>{title}</h4>
                    {href
                      ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-[#F97316] hover:underline text-sm break-all">{content}</a>
                      : <p className="text-[#6B7280] text-sm leading-relaxed">{content}</p>
                    }
                  </div>
                </div>
              ))}
              <a
                href="https://wa.me/6282165429971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-6 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                <Phone size={18} /> Hubungi via WhatsApp
              </a>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[440px]">
              <iframe
                title="Lokasi PT ARMAN JAYA MANDIRI"
                src="https://maps.google.com/maps?q=Jl+Dr+Sutomo+No+71+Sumber+Rejo+Balikpapan+Tengah+Kalimantan+Timur&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="relative py-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565862452829-e33c0b781ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mining site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F33]/95 to-[#0B1F33]/80"></div>
        </div>
        <Reveal className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: '1.2' }}>
            Butuh Mitra yang Tepat untuk Kebutuhan Industri Anda?
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed" style={{ fontSize: '1.05rem' }}>
            Hubungi kami sekarang dan dapatkan solusi layanan terbaik untuk kebutuhan operasional, proyek, dan bisnis Anda.
          </p>
          <a
            href="https://wa.me/6282165429971"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white px-10 py-4 rounded-lg hover:bg-[#ea6a0f] transition-all hover:shadow-lg hover:shadow-orange-500/30 text-lg"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            <Phone size={20} /> Hubungi Kami Sekarang
          </a>
        </Reveal>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#061524] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={logoArman} alt="PT ARMAN JAYA MANDIRI" className="h-14 w-auto mb-5" />
              <p className="text-gray-400 leading-relaxed text-sm">
                Mitra profesional industri pertambangan, konstruksi, transportasi, dan perdagangan umum di Balikpapan, Kalimantan Timur.
              </p>
            </div>

            <div>
              <h3 className="text-white mb-5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem' }}>Menu</h3>
              <div className="space-y-3">
                {navLinks.map(({ id, label }) => (
                  <button key={id} onClick={() => scrollToSection(id)} className="block text-gray-400 hover:text-[#F97316] transition-colors text-sm">
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white mb-5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem' }}>Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#F97316] mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-400 text-sm">Jl. Dr. Sutomo No. 71, Sumber Rejo, Balikpapan Tengah, Kota Balikpapan, Kalimantan Timur 76124</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#F97316] flex-shrink-0" size={16} />
                  <a href="mailto:sales@armanjayamandiri.com" className="text-gray-400 hover:text-[#F97316] transition-colors text-sm">sales@armanjayamandiri.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#F97316] flex-shrink-0" size={16} />
                  <a href="https://wa.me/6282165429971" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F97316] transition-colors text-sm">+62 821-6542-9971</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">© 2026 PT ARMAN JAYA MANDIRI. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
