
import { Product, Testimonial, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  // NOTION CATEGORY
  {
    id: 'notion-personal-os',
    name: 'Notion Personal OS',
    description: 'Sistem lengkap untuk mengelola hidup, tugas, dan keuangan dalam satu tempat.',
    price: 99000,
    category: 'Notion',
    image: 'https://www.notion.com/_next/image?url=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2Fdadc92e8-5685-4422-a78e-cb2648279d3e%2F1768354746455%2Fdesktop.jpg&w=1920&q=75',
    features: ['Dashboard Terpusat', 'Pelacak Keuangan', 'Habit Tracker', 'Gratis Update'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'notion-second-brain',
    name: 'Second Brain Method',
    description: 'Template Notion berdasarkan metode PARA Tiago Forte untuk menyimpan ide dan proyek.',
    price: 129000,
    category: 'Notion',
    image: 'https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2F85e9abdd-ac06-47f8-a935-8618daa630bd%2F1718367107348%2Fdesktop.jpg&w=1920&q=75',
    features: ['Sistem PARA', 'Zettelkasten Library', 'Project Management', 'Archive System'],
    downloadUrl: 'https://www.notion.com/id/templates/second-brain-para-method-952'
  },
  {
    id: 'notion-student-hub',
    name: 'Ultimate Student Hub',
    description: 'Semua kebutuhan kuliah: jadwal, tugas, catatan materi, dan kalkulator IPK.',
    price: 49000,
    category: 'Notion',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    features: ['Course Tracker', 'Pomodoro Timer', 'Flashcards Study', 'Grade Calculator'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'notion-freelance-os',
    name: 'Freelance OS',
    description: 'Kelola klien, proyek, invoice, dan portofolio dalam satu workspace Notion profesional.',
    price: 149000,
    category: 'Notion',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    features: ['Client Portal', 'Invoicing System', 'Time Tracking', 'Meeting Notes'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'notion-travel-planner',
    name: 'Globe Trotter Planner',
    description: 'Rencanakan itinerary, budget, dan dokumentasi perjalanan Anda dengan rapi.',
    price: 39000,
    category: 'Notion',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    features: ['Budget Calculator', 'Packing Checklist', 'Itinerary Builder', 'Photo Gallery'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },

  // CANVA CATEGORY
  {
    id: 'canva-insta-aesthetic',
    name: 'Instagram Aesthetic Pack',
    description: '50+ Template Canva untuk feed dan stories yang profesional dan estetik.',
    price: 59000,
    category: 'Canva',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    features: ['Fully Editable', 'Brand Kit Compatible', 'High Resolution', 'Bonus Icons'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'canva-ebook-template',
    name: 'E-Book Creator Kit',
    description: 'Template 40+ halaman untuk membuat e-book atau lead magnet berkualitas tinggi.',
    price: 79000,
    category: 'Canva',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    features: ['Table of Contents', 'Chapter Layouts', 'Workbook Pages', 'Resource Lists'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'canva-webinar-slides',
    name: 'Course & Webinar Slides',
    description: 'Slide presentasi profesional untuk pengajar online dan pembicara webinar.',
    price: 89000,
    category: 'Canva',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    features: ['Pitch Decks', 'Data Charts', 'Engagement Slides', 'Quiz Templates'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'canva-youtube-kit',
    name: 'YouTube Branding Kit',
    description: 'Banner, thumbnail, dan end-screen templates untuk channel yang lebih menarik.',
    price: 49000,
    category: 'Canva',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
    features: ['High-CTR Thumbnails', 'Channel Banners', 'End Screen Layouts', 'Overlay Graphics'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'canva-pinterest-kit',
    name: 'Pinterest Traffic Booster',
    description: 'Pin templates yang dioptimalkan untuk engagement dan klik ke website Anda.',
    price: 39000,
    category: 'Canva',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80',
    features: ['Viral Layouts', 'SEO Focused Text', 'Product Showcase', 'Blog Post Pins'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },

  // UI KIT CATEGORY
  {
    id: 'ui-modern-dashboard',
    name: 'Modern SaaS UI Kit',
    description: 'Komponen UI lengkap untuk membangun aplikasi SaaS modern dengan cepat.',
    price: 179000,
    category: 'UI Kit',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    features: ['Figma File', 'Auto Layout 3.0', 'Dark/Light Mode', 'Style Guide'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'ui-ecommerce-mobile',
    name: 'Shopio Mobile UI Kit',
    description: 'UI Kit aplikasi belanja online (E-commerce) dengan 60+ screen siap pakai.',
    price: 199000,
    category: 'UI Kit',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: ['60+ High-Fi Screens', 'Interactions Ready', 'Custom Icons', 'Figma & Sketch'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'ui-crypto-dashboard',
    name: 'Crypto & Web3 Dashboard',
    description: 'Desain dashboard futuristik untuk platform cryptocurrency dan NFT.',
    price: 229000,
    category: 'UI Kit',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    features: ['Glassmorphism UI', 'Chart Components', 'Wallet Connectors', 'NFT Grids'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'ui-portfolio-pro',
    name: 'Pro Portfolio Template',
    description: 'Desain website portofolio untuk designer, developer, dan photographer.',
    price: 129000,
    category: 'UI Kit',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    features: ['Responsive Layout', 'Case Study Templates', 'Blog Section', 'Contact Form'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'ui-food-delivery',
    name: 'EatNow App UI Kit',
    description: 'UI Kit untuk aplikasi pesan antar makanan dengan sistem tracking pesanan.',
    price: 159000,
    category: 'UI Kit',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80',
    features: ['Restaurant Menus', 'Live Map Tracking', 'Review System', 'Cart UI'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },

  // LIGHTROOM CATEGORY
  {
    id: 'lightroom-preset-minimal',
    name: 'Minimalist Moody Presets',
    description: '10 Preset Lightroom untuk hasil foto bersih, tajam, dan profesional.',
    price: 49000,
    category: 'Lightroom',
    image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80',
    features: ['Desktop & Mobile', 'One Click Edit', 'Instruction Manual', 'DNG Files'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'lightroom-preset-film',
    name: 'Analogue Film Presets',
    description: 'Dapatkan tampilan foto analog klasik dengan grain dan warna vintage yang otentik.',
    price: 59000,
    category: 'Lightroom',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    features: ['Film Grain Styles', 'Kodak Look-alikes', 'Warm Tones', 'Matte Finish'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'lightroom-preset-travel',
    name: 'Wanderlust Explorer',
    description: 'Presets yang dioptimalkan untuk foto pemandangan, pantai, dan petualangan luar ruangan.',
    price: 69000,
    category: 'Lightroom',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    features: ['Vibrant Nature', 'Beach Blues', 'Sunset Golds', 'Sharp Landscapes'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'lightroom-preset-urban',
    name: 'Cyber City Presets',
    description: 'Tone warna biru dan oranye (teal & orange) yang sempurna untuk fotografi jalanan malam hari.',
    price: 55000,
    category: 'Lightroom',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    features: ['Night Neon Look', 'Teal & Orange', 'Contrast Boost', 'Street Detail'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'lightroom-preset-wedding',
    name: 'White Wedding Collection',
    description: 'Warna lembut, kulit cerah, dan kontras elegan untuk mengabadikan momen spesial Anda.',
    price: 99000,
    category: 'Lightroom',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    features: ['Soft Skin Tones', 'Elegant Whites', 'Dreamy Shadows', 'High Key Look'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
];

export const BUNDLES: Product[] = [
  {
    id: 'ultimate-creator-bundle',
    name: 'Ultimate Creator Bundle',
    description: 'Dapatkan akses ke SEMUA produk kami dalam satu paket super hemat.',
    price: 299000,
    originalPrice: 1500000,
    category: 'Bundle',
    isBestValue: true,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    features: ['Semua Template Notion', 'Semua Template Canva', 'Semua UI Kits', 'Akses Seumur Hidup', 'Grup Eksklusif'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 'notion-power-user-bundle',
    name: 'Notion Power User Pack',
    description: 'Gabungan Second Brain, Freelance OS, dan Personal OS untuk produktivitas maksimal.',
    price: 199000,
    originalPrice: 377000,
    category: 'Bundle',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    features: ['Second Brain', 'Freelance OS', 'Personal OS', 'Bonus Icons', 'Priority Support'],
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Kurniawan',
    role: 'Creative Designer',
    content: 'Template Canva-nya benar-benar menghemat waktu saya 3 jam setiap hari. Kualitasnya sangat premium!',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Budi Santoso',
    role: 'Freelancer',
    content: 'Notion Personal OS mengubah cara saya bekerja. Semuanya jadi teratur dan rapi sekarang.',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Amanda Putri',
    role: 'Photographer',
    content: 'Preset Lightroom terbaik yang pernah saya beli. Tone warnanya konsisten dan profesional.',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Cara Meningkatkan Produktivitas dengan Notion',
    excerpt: 'Pelajari bagaimana mengorganisir tugas harian Anda dengan lebih efisien menggunakan sistem database Notion.',
    date: '12 Jan 2024',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Tips Memilih Warna untuk Branding Instagram',
    excerpt: 'Warna dapat mempengaruhi emosi audiens. Temukan palet warna yang tepat untuk brand Anda.',
    date: '08 Jan 2024',
    image: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&w=800&q=80'
  }
];
