/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  TrendingUp, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeOdds: number;
  drawOdds: number;
  awayOdds: number;
  time: string;
  league: string;
}

// --- Mock Data ---
const LIVE_MATCHES: Match[] = [
  { id: '1', homeTeam: 'Arsenal', awayTeam: 'Liverpool', homeOdds: 2.45, drawOdds: 3.40, awayOdds: 2.85, time: '72\'', league: 'Premier League' },
  { id: '2', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', homeOdds: 1.95, drawOdds: 3.60, awayOdds: 3.20, time: '15\'', league: 'La Liga' },
  { id: '3', homeTeam: 'Gor Mahia', awayTeam: 'AFC Leopards', homeOdds: 2.10, drawOdds: 3.10, awayOdds: 3.50, time: 'HT', league: 'FKF Premier League' },
];

const TESTIMONIALS = [
  { name: "John K.", text: "Fastest payouts I've ever experienced in Kenya. M-Pesa withdrawal was instant!", rating: 5 },
  { name: "Sarah M.", text: "The AI predictions actually helped me win my first multi-bet. Highly recommend!", rating: 5 },
  { name: "David O.", text: "Clean interface and very easy to use on my phone. Best odds for local games.", rating: 4 },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F27D26] rounded-lg flex items-center justify-center">
              <Trophy className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">BETSMART</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-white/70 hover:text-[#F27D26] transition-colors">Sports</a>
            <a href="#" className="text-sm font-medium text-white/70 hover:text-[#F27D26] transition-colors">Live</a>
            <a href="#" className="text-sm font-medium text-white/70 hover:text-[#F27D26] transition-colors">Casino</a>
            <a href="#" className="text-sm font-medium text-white/70 hover:text-[#F27D26] transition-colors">Promotions</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-white hover:text-[#F27D26] transition-colors">Login</button>
            <button className="bg-[#F27D26] text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-[#ff8c3a] transition-all transform hover:scale-105">
              Join Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#" className="block text-lg font-medium text-white">Sports</a>
              <a href="#" className="block text-lg font-medium text-white">Live</a>
              <a href="#" className="block text-lg font-medium text-white">Casino</a>
              <a href="#" className="block text-lg font-medium text-white">Promotions</a>
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full py-3 text-center border border-white/20 rounded-xl text-white font-bold">Login</button>
                <button className="w-full py-3 text-center bg-[#F27D26] rounded-xl text-black font-bold">Join Now</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#F27D26]/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F27D26] text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3 fill-current" /> Kenya's #1 Betting Platform
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6">
            BET SMARTER.<br />
            <span className="text-[#F27D26]">WIN BIGGER.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10">
            Experience the future of betting with AI-powered predictions, instant M-Pesa payouts, and the best odds guaranteed in the market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#F27D26] text-black px-10 py-4 rounded-full text-lg font-black hover:bg-[#ff8c3a] transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Join Now & Get 100% Bonus <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
              View Live Odds
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold">Licensed & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-bold">Instant M-Pesa</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-bold">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BonusSection = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#050505] border border-white/10 rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27D26]/20 blur-[80px] -mr-32 -mt-32 rounded-full" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                GET UP TO <span className="text-[#F27D26]">KSH 10,000</span> WELCOME BONUS
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Double your first deposit instantly. Start your winning journey with the most generous welcome offer in Kenya.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#F27D26] w-5 h-5" /> 100% Match on first deposit
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#F27D26] w-5 h-5" /> Low wagering requirements
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#F27D26] w-5 h-5" /> Valid for all sports & games
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <button className="bg-[#F27D26] text-black px-8 py-4 rounded-xl font-black hover:bg-[#ff8c3a] transition-all">
                  Claim Bonus Now
                </button>
                <div className="text-xs text-white/40 font-medium uppercase tracking-widest">
                  *Limited time offer<br />T&Cs apply
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F27D26]/20 blur-3xl rounded-full" />
                <div className="relative bg-[#151515] border border-white/10 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-[#F27D26] rounded-xl flex items-center justify-center">
                      <Trophy className="text-black" />
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Current Balance</div>
                      <div className="text-2xl font-black text-white">KSH 20,000</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#F27D26] w-1/2" />
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      <span>Deposit: KSH 10,000</span>
                      <span className="text-[#F27D26]">Bonus: +KSH 10,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LiveBettingPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#F27D26] font-bold text-sm uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-[#F27D26] rounded-full animate-pulse" /> Live Now
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">TOP LIVE MATCHES</h2>
          </div>
          <button className="text-white/60 hover:text-white font-bold flex items-center gap-2 transition-colors">
            View All Live Games <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid gap-4">
          {LIVE_MATCHES.map((match) => (
            <div key={match.id} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-[#F27D26]/30 transition-all group">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="flex-1 w-full">
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">{match.league}</div>
                  <div className="flex items-center justify-between lg:justify-start lg:gap-12">
                    <div className="flex flex-col items-center lg:items-start gap-1">
                      <span className="text-lg font-bold text-white">{match.homeTeam}</span>
                      <span className="text-lg font-bold text-white">{match.awayTeam}</span>
                    </div>
                    <div className="bg-white/5 px-3 py-1 rounded text-[#F27D26] font-mono font-bold text-sm">
                      {match.time}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
                  {[
                    { label: '1', odds: match.homeOdds },
                    { label: 'X', odds: match.drawOdds },
                    { label: '2', odds: match.awayOdds }
                  ].map((bet) => (
                    <button key={bet.label} className="bg-white/5 hover:bg-[#F27D26] hover:text-black transition-all p-4 rounded-xl flex flex-col items-center gap-1 group/btn min-w-[80px]">
                      <span className="text-[10px] font-bold opacity-50 group-hover/btn:opacity-100 uppercase">{bet.label}</span>
                      <span className="text-lg font-black">{bet.odds.toFixed(2)}</span>
                    </button>
                  ))}
                </div>

                <button className="w-full lg:w-auto bg-white/5 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Bet Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Zap className="w-6 h-6" />, title: "Instant Payouts", desc: "Withdraw your winnings to M-Pesa in seconds, 24/7." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Best Odds", desc: "We offer the highest margins in the Kenyan market guaranteed." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Optimized", desc: "A seamless betting experience on any device, anywhere." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Fully Licensed", desc: "Regulated by BCLB. Your funds and data are safe with us." },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">WHY CHOOSE BETSMART?</h2>
          <p className="text-white/60 max-w-2xl mx-auto">We've built the ultimate platform for the modern Kenyan bettor.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#F27D26]/30 transition-all">
              <div className="w-12 h-12 bg-[#F27D26]/10 text-[#F27D26] rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">TRUSTED BY OVER <span className="text-[#F27D26]">500,000+</span> KENYANS</h2>
            <p className="text-white/60 mb-8">Join the fastest growing betting community and see why everyone is switching to BetSmart.</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-white">
                <div className="flex items-center gap-1 text-[#F27D26]">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                4.9/5 Average Rating
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(0, 2).map((t, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5">
                <div className="flex gap-1 text-[#F27D26] mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F27D26]/20 flex items-center justify-center text-[#F27D26] font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <span className="text-sm font-bold text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#F27D26] rounded-lg flex items-center justify-center">
                <Trophy className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">BETSMART</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs mb-8">
              The ultimate betting experience for Kenyan sports fans. Fast, secure, and rewarding.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F27D26] transition-colors cursor-pointer">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F27D26] transition-colors cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">Sports Betting</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">Live Betting</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">Casino Games</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">Virtual Sports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">Responsible Gambling</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Payments</h4>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/5 px-3 py-1 rounded text-[10px] font-bold text-white/60">M-PESA</div>
              <div className="bg-white/5 px-3 py-1 rounded text-[10px] font-bold text-white/60">VISA</div>
              <div className="bg-white/5 px-3 py-1 rounded text-[10px] font-bold text-white/60">MASTERCARD</div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
            © 2026 BETSMART KENYA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold text-white/30">
            <span className="flex items-center gap-1"><AlertCircle className="w-3 h-3" /> 18+ GAMBLING CAN BE ADDICTIVE</span>
            <span className="w-1 h-1 bg-white/10 rounded-full" />
            <span>BCLB LICENSE NO. 0000123</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#F27D26] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <LiveBettingPreview />
        <BonusSection />
        <Features />
        <SocialProof />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-t from-[#F27D26]/10 to-transparent">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">READY TO START WINNING?</h2>
            <p className="text-xl text-white/60 mb-10">Join thousands of Kenyans who are already betting smarter with us.</p>
            <button className="bg-[#F27D26] text-black px-12 py-5 rounded-full text-xl font-black hover:bg-[#ff8c3a] transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(242,125,38,0.3)]">
              Create Your Free Account
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
