/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Shield, 
  Zap, 
  Award, 
  Clock,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { CORE_VALUES, PRODUCTS, PROJECTS } from './constants';

const COLORS = {
  primary: '#0A2463', // Deep Blue
  accent: '#E63946',  // Red
  white: '#FFFFFF',
  gray: '#F8F9FA',
  text: '#1D3557'
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('Protective & Marine');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));

  return (
    <div className="min-h-screen bg-white font-sans text-[#1D3557] selection:bg-[#0A2463] selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0A2463] flex items-center justify-center rounded-lg overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463] to-[#1D3557]"></div>
               <span className="relative text-white font-black text-2xl italic">T</span>
               <div className="absolute bottom-0 right-0 w-4 h-1 bg-[#E63946]"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-black tracking-tighter text-xl leading-none ${scrolled ? 'text-[#0A2463]' : 'text-white'}`}>TETSU</span>
              <span className={`font-bold tracking-widest text-[10px] leading-none ${scrolled ? 'text-[#E63946]' : 'text-white/80'}`}>PAINT</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-[#E63946] transition-colors ${
                  scrolled ? 'text-[#1D3557]' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#E63946] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#c12e39] transition-all shadow-lg shadow-red-500/20">
              Get Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#0A2463]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} className={scrolled ? 'text-[#0A2463]' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-[#0A2463]' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter text-[#0A2463] hover:text-[#E63946]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A2463] py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="input_file_1.png" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463] via-[#0A2463]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-[#E63946]"></div>
              <span className="text-white font-bold tracking-[0.3em] uppercase text-xs">PT Indah Warna Sejahtera</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tighter mb-10">
              TRUE <span className="text-[#E63946]">PERFORMANCE</span>,<br />
              REAL PROTECTION.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl leading-relaxed">
              Leading manufacturer of high-performance industrial, marine, and automotive coatings. 
              Engineered for extreme durability and international standards.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-[#E63946] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#c12e39] transition-all group shadow-xl shadow-red-500/20">
                Explore Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#0A2463] transition-all">
                Our Projects
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-12 text-white">
          <div className="flex flex-col">
            <span className="text-4xl font-black">10+</span>
            <span className="text-[10px] uppercase tracking-widest text-white/60">Years Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black">500+</span>
            <span className="text-[10px] uppercase tracking-widest text-white/60">Projects Done</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black">ISO</span>
            <span className="text-[10px] uppercase tracking-widest text-white/60">9001:2015 Certified</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="lab.png" 
                  alt="Laboratory" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#0A2463] p-10 rounded-3xl shadow-xl text-white max-w-xs hidden sm:block">
                <Shield className="text-[#E63946] mb-4" size={40} />
                <h3 className="text-xl font-black mb-2">International Standards</h3>
                <p className="text-sm text-white/70">Transforming from BEST Paint since 2014, we deliver world-class coating solutions.</p>
              </div>
            </motion.div>

            <div>
              <span className="text-[#E63946] font-black tracking-widest uppercase text-sm mb-4 block">Historical Company</span>
              <h2 className="text-5xl font-black tracking-tighter leading-none mb-8 text-[#0A2463]">
                PIONEERING THE FUTURE OF <span className="italic">COATING TECHNOLOGY</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                PT. Indah Warna Sejahtera adalah perusahaan manufaktur cat dan coating yang lahir dari transformasi brand BEST Paint, yang telah beroperasi sejak tahun 2014. 
                Kini di bawah payung Bangun Era Sejahtera Holding Company (BES), kami memperkuat eksistensi melalui brand <strong>TETSU Paint</strong>.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-black text-[#0A2463] mb-2 uppercase tracking-tighter">Visi</h4>
                  <p className="text-sm text-gray-500">Menjadi produsen cat lokal berstandar internasional yang inovatif, andal, dan berkontribusi aktif.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-black text-[#0A2463] mb-2 uppercase tracking-tighter">Misi</h4>
                  <p className="text-sm text-gray-500">Mengembangkan produk berkualitas tinggi dan menyediakan solusi pengecatan yang tepat guna.</p>
                </div>
              </div>

              <button className="flex items-center gap-2 text-[#0A2463] font-black uppercase tracking-widest hover:text-[#E63946] transition-colors group">
                Learn More About Us <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#E63946] font-black tracking-widest uppercase text-sm mb-4 block">Brand Architecture</span>
            <h2 className="text-6xl font-black tracking-tighter text-[#0A2463]">OUR BRANDS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* TETSU PAINT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="aspect-[16/9] overflow-hidden relative bg-[#0A2463]">
                <img 
                  src="tetsuink.png" 
                  alt="TETSU PAINT" 
                  className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-[#E63946]"></div>
                  <span className="text-[#E63946] font-black uppercase tracking-widest text-xs">Industrial Coating</span>
                </div>
                <h3 className="text-4xl font-black text-[#0A2463] mb-6 tracking-tighter uppercase">TETSU PAINT</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-8">
                  Brand cat dan protective coating premium yang terinspirasi dari kata "TETSU" (Besi). 
                  Dirancang untuk perlindungan optimal pada permukaan industri berat, infrastruktur, dan otomotif.
                </p>
                <a href="#products" className="inline-flex items-center gap-2 text-[#0A2463] font-black uppercase tracking-widest hover:text-[#E63946] transition-colors">
                  View Paint Products <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* TETSU LIQUID INK */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="aspect-[16/9] overflow-hidden relative bg-gray-100">
                <img 
                  src="tetsuink.png" 
                  alt="TETSU LIQUID INK" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-[#0A2463]"></div>
                  <span className="text-[#0A2463] font-black uppercase tracking-widest text-xs">Packaging Ink</span>
                </div>
                <h3 className="text-4xl font-black text-[#0A2463] mb-6 tracking-tighter uppercase">TETSU LIQUID INK</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-8">
                  Solusi tinta berkualitas tinggi untuk kebutuhan industri packaging. 
                  Menghadirkan varian warna yang tajam, stabil, dan ekonomis untuk hasil cetak maksimal.
                </p>
                <div className="inline-flex items-center gap-2 text-[#0A2463] font-black uppercase tracking-widest cursor-not-allowed opacity-50">
                  Coming Soon <Clock size={18} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#0A2463] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black tracking-tighter mb-4">"SHIELD" CORE VALUES</h2>
            <p className="text-white/60 uppercase tracking-[0.4em] text-sm">Our foundation for excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CORE_VALUES.map((value, idx) => (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-all"
              >
                <div className="text-6xl font-black text-[#E63946] mb-6 group-hover:scale-110 transition-transform origin-left">
                  {value.letter}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 bg-[#F8F9FA] relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0A2463]/[0.02] -skew-x-12 translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20 gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#E63946]"></span>
                <span className="text-[#E63946] font-black tracking-[0.3em] uppercase text-xs">Technical Solutions</span>
                <span className="w-12 h-[1px] bg-[#E63946]"></span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-[#0A2463] mb-8">
                HIGH-PERFORMANCE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2463] to-[#1D3557] italic">COATING SYSTEMS</span>
              </h2>
              <p className="text-gray-500 font-medium max-w-2xl mx-auto">
                Our products are engineered with precision chemistry to provide maximum protection in the most demanding industrial environments.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat 
                    ? 'bg-[#0A2463] text-white shadow-lg shadow-blue-900/20' 
                    : 'text-gray-400 hover:text-[#0A2463] hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="wait">
              {PRODUCTS.filter(p => p.category === activeCategory).map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-[#0A2463]/20 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(10,36,99,0.1)] flex flex-col"
                >
                  {/* Product Image Top */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-[16/10]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Technical Specs Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                       <span className="bg-white/90 backdrop-blur-sm text-[#0A2463] px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter shadow-sm">
                         ISO 9001
                       </span>
                       <span className="bg-[#E63946] text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter shadow-sm">
                         Premium
                       </span>
                    </div>
                  </div>

                  {/* Product Info Bottom */}
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-black text-[#E63946] uppercase tracking-[0.2em] mb-2 block">
                          {product.category}
                        </span>
                        <h3 className="text-2xl font-black text-[#0A2463] tracking-tighter uppercase leading-none">
                          {product.name}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#0A2463] group-hover:text-white transition-all shrink-0">
                        <ExternalLink size={16} />
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">
                      {product.description}
                    </p>

                    <div className="space-y-4 mb-10 flex-grow">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50 pb-2">
                        Key Performance Indicators
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {product.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E63946]"></div>
                            <span className="text-xs font-bold text-[#1D3557] uppercase tracking-tight">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <button className="flex-grow bg-[#0A2463] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#E63946] transition-all duration-300 shadow-lg shadow-blue-900/10">
                        Technical Data Sheet
                      </button>
                      <button className="w-14 h-14 rounded-2xl border-2 border-gray-100 flex items-center justify-center hover:border-[#0A2463] transition-all group/btn shrink-0">
                        <Mail size={20} className="text-gray-400 group-hover/btn:text-[#0A2463]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-12 md:p-16 lg:p-20 rounded-[3rem] bg-[#0A2463] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-3xl font-black tracking-tighter mb-2 uppercase">Need a custom formulation?</h4>
              <p className="text-white/60 font-medium">Our R&D team can develop specific coating solutions for your unique requirements.</p>
            </div>
            
            <button className="relative z-10 bg-[#E63946] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-red-500/40">
              Consult with Experts
            </button>
          </motion.div>
        </div>
      </section>

      {/* Company Personality Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#E63946] font-black tracking-widest uppercase text-sm mb-4 block">Our Identity</span>
            <h2 className="text-6xl font-black tracking-tighter text-[#0A2463]">COMPANY PERSONALITY</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { title: 'Reliable', desc: 'Dapat diandalkan dalam kualitas dan ketepatan waktu.', icon: <Clock size={32} /> },
              { title: 'Professional', desc: 'Menjunjung standar kerja tinggi dalam segala aspek.', icon: <Award size={32} /> },
              { title: 'Innovative', desc: 'Terus melakukan pengembangan teknologi untuk hasil optimal.', icon: <Zap size={32} /> },
              { title: 'Solution-Oriented', desc: 'Fokus pada kebutuhan dan tantangan yang dihadapi pelanggan.', icon: <CheckCircle2 size={32} /> },
              { title: 'Strong & Durable', desc: 'Mencerminkan karakter produk yang kuat dan tahan lama.', icon: <Shield size={32} /> },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gray-50 flex items-center justify-center text-[#0A2463] mb-6 group-hover:bg-[#0A2463] group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[#0A2463] mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#E63946] font-black tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
            <h2 className="text-6xl font-black tracking-tighter text-[#0A2463]">PROVEN PERFORMANCE</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-[#E63946] font-bold text-xs uppercase tracking-widest mb-1">{project.location}</span>
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-[#0A2463] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#1D3557] transition-all shadow-xl shadow-blue-900/20">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/ISO_9001_Logo.svg/1200px-ISO_9001_Logo.svg.png" alt="ISO 9001" className="h-16 mb-2 grayscale" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A2463]">9001:2015 Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-16 w-16 text-[#0A2463] mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A2463]">IAF Accredited</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-16 w-16 text-[#0A2463] mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A2463]">SCC Accredited</span>
            </div>
            <div className="max-w-xs text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#E63946] mb-1">Certificate Number</p>
              <p className="text-sm font-black text-[#0A2463]">SCC/INT/2601PN/23161</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-[#0A2463] text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
               <div className="relative z-10">
                <h2 className="text-5xl font-black tracking-tighter mb-12">LET'S PROTECT YOUR <br /> <span className="text-[#E63946]">ASSETS TOGETHER</span></h2>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-[#E63946]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-2">Address</h4>
                      <p className="text-lg font-medium leading-relaxed">
                        JL. INDUSTRI RAYA III, Desa Sukamantri,<br />
                        Kecamatan Pasar Kemis, Kabupaten Tangerang<br />
                        Provinsi Banten, 15710
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-[#E63946]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-2">Phone</h4>
                      <p className="text-2xl font-black">0823-1196-1095</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="text-[#E63946]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-2">Email</h4>
                      <p className="text-2xl font-black">tetsupaint@gmail.com</p>
                    </div>
                  </div>
                </div>
               </div>
            </div>

            <div className="lg:w-1/2 p-12 lg:p-20">
              <h3 className="text-3xl font-black text-[#0A2463] mb-8 tracking-tighter uppercase">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#0A2463] outline-none transition-all font-medium" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#0A2463] outline-none transition-all font-medium" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#0A2463] outline-none transition-all font-medium appearance-none">
                    <option>Product Inquiry</option>
                    <option>Project Collaboration</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                  <textarea className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#0A2463] outline-none transition-all font-medium h-32 resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-[#E63946] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#c12e39] transition-all shadow-xl shadow-red-500/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0A2463] flex items-center justify-center rounded-lg overflow-hidden relative">
                 <span className="relative text-white font-black text-lg italic">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-tighter text-lg leading-none text-[#0A2463]">TETSU</span>
                <span className="font-bold tracking-widest text-[8px] leading-none text-[#E63946]">PAINT</span>
              </div>
            </div>

            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#0A2463] transition-colors">{item}</a>
              ))}
            </div>

            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              © 2026 PT Indah Warna Sejahtera. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
