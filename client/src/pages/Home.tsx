import React, { useEffect, useRef, useState, useMemo, useCallback, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Crosshair,
  Gauge,
  HeartPulse,
  Hospital,
  MapPin,
  Menu,
  MessageCircle,
  MousePointer2,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
  PhoneCall,
  Activity,
  Award,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/portfolio/ContactForm";

const BOOKING_URL = "https://app.automatefunnels.in/form/healthcare-digital-marketing-mtekry97";
const sourceImage = (url: string) => url;

const proofImages = [
  "https://mstravelmarketing.in/wp-content/uploads/2026/04/aaaa.jpeg",
  "https://mstravelmarketing.in/wp-content/uploads/2026/04/aaaaa.jpeg",
  "https://mstravelmarketing.in/wp-content/uploads/2026/04/aaa.jpeg",
  "https://mstravelmarketing.in/wp-content/uploads/2026/04/a.jpeg",
];

const seoImages = [
  "https://mstravelmarketing.in/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-11-at-10.48.35-AM.jpeg",
  "https://mstravelmarketing.in/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-11-at-10.54.05-AM.jpeg",
];

const feedbackImages = [1, 6, 4, 5, 2, 3].map(
  (n) => `https://www.marketingsafalta.com/wp-content/uploads/2026/08/${n}.png`
);

const specialties = [
  [
    "Hospitals",
    "Patient acquisition campaigns for multi-speciality hospitals to ensure consistent OPD footfall.",
    Hospital,
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Clinics & Doctors",
    "Steady appointment flow for individual doctors, focusing on high-intent local searches.",
    Stethoscope,
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Dental Clinics",
    "Targeted local ads that bring in nearby patients actively searching for dental treatments.",
    Sparkles,
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Diagnostic Centres",
    "Drive lab test bookings and home collection requests with precision search campaigns.",
    Search,
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Speciality Practices",
    "Tailored approaches for Gynaecology, Paediatrics, Orthopaedics, Dermatology & more.",
    HeartPulse,
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Wellness & Physio",
    "High-quality enquiry generation for wellness, rehabilitation & physiotherapy centres.",
    Zap,
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
  ],
] as const;

const advantages = [
  [
    "200+ Clients Trust Us",
    "We have successfully worked with 200+ doctors, clinics & hospitals across India, generating consistent bookings.",
    Users,
    "🤝",
    "anim-adv-shake",
  ],
  [
    "35+ Active Clients",
    "Right now, 35+ healthcare clients actively run campaigns with us. Proof that our results retain clients long-term.",
    CircleCheck,
    "⚡",
    "anim-adv-bolt",
  ],
  [
    "Leads That Convert",
    "We don't send random traffic. We bring patients who are actively searching for doctors & treatments near them.",
    Target,
    "🎯",
    "anim-adv-target",
  ],
  [
    "Data-Driven Optimization",
    "We monitor, optimize, and improve your ads regularly to reduce cost per lead and maximize your ROI.",
    BarChart3,
    "📊",
    "anim-adv-chart",
  ],
  [
    "Healthcare Expertise",
    "We understand patient search behaviour, demand trends, appointment psychology, and high-converting ad copies.",
    ShieldCheck,
    "🩺",
    "anim-adv-health",
  ],
  [
    "One-to-One Strategy",
    "Every client gets a personal meeting to build a customized ad strategy. No templates. No copy-paste campaigns.",
    Crosshair,
    "💡",
    "anim-adv-glow",
  ],
] as const;

const reviews = [
  [
    "Since we started with Marketing Safalta, our clinic's appointment calls have tripled. The team truly understands healthcare marketing.",
    "DR",
    "Dr. Rakesh Mehta",
    "Multi-speciality Clinic, Delhi",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=85",
  ],
  [
    "Our hospital's OPD footfall increased noticeably within the first month itself. Transparent reporting and real results, not just promises.",
    "SH",
    "City Hospital",
    "Admin Team, Kanpur",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=180&q=85",
  ],
  [
    "As a dental clinic owner, I was skeptical about Google Ads. Marketing Safalta proved me wrong with consistent, quality patient leads.",
    "DP",
    "Dr. Priya Nair",
    "Smile Care Dental, Noida",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=180&q=85",
  ],
] as const;

const TYPEWRITER_PHRASES = [
  "Multi-Speciality Hospitals",
  "Clinics & Doctors",
  "Dental & Orthodontic Practices",
  "Diagnostic & Pathology Labs",
  "Physiotherapy & Wellness Centers",
];

function CTA({ children = "Book a Free Strategy Call" }: { children?: ReactNode }) {
  return (
    <a className="doctor-cta group" href={BOOKING_URL} target="_blank" rel="noreferrer">
      <span className="relative z-10 flex items-center justify-center gap-2.5 w-full">
        {children}
        <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
      </span>
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}

function CountCard({
  target,
  suffix,
  label,
  icon: Icon,
  delay = 0,
}: {
  target: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  delay?: number;
}) {
  const [formattedValue, setFormattedValue] = useState("0");
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;
    let frame = 0;
    let timer: any;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        timer = setTimeout(() => {
          const started = performance.now();
          const duration = 1400;

          const tick = (now: number) => {
            const elapsed = now - started;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;

            if (progress < 1) {
              if (target <= 10) {
                setFormattedValue(current.toFixed(1));
              } else {
                setFormattedValue(Math.round(current).toString());
              }
              frame = requestAnimationFrame(tick);
            } else {
              setFormattedValue(target.toString());
            }
          };

          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [target, delay]);

  return (
    <Reveal className="count-card" delay={delay}>
      <div ref={counterRef}>
        <Icon size={20} />
        <strong>
          {formattedValue}
          {suffix}
        </strong>
        <span>{label}</span>
      </div>
    </Reveal>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return (
    <Reveal className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

function StrategyCard({
  title,
  body,
  Icon,
  image,
  index,
  delay,
}: {
  title: string;
  body: string;
  Icon: LucideIcon;
  image: string;
  index: number;
  delay: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -9, y: x * 11 });
    setActive(true);
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setActive(false);
  };

  const shineX = active ? `${50 + tilt.y * 2.7}%` : "50%";
  const shineY = active ? `${50 + tilt.x * -2.7}%` : "50%";

  return (
    <Reveal className="strategy-reveal" delay={delay}>
      <div
        className={`strategy-card ${active ? "is-tilting" : ""}`}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        onPointerCancel={resetTilt}
        style={
          {
            "--tilt-x": `${tilt.x}deg`,
            "--tilt-y": `${tilt.y}deg`,
            "--shine-x": shineX,
            "--shine-y": shineY,
          } as React.CSSProperties
        }
      >
        <div className="strategy-card-shine" />
        <div className="strategy-image-wrap">
          <img src={image} alt={`${title} healthcare marketing`} />
          <div className="strategy-image-tint" />
          <span className="strategy-image-label">
            <span className="pulse" /> {title}
          </span>
          <span className="strategy-image-scan" />
        </div>
        <div className="strategy-card-body">
          <div className="strategy-icon">
            <Icon size={21} />
          </div>
          <div>
            <span>0{index}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
          <ChevronRight className="strategy-arrow" size={18} />
        </div>
      </div>
    </Reveal>
  );
}

interface ScreenshotItem {
  src: string;
  alt: string;
  category?: string;
}

function ScreenshotLightbox({
  gallery,
  onClose,
}: {
  gallery: {
    images: ScreenshotItem[];
    initialIndex: number;
  };
  onClose: () => void;
}) {
  const { images, initialIndex } = gallery;
  const [[page, direction], setPage] = useState([initialIndex, 0]);
  const total = images.length;
  const isDraggingRef = useRef(false);

  
  const currentIndex = ((page % total) + total) % total;
  const currentImage = images[currentIndex] || images[0];

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
    },
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, paginate]);

  
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isDraggingRef.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diffX = e.touches[0].clientX - touchStartXRef.current;
    if (Math.abs(diffX) > 10) {
      isDraggingRef.current = true;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - touchStartXRef.current;
    const diffY = endY - (touchStartYRef.current ?? endY);

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        
        paginate(-1);
      } else {
        
        paginate(1);
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current) return;
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="screenshot-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Full screenshot viewer"
      onClick={handleBackdropClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      
      <div className="lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2.5">
          {currentImage.category && (
            <span className="lightbox-title-badge">
              <Sparkles size={13} className="text-[#26A69A]" />
              {currentImage.category}
            </span>
          )}
          <span className="lightbox-counter">
            {currentIndex + 1} / {total}
          </span>
        </div>

        <button
          onClick={onClose}
          className="lightbox-close-btn"
          aria-label="Close screenshot viewer"
          title="Close (Esc)"
        >
          <X size={20} />
        </button>
      </div>

      
      <div className="lightbox-content-wrap" onClick={(e) => e.stopPropagation()}>
        
        <div className="lightbox-img-stage">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={currentIndex}
              src={sourceImage(currentImage.src)}
              alt={currentImage.alt}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 100 : direction < 0 ? -100 : 0,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                x: direction < 0 ? 100 : -100,
                scale: 0.98,
                transition: { duration: 0.18, ease: "easeIn" },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.65}
              onDragStart={() => {
                isDraggingRef.current = true;
              }}
              onDragEnd={(_e, { offset, velocity }) => {
                if (offset.x < -30 || velocity.x < -300) {
                  paginate(1);
                } else if (offset.x > 30 || velocity.x > 300) {
                  paginate(-1);
                }
                setTimeout(() => {
                  isDraggingRef.current = false;
                }, 60);
              }}
              className="lightbox-main-img"
              draggable={false}
            />
          </AnimatePresence>
        </div>
      </div>

      
      <div className="lightbox-bottom-bar" onClick={(e) => e.stopPropagation()}>
        {total > 1 && (
          <div className="lightbox-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`lightbox-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => {
                  setPage([idx, idx > currentIndex ? 1 : -1]);
                }}
                aria-label={`Go to screenshot ${idx + 1}`}
              />
            ))}
          </div>
        )}
        <div className="lightbox-hint">
          <span>👈 Swipe left/right or use arrow buttons 👉</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [lightboxGallery, setLightboxGallery] = useState<{
    images: ScreenshotItem[];
    initialIndex: number;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "gads" | "seo">("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);

  const pauseAutoScroll = () => {
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const resumeAutoScroll = (delay = 1800) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, delay);
  };

  
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.85;

    const step = () => {
      if (!isInteractingRef.current) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handleMarqueeMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || !marqueeRef.current) return;
    pauseAutoScroll();
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - marqueeRef.current.offsetLeft;
    scrollLeftStartRef.current = marqueeRef.current.scrollLeft;
  };

  const handleMarqueeMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !marqueeRef.current) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    marqueeRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMarqueeMouseUp = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      resumeAutoScroll(1500);
    }
  };

  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeTab]);

  useEffect(() => {
    const fullPhrase = TYPEWRITER_PHRASES[currentPhraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullPhrase.length) {
          setCurrentText(fullPhrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullPhrase.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="doctor-site relative">
      
      <AnimatedBackground />

      
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span className="top-strip-spacer" />
          <span className="top-location">
            <MapPin size={13} /> Across India
          </span>
        </div>
      </div>

      
      <header className="doctor-header">
        <div className="container header-inner">
          <a className="brand" href="#home" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/mslogo.png"
              alt="Marketing Safalta Healthcare Performance Marketing"
            />
          </a>

          
          <div className="neon-welcome" aria-label="Welcome to Marketing Safalta">
            <span>WELCOME TO</span>
            <strong>MARKETING SAFALTA</strong>
          </div>

          <nav className={mobileMenuOpen ? "is-open" : ""}>
            <a href="#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
            <a href="#strategy" onClick={() => setMobileMenuOpen(false)}>Our Strategy</a>
            <a href="#advantage" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            
            <div className="mobile-nav-theme-row md:hidden flex items-center justify-between pt-3 mt-1 border-t border-[#E0F2F1] dark:border-[#1E2D33] px-2">
              <span className="text-sm font-extrabold text-black dark:text-[#ECEFF1]">Theme Mode:</span>
              <ThemeToggle />
            </div>
            <div className="pt-2 md:hidden">
              <a
                className="doctor-cta w-full text-center justify-center !py-3.5 !text-[16px] font-extrabold"
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Free Strategy Call
                <ArrowRight size={18} />
              </a>
            </div>
          </nav>

          <div className="header-actions flex items-center gap-2.5">
            <a
              className="doctor-cta header-cta hidden sm:inline-flex !py-2.5 !px-5 !text-[14.5px] font-extrabold"
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book Strategy Call
              <ArrowRight size={16} />
            </a>
            <ThemeToggle className="header-theme-toggle" />
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      
      <main className="relative z-10">
        
        
        
        <section className="hero-section" id="home">
          <div className="container hero-layout">
            <Reveal className="hero-copy">
              <div className="section-eyebrow">
                <span className="pulse-wrap">
                  <span className="pulse-dot" />
                  <span className="pulse-ring" />
                </span>
                Marketing Safalta • Healthcare Growth Partner
              </div>

              <h1>
                Get <span>100+ Patient Appointments</span> in Just 30 Days!
              </h1>

              
              <div className="h-8 flex items-center gap-2 text-base sm:text-lg font-extrabold text-black dark:text-white my-2">
                <span className="text-black dark:text-gray-300 font-extrabold">Customized for:</span>
                <span className="text-[#00897B] font-extrabold border-b-2 border-[#00897B] pb-0.5">
                  {currentText}
                  <span className="animate-pulse ml-0.5">|</span>
                </span>
              </div>

              <p className="hero-subtitle">
                Result-driven performance marketing strategies designed to grow your healthcare business with more
                visibility, better enquiries, and a steady appointment flow.
              </p>

              
              <div className="flex flex-wrap gap-2 pt-1 pb-2">
                {["Google Ads", "GMB Local SEO", "Patient Funnels", "OPD Footfall", "Meta Ads", "Pan-India"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm font-extrabold bg-[#E0F2F1] dark:bg-[#12242B] text-[#00897B] dark:text-[#26A69A] border border-[#B2DFDB] dark:border-[#1E3A3A] shadow-xs"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div className="hero-actions">
                <CTA />
                <a className="watch-link" href="#results">
                  <span className="play-circle">
                    <MousePointer2 size={14} />
                  </span>{" "}
                  See our results
                </a>
              </div>

              <div className="hero-trust">
                <Check size={15} /> No confusing reports &nbsp; <Check size={15} /> No copy-paste campaigns
              </div>
            </Reveal>

            
            <Reveal className="hero-visual" delay={120}>
              <div className="doctor-photo-frame">
                <div className="photo-grid" />
                <video
                  className="hero-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster={sourceImage("https://marketingsafalta.com/wp-content/uploads/2026/09/Hulp3iSjQls-HD.jpg")}
                  aria-label="Healthcare marketing video"
                >
                  <source
                    src="https://marketingsafalta.com/wp-content/uploads/2026/09/vidssave.com-%F0%9F%94%A5Digital-Marketing-for-Doctors-Clinics-Hospitals-_-Daily-Patients-Lane-Ka-Proven-Formula-360P.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="floating-result result-one">
                  <span className="result-icon">
                    <CalendarCheck2 size={15} />
                  </span>
                  <div>
                    <strong>+100</strong>
                    <small>Appointments</small>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <i />
          </div>

          <div className="hero-info-badge">
            <span className="status-dot" /> Healthcare performance marketing for doctors, clinics &amp; hospitals
          </div>
        </section>

        
        
        
        <section className="promise-section">
          <div className="container promise-grid">
            <Reveal className="promise-item">
              <div className="promise-header">
                <div className="promise-icon-wrap call-wrap anim-call" title="Calls">
                  <PhoneCall size={19} />
                </div>
                <span>01</span>
              </div>
              <strong>Get More Calls</strong>
              <p>Reach patients actively searching for doctors and treatments.</p>
            </Reveal>

            <Reveal className="promise-item" delay={70}>
              <div className="promise-header">
                <div className="promise-icon-wrap wa-wrap anim-wa" title="WhatsApp">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.5C8.86 7.5 8.57 7.56 8.33 7.83C8.08 8.09 7.38 8.75 7.38 10.09C7.38 11.43 8.36 12.72 8.5 12.9C8.63 13.08 10.42 15.84 13.16 17.03C15.44 18.01 15.9 17.81 16.39 17.77C16.88 17.72 17.98 17.11 18.21 16.47C18.44 15.82 18.44 15.27 18.37 15.15C18.3 15.04 18.12 14.97 17.85 14.83C17.57 14.7 16.23 14.04 15.98 13.95C15.73 13.86 15.55 13.81 15.37 14.09C15.18 14.36 14.65 14.97 14.49 15.16C14.33 15.34 14.17 15.37 13.89 15.23C13.62 15.09 12.73 14.8 11.67 13.86C10.85 13.12 10.29 12.22 10.13 11.94C9.97 11.66 10.11 11.52 10.25 11.38C10.38 11.25 10.53 11.05 10.67 10.89C10.81 10.73 10.86 10.62 10.95 10.43C11.04 10.25 11 10.09 10.93 9.95C10.86 9.81 10.31 8.46 10.08 7.91C9.86 7.37 9.63 7.45 9.47 7.44C9.31 7.44 9.13 7.44 9.04 7.5Z" />
                  </svg>
                </div>
                <span>02</span>
              </div>
              <strong>More WhatsApp Enquiries</strong>
              <p>Turn high-intent searches into direct conversations.</p>
            </Reveal>

            <Reveal className="promise-item" delay={140}>
              <div className="promise-header">
                <div className="promise-icon-wrap patients-wrap anim-patients" title="Clients & Patients">
                  <Users size={19} />
                </div>
                <span>03</span>
              </div>
              <strong>More Patients</strong>
              <p>Build a steady appointment flow for your practice.</p>
            </Reveal>

            <Reveal className="promise-item" delay={210}>
              <div className="promise-header">
                <div className="promise-icon-wrap roi-wrap anim-roi" title="Better ROI">
                  <TrendingUp size={19} />
                </div>
                <span>04</span>
              </div>
              <strong>Better ROI</strong>
              <p>Track, optimize, and grow with data-driven decisions.</p>
            </Reveal>
          </div>
        </section>

        
        
        
        <section className="partner-section">
          <div className="container">
            <div className="partner-grid">
              
              <Reveal className="partner-card">
                <div className="partner-card-top">
                  <div className="partner-logo-box anim-partner-meta">
                    <img
                      src="/meta-partner.png"
                      alt="Meta Certified Partner"
                      className="partner-logo-img"
                    />
                  </div>
                  <h3>Meta Certified Partner</h3>
                </div>
                <div className="partner-divider" />
                <div className="partner-card-bottom">
                  <p>Trusted Partner for Meta (Facebook &amp; Instagram)</p>
                </div>
              </Reveal>

              
              <Reveal className="partner-card" delay={100}>
                <div className="partner-card-top">
                  <div className="partner-logo-box anim-partner-google">
                    <img
                      src="/google-partner.png"
                      alt="Certified Google Partner"
                      className="partner-logo-img google-logo-img"
                    />
                  </div>
                  <h3>Certified Google Partner</h3>
                </div>
                <div className="partner-divider" />
                <div className="partner-card-bottom">
                  <p>Certified Google Ads Specialist for Healthcare Campaigns.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        
        
        
        <section className="results-section" id="results">
          <div className="container">
            <SectionHeading
              eyebrow="Proof that moves the needle"
              title={
                <>
                  Google Ads Results <span>For Doctors &amp; Clinics</span>
                </>
              }
              text="We don't just generate traffic. We generate conversations that move patients closer to your clinic."
            />

            
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 sm:mb-10">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-extrabold transition-all duration-200 ${activeTab === "all"
                    ? "bg-[#00897B] text-white shadow-md shadow-[#00897B]/25"
                    : "bg-[#F5FBFA] dark:bg-[#141E23] text-black dark:text-[#ECEFF1] hover:bg-[#E0F2F1]"
                  }`}
              >
                All Proof ({proofImages.length + seoImages.length})
              </button>
              <button
                onClick={() => setActiveTab("gads")}
                className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-extrabold transition-all duration-200 ${activeTab === "gads"
                    ? "bg-[#00897B] text-white shadow-md shadow-[#00897B]/25"
                    : "bg-[#F5FBFA] dark:bg-[#141E23] text-black dark:text-[#ECEFF1] hover:bg-[#E0F2F1]"
                  }`}
              >
                Google Ads Proof ({proofImages.length})
              </button>
              <button
                onClick={() => setActiveTab("seo")}
                className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-extrabold transition-all duration-200 ${activeTab === "seo"
                    ? "bg-[#00897B] text-white shadow-md shadow-[#00897B]/25"
                    : "bg-[#F5FBFA] dark:bg-[#141E23] text-black dark:text-[#ECEFF1] hover:bg-[#E0F2F1]"
                  }`}
              >
                GMB Local SEO ({seoImages.length})
              </button>
            </div>

            
            {(activeTab === "all" || activeTab === "gads") && (
              <div className="proof-grid mb-12">
                {proofImages.map((src, i) => (
                  <Reveal className="proof-card screenshot-tappable" delay={i * 70} key={src}>
                    <button
                      className="screenshot-button"
                      onClick={() => {
                        const gadsItems = proofImages.map((img, idx) => ({
                          src: img,
                          alt: `Google Ads Campaign Result #${idx + 1}`,
                          category: "Google Ads Campaign Results",
                        }));
                        const seoItems = seoImages.map((img, idx) => ({
                          src: img,
                          alt: `GMB Local SEO Ranking #${idx + 1}`,
                          category: "GMB Local SEO Rankings",
                        }));
                        setLightboxGallery({
                          images: activeTab === "all" ? [...gadsItems, ...seoItems] : gadsItems,
                          initialIndex: i,
                        });
                      }}
                      aria-label={`View Google Ads campaign result ${i + 1} full screen`}
                    >
                      <div className="proof-index">0{i + 1}</div>
                      <img src={sourceImage(src)} alt="Google Ads campaign results" />
                      <div className="proof-caption">
                        <BarChart3 size={15} /> Tap to view full screenshot
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            )}

            
            {(activeTab === "all" || activeTab === "seo") && (
              <>
                <div className="results-divider">
                  <span>Local visibility that compounds</span>
                  <div />
                </div>
                <SectionHeading
                  eyebrow="Own your neighbourhood"
                  title={
                    <>
                      GMB SEO Results <span>For Doctors &amp; Clinics</span>
                    </>
                  }
                />
                <div className="seo-grid">
                  {seoImages.map((src, i) => (
                    <Reveal className="seo-card screenshot-tappable" delay={i * 100} key={src}>
                      <button
                        className="screenshot-button"
                        onClick={() => {
                          const gadsItems = proofImages.map((img, idx) => ({
                            src: img,
                            alt: `Google Ads Campaign Result #${idx + 1}`,
                            category: "Google Ads Campaign Results",
                          }));
                          const seoItems = seoImages.map((img, idx) => ({
                            src: img,
                            alt: `GMB Local SEO Ranking #${idx + 1}`,
                            category: "GMB Local SEO Rankings",
                          }));
                          setLightboxGallery({
                            images: activeTab === "all" ? [...gadsItems, ...seoItems] : seoItems,
                            initialIndex: activeTab === "all" ? proofImages.length + i : i,
                          });
                        }}
                        aria-label={`View GMB SEO result ${i + 1} full screen`}
                      >
                        <img src={sourceImage(src)} alt="GMB SEO result" />
                        <span>
                          <MapPin size={14} /> Tap to view full screenshot
                        </span>
                      </button>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        
        
        
        <section className="feedback-section">
          <div className="container">
            <SectionHeading
              eyebrow="Real feedback from our clients"
              title={
                <>
                  Proof from the <span>practice floor</span>
                </>
              }
              text="Swipe, scroll, or tap any screenshot to inspect the complete client conversation."
            />
            <div
              className="feedback-marquee"
              ref={marqueeRef}
              onMouseEnter={pauseAutoScroll}
              onMouseLeave={() => {
                isMouseDownRef.current = false;
                resumeAutoScroll(1000);
              }}
              onTouchStart={pauseAutoScroll}
              onTouchMove={pauseAutoScroll}
              onTouchEnd={() => resumeAutoScroll(1800)}
              onWheel={() => {
                pauseAutoScroll();
                resumeAutoScroll(1800);
              }}
              onMouseDown={handleMarqueeMouseDown}
              onMouseMove={handleMarqueeMouseMove}
              onMouseUp={handleMarqueeMouseUp}
            >
              <div className="feedback-track">
                {[...feedbackImages, ...feedbackImages, ...feedbackImages, ...feedbackImages].map((src, i) => (
                  <button
                    className="feedback-image screenshot-button"
                    key={`${src}-${i}`}
                    onClick={() =>
                      setLightboxGallery({
                        images: feedbackImages.map((img, idx) => ({
                          src: img,
                          alt: `Client Feedback Screenshot #${idx + 1}`,
                          category: "Verified Client Conversations",
                        })),
                        initialIndex: i % feedbackImages.length,
                      })
                    }
                    aria-label={`View client feedback screenshot ${(i % feedbackImages.length) + 1
                      } full screen`}
                  >
                    <img src={sourceImage(src)} alt="Client feedback" />
                    <span className="feedback-view-label">View full</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="gallery-hint">
              <MousePointer2 size={14} /> Swipe to browse · Tap any screenshot to view full
            </div>
          </div>
        </section>

        {/* =========================================================
            SPECIALISTS SECTION (Matched to Image 1, below feedback)
            ========================================================= */}
        <section className="specialists-section" id="specialists">
          <div className="container">
            <div className="specialists-grid">
              {/* Left Column: Founder & Pitch */}
              <Reveal className="specialists-left">
                <h2>Healthcare specialists.</h2>
                <p>
                  We specialize exclusively in Google Ads for the healthcare industry. Every campaign is built from a deep
                  understanding of patient demand, customer search behaviour and appointment psychology.
                </p>

                <div className="founder-showcase">
                  <div className="founder-image-wrapper">
                    <div className="founder-glow"></div>
                    <img
                      className="founder-img"
                      src="/raj-thakur.png"
                      alt="Raj Thakur, CEO Marketing Safalta"
                      width="440"
                      height="480"
                      loading="lazy"
                    />

                    {/* Floating Founder Badge */}
                    <div className="founder-badge">
                      <span className="badge-pulse"></span>
                      <div className="founder-badge-info">
                        <small>• MEET THE FOUNDER</small>
                        <strong>Raj Thakur</strong>
                        <em>CEO, Marketing Safalta</em>
                      </div>
                      <span className="badge-sparkle">✨</span>
                    </div>
                  </div>
                </div>

                <div className="specialists-cta-wrap">
                  <CTA>Book a Free Strategy Call</CTA>
                </div>
              </Reveal>

              {/* Right Column: 4 Numbered Feature Cards (01, 02, 03, 04) */}
              <div className="specialist-cards">
                {/* Card 01 */}
                <Reveal className="spec-card" delay={60}>
                  <div className="spec-card-top">
                    <span className="spec-card-num">01</span>
                    <div className="spec-card-icon">
                      <PhoneCall size={22} />
                    </div>
                  </div>
                  <h3>Leads That Actually Convert</h3>
                  <p>
                    We don't send random traffic. We bring patients who are actively searching for doctors, clinics &amp; treatments near them.
                  </p>
                </Reveal>

                {/* Card 02 */}
                <Reveal className="spec-card" delay={120}>
                  <div className="spec-card-top">
                    <span className="spec-card-num">02</span>
                    <div className="spec-card-icon">
                      <BarChart3 size={22} />
                    </div>
                  </div>
                  <h3>Data-Driven Optimization</h3>
                  <p>
                    We monitor, optimize, and improve your ads regularly to reduce cost per lead and maximize your ROI.
                  </p>
                </Reveal>

                {/* Card 03 */}
                <Reveal className="spec-card" delay={180}>
                  <div className="spec-card-top">
                    <span className="spec-card-num">03</span>
                    <div className="spec-card-icon">
                      <Sparkles size={22} />
                    </div>
                  </div>
                  <h3>Healthcare Industry Expertise</h3>
                  <p>
                    We understand the healthcare industry inside out: patient search behavior, treatment seasonality, appointment psychology, and high-converting ad copies.
                  </p>
                </Reveal>

                {/* Card 04 */}
                <Reveal className="spec-card" delay={240}>
                  <div className="spec-card-top">
                    <span className="spec-card-num">04</span>
                    <div className="spec-card-icon">
                      <Users size={22} />
                    </div>
                  </div>
                  <h3>One-to-One Strategy Meeting</h3>
                  <p>
                    Every client gets a personal one-to-one meeting to understand their business and build a customized ad strategy. No templates. No copy-paste.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="strategy-section" id="strategy">
          <div className="container strategy-grid">
            <Reveal className="strategy-intro">
              <SectionHeading
                eyebrow="What We Do"
                title={
                  <>
                    Our Specialized <span>Strategy</span>
                  </>
                }
                text="Result-Driven Performance Marketing Strategies Designed to Grow Your Healthcare Business."
              />
              <div className="strategy-intro-note">
                <CircleCheck size={16} /> Visual systems for every stage of the patient journey
              </div>
              <CTA />
            </Reveal>

            <div className="strategy-list">
              {specialties.map(([title, body, Icon, image], i) => (
                <StrategyCard
                  key={title}
                  title={title}
                  body={body}
                  Icon={Icon}
                  image={image}
                  index={i + 1}
                  delay={i * 55}
                />
              ))}
            </div>
          </div>
        </section>

        
        
        
        <section className="metrics-section">
          <div className="container metrics-grid">
            <CountCard target={200} suffix="+" label="Clients Served" icon={Users} />
            <CountCard target={35} suffix="+" label="Active Clients" icon={Gauge} delay={70} />
            <CountCard target={8} suffix="K+" label="Leads Generated" icon={TrendingUp} delay={140} />
            <CountCard target={95} suffix="%" label="Healthcare Focus" icon={HeartPulse} delay={210} />
          </div>
        </section>

        
        
        
        <section className="advantage-section" id="advantage">
          <div className="container">
            <SectionHeading
              eyebrow="The Safalta Advantage"
              title={
                <>
                  Why <span>Marketing Safalta?</span>
                </>
              }
              text="We’re Not General Marketers. We Specialize in Performance Marketing That Helps Healthcare Businesses Get More Appointments & Patients."
            />
            <div className="advantage-grid">
              {advantages.map(([title, body, Icon, emoji, animClass], i) => (
                <Reveal className="advantage-card" delay={i * 55} key={title}>
                  <div className="advantage-top-row">
                    <div className={`advantage-icon-badge ${animClass}`}>
                      <span className="adv-emoji-anim" role="img" aria-hidden="true">
                        {emoji}
                      </span>
                      <Icon size={18} className="adv-lucide-icon" />
                    </div>
                    <span className="adv-number">0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </Reveal>
              ))}
            </div>
            <div className="center-cta">
              <CTA />
            </div>
          </div>
        </section>

        
        
        
        <section className="reviews-section" id="reviews">
          <div className="container">
            <SectionHeading
              eyebrow="Client Reviews"
              title={
                <>
                  What Our <span>Clients Say</span>
                </>
              }
            />
            <div className="reviews-grid">
              {reviews.map(([quote, initials, name, org, photo], i) => (
                <Reveal className="review-card" delay={i * 80} key={name}>
                  <div className="review-stars">★★★★★</div>
                  <p>“{quote}”</p>
                  <div className="review-person">
                    <img src={photo} alt={name} />
                    <div>
                      <strong>{name}</strong>
                      <small>{org}</small>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="center-cta">
              <CTA />
            </div>
          </div>
        </section>

        
        
        
        <section className="py-8 sm:py-20 bg-white dark:bg-[#0B1114]" id="contact">
          <div className="container">
            <SectionHeading
              eyebrow="Direct Consultation Request"
              title={
                <>
                  Ready to <span>Grow Your Practice?</span>
                </>
              }
              text="Fill out this quick form to schedule your dedicated 1-on-1 healthcare growth consultation."
            />
            <ContactForm />
          </div>
        </section>

        
        
        
        <section className="closing-section">
          <div className="closing-lines" />
          <div className="container closing-inner">
            <Reveal>
              <div className="section-eyebrow">
                <span className="pulse" /> Ready to grow?
              </div>
              <h2>More appointments start with a better system.</h2>
              <p>
                Book a free strategy call and discover what performance marketing can do for your healthcare business.
              </p>
              <CTA />
            </Reveal>
          </div>
        </section>
      </main>

      
      {lightboxGallery && (
        <ScreenshotLightbox
          gallery={lightboxGallery}
          onClose={() => setLightboxGallery(null)}
        />
      )}

      
      <footer className="doctor-footer">
        <div className="container footer-inner">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <img
                src="/mslogo.png"
                alt="Marketing Safalta"
                className="w-10 h-10 object-contain rounded-xl p-1 bg-white footer-logo-img"
              />
              <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1">
                Marketing <span className="text-[#26A69A]">Safalta</span>
              </span>
            </div>
            <p>Performance marketing for healthcare clinics, doctors & hospitals across India.</p>
            <p className="mt-1 text-sm text-[#80CBC4]">
              Healthcare Growth Strategy Desk • India-wide Support
            </p>
          </div>
          <span className="text-sm text-[#90A4AE]">© {new Date().getFullYear()} Marketing Safalta. All rights reserved.</span>
        </div>
      </footer>

      
      <a
        className="floating-call"
        href="#booking-form"
        onClick={(e) => {
          const el = document.getElementById("booking-form");
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        <CalendarCheck2 size={19} /> Book a Free Consultation
      </a>
    </div>
  );
}
