export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Digital Security Systems",
    legalName: "Digital Security Systems",
    tagline: "Securing What Matters Most.",
    description:
      "Digital Security Systems is a leading Harare-based security solutions provider specializing in CCTV, access control, alarm systems, and integrated security infrastructure for homes and businesses.",
    phone: "+263 71 299 2969",
    phoneRaw: "+263712992969",
    whatsappNumber: "263712992969",
    email: "info@digitalsecurity.co.zw",
    address: "7 Speke Ave, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 8,
    established: "2013",
    yearsExperience: "11+",
    projectsCompleted: "6,000+",
    employees: "20+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "digital-security-systems-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Digital",
    logoLine2: "Security Systems",
  },

  hero: {
    badge: "Zimbabwe's Trusted Security Solutions Provider",
    titleParts: [
      { text: "SECURING " },
      { text: "WHAT MATTERS", highlight: true },
      { text: " MOST." },
    ],
    subtitle:
      "Enterprise-grade CCTV, access control, and alarm systems designed, installed, and maintained by certified professionals. 6,000+ properties secured across Zimbabwe.",
    ctaPrimary: "Request Survey",
    ctaSecondary: "View Solutions",
    trustBadge: "6,000+ Properties Secured",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85", alt: "Digital Security Systems professional image 1" },
      { url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=85", alt: "Digital Security Systems professional image 2" },
      { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85", alt: "Digital Security Systems showcase" },
    ],
  },

  stats: [
    { number: "6000+", label: "Sites Secured" },
    { number: "11+", label: "Years Experience" },
    { number: "24/7", label: "Monitoring" },
    { number: "99.9%", label: "System Uptime" },
  ],

  servicesPreview: [
    {
      title: "CCTV Surveillance",
      desc: "HD and 4K camera systems with intelligent analytics, night vision, and remote viewing across all devices.",
      icon: "Eye",
    },
    {
      title: "Access Control",
      desc: "Biometric, card, and keypad access systems for offices, gated communities, and high-security facilities.",
      icon: "Lock",
    },
    {
      title: "Alarm Systems",
      desc: "Smart alarm installations with motion detection, door/window sensors, panic buttons, and armed response integration.",
      icon: "Shield",
    },
    {
      title: "Electric Fencing",
      desc: "High-voltage perimeter security with energizers, monitoring software, and integration with alarm panels.",
      icon: "Lightbulb",
    },
    {
      title: "Intercom & Gate Automation",
      desc: "Video intercoms, automatic gate motors, and boom barriers for residential and commercial access points.",
      icon: "Buildings",
    },
    {
      title: "Maintenance & Monitoring",
      desc: "24/7 system monitoring, preventive maintenance contracts, and rapid-response technical support.",
      icon: "Star",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "CCTV Surveillance",
        slug: "cctv-surveillance",
        desc: "HD and 4K camera systems with intelligent analytics, night vision, and remote viewing across all devices.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Access Control",
        slug: "access-control",
        desc: "Biometric, card, and keypad access systems for offices, gated communities, and high-security facilities.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
      {
        title: "Alarm Systems",
        slug: "alarm-systems",
        desc: "Smart alarm installations with motion detection, door/window sensors, panic buttons, and armed response integration.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Electric Fencing",
        slug: "electric-fencing",
        desc: "High-voltage perimeter security with energizers, monitoring software, and integration with alarm panels.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
      {
        title: "Intercom & Gate Automation",
        slug: "intercom-and-gate-automation",
        desc: "Video intercoms, automatic gate motors, and boom barriers for residential and commercial access points.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Maintenance & Monitoring",
        slug: "maintenance-and-monitoring",
        desc: "24/7 system monitoring, preventive maintenance contracts, and rapid-response technical support.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Digital",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in cctv surveillance.",
        client: "Commercial Client",
        services: ["CCTV Surveillance", "Access Control"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Digital",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in access control.",
        client: "Residential Client",
        services: ["Access Control", "Alarm Systems"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Digital",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in alarm systems.",
        client: "Industrial Client",
        services: ["Alarm Systems", "Electric Fencing"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Digital",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in electric fencing.",
        client: "Institutional Client",
        services: ["Electric Fencing", "Intercom & Gate Automation"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Digital",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in intercom & gate automation.",
        client: "Commercial Client",
        services: ["Intercom & Gate Automation", "Maintenance & Monitoring"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Digital",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in maintenance & monitoring.",
        client: "Residential Client",
        services: ["Maintenance & Monitoring", "CCTV Surveillance"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Digital Security installed our complete office security system -- CCTV, access control, and alarms. The integration is seamless and remote monitoring works perfectly.",
      name: "Leonard Mukasa",
      role: "Managing Director, Alpha Holdings",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We secured our entire residential complex with Digital Security. The CCTV quality is outstanding and the electric fencing gives our residents real peace of mind.",
      name: "Tsitsi Maphosa",
      role: "Complex Manager, Highlands",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "Professional from start to finish. The site survey was thorough, the installation was neat, and the system has been running flawlessly for two years.",
      name: "Robert Mugabe Jr",
      role: "Homeowner, Borrowdale",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "Our factory needed a comprehensive security upgrade and Digital Security delivered beyond expectations. The analytics on the cameras are incredibly useful.",
      name: "Patience Chimusoro",
      role: "Operations Director, ZimPack",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Digital Security Systems was founded on the conviction that every Zimbabwean home and business deserves professional-grade security. Since 2013, we have designed and installed over 6,000 security systems across the country.",
      "Our team of certified technicians combines deep expertise with the latest technology to deliver solutions that are reliable, scalable, and easy to manage. From a single home camera to enterprise-wide integrated security, we protect what matters.",
    ],
    values: [
      { title: "End-to-End Solutions", desc: "We design, supply, install, and maintain. One provider for your entire security infrastructure." },
      { title: "Certified Experts", desc: "Factory-trained technicians certified by Hikvision, Dahua, and ZKTeco. Installation to manufacturer standards." },
      { title: "24/7 Support", desc: "Round-the-clock monitoring and technical support. Any issue, any time, we respond immediately." },
      { title: "Scalable Systems", desc: "Start with what you need today and expand later. Our systems are designed to grow with your requirements." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Digital Security installed our complete office security system -- CCTV, access control, and alarms. The integration is seamless and remote monitoring works perfectly.", name: "Leonard Mukasa", role: "Managing Director, Alpha Holdings", rating: 5 },
      { text: "We secured our entire residential complex with Digital Security. The CCTV quality is outstanding and the electric fencing gives our residents real peace of mind.", name: "Tsitsi Maphosa", role: "Complex Manager, Highlands", rating: 5 },
      { text: "Professional from start to finish. The site survey was thorough, the installation was neat, and the system has been running flawlessly for two years.", name: "Robert Mugabe Jr", role: "Homeowner, Borrowdale", rating: 5 },
      { text: "Our factory needed a comprehensive security upgrade and Digital Security delivered beyond expectations. The analytics on the cameras are incredibly useful.", name: "Patience Chimusoro", role: "Operations Director, ZimPack", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Digital Security Systems",
        address: "7 Speke Ave, Harare, Zimbabwe",
        phone: "+263 71 299 2969",
        email: "info@digitalsecurity.co.zw",
      },
    ],
  },

  homeCta: {
    title: "PROTECT WHAT MATTERS",
    subtitle: "Professional security solutions designed, installed, and maintained by experts. Request a free security survey today.",
    ctaPrimary: "Request Survey",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Digital Security! I need a security system consultation.",
    backgroundImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85",
  },

  footer: {
    description: "Digital Security Systems is a leading Harare-based security solutions provider specializing in CCTV, access control, alarm systems, and integrated sec...",
    copyright: "Digital Security Systems",
  },
};

export default siteData;
