import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <img src="/opic-moon.svg" alt="OPIC" width={56} height={56} className="animate-float" style={{filter:'drop-shadow(0 8px 22px rgba(255,89,199,0.35))'}} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#2A1B45]">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <header className="mx-auto flex max-w-6xl items-center px-6 py-4">
          <nav className="flex items-center gap-8 text-base text-white/80 w-full">
            <Logo />
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="/support" className="hover:text-white">Support</a>
          </nav>
        </header>
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-12 pt-10">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-opic-gradient">OPIC</span>
          </h1>
          <p className="mt-5 text-white/80 leading-relaxed max-w-full text-xl">
            OPIC automatically gathers all events and offers from the city's clubs and bars in one place, making it easy for locals, tourists, and exchange students to discover what's happening right now.
          </p>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 pt-6 pb-12 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "All events in one place",
                description:
                  "Clubs, bars and pop-ups — automatically aggregated and updated for you.",
              },
              {
                title: "Smart filters",
                description:
                  "See what's nearby, starting soon, or matching your music taste.",
              },
              {
                title: "Exclusive offers",
                description: "Happy hours, guestlists and discounts you won't find elsewhere.",
              },
            ].map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA and lower sections wrapper */}
      <section className="bg-[#2A1B45]">
        {/* Marquee events */}
        <section className="relative overflow-hidden pt-8 pb-16">
          <div className="flex w-[200%] animate-marquee">
            {[
              'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1571266028243-d220c6e6a4c5?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400&h=400&fit=crop'
            ].map((img, i) => (
              <div key={`m1-${i}`} className="w-[18%] px-2">
                <div className="rounded-2xl bg-[#0E1024]/70 ring-1 ring-white/10 overflow-hidden aspect-square flex flex-col">
                  <img 
                    src={img} 
                    alt={`Event ${i+1}`}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-3 bg-[#0E1024]/90">
                    <div className="text-white font-semibold text-sm">{`Event ${i+1}`}</div>
                    <div className="text-xs text-white/60 mt-1">Downtown — 22:00</div>
                  </div>
                </div>
              </div>
            ))}
            {[
              'https://images.unsplash.com/photo-1598387181032-a3103a2db5b1?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1547347298-4074aaa1a80e?w=400&h=400&fit=crop'
            ].map((img, i) => (
              <div key={`m2-${i}`} className="w-[18%] px-2">
                <div className="rounded-2xl bg-[#0E1024]/70 ring-1 ring-white/10 overflow-hidden aspect-square flex flex-col">
                  <img 
                    src={img} 
                    alt={`Event ${i+9}`}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-3 bg-[#0E1024]/90">
                    <div className="text-white font-semibold text-sm">{`Event ${i+9}`}</div>
                    <div className="text-xs text-white/60 mt-1">Riverside — 23:30</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-9 text-center text-white/60 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-t border-white/10">
          <p>© {new Date().getFullYear()} OPIC. All rights reserved.</p>
          <div className="mt-3 flex items-center justify-center gap-6 text-sm">
            <Link href="/legal" className="hover:text-white">Legal</Link>
            <span aria-hidden>•</span>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <span aria-hidden>•</span>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span aria-hidden>•</span>
            <Link href="/cookies" className="hover:text-white">How we use cookies</Link>
          </div>
        </footer>
      </section>
    </main>
  );
}

