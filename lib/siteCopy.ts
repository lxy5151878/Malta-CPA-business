// lib/siteCopy.ts

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: readonly NavChild[] };

export type Lang = "en" | "zh";

/** Discriminated union for home page feature blocks (keeps variant strongly typed) */
type FeatureBlock =
  | {
      variant: "grow";
      title: string;
      body: string;
      link: { label: string; href: string };
      image: string;
    }
  | {
      variant: "approach";
      title: string;
      image: string;
      points: readonly { no: string; title: string; body: string }[];
    }
  | {
      variant: "spectrum";
      title: string;
      body: string;
      image: string;
      bullets: readonly string[];
      cta: { label: string; href: string };
    };

// ✅ 1) EN is source of truth
const en = {
  site: {
    name: "XLW Advisory",
    slogan: "Trustworthy | Focus | Vision | Compliance",
    founderStatement:
      "XLW Advisory was founded by Mr. Xiaoyang Lou and his partners. Mr. Lou is a licensed CPA and practising auditor with warrant number 121145. Together with his associates, the firm works with clients to support growth, success, and compliant business operations.",
  },

  navbar: {
    brand: { label: "XLW Advisory", href: "/" },
    login: { label: "Login", href: "https://mgt.accountantsmalta.com" },
    cta: { label: "Contact us", href: "/contact" },
    items: [
      { label: "Home", href: "/" },
      {
        label: "Services",
        href: "#services",
        children: [
          { label: "Accounting", href: "/accounting" },
          { label: "Tax & VAT Compliance", href: "/tax-services" },
          { label: "Audit & Assurance", href: "/audit-and-assurance" },
          { label: "Bookkeeping Services", href: "/bookkeeping" },
          { label: "Payroll", href: "/payroll" },
          { label: "Liquidation", href: "/liquidation" },
          { label: "Malta Company Formation", href: "/company-formation" },
          { label: "Due Diligence & Compliance", href: "/due-diligence" },
        ],
      },
      {
        label: "Residency Planning",
        href: "/mprp",
        children: [
          { label: "Malta MPRP", href: "/mprp" },
          { label: "Malta Nomad Residence Permit", href: "/nomad-residence" },
          { label: "Greece Golden Visa", href: "/greece-golden-visa" },
        ],
      },
      {
        label: "International Services",
        href: "/international-services",
        children: [
          { label: "International Services Overview", href: "/international-services" },
          { label: "Invest in China", href: "/invest-china" },
        ],
      },
      { label: "Industries", href: "/industries" },
      // { label: "HNWIs Fund", href: "/fund" },
      { label: "Knowledge Center", href: "/knowledge" },
      { label: "About Us", href: "/about-us" },
      // {
      //   label: "AI",
      //   href: "#ai",
      //   children: [
      //     { label: "AI Specialist", href: "#ai-specialist" },
      //     { label: "AI Bookkeeping", href: "#ai-bookkeeping" },
      //     { label: "AI Powered Solutions", href: "#AI" },
      //   ],
      // },
    ] as readonly NavItem[],
  },

  hero: {
    title: "Your trusted accountancy and tax firm in Malta",
    subtitle:
      "Accounting, tax, audit, finance and digital services. We keep things clear, compliant and growth-ready.",
    primaryCta: { label: "Book a free consultation", href: "/contact" },
    phone: { label: "+356 9952 0938", href: "tel:+35699520938" },
    bullets: ["Full spectrum of services", "Flexible work terms"],
    backgroundImage: "/assets/hero-bg.jpg",
  },

  services: {
    id: "services",
    title: "Our services",
    subtitle: "With the support of independent referents, you can solve many challenges",
    items: [
      {
        title: "Accounting",
        description: "Clear day-to-day accounting support to keep your records accurate and decision-ready.",
        image: "/assets/01.jpg",
        icon: "icon1",
        href: "/accounting",
      },
      {
        title: "Tax & VAT Compliance",
        description: "Practical tax planning and compliance support, aligned with your structure and obligations.",
        image: "/assets/02.jpg",
        icon: "icon2",
        href: "/tax-services",
      },
      {
        title: "Audit & Assurance",
        description: "Audit coordination and preparation support to help you stay compliant and confident.",
        image: "/assets/03.jpg",
        icon: "icon3",
        href: "/audit-and-assurance",
      },
      {
        title: "Bookkeeping Services",
        description: "Reliable bookkeeping workflows so your numbers are always up to date and usable.",
        image: "/assets/04.jpg",
        icon: "icon4",
        href: "/bookkeeping",
      },
      {
        title: "Payroll",
        description: "Payroll administration with a focus on accuracy, reporting, and employee confidence.",
        image: "/assets/05.jpg",
        icon: "icon5",
        href: "/payroll",
      },
      {
        title: "Liquidation",
        description: "Guidance through liquidation steps, documentation, and compliance milestones.",
        image: "/assets/06.jpg",
        icon: "icon6",
        href: "/liquidation",
      },
    ],
  },

  partners: {
    id: "partners",
    title: "Trusted by founders and teams we support",
    subtitle: "A practical finance partner for Malta-based and international businesses",
    logos: [
      { src: "/assets/customer-logo-1.JPG", alt: "Partner logo 1", width: 220 },
      { src: "/assets/customer-logo-3.PNG", alt: "Partner logo 3", width: 220 },
      { src: "/assets/customer-logo-4.PNG", alt: "Partner logo 4", width: 220 },
      { src: "/assets/customer-logo-5.JPG", alt: "Partner logo 5", width: 220 },
      { src: "/assets/customer-logo-6.PNG", alt: "Partner logo 6", width: 220 },
      { src: "/assets/customer-logo-2.JPG", alt: "Partner logo 2", width: 220 },
      // { src: "/assets/airbnb.svg", alt: "Partner logo 7", width: 220 },
      // { src: "/assets/philips.svg", alt: "Partner logo 8", width: 220 },
    ],
  },

  features: {
    id: "features",
    blocks: [
      {
        variant: "grow",
        title: "Let's grow your business with clarity and control",
        body:
          "We combine accounting, tax, compliance and digital finance operations so you can make faster decisions and stay audit-ready—without the overhead of building a full internal team.",
        link: { label: "Learn more", href: "#services" },
        image: "/assets/01.jpg",
      },
      {
        variant: "approach",
        title: "A professional approach to your finance and operations",
        image: "/assets/02.jpg",
        points: [
          {
            no: "01",
            title: "Tailored, hands-on support",
            body:
              "We adapt to your structure and workflows—SME, holding, or multi-entity—so you get practical outcomes, not generic advice.",
          },
          {
            no: "02",
            title: "Reporting you can act on",
            body:
              "Clean monthly closes, management reporting, and cash-flow visibility—so you always know where you stand and what to do next.",
          },
        ],
      },
      {
        variant: "spectrum",
        title: "Full spectrum of finance, compliance and digital services",
        body:
          "From bookkeeping to CFO-level guidance, plus automation and digital transformation—everything you need to run a modern finance function.",
        image: "/assets/03.jpg",
        bullets: [
          "Compliance-first accounting & tax support",
          "Process improvement, automation and OCR workflows",
          "Forecasting, budgeting and CFO advisory",
        ],
        cta: { label: "Book a free consultation", href: "/contact" },
      },
    ] as readonly FeatureBlock[],
  },

  industries: {
    id: "industries",
    title: "The industries we work in",
    cta: { label: "More about industries", href: "/industries" },
    items: [
      {
        id: "finance",
        title: "Finance and insurance",
        body:
          "Support for regulated and fast-moving finance teams: reporting readiness, audit support, and scalable finance operations.",
      },
      {
        id: "tech",
        title: "Startup and technology",
        body:
          "From early-stage setup to scale: bookkeeping, VAT, payroll, dashboards, and fractional CFO support that fits your runway.",
      },
      {
        id: "medicine",
        title: "Healthcare and beauty",
        body:
          "Reliable financial operations for clinics and wellness brands: payroll, supplier control, cashflow visibility, and compliance support.",
      },
      {
        id: "real-estate",
        title: "Real estate and hospitality",
        body:
          "Property and hospitality finance: multi-entity bookkeeping, reconciliations, reporting packs, and operational controls.",
      },
      {
        id: "ecommerce",
        title: "E-commerce",
        body:
          "E-commerce finance built for volume: payment reconciliation, COGS tracking, VAT support, and inventory-friendly reporting.",
      },
      {
        id: "education",
        title: "Education and training",
        body:
          "Clear reporting and predictable processes for training providers: invoicing workflows, payroll, and management reporting.",
      },
        {
        id: "gaming",
        title: "Gaming and Betting",
        body:
          "Advise on structure and management, professional advisory services on legal, finance and internal controls, tax and regulations.",
        defaultOpen: false,
      },
    ],
  },

  testimonials: {
    title: "What clients say",
    items: [
      {
        name: "David Cappitta",
        role: "Director",
        headline: "Clear numbers, faster decisions, efficient services — exactly what we needed.",
        text:
          "XLW Advisory helped us clean up reporting, align finance processes, and build confidence across the team. The support is proactive and easy to work with.",
      },
      {
        name: "Robert Liu",
        role: "Founder and CEO",
        headline: "Exceptional delivery and flexibility. Great outcome.",
        text:
          "We moved to a new workflow and got weekly management reporting in place quickly. Communication is smooth and the work is consistent.",
      },
      {
        name: "Adrian Agius",
        role: "CEO, Co-Founder",
        headline: "Professional, compliant, and growth-ready finance support.",
        text:
          "From bookkeeping to planning, everything feels structured now. We finally have visibility on cashflow and decisions are grounded in data.",
      },
    ],
  },

  team: {
    id: "team",
    title: "Meet our team",
    intro:
      "A practical blend of accounting, tax, compliance, finance, and digital expertise — focused on clarity, efficiency, and reliability.",
    cta: { label: "About us", href: "/about-us" },
    members: [
      {
        name: "Jie Weng",
        role: "Client Success Lead",
        image: "/assets/generated/team-jie.svg",
        socials: [
          { kind: "facebook", label: "Facebook", href: "#" },
          { kind: "x", label: "X", href: "#" },
          { kind: "linkedin", label: "LinkedIn", href: "#" },
        ],
      },
      {
        name: "Yixin QI",
        role: "Fund Promoter",
        image: "/assets/generated/team-yixin.svg",
        socials: [
          { kind: "instagram", label: "Instagram", href: "#" },
          { kind: "facebook", label: "Facebook", href: "#" },
          { kind: "linkedin", label: "LinkedIn", href: "#" },
        ],
      },
      {
        name: "Christine Borg",
        role: "Compliance & Audit Support",
        image: "/assets/generated/team-kanwal.svg",
        socials: [
          { kind: "instagram", label: "Instagram", href: "#" },
          { kind: "facebook", label: "Facebook", href: "#" },
          { kind: "linkedin", label: "LinkedIn", href: "#" },
        ],
      },
      {
        name: "Albert Parker",
        role: "Partner",
        image: "/assets/generated/team-albert.svg",
        socials: [
          { kind: "facebook", label: "Facebook", href: "#" },
          { kind: "behance", label: "Behance", href: "#" },
          { kind: "dribbble", label: "Dribbble", href: "#" },
        ],
      },
      {
        name: "Shawn Lou",
        role: "Managing Partner",
        image: "/assets/generated/team-shawn.svg",
        socials: [
          { kind: "instagram", label: "Instagram", href: "#" },
          { kind: "facebook", label: "Facebook", href: "#" },
          { kind: "linkedin", label: "LinkedIn", href: "#" },
        ],
      },
    ],
  },

  blog: {
    id: "blog",
    title: "Malta Knowledge Center",
    featured: {
      title: "Malta Annual Return Guide: Filing Duties, Risks and Practical Controls",
      excerpt:
        "A practical guide to building clean bookkeeping, predictable reporting, and decision-ready dashboards — without slowing down execution.",
      image: "/assets/03.jpg",
      href: "/knowledge/malta-annual-return-guide",
    },
    items: [
      {
        title: "Editorial standard for AI-optimized Malta compliance articles",
        excerpt: "How source material becomes bilingual, verifiable, AI-search-friendly knowledge content.",
        date: "January 2026",
        tag: "GEO",
        href: "/knowledge/source-intake-and-editorial-standard",
      },
      {
        title: "Malta VAT and EU trade knowledge hub",
        excerpt: "From cashflow to margins — the 5 core metrics every leadership team should review.",
        date: "January 2026",
        tag: "VAT",
        href: "/knowledge",
      },
      {
        title: "Accounting and audit compliance hub",
        excerpt: "A planned article series for records, financial statements, audit preparation, and reporting cadence.",
        date: "January 2026",
        tag: "Audit",
        href: "/knowledge",
      },
      {
        title: "China outbound and Malta structuring hub",
        excerpt: "A planned article series for Chinese and Hong Kong businesses using Malta for EU operations.",
        date: "January 2026",
        tag: "Cross-border",
        href: "/knowledge",
      },
    ],
    all: { label: "All knowledge articles", href: "/knowledge" },
  },

  contactCta: {
    id: "contact",
    left: {
      title: "Join our team",
      col1: ["Payroll Associate", "Audit associate", "Bookkeeping specialist"],
      col2: ["Tax & compliance associate", "Compliance analyst", "Accounting Clerk"],
      button: { label: "Apply for a role", href: "/contact" },
    },
    right: {
      title: "Ready to discuss your business?",
      subtitle:
        "Tell us what you're building — we'll propose a compliant setup and a practical plan for accounting, tax and finance operations.",
      button: { label: "Contact us", href: "/contact" },
      email: { label: "info@accountantsmalta.com", href: "mailto:info@accountantsmalta.com" },
      wechat: { label: "WeChat ID", href: "SimplerOnly/657219579" },
    },
  },

  footer: {
    id: "footer",
    officialLinks: {
      title: "Official Malta links",
      description: "Direct access to key public authorities and government services.",
      items: [
        { label: "Malta Tax and Customs Administration (MTCA)", href: "https://mtca.gov.mt/" },
        { label: "Jobsplus", href: "https://jobsplus.gov.mt/?langid=en" },
        { label: "Employment Relations (DIER)", href: "https://dier.gov.mt/en/" },
        { label: "Malta Business Registry (MBR)", href: "https://www.mbr.mt/" },
        { label: "Financial Services Authority (MFSA)", href: "https://www.mfsa.mt/" },
        { label: "Legislation Malta", href: "https://legislation.mt/" },
        { label: "Servizz.gov", href: "https://www.servizz.gov.mt/en/Home" },
      ],
    },
    nav: [
      { label: "Services", href: "/#services" },
      { label: "Reviews", href: "/#testimonials" },
      { label: "About", href: "/about-us" },
      { label: "Blog", href: "/#blog" },
      { label: "Contact", href: "/contact" },
    ],
    socials: [
      { kind: "instagram", label: "Instagram", href: "#" },
      { kind: "facebook", label: "Facebook", href: "#" },
      { kind: "x", label: "X", href: "#" },
      { kind: "linkedin", label: "LinkedIn", href: "#" },
    ],
    privacy: { label: "Privacy policy", href: "/privacy-policy" },
    cookieSettingsLabel: "Cookie settings",
    copyright: {
      prefix: "© All rights reserved. Made by",
      linkLabel: "XLW Advisory",
      linkHref: "#top",
    },
  },

  pages: {
    accounting: {
      breadcrumb: { home: "Home", current: "Accounting" },
      intro: {
        pageTitle: "Accounting",
        headline: "Expert Accounting Services for Your Business.",
        body:
          "We offer a wide range of accounting services to help businesses of all sizes manage their finances. Our team of experienced professionals have the knowledge and skills to handle all your accounting needs, from bookkeeping and financial statement preparation to tax planning and compliance. We provide accurate and timely financial information to help you make informed business decisions.",
        ctaBook: "Book a call",
      },
      solutions: {
        title: "Our Solutions",
        subtitle: "We bring you the best possible solutions for your company.",
        items: [
          { title: "Income Tax Preparation", body: "We provide tax planning and compliance services..." },
          { title: "Bookkeeping", body: "Our bookkeeping service includes..." },
          { title: "Business Start-up consulting", body: "Our business start-up consulting services..." },
          { title: "General Ledger Review", body: "Our General Ledger review service includes..." },
        ],
      },
      specialists: {
        kicker: "Accounting",
        title: "Service Business Specialists",
        body:
          "Our team provides tailored accounting and financial services for a variety of service businesses. From bookkeeping to tax planning, we have the expertise to help your business succeed.",
      },
      resources: {
        title: "Exceptional Accountancy Resources",
        cta: "Get notified",
        items: [
          { title: "Savings Excel", note: "Available Soon" },
          { title: "Tax Calculator", note: "Available Soon" },
          { title: "Checkbook Balancer", note: "Available Soon" },
          { title: "VAT Calculator", note: "Available Soon" },
        ],
      },
      // portal: {
      //   title: "The Vacei Portal – Built for Our Clients",
      //   body:
      //     "Every XLW Advisory client gets access to the Vacei Portal, our secure online platform that makes working with us seamless and transparent.",
      //   featuresLabel: "Key Features",
      //   features: [
      //     "Secure document uploads",
      //     "Real-time progress tracking",
      //     "Online e-signatures",
      //     "Direct communication with your XLW Advisory team",
      //   ],
      // },
      benefits: {
        title: "Great benefits from XLW Advisory.",
        body:
          "XLW Advisory offers a wide range of services, experienced professionals, personalized approach, and access to international resources...",
        items: [
          "Personalized approach",
          "Quick turnaround times",
          "Transparent communication",
          "Flexibility",
          "Reliability",
          "Technology-driven",
          "Proactive advice",
          "AI Specialized",
        ],
      },
      personalized: {
        title: "Need a personalized solution?",
        body:
          "An accounting and audit firm, such as XLW Advisory, can provide a range of services that are tailored to the specific needs of each client...",
        ctaPrimary: "Contact us",
        ctaSecondary: "Call now",
      },
      otherServices: {
        kicker: "How we can help?",
        title: "Our Services",
        subtitle: "Other Accountancy Services.",
        items: [
          { title: "Taxation", body: "Providing assistance with tax return preparation..." },
          { title: "AI Bookkeeping", body: "AI-powered real-time bookkeeping..." },
          { title: "Payroll", body: "Efficient payroll management tailored to your business..." },
          { title: "Fractional CFO Services", body: "Part-time executive financial leadership..." },
          { title: "Bookkeeping and Accounting", body: "Recording, classifying and summarizing..." },
          { title: "Audit & Assurance", body: "An independent examination of an organization’s..." },
        ],
      },
    },

    taxServices: {
      meta: {
      title: "Tax Services | XLW Advisory",
      description:
        "Expert assistance for compliance and maximization of savings. Tax preparation, planning, audit representation, international taxation, VAT support, and more.",
    },
    breadcrumb: { home: "Home", current: "Tax Services" },

    intro: {
      pageTitle: "Tax Services",
      headline: "Tax Services: Expert Assistance for Compliance and Maximization of Savings.",
      body:
        "Tax services are provided by professionals who specialize in understanding the complex laws and regulations related to taxes. They can assist individuals and businesses with compliance, including preparing and filing tax returns, as well as identifying potential deductions and credits to minimize tax liability.",
      ctaBook: "Book a call",
    },

    solutions: {
      title: "Our Solutions",
      subtitle: "We bring you the best possible solutions for your company.",
      items: [
        {
          title: "Tax Preparation and Filing",
          body:
            "This includes the preparation and submission of tax returns for individuals and businesses, ensuring compliance with local and federal tax laws",
          icon: "ai-file",
        },
        {
          title: "Tax Planning and Strategy",
          body:
            "This includes identifying potential deductions and credits, as well as providing advice on tax-efficient business and investment decisions to minimize tax liability.",
          icon: "ai-trending-down",
        },
        {
          title: "Audit Representation",
          body: "This includes representing clients during tax audits and dealing with any issues that may arise",
          icon: "ai-shield-check",
        },
        {
          title: "International Taxation",
          body:
            "This includes providing guidance and compliance for individuals and businesses with international tax implications, such as foreign income or foreign assets",
          icon: "ai-globe",
        },
      ],
    },

    advisory: {
      title: "Tax advisory that protects your business — and your cash flow.",
      p1:
        "Tax, regrettably is inevitable, however, that doesn’t mean that your business has to be crippled by taxation. There are myriad strategies a business can adopt to offset the effects of taxation, as well as reduce the monetary amounts owed to the taxation authorities. Our tax advisory services here at Accounting Services offer exactly that.",
      p2:
        "At Accounting Services, we strive to take the best advantage of the local tax system so that our clients can benefit from the different jurisdictions whilst at the same time complying to and fully adhering to the law. We know the law inside out, giving us a unique position to offer the best tax advisory services tailored to each client and their own situation.",
      p3:
        "We work with both local and international companies who require tax advisory services, tax structuring exercises and optimisation strategies for tax saving opportunities.",
      listTitle: "Our tax related services include the following:",
      cta: "Talk to a tax advisor",
      items: [
        "Tax advisory services",
        "Tax optimisation strategies",
        "Preparation of self-assessment tax returns (Income Tax Returns)",
        "Assistance with provisional & final settlement tax payments",
        "Compilation of companies’ tax computation as required by the income tax act",
        "Registration of shareholders for the purposes of tax refunds",
      ],
    },

    specialists: {
      kicker: "Industries",
      title: "Service Business Specialists",
      body:
        "Our team provides tailored accounting and financial services for a variety of service businesses. From bookkeeping to tax planning, we have the expertise to help your business succeed. Our goal is to provide high-quality service and support, to help our clients navigate the challenges they face.",
    },

    resources: {
      title: "Exceptional Accountancy Resources",
      cta: "Get notified",
      items: [
        { title: "Savings Excel", note: "Available Soon", icon: "ai-grid" },
        { title: "Tax Calculator", note: "Available Soon", icon: "ai-calculator" },
        { title: "Checkbook Balancer", note: "Available Soon", icon: "ai-wallet" },
        { title: "VAT Calculator", note: "Available Soon", icon: "ai-calculator" },
      ],
    },

    // portal: {
    //   title: "The Vacei Portal – Built for Our Clients",
    //   body:
    //     "Every XLW Advisory client gets access to the Vacei Portal, our secure online platform that makes working with us seamless and transparent. Upload documents, track the progress of your engagement, sign electronically, and communicate directly with your team — all in one place.",
    //   featuresLabel: "Key Features",
    //   features: [
    //     "Secure document uploads",
    //     "Real-time progress tracking",
    //     "Online e-signatures",
    //     "Direct communication with your XLW Advisory team",
    //   ],
    //},

    benefits: {
      title: "Great benefits from XLW Advisory.",
      body:
        "XLW Advisory offers a wide range of services, experienced professionals, personalized approach, and access to international resources, competitive pricing, quick turnaround times, transparent communication, flexibility, and reliability that ensures you have the most current and accurate financial information for your business.",
      items: [
        "Personalized approach",
        "Quick turnaround times",
        "Transparent communication",
        "Flexibility",
        "Reliability",
        "Technology-driven",
        "Proactive advice",
        "AI Specialized",
      ],
    },

    personalized: {
      title: "Need a personalized solution?",
      body:
        "An accounting and audit firm, such as XLW Advisory, can provide a range of services that are tailored to the specific needs of each client. The firm’s team of experts can work with clients to understand their unique business operations and financial goals and then design a customized solution that addresses their specific needs. Services that can be tailored to individual clients.",
      ctaPrimary: "Contact us",
      ctaSecondary: "Call now",
    },

    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Quick answers to common questions about our tax services.",
      cta: "Still have questions? Contact us",
      items: [
        {
          q: "What kind of tax services do you offer to businesses in Malta?",
          a:
            "We provide a full range of tax services including tax advisory, optimisation strategies, preparation of self-assessment income tax returns, assistance with provisional and final tax payments, company tax computations, and registration of shareholders for tax refund purposes. Our tax advisory services are ideal for both local and international companies operating in or through Malta.",
        },
        {
          q: "Do you prepare and file income tax returns?",
          a:
            "Yes, we prepare self-assessment income tax returns for individuals and companies. We also assist with the calculation and timely payment of both provisional and final tax amounts, helping you avoid penalties and interest.",
        },
        {
          q: "What are tax refund registrations for shareholders, and can you handle them?",
          a:
            "In Malta, certain company shareholders may be entitled to claim tax refunds on dividends received. We assist with the registration process and ensure all documentation is properly submitted so that eligible shareholders can benefit from these refunds efficiently.",
        },
      ],
    },
    },

    auditAndAssurance: {
  meta: {
    title: "Audit & Assurance | XLW Advisory",
    description:
      "Audit and Assurance services: financial statement audit, internal audit, compliance audit, and risk management audit. Confidence in reporting and stronger processes.",
  },

  breadcrumb: { home: "Home", current: "Audit and assurance" },

  intro: {
    pageTitle: "Audit and Assurance Services",
    headline: "Providing Unwavering Confidence.",
    body:
      "We offer a wide range of audit and assurance services that are tailored to meet the specific needs of each client. Our team of experienced professionals will conduct a thorough examination of your financial statements to ensure accuracy and completeness, providing you with unwavering confidence in your financial reporting. Our audit and assurance services help identify any misstatements or discrepancies and provide recommendations to improve your financial processes.",
    ctaBook: "Book a call",
  },

  solutions: {
    title: "Our Solutions",
    subtitle: "We bring you the best possible solutions for your company.",
    items: [
      {
        title: "Financial Statement Audit",
        body:
          "Independent examination of financial statements to ensure accuracy and compliance with accounting standards.",
        icon: "ai-file",
      },
      {
        title: "Internal Audit",
        body: "Evaluation of a company’s internal controls and identification of potential risks.",
        icon: "ai-shield",
      },
      {
        title: "Compliance Audit",
        body: "Assessment of compliance with laws, regulations and industry standards.",
        icon: "ai-check-circle",
      },
      {
        title: "Risk Management Audit",
        body:
          "Identification of potential risks and evaluation of the effectiveness of risk management strategies.",
        icon: "ai-target",
      },
    ],
  },

  expertise: {
    kicker: "Our expertise",
    title: "Your trusted partner in audit excellence.",
    p1:
      "Financial statement audits provide assurance over the information used by investors and other stakeholders. Our level of service translates numbers into accurate information, ensuring quality decision-making that meets stakeholders’ demands.",
    p2:
      "This is achieved through our core values of objectivity, independence, transparency, and technical excellence. We believe in continuous investment and improvement in our staff, tools, and technology to enhance audit quality for the benefit of all parties.",
    listLabel: "The services being offered include",
    items: [
      "Statutory financial statements audit",
      "Special purpose financial statements audit",
      "Engagement quality",
    ],
  },

  engagementQuality: {
    title: "Engagement quality",
    p1:
      "We specialise in enhancing audit excellence through customised training for audit staff on the latest standards including, but not limited to, ISQM 1 and ISA 315 (Revised).",
    p2:
      "We also provide comprehensive cold file reviews to identify relevant weaknesses in audit processes and procedures and propose improvements for audits going forward. Our team also provides tailored solutions to complex audit-related technical queries, ensuring audits meet the highest quality standards.",
    items: ["Review of completed engagements", "Technical queries", "Learning & Development", "ISQM 1 assessment"],
    cta: "Get in touch",
  },

  specialists: {
    kicker: "Industries",
    title: "Service Business Specialists",
    body:
      "Our team provides tailored accounting and financial services for a variety of service businesses. From bookkeeping to tax planning, we have the expertise to help your business succeed. Our goal is to provide high-quality service and support, to help our clients navigate the challenges they face.",
  },

  resources: {
    title: "Exceptional Accountancy Resources",
    cta: "Get notified",
    items: [
      { title: "Savings Excel", note: "Available Soon", icon: "ai-grid" },
      { title: "Tax Calculator", note: "Available Soon", icon: "ai-calculator" },
      { title: "Checkbook Balancer", note: "Available Soon", icon: "ai-wallet" },
      { title: "VAT Calculator", note: "Available Soon", icon: "ai-calculator" },
    ],
  },

  // portal: {
  //   title: "The Vacei Portal – Built for Our Clients",
  //   body:
  //     "Every XLW Advisory client gets access to the Vacei Portal, our secure online platform that makes working with us seamless and transparent. Upload documents, track the progress of your engagement, sign electronically, and communicate directly with your team — all in one place.",
  //   featuresLabel: "Key Features",
  //   features: [
  //     "Secure document uploads",
  //     "Real-time progress tracking",
  //     "Online e-signatures",
  //     "Direct communication with your XLW Advisory team",
  //   ],
  //},

  benefits: {
    title: "Great benefits from XLW Advisory.",
    body:
      "XLW Advisory offers a wide range of services, experienced professionals, personalized approach, and access to international resources, competitive pricing, quick turnaround times, transparent communication, flexibility, and reliability that ensures you have the most current and accurate financial information for your business.",
    items: [
      "Personalized approach",
      "Quick turnaround times",
      "Transparent communication",
      "Flexibility",
      "Reliability",
      "Technology-driven",
      "Proactive advice",
      "AI Specialized",
    ],
  },

  personalized: {
    title: "Need a personalized solution?",
    body:
      "An accounting and audit firm, such as XLW Advisory, can provide a range of services that are tailored to the specific needs of each client. The firm’s team of experts can work with clients to understand their unique business operations and financial goals and then design a customized solution that addresses their specific needs. Services that can be tailored to individual clients.",
    ctaPrimary: "Contact us",
    ctaSecondary: "Call now",
  },

  faq: {
    title: "FAQs",
    subtitle: "Everything you need to know about Audit & Assurance",
    cta: "Get in touch",
    items: [
      {
        q: "What is an audit and why does it matter?",
        a:
          "An audit is an independent examination of financial statements and related records to provide assurance that the information is accurate, complete, and prepared in line with relevant standards. It helps stakeholders make better decisions and improves trust in reporting.",
      },
      {
        q: "Do you only provide statutory audits?",
        a:
          "We support a range of audit and assurance needs, including statutory financial statements audits as well as special purpose engagements depending on your reporting requirements.",
      },
      {
        q: "Can you help improve audit quality and internal processes?",
        a:
          "Yes. Beyond audit execution, we can support engagement quality through training, cold file reviews, and guidance on key standards (for example ISQM 1 and ISA 315 Revised) to strengthen audit processes and consistency.",
      },
    ],
  },
    },

    bookkeeping: {
      meta: {
        title: "Bookkeeping Services | XLW Advisory",
        description:
          "Bookkeeping Services: precision for your financial foundation. Accounts payable/receivable, bank reconciliation, financial record maintenance, and general ledger management.",
      },

      breadcrumb: { home: "Home", current: "Bookkeeping Services" },

      header: {
        heading: "Bookkeeping",
        subheading: "Precision for Your Financial Foundation",
        intro:
          "At XLW Advisory, we understand that accurate bookkeeping is the cornerstone of a well-managed business. Our bookkeeping services are designed to ensure that every financial transaction is recorded correctly and efficiently, providing you with clear and actionable financial insights. We handle the details, so you can focus on growing your business with confidence, knowing your records are accurate and up-to-date.",
        callout: {
          kicker: "Service Focus",
          badge: "Bookkeeping",
          title: "Reliable records. Better decisions.",
          body: "Clear financial visibility with accurate categorization, reconciliation, and reporting.",
          phoneLabel: "+356 9952 0938",
          phoneHref: "tel:+356 99520938",
          emailLabel: "info@accountantsmalta.com",
          emailHref: "mailto:info@accountantsmalta.com",
        },
      },

      solutions: {
        title: "Our Solutions",
        subtitle: "We bring you the best possible solutions for your company.",
        items: [
          {
            title: "Accounts Payable and Receivable Management",
            body: "Efficiently tracking your payables and receivables to ensure smooth cash flow and timely collections.",
            icon: "ai-credit-card",
          },
          {
            title: "Bank Reconciliation",
            body: "Ensuring that your bank statements align with your internal records for complete accuracy.",
            icon: "ai-refresh",
          },
          {
            title: "Financial Record Maintenance",
            body:
              "Organizing and maintaining all your financial records in compliance with regulatory requirements and industry standards.",
            icon: "ai-folder",
          },
          {
            title: "General Ledger Management",
            body:
              "Comprehensive tracking and management of all financial transactions to provide a clear picture of your financial health.",
            icon: "ai-list",
          },
        ],
        closingNote:
          "Our team at XLW Advisory is here to support your business with the highest standard of bookkeeping expertise, allowing you to make informed decisions based on reliable financial data.",
      },

      industries: {
        title: "Industries",
        heading: "Service Business Specialists",
        body:
          "Our team provides tailored accounting and financial services for a variety of service businesses. From bookkeeping to tax planning, we have the expertise to help your business succeed. Our goal is to provide high-quality service and support, to help our clients navigate the challenges they face.",
      },

      resources: {
        title: "Exceptional Accountancy Resources",
        items: [
          { title: "Savings Excel", note: "Available Soon", icon: "ai-grid" },
          { title: "Tax Calculator", note: "Available Soon", icon: "ai-calculator" },
          { title: "Checkbook Balancer", note: "Available Soon", icon: "ai-wallet" },
          { title: "VAT Calculator", note: "Available Soon", icon: "ai-calculator" },
        ],
      },

      // portal: {
      //   title: "The Vacei Portal – Built for Our Clients",
      //   body:
      //     "Every XLW Advisory client gets access to the Vacei Portal, our secure online platform that makes working with us seamless and transparent. Upload documents, track the progress of your engagement, sign electronically, and communicate directly with your team — all in one place.",
      //   featuresTitle: "Key Features:",
      //   features: [
      //     "Secure document uploads",
      //     "Real-time progress tracking",
      //     "Online e-signatures",
      //     "Direct communication with your XLW Advisory team",
      //   ],
      //},

      benefits: {
        title: "Great benefits from XLW Advisory.",
        body:
          "XLW Advisory offers a wide range of services, experienced professionals, personalized approach, and access to international resources, competitive pricing, quick turnaround times, transparent communication, flexibility, and reliability that ensures you have the most current and accurate financial information for your business.",
        items: [
          "Personalized approach",
          "Quick turnaround times",
          "Transparent communication",
          "Flexibility",
          "Reliability",
          "Technology-driven",
          "Proactive advice",
          "AI Specialized",
        ],
      },

      personalized: {
        title: "Need a personalized solution?",
        body:
          "An accounting and audit firm, such as XLW Advisory, can provide a range of services that are tailored to the specific needs of each client. The firm’s team of experts can work with clients to understand their unique business operations and financial goals and then design a customized solution that addresses their specific needs. Services that can be tailored to individual clients.",
        ctaEmail: "Email us",
      },
    },

    payroll: {
    meta: {
      title: "Payroll Services | XLW Advisory",
      description:
        "Payroll Services: managing employee compensation and taxes. Employee data management, payroll processing, compliance & reporting, time and attendance tracking.",
    },

    breadcrumb: { home: "Home", current: "Payroll" },

    header: {
      heading: "Payroll",
      subheading: "Managing Employee Compensation and Taxes.",
      intro:
        "Payroll services involve managing the process of paying employees, including calculating and distributing wages, taxes, and other deductions. This can include tasks such as processing employee payrolls, tracking employee hours, and ensuring compliance with relevant laws and regulations.",

      callout: {
        kicker: "Service Focus",
        badge: "Payroll",
        icon: "ai-shield-check",
        title: "Accurate. Confidential. Compliant.",
        body: "Help reduce payroll errors, maintain compliance, and keep employees paid on time.",
        phoneLabel: "+356 9952 0938",
        phoneHref: "tel:+35699520938",
        emailLabel: "info@accountantsmalta.com",
        emailHref: "mailto:info@accountantsmalta.com",
      },
    },

    solutions: {
      title: "Our Solutions",
      subtitle: "We bring you the best possible solutions for your company.",
      items: [
        {
          title: "Employee Data Management",
          body:
            "This includes tasks such as keeping track of employee personal information, salary details, and tax information",
          icon: "ai-user",
        },
        {
          title: "Payroll Processing",
          body:
            "This includes tasks such as calculating employee salaries, deductions, and taxes, and issuing paychecks or direct deposits",
          icon: "ai-coins",
        },
        {
          title: "Compliance and Reporting",
          body:
            "This includes tasks such as ensuring compliance with local and federal laws related to payroll, and submitting required reports to government agencies",
          icon: "ai-shield-check",
        },
        {
          title: "Time and Attendance tracking",
          body:
            "This includes tasks such as tracking employee hours worked, vacation and sick leave, and other time-off requests",
          icon: "ai-clock",
        },
      ],
    },

    compliance: {
      left: {
        title: "Payroll Services Malta",
        body:
          "If your business employs individuals you are required to keep wage records of sums paid as salaries, allowances, bonuses as well as all related deductions of Social Security Contribution (SSC) / National Insurance (NI), and taxes. This is a statutory requirement for all employees from date of commencement up to date of termination, whether you are employing individuals as a company or a self-employed.",
        listTitle: "What we help you manage",
        items: [
          "Maintain wage records including salaries, allowances, bonuses and deductions of Social Security Contribution (SSC) / National Insurance (NI), and taxes.",
          "Support for Permission to Employ (PE number) registration and paperwork for engaging/terminating employees with Jobsplus.",
          "Monthly submissions such as FS5 (tax, SSC/NI and maternity leave trust fund contributions) with the Commissioner for Revenue (CfR).",
          "Year-end statutory reporting including FS3 (Statement of Earnings) and FS7 (Annual Reconciliation Statement), typically due by 15 February of the following year.",
          "Confidential handling of personnel data while complying with local legislation on entitlements, leave, overtime, notice periods, and NI calculations.",
        ],
      },
      right: {
        title: "Why outsource payroll?",
        body:
          "Outsourced payroll services can reduce administrative load on your HR/finance teams and help ensure monthly and annual reporting stays accurate, on-time, and compliant.",
        ctaLabel: "Let’s Build Future Together. Get Started Now",
        ctaHref: "/contact",
      },
    },

    industries: {
      title: "Industries",
      heading: "Service Business Specialists",
      body:
        "Our team provides tailored accounting and financial services for a variety of service businesses. From bookkeeping to tax planning, we have the expertise to help your business succeed. Our goal is to provide high-quality service and support, to help our clients navigate the challenges they face.",
    },

    resources: {
      title: "Exceptional Accountancy Resources",
      items: [
        {
          title: "MTCA SSC Calculator",
          note: "Official tool",
          icon: "ai-calculator",
          href: "https://irdpubserv.gov.mt/services/ssccalculator.aspx",
        },
        { title: "VAT Calculator", note: "Use now", icon: "ai-calculator", href: "#vat-calculator" },
      ],
    },

    // portal: {
    //   title: "The Vacei Portal – Built for Our Clients",
    //   body:
    //     "Every XLW Advisory client gets access to the Vacei Portal, our secure online platform that makes working with us seamless and transparent. Upload documents, track the progress of your engagement, sign electronically, and communicate directly with your team — all in one place.",
    //   featuresTitle: "Key Features:",
    //   features: [
    //     "Secure document uploads",
    //     "Real-time progress tracking",
    //     "Online e-signatures",
    //     "Direct communication with your XLW Advisory team",
    //   ],
    //},

    benefits: {
      title: "Great benefits from XLW Advisory.",
      body:
        "XLW Advisory offers a wide range of services, experienced professionals, personalized approach, and access to international resources, competitive pricing, quick turnaround times, transparent communication, flexibility, and reliability that ensures you have the most current and accurate financial information for your business.",
      items: [
        "Personalized approach",
        "Quick turnaround times",
        "Transparent communication",
        "Flexibility",
        "Reliability",
        "Technology-driven",
        "Proactive advice",
        "AI Specialized",
      ],
    },

    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about payroll services.",
      items: [
        {
          q: "What payroll responsibilities do I have as an employer in Malta?",
          a:
            "As an employer in Malta, you must maintain accurate wage records including salaries, bonuses, allowances, and deductions such as Social Security Contributions (SSC/NI) and taxes. These records must be kept from the employee’s start date to termination, whether you are a company or self-employed.",
        },
        {
          q: "Can you help me register for a PE (Permission to Employ) number?",
          a:
            "Yes. As part of outsourced payroll support, we can assist with the PE number registration and handle the necessary employment paperwork required with local authorities.",
        },
        {
          q: "What does your monthly payroll service and end-of-year payroll reporting include?",
          a:
            "Monthly payroll support typically includes wage calculations and required submissions. End-of-year reporting can include annual employee statements and reconciliation reporting aligned to local submission deadlines.",
        },
      ],
    },

    personalized: {
      title: "Need a personalized solution?",
      body:
        "An accounting and audit firm, such as XLW Advisory, can provide a range of services that are tailored to the specific needs of each client. The firm’s team of experts can work with clients to understand their unique business operations and financial goals and then design a customized solution that addresses their specific needs. Services that can be tailored to individual clients.",
      ctaEmail: "Email us",
    },
    },

    liquidation: {
      meta: {
        title: "Liquidation Services | XLW Advisory",
        description:
          "Liquidation Services: assisting companies in the winding down of business. Asset liquidation, creditor/shareholder distribution, bankruptcy filing support, and voluntary liquidation guidance.",
      },
      breadcrumb: { home: "Home", current: "Liquidation" },
      header: {
        heading: "Liquidation",
        subheading: "Assisting Companies in the Winding Down of Business.",
        intro:
          "Liquidation services assist companies in the process of winding down their business and can include bankruptcy or voluntary liquidation. These services involve selling off the company’s assets to pay off debts, and ensuring that the remaining assets are distributed among creditors and shareholders.",
        callout: {
          kicker: "Service Focus",
          badge: "Liquidation",
          icon: "ai-shield-check",
          title: "Clear steps. Strong compliance.",
          body: "We help you navigate winding down with structured execution and transparent communication.",
          phoneLabel: "+356 9952 0938",
          phoneHref: "tel:+35699520938",
          emailPrefix: "Prefer email?",
          emailLabel: "info@accountantsmalta.com",
          emailHref: "mailto:info@accountantsmalta.com",
        },
      },
      solutions: {
        title: "Our Solutions",
        subtitle: "We bring you the best possible solutions for your company.",
        items: [
          { title: "Asset Liquidation", body: "The process of selling off a company’s assets to pay off debts.", icon: "ai-bag" },
          { title: "Creditor and Shareholder Distribution", body: "The process of distributing remaining assets among creditors and shareholders after the liquidation process is completed.", icon: "ai-users" },
          { title: "Bankruptcy Filing", body: "The process of filing for bankruptcy and navigating the legal requirements and procedures.", icon: "ai-file" },
          { title: "Voluntary Liquidation", body: "The process of voluntarily winding down a business and liquidating assets to pay off debts.", icon: "ai-power" },
        ],
      },
      process: {
        title: "Liquidation Services",
        body:
          "When it's time to close a business, liquidation requires careful handling of assets, liabilities, filings, and stakeholder communication. We help you move through the process in a structured way.",
        listTitle: "What we help you manage",
        items: [
          "Guidance through voluntary liquidation, ensuring assets are properly managed and distributed.",
          "Support for insolvent businesses including creditor communication and asset management.",
          "Ensuring legal compliance and meeting regulatory requirements throughout the liquidation process.",
          "Preparation of final financial statements and reporting to help close the engagement properly.",
          "Aim to minimize disruption while completing the process efficiently and transparently.",
        ],
      },
      transition: {
        title: "Smooth and efficient transition",
        body:
          "Our approach emphasizes compliance and clarity so you know what is happening at every stage — from preparation to final reporting.",
        cta: "Discuss your situation",
      },
      industries: {
        title: "Industries",
        heading: "Service Business Specialists",
        body:
          "Our team provides tailored accounting and financial services for a variety of service businesses. From bookkeeping to tax planning, we have the expertise to help your business succeed. Our goal is to provide high-quality service and support, to help our clients navigate the challenges they face.",
      },
      resources: {
        title: "Exceptional Accountancy Resources",
        items: [
          { title: "Savings Excel", note: "Available Soon", icon: "ai-grid" },
          { title: "Tax Calculator", note: "Available Soon", icon: "ai-calculator" },
          { title: "Checkbook Balancer", note: "Available Soon", icon: "ai-wallet" },
          { title: "VAT Calculator", note: "Available Soon", icon: "ai-calculator" },
        ],
      },
      // portal: {
      //   title: "The Vacei Portal – Built for Our Clients",
      //   body:
      //     "Every XLW Advisory client gets access to the Vacei Portal, our secure online platform that makes working with us seamless and transparent. Upload documents, track the progress of your engagement, sign electronically, and communicate directly with your team — all in one place.",
      //   featuresTitle: "Key Features:",
      //   features: ["Secure document uploads", "Real-time progress tracking", "Online e-signatures", "Direct communication with your XLW Advisory team"],
      // },
      benefits: {
        title: "Great benefits from XLW Advisory.",
        body:
          "XLW Advisory offers a wide range of services, experienced professionals, personalized approach, and access to international resources, competitive pricing, quick turnaround times, transparent communication, flexibility, and reliability that ensures you have the most current and accurate financial information for your business.",
        items: ["Personalized approach", "Quick turnaround times", "Transparent communication", "Flexibility", "Reliability", "Technology-driven", "Proactive advice", "AI Specialized"],
      },
      related: {
        title: "Other Accountancy Services",
        subtitle: "Explore related services that often go hand-in-hand with liquidation planning and execution.",
        items: [
          { title: "Taxation", body: "Providing assistance with tax return preparation and filing, along with expert advice on tax-saving strategies to optimize financial outcomes and compliances.", icon: "ai-file", href: "/tax" },
          { title: "Bookkeeping and Accounting", body: "Recording, classifying and summarizing financial transactions to provide accurate and up-to-date financial information.", icon: "ai-list", href: "/bookkeeping" },
          { title: "Audit & Assurance", body: "An independent examination of an organization’s financial statements and records to ensure they are accurate and comply with relevant laws and regulations.", icon: "ai-shield", href: "/audit" },
          { title: "Payroll", body: "Efficient payroll management tailored to your business, ensuring timely processing, tax compliance, and accurate handling of social security contributions for your workforce.", icon: "ai-coins", href: "/payroll" },
          { title: "AI Bookkeeping", body: "AI-powered real-time bookkeeping with instant insights, automatic transaction categorization, seamless reporting, and dedicated personalized support in every package.", icon: "ai-sparkles", href: "/ai-bookkeeping" },
          { title: "Accounting", body: "Expert accounting services to help businesses manage finances, reporting, compliance, and decision-making with accurate and timely information.", icon: "ai-briefcase", href: "/accounting" },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about liquidation.",
        items: [
          { q: "What is liquidation?", a: "Liquidation is the process of winding down a company by selling assets, settling liabilities, and distributing any remaining assets to creditors and shareholders according to applicable rules and procedures." },
          { q: "Do you help with voluntary liquidation?", a: "Yes. We can guide businesses through a voluntary liquidation process, helping manage documentation, compliance steps, asset handling, and stakeholder communication." },
          { q: "Can you support insolvent businesses?", a: "We can support insolvency-related workflows such as creditor coordination, asset oversight, and reporting, while ensuring the process follows relevant legal and regulatory requirements." },
        ],
      },
      personalized: {
        title: "Need a personalized solution?",
        body:
          "An accounting and audit firm, such as XLW Advisory, can provide a range of services that are tailored to the specific needs of each client. The firm’s team of experts can work with clients to understand their unique business operations and financial goals and then design a customized solution that addresses their specific needs. Services that can be tailored to individual clients.",
        ctaEmail: "Email us",
      },
    },

    industries: {
    meta: {
      title: "Industries | XLW Advisory",
      description:
        "Industries we serve in Malta: Private Clients, Entrepreneurs, and Professional Firms — plus sector-focused support across tourism & yachting, tech, healthcare, real estate, e-commerce, and education.",
    },

    breadcrumb: {
      home: "Home",
      current: "Industries",
    },

    hero: {
      title: "Industries we serve",
      subtitle:
        "Malta is an English-speaking EU jurisdiction with a strong services economy — making it a practical base for international operations, cross-border trade, and fast-moving teams.",
      body:
        "We support clients across key sectors in Malta with bookkeeping, tax compliance, reporting, payroll, and practical finance operations — designed to stay clear, consistent, and audit-ready.",
    },

    callout: {
      kicker: "How we can help",
      badge: "Industries",
      title: "Clear scope. Reliable delivery.",
      body:
        "We align our support to your structure, reporting needs, and compliance deadlines — without unnecessary complexity.",
      phoneLabel: "+356 9952 0938",
      phoneHref: "tel:+35699520938",
      emailLabel: "info@accountantsmalta.com",
      emailHref: "mailto:info@accountantsmalta.com",
    },

    whoWeWorkWith: {
      title: "Who we work with",
      subtitle:
        "A simple view of the client types we support most often — and the core services we typically deliver.",
      cta: "Discuss your needs",
      items: [
        {
          id: "privateClients",
          title: "Private Clients",
          body:
            "We understand the unique financial needs of private individuals and families. Our team provides personalised solutions for everything from tax planning to longer-term financial structuring, helping you achieve your goals with clarity and confidence.",
          icon: "ai-user",
          bullets: [
            "Business plan development",
            "Bookkeeping",
            "Tax compliance",
            "Business registration and incorporation",
          ],
        },
        {
          id: "entrepreneurs",
          title: "Entrepreneurs",
          body:
            "Entrepreneurship comes with its own set of financial challenges. We help you navigate the complexity of starting and growing a business with practical finance operations and straightforward compliance support.",
          icon: "ai-rocket",
          bullets: [
            "Business plan development",
            "Bookkeeping",
            "Tax compliance",
            "Business registration and incorporation",
          ],
        },
        {
          id: "professionalFirms",
          title: "Professional Firms",
          body:
            "Running a firm can be complex, especially when it comes to financial matters. We support firms of all sizes with structured reporting, audit support, and ongoing compliance — so you can focus on serving clients.",
          icon: "ai-briefcase",
          bullets: [
            "Financial statement preparation",
            "Auditing services",
            "Tax compliance",
            "Business registration and incorporation",
          ],
        },
      ],
    },

    maltaSectors: {
      title: "Sector support in Malta",
      subtitle:
        "From seasonal cashflow and high-volume transactions to multi-entity reporting — we adapt finance operations to the way each sector works in Malta.",
      items: [
        {
          id: "yachting",
          title: "Yachting & Marine",
          body:
            "We support operators working with bookings, charters, suppliers, and seasonal peaks — keeping records clean and cashflow visible.",
          icon: "ai-globe",
        },
        {
          id: "startupTech",
          title: "Startup & Technology",
          body:
            "We help startups stay organised from day one — with bookkeeping routines, reporting structure, and compliance processes that scale as headcount and volume grow.",
          icon: "ai-rocket",
        },
        {
          id: "healthBeauty",
          title: "Healthcare & Beauty",
          body:
            "We help keep payroll, supplier spend, and reporting consistent — so you can focus on delivering quality service.",
          icon: "ai-heart",
        },
        {
          id: "realEstateHospitality",
          title: "Real Estate & Hospitality",
          body:
            "We help keep reconciliations tight and reporting structured — especially when transactions span platforms and payment providers.",
          icon: "ai-home",
        },
        {
          id: "ecommerce",
          title: "E-commerce",
          body:
            "We support high-volume workflows with payment reconciliation, margin clarity, and documentation that keeps reporting and compliance stable as you grow.",
          icon: "ai-bag",
        },
        {
          id: "educationTraining",
          title: "Education & Training",
          body:
            "We help create repeatable processes and reporting so management decisions are grounded in reliable numbers.",
          icon: "ai-flag",
        },
        {
          id: "gaming",
          title: "Gaming & Betting",
          body:
            "We help create repeatable processes and reporting so management decisions are grounded in reliable numbers.",
          icon: "ai-game",
        },
      ],
    },

    resources: {
      title: "Exceptional Accountancy Resources",
      subtitle: "More free accounting tools for your business (coming soon).",
      badge: "Coming soon",
      cta: "Let’s build the future together",
      items: [
        { title: "Savings Excel", body: "More tools are on the way.", icon: "ai-grid" },
        { title: "Tax Calculator", body: "More tools are on the way.", icon: "ai-calculator" },
        { title: "Checkbook Balancer", body: "More tools are on the way.", icon: "ai-wallet" },
        { title: "VAT Calculator", body: "More tools are on the way.", icon: "ai-calculator" },
        { title: "Retirement Planner", body: "More tools are on the way.", icon: "ai-flag" },
      ],
    },

    personalized: {
      title: "Need a personalized solution?",
      body:
        "An accounting and audit firm can provide services tailored to the specific needs of each client. Our team can work with you to understand your operations and goals, then design a customised solution that fits your situation.",
      ctaEmail: "Email us",
    },
    },

    aboutUs: {
  meta: {
    title: "About us | XLW Advisory",
    description:
      "About XLW Advisory: a Malta-based professional services firm specializing in accounting, audit, tax, and technology-led finance operations with AI and automation.",
  },

  hero: {
    title: "About Our Organization.",
    lead:
      "We are a professional services firm located in Malta. We specialize in accounting, audit, and other financial services. Our team of experienced professionals are dedicated to providing high-quality services to our clients. We have a strong understanding of the local market and regulations, which allows us to offer tailored solutions that meet specific needs. We are also committed to integrating AI with our financial procedures to offer more efficient and accurate services — whether you’re a small business or a large corporation.",
    tags: ["Accounting", "Audit & Assurance", "Tax Services", "AI Automation"],
  },

  breadcrumb: {
    home: "Home",
    current: "About us",
  },

  about: {
    kicker: "Who we are",
    title: "Local Malta knowledge. International development. Global standards. Efficient execution.",
    paragraphs: [
      "Malta is a small EU member state in the Mediterranean, with English widely spoken and a business-friendly environment for local and international companies.",
      "We help clients stay compliant, keep reporting clear, and improve finance operations through better workflows — including automation where it makes sense.",
      "Whether you need day-to-day finance support or structured execution for complex requirements, we bring a calm, reliable approach.",
    ],
  },

  mission: {
    kicker: "Our Mission",
    title: "Revolutionizing Financial Services with AI",
    subtitle: "Our commitment to innovation.",
    body:
      "We are committed to staying at the forefront of innovation in the financial services industry. By integrating artificial intelligence into accounting, audit, and other financial procedures, we can analyze data faster, identify patterns and trends, and deliver better decision support. Our investment in AI helps clients move quicker with more confidence.",
    bullets: [
      "Faster analysis and reporting cycles",
      "Better pattern detection and forecasting",
      "More accurate processing with OCR automation",
      "Decision-ready dashboards and insights",
    ],
    sideCard: {
      title: "Trusted by growing teams",
      body: "We support founders and operators who want clarity, compliance, and predictable delivery.",
      stats: [
        { value: "4.9", label: "Client rating" },
        { value: "80+", label: "Reviews" },
        { value: "EU", label: "Malta-based" },
        { value: "AI", label: "Enabled workflows" },
      ],
    },
  },

  values: {
    kicker: "Our Values",
    title: "Principles that guide us",
    items: [
      {
        title: "Integrity & Trust",
        body:
          "We uphold the highest ethical standards — maintaining transparency and honesty in every interaction. Trust forms the foundation of our client relationships.",
        icon: "ai-shield-check",
      },
      {
        title: "Innovation & Excellence",
        body:
          "We continuously improve through creative problem-solving and practical, cutting-edge solutions — delivering exceptional value and quality.",
        icon: "ai-sparkles",
      },
      {
        title: "Custodianship & Partnership",
        body:
          "We treat our clients’ financial wellbeing as our own, building enduring partnerships based on shared responsibility and long-term commitment.",
        icon: "ai-users",
      },
      {
        title: "Client-Centric Service",
        body: "We prioritize client satisfaction by understanding unique needs and delivering personalized, proactive support.",
        icon: "ai-heart",
      },
    ],
  },

  features: {
    kicker: "Our Features",
    title: "Why choose XLW Advisory?",
    items: [
      {
        title: "Global Reach",
        body: "Access to international expertise through global alliances and partners.",
        icon: "ai-globe",
      },
      {
        title: "Compliance & Innovation",
        body: "Strong compliance mindset paired with modern, efficient technology-led workflows.",
        icon: "ai-shield",
      },
      {
        title: "Technology Experts",
        body: "Leaders in applying AI powered tools to reduce manual work and improve accuracy.",
        icon: "ai-cpu",
      },
      {
        title: "Customized Solutions",
        body: "Services tailored to your structure, industry, and reporting needs.",
        icon: "ai-settings",
      },
    ],
  },

  team: {
    kicker: "Our team",
    title: "Team of professionals",
    note: "*Team images are placeholders — replace with your real photos when ready.",
    items: [
      {
        name: "Shawn Lou, CPA(Practising), MIA,ACCA",
        role: "M.Partner",
        body:
          "Shawn oversees daily accounting operations and supervises accounting staff. With experience across industries, he is thoughtful, focused, and committed to continuous learning. Outside work he enjoys travelling, swimming, and music.Shawn is fluent in English and Chinese.",
      },
      {
        name: "Kanwal Fayyaz, ACCA",
        role: "Compliance and Audit Support",
        body:
          "Kanwal supports compliance and  audit support across the business. Highly organised with strong attention to detail, she focuses on improving her skills in the administration sector. Outside office hours she enjoys TV series and baking.",
      },
      {
        name: "YIXIN QI",
        role: "Fund Promoter and Innvestment Partner",
        body:
          "Yixin is fund promoter, love IT technology and intelligient products. Outside work he enjoys marine and yacht",
      },
      {
        name: "Robert Fox ACCA",
        role: "Virttual Accountant Leader",
        body:
          "Robert is an ACCA-qualified accountant who enjoys solving challenges with numbers. In her free time she enjoys reading, cooking, playing tennis, and learning about different cultures.",
      },
      {
        name: "Brad Jie Weng",
        role: "Partner and Cusomer Director",
        body:
          "Brad supports day-to-day accounts work and enjoys the challenge of growing in a fast-paced environment. He loves travelling and is known as a reliable and responsible team member.",
      },
      {
        name: "Albert Parker, ACCA",
        role: "Partner & Accounts Manager",
        body:
          "Albert manages a diverse portfolio of clients, providing services across audit and assurance, data input, VAT compliance, management accounting, payroll, and related professional services. Outside of his professional responsibilities, he has a keen interest in travel, reading, football, and outdoor activities. ",
      },
    ],
  },

  faq: {
    kicker: "FAQ",
    title: "Common questions",
    subtitle: "A quick overview of how we work and who we support.",
    items: [
      {
        q: "What services does XLW Advisory offer?",
        a: "We provide accounting, bookkeeping, financial statement preparation, budgeting, tax planning, audit and assurance support, VAT compliance, and tax advisory — with technology-led workflows where appropriate.",
      },
      {
        q: "Who are your typical clients?",
        a: "We work with start-ups, family-run businesses, larger corporations, self-employed individuals, partnerships, and international structures operating in or expanding to Malta.",
      },
      {
        q: "What sets you apart?",
        a: "A compliance-first mindset, strong local Malta knowledge, and practical use of AI to improve speed, accuracy, and transparency — while keeping a personal, responsive service model.",
      },
      {
        q: "How can I engage your services?",
        a: "Reach out via the contact form or email/phone. We’ll understand your needs, propose a scope, and align timelines, deliverables, and reporting cadence.",
      },
    ],
  },
    },

    contact: {
  meta: {
    title: "Contact | XLW Advisory",
    description: "Contact XLW Advisory: request a free consultation, call or email our team in Malta.",
  },
  breadcrumb: {
    home: "Home",
    current: "Contact",
  },
  header: {
    title: "Contact",
    lead: "Get in touch by completing the form below — or call / email us directly.",
  },
  details: {
    phone: {
      digits: "35699520938",
      display: "+356 9952 0938",
    },
    email: "info@accountantsmalta.com",
    address: {
      line1: "XLW Advisory",
      line2: "San M. Kolbe, St. Paul's Bay, Malta",
    },
  },
  cards: {
    address: { title: "Address", ctaMap: "View map" },
    phone: { title: "Phone", mainOffice: "WhatsApp", whatsapp: "WeChatID", whatsappCta: "SimplerOnly" },
    schedule: {
      title: "Schedule",
      weekdaysLabel: "Mon - Fri",
      weekdaysFrom: "09:00",
      weekdaysTo: "17:00",
      weekendLabel: "Sat - Sun",
      weekendValue: "Closed",
    },
    email: {
      title: "Email",
      generalLabel: "General enquiries",
      quickCallLabel: "Prefer a quick call?",
      quickCallCta: "Book a free consultation",
    },
  },
  form: {
    title: "Get a free consultation",
    fields: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      companyLabel: "Company",
      companyPlaceholder: "Your company name",
      emailLabel: "Email",
      emailPlaceholder: "Email address",
      phoneLabel: "Phone",
      phonePlaceholder: "Phone number",
      serviceLabel: "What do you need help with?",
      serviceDefault: "Company Registration",
      serviceOptions: [
        "Company Registration",
        "Accounting",
        "Bookkeeping",
        "Audit & Assurance",
        "Tax / VAT",
        "Payroll",
        "Liquidation",
        "Other",
      ],
      messageLabel: "How can we help?",
      messagePlaceholder: "Enter your message here...",
    },
    topics: [
  { id: "opt-accounting", value: "Accounting", label: "Accounting", defaultChecked: false },
  { id: "opt-tax", value: "Tax/VAT", label: "Tax / VAT", defaultChecked: false },
  { id: "opt-audit", value: "Audit", label: "Audit", defaultChecked: false },
  { id: "opt-payroll", value: "Payroll", label: "Payroll", defaultChecked: false },
  { id: "opt-ai", value: "AI", label: "AI automation", defaultChecked: false },
  { id: "opt-liquidation", value: "Liquidation", label: "Liquidation", defaultChecked: false },
  { id: "opt-other", value: "Other Services", label: "Other services", defaultChecked: false },
],
    disclaimer: "By submitting, you agree we may contact you about your enquiry.",
    privacyAcknowledgement: "I have read and understand the",
    privacyLinkLabel: "Privacy Policy",
    submitLabel: "Send a request",
    submittingLabel: "Sending...",
    errorMessage: "We could not send your request. Please try again or email us directly.",
    orEmailPrefix: "Or email us directly:",
  },
  map: {
    title: "Visit us in Malta",
    body: "San M. Kolbe, St. Paul's Bay, Malta",
    ctaCall: "Call now",
    imageAlt: "Map placeholder",
  },
    },
  },
};

export type SiteCopy = typeof en;

/**
 * ✅ 2) zh must match EN shape, but can have different strings
 */
const zh: SiteCopy = {
  ...en,

  site: {
    name: "XLW Advisory Malta",
    slogan: "Trustworthy | Focus | Vision | Compliance",
    founderStatement:
      "XLW Advisory was founded by Mr. Xiaoyang Lou and his partners. Mr. Lou is a licensed CPA and practising auditor with warrant number 121145. Together with his associates, the firm works with clients to support growth, success, and compliant business operations.",
  },

  navbar: {
  ...en.navbar,
  brand: { label: "XLW Advisory Malta", href: "/zh" },
  login: { label: "登录", href: "https://mgt.accountantsmalta.com" },
  cta: { label: "联系我们", href: "/zh/contact" },

  items: [
    { label: "首页", href: "/zh" },
    {
      ...en.navbar.items[1],
      label: "服务",
      href: "/zh/services",
      children: [
        { label: "会计服务", href: "/zh/accounting" },
        { label: "税务及增值税合规服务", href: "/zh/tax-services" },
        { label: "审计和合规服务", href: "/zh/audit-and-assurance" },
        { label: "簿记服务", href: "/zh/bookkeeping" },
        { label: "薪资管理", href: "/zh/payroll" },
        { label: "公司清算/注销", href: "/zh/liquidation" },
        { label: "马耳他公司设立", href: "/zh/company-formation" },
        { label: "尽职调查与资料合规", href: "/zh/due-diligence" },
      ],
    },
    {
      label: "身份规划",
      href: "/zh/mprp",
      children: [
        { label: "马耳他 MPRP", href: "/zh/mprp" },
        { label: "马耳他数字游民居留", href: "/zh/nomad-residence" },
        { label: "希腊 Golden Visa", href: "/zh/greece-golden-visa" },
      ],
    },
    {
      label: "国际服务",
      href: "/zh/international-services",
      children: [
        { label: "国际服务概览", href: "/zh/international-services" },
        { label: "投资中国", href: "/zh/invest-china" },
      ],
    },
    { label: "行业", href: "/zh/industries" },
    // { label: "杰出贡献投资基金", href: "/zh/fund" },
    // { label: "博客", href: "/zh/#blog" },
    { label: "关于我们", href: "/zh/about-us" },
    // {
    //   ...en.navbar.items[6],
    //   label: "AI",
    //   href: "/zh/ai",
    //   children: [
    //     { label: "AI 专家服务", href: "/zh/#ai-specialist" },
    //     { label: "AI 簿记", href: "/zh/#ai-bookkeeping" },
    //     { label: "AI自动化解决方案", href: "/zh/#ai-ocr" },
    //   ],
    // },
  ],
},

  hero: {
    ...en.hero,
    title: "马耳他智能财务与数字化解决方案",
    subtitle: "会计、税务、审计、财务与数字服务——清晰合规，助力增长。",
    primaryCta: { label: "微信号：SimplerOnly/657219579", href: "/zh/contact" },
    phone: { label: "电话：+356 99520938", href: "/zh/contact" },
    bullets: ["服务覆盖全面", "合作方式灵活"],
  },

  services: {
    ...en.services,
    title: "我们的服务",
    subtitle: "在专业顾问支持下，帮助您解决多种业务挑战",
    items: [
      { ...en.services.items[0], title: "会计服务", description: "清晰的日常会计支持，确保账目准确、便于决策。" },
      { ...en.services.items[1], title: "税务服务", description: "务实的税务筹划与申报支持，匹配您的架构与合规要求。" },
      { ...en.services.items[2], title: "审计服务", description: "审计协调与资料准备支持，帮助您合规且更有把握。" },
      { ...en.services.items[3], title: "簿记服务", description: "稳定的簿记流程，让数据及时更新、随时可用。" },
      { ...en.services.items[4], title: "薪资管理", description: "注重准确与合规的薪资处理与报表，让员工更安心。" },
      { ...en.services.items[5], title: "清算/注销", description: "清算流程、文件与合规节点的全程指导与协调。" },
    ],
  },

  partners: {
    ...en.partners,
    title: "深受创始人与团队信赖",
    subtitle: "为马耳他及国际企业提供务实可靠的财务与合规支持",
  },

  features: {
    ...en.features,
    blocks: [
      {
        ...en.features.blocks[0],
        variant: "grow",
        title: "用清晰与掌控推动业务增长",
        body:
          "我们将会计、税务、合规与数字化财务运营整合在一起，帮助您更快决策、随时审计就绪，无需搭建庞大的内部团队。",
        link: { label: "了解更多", href: "#services" },
      },
      {
        ...en.features.blocks[1],
        variant: "approach",
        title: "专业的方法，落地的结果",
        points: [
          { no: "01", title: "量身定制、深入执行", body: "根据您的企业结构与流程（SME、控股或多实体）提供可操作方案，而非泛泛建议。" },
          { no: "02", title: "可行动的报表与洞察", body: "规范月结、管理报表与现金流可视化，让您始终清楚现状与下一步动作。" },
        ],
      },
      {
        ...en.features.blocks[2],
        variant: "spectrum",
        title: "覆盖全面的财务、合规与数字化服务",
        body: "从簿记到CFO级支持，并结合自动化与数字化转型，构建现代化财务体系。",
        bullets: ["合规优先的会计与税务支持", "流程优化、AI自动化与工作流", "预算预测与CFO顾问服务"],
        cta: { label: "预约免费咨询", href: "/zh/contact" },
      },
    ],
  },

  industries: {
    ...en.industries,
    title: "我们服务的行业",
    cta: { label: "了解更多行业信息", href: "/zh/contact" },
    items: [
      { ...en.industries.items[0], title: "金融与保险", body: "为节奏快、合规要求高的团队提供支持：报表准备、审计支持与可扩展的财务运营。" },
      { ...en.industries.items[1], title: "初创企业与科技", body: "从早期搭建到规模化：簿记、VAT、薪资、数据看板与兼职CFO支持，贴合您的现金流节奏。" },
      { ...en.industries.items[2], title: "医疗与美业", body: "为诊所与健康品牌打造稳定财务运营：薪资、供应商管理、现金流可视化与合规支持。" },
      { ...en.industries.items[3], title: "房地产与酒店餐饮", body: "多实体账务、对账与管理报表包，强化运营控制与决策效率。" },
      { ...en.industries.items[4], title: "电子商务", body: "面向高交易量：支付对账、成本/毛利跟踪、VAT支持与更适配库存的管理报表。" },
      { ...en.industries.items[5], title: "教育与培训", body: "为培训机构建立清晰报表与可复制流程：开票/收款流程、薪资与管理报表。" },
      { ...en.industries.items[6], title: "游戏与博彩", body: "架构和管理的建议与支持，专业服务于法务，财务，税务及合规。" },

    ],
  },

  testimonials: {
    ...en.testimonials,
    title: "客户评价",
    items: [
      { ...en.testimonials.items[0], headline: "账目更清晰、决策更快——正是我们需要的。", text: "XLW Advisory帮我们理顺了报表与流程，让团队更有信心。沟通主动、配合顺畅。" },
      { ...en.testimonials.items[1], headline: "交付稳定且灵活，结果非常好。", text: "我们快速切换到新流程，并建立了周度管理报表。沟通高效、工作持续可靠。" },
      { ...en.testimonials.items[2], headline: "专业、合规、并且为增长做好准备。", text: "从簿记到规划，现在一切更有结构。现金流更透明，决策也更有数据依据。" },
    ],
  },

  team: {
  id: "team",
  title: "认识我们的团队",
  intro:
    "融合会计、税务、合规、财务运营与数字化能力的务实团队——专注于清晰、高效与可靠交付。",
  cta: { label: "关于我们", href: "/about-us" },
  members: [
    {
      name: "Jie Weng",
      role: "合伙人及客户经理",
      image: "/assets/generated/team-jie.svg",
      socials: [
        { kind: "facebook", label: "Facebook", href: "#" },
        { kind: "x", label: "X", href: "#" },
        { kind: "linkedin", label: "LinkedIn", href: "#" },
      ],
    },
    {
      name: "Yixin QI",
      role: "基金发起人及投资合伙人",
      image: "/assets/generated/team-yixin.svg",
      socials: [
        { kind: "instagram", label: "Instagram", href: "#" },
        { kind: "facebook", label: "Facebook", href: "#" },
        { kind: "linkedin", label: "LinkedIn", href: "#" },
      ],
    },
    {
      name: "Kanwal Fayyaz",
      role: "合规与审计支持",
      image: "/assets/generated/team-kanwal.svg",
      socials: [
        { kind: "instagram", label: "Instagram", href: "#" },
        { kind: "facebook", label: "Facebook", href: "#" },
        { kind: "linkedin", label: "LinkedIn", href: "#" },
      ],
    },
    {
      name: "Albert Parker",
      role: "合伙人及会计师",
      image: "/assets/generated/team-albert.svg",
      socials: [
        { kind: "facebook", label: "Facebook", href: "#" },
        { kind: "behance", label: "Behance", href: "#" },
        { kind: "dribbble", label: "Dribbble", href: "#" },
      ],
    },
    {
      name: "Robert Fox",
      role: "虚拟财务团队负责人",
      image: "/assets/generated/team-robert.svg",
      socials: [
        { kind: "facebook", label: "Facebook", href: "#" },
        { kind: "x", label: "X", href: "#" },
        { kind: "stack-overflow", label: "Stack Overflow", href: "#" },
      ],
    },
    {
      name: "Shawn Lou",
      role: "执行合伙人",
      image: "/assets/generated/team-shawn.svg",
      socials: [
        { kind: "instagram", label: "Instagram", href: "#" },
        { kind: "facebook", label: "Facebook", href: "#" },
        { kind: "linkedin", label: "LinkedIn", href: "#" },
      ],
    },
  ],
},

  blog: {
    ...en.blog,
    title: "博客",
    featured: {
      ...en.blog.featured,
      title: "可扩展的财务运营：成长型企业实用手册",
      excerpt: "一份实战指南：规范簿记、稳定月结、可决策的管理报表与数据看板——不拖慢业务执行。",
    },
    items: [
      { ...en.blog.items[0], title: "VAT、薪资与报表：常见坑位避雷清单", excerpt: "给创始人和运营团队的一份检查表：让合规更顺滑，把时间留给增长。", date: "2026年1月", tag: "合规" },
      { ...en.blog.items[1], title: "为什么月度管理报表会改变一切", excerpt: "从现金流到毛利——领导团队每月必须看的 5 个关键指标。", date: "2026年1月", tag: "分析" },
      { ...en.blog.items[2], title: "兼职CFO：什么时候需要？你会得到什么？", excerpt: "预测、内控、融资准备与战略决策——CFO能为你解锁什么能力。", date: "2026年1月", tag: "财务" },
      { ...en.blog.items[3], title: "AI 簿记与自动化：最值得自动化的环节", excerpt: "哪些该自动化、哪些需要复核？如何用更好的流程提升准确性。", date: "2026年1月", tag: "AI" },
    ],
    all: { label: "查看全部文章", href: "/#blog" },
  },

  contactCta: {
    ...en.contactCta,
    left: {
      title: "加入我们的团队",
      col1: ["财务分析师", "商业分析师", "簿记专员"],
      col2: ["税务与合规专员", "客户成功", "财务运营负责人"],
      button: { label: "申请职位", href: "/zh/contact" },
    },
    right: {
      title: "准备好聊聊你的业务了吗？",
      subtitle: "告诉我们你的需求——我们将为你提供合规的架构建议，以及可落地的会计、税务与财务运营方案。",
      button: { label: "联系我们", href: "/zh/contact" },
      email: { label: "info@accountantsmalta.com", href: "mailto:info@accountantsmalta.com" },
      wechat: { label: "WeChat ID", href: "SimplerOnly" },
    },
  },

  footer: {
    ...en.footer,
    officialLinks: {
      title: "马耳他官方链接",
      description: "快速访问与企业经营相关的主要政府部门及公共服务。",
      items: [
        { label: "马耳他税务与海关管理局（MTCA）", href: "https://mtca.gov.mt/" },
        { label: "马耳他就业服务局（Jobsplus）", href: "https://jobsplus.gov.mt/?langid=en" },
        { label: "劳资关系局（DIER）", href: "https://dier.gov.mt/en/" },
        { label: "马耳他商业注册局（MBR）", href: "https://www.mbr.mt/" },
        { label: "马耳他金融服务管理局（MFSA）", href: "https://www.mfsa.mt/" },
        { label: "马耳他官方法规库", href: "https://legislation.mt/" },
        { label: "马耳他政府服务平台（Servizz.gov）", href: "https://www.servizz.gov.mt/en/Home" },
      ],
    },
    nav: [
      { label: "服务", href: "#services" },
      { label: "评价", href: "#testimonials" },
      { label: "团队", href: "#team" },
      { label: "博客", href: "#blog" },
      { label: "联系", href: "/zh/contact" },
    ],
    privacy: { label: "隐私政策", href: "/zh/privacy-policy" },
    cookieSettingsLabel: "Cookie 设置",
    copyright: {
      prefix: "© 保留所有权利。制作：",
      linkLabel: "XLW Advisory",
      linkHref: "#top",
    },
  },

  pages: {
    ...en.pages,
    accounting: {
      ...en.pages.accounting,
      breadcrumb: { home: "首页", current: "会计" },
      intro: {
        pageTitle: "会计",
        headline: "为您的企业提供专业会计服务。",
        body:
          "我们提供全面的会计服务，帮助各类规模的企业管理财务。我们的专业团队具备丰富经验，能够满足从记账与报表编制到税务筹划与合规申报等各类需求。我们提供及时、准确的财务信息，帮助您做出更明智的商业决策。",
        ctaBook: "预约通话",
      },
      solutions: {
        ...en.pages.accounting.solutions,
        title: "我们的解决方案",
        subtitle: "为您的企业提供最合适的解决方案。",
        items: [
        { title: "所得税申报准备", body: "我们提供税务筹划与合规申报服务……" },
        { title: "簿记服务", body: "我们的簿记服务包括……" },
        { title: "企业创办咨询", body: "我们的企业创办咨询服务包括……" },
        { title: "总账复核", body: "我们的总账复核服务包括……" },
      ],
      },
      specialists: {
        kicker: "会计",
        title: "服务型企业专家",
        body:
          "我们为多种服务型企业提供定制化会计与财务支持。从记账到税务筹划，我们具备帮助企业稳健发展的专业能力。我们的目标是提供高质量服务与持续支持，协助客户应对经营中的各类挑战。",
      },
      resources: {
        title: "实用会计资源工具",
        cta: "获取通知",
        items: [
          { title: "节省测算表（Excel）", note: "即将上线" },
          { title: "税务计算器", note: "即将上线" },
          { title: "支票簿平衡工具", note: "即将上线" },
          { title: "VAT 计算器", note: "即将上线" },
        ],
      },
      // portal: {
      //   title: "Vacei Portal — 为客户打造",
      //   body:
      //     "每位 XLW Advisory 客户都可使用 Vacei Portal——我们的安全在线平台，让协作更顺畅、更透明。上传资料、跟踪进度、在线签署、与团队直接沟通，一站式完成。",
      //   featuresLabel: "主要功能",
      //   features: ["安全文件上传", "进度实时跟踪", "在线电子签名", "与 XLW Advisory 团队直接沟通"],
      // },
      benefits: {
        title: "XLW Advisory 的核心优势。",
        body:
          "XLW Advisory 提供广泛服务、经验丰富的专业团队、个性化方案，并可接入国际资源。我们拥有具竞争力的价格、快速交付、透明沟通、灵活与可靠，确保您获得最新且准确的财务信息。",
        items: ["个性化方案", "快速交付", "透明沟通", "灵活性", "可靠性", "技术驱动", "前瞻建议", "AI 专长"],
      },
      personalized: {
        title: "需要个性化方案？",
        body:
          "会计与审计机构（如 XLW Advisory）可根据不同客户的具体需求提供量身定制的服务。我们的专家团队将深入了解您的业务与财务目标，并设计解决方案来匹配您的实际情况。",
        ctaPrimary: "联系我们",
        ctaSecondary: "立即致电",
      },
      otherServices: {
        kicker: "我们如何帮助您？",
        title: "我们的服务",
        subtitle: "其他会计相关服务。",
        items: [
          { title: "税务服务", body: "协助税表准备与申报，并提供节税策略建议，优化财务结果与合规性。" },
          { title: "AI 记账", body: "AI 驱动的实时记账与洞察：自动分类、无缝报表、并在每个套餐中提供专属支持。" },
          { title: "薪资管理", body: "高效薪资管理，确保按时发薪、税务合规，并准确处理社保缴费。" },
          { title: "兼职 CFO 服务", body: "提供战略规划、现金流管理、预算与投资者沟通等财务领导力，无需全职 CFO。" },
          { title: "簿记与会计", body: "记录、分类与汇总财务交易，提供准确且最新的财务信息。" },
          { title: "审计与鉴证", body: "独立审查财务报表与记录，确保准确并符合相关法律法规。" },
        ],
      },
    },

    taxServices: {
      meta: {
        title: "税务服务 | XLW Advisory",
        description:
          "合规申报与税务筹划支持，包括税表准备与申报、税务优化策略、税务审查协助、国际税务与VAT支持等。",
      },
      
      breadcrumb: { home: "首页", current: "税务服务" },

      intro: {
        pageTitle: "税务服务",
        headline: "税务服务：合规申报 + 合法节税，帮您把税务风险和成本控制住。",
        body:
          "税务服务由熟悉税法与监管要求的专业人士提供，可协助个人与企业完成合规申报（准备并提交税表），并识别可用的扣除与抵免等节税机会，降低整体税负。",
        ctaBook: "预约通话",
      },

      solutions: {
        title: "我们的解决方案",
        subtitle: "为您的企业提供最合适的解决方案。",
        items: [
          {
            title: "税表准备与申报",
            body: "为个人与企业准备并提交税务申报表，确保符合当地与相关税务法规要求。",
            icon: "ai-file",
          },
          {
            title: "税务筹划与策略",
            body: "识别可用扣除与抵免，并就更具税务效率的经营/投资决策提供建议，以降低税负。",
            icon: "ai-trending-down",
          },
          {
            title: "税务稽查/审查协助",
            body: "在税务审查/稽查过程中代表客户沟通与应对，协助处理可能出现的问题。",
            icon: "ai-shield-check",
          },
          {
            title: "国际税务",
            body: "为涉及跨境收入或海外资产的个人与企业提供合规指引与申报支持。",
            icon: "ai-globe",
          },
        ],
      },

      advisory: {
        title: "税务顾问服务：保护业务，也保护现金流。",
        p1:
          "税收不可避免，但不代表企业必须被税负拖累。通过合规的架构与策略，可以在符合法律要求的前提下降低税务成本并优化现金流。我们的税务顾问服务正是为此而设。",
        p2:
          "我们会充分利用当地税制特点，在合规的前提下帮助客户在不同司法辖区的安排中获得更优结果。我们对法规细节非常熟悉，因此能够为不同客户与具体场景提供更贴合的建议。",
        p3:
          "我们为本地与国际企业提供税务顾问、税务架构设计与优化方案，识别可行的节税机会。",
        listTitle: "我们的税务相关服务包括：",
        cta: "与税务顾问沟通",
        items: [
          "税务顾问服务",
          "税务优化策略",
          "个人/企业所得税自评申报表的准备（Income Tax Returns）",
          "协助预缴税与最终结算税款的计算与缴纳",
          "根据所得税法要求编制公司税务计算表（tax computation）",
          "股东税务退税登记（用于税务退税申请）",
        ],
      },

      specialists: {
        kicker: "行业",
        title: "服务型企业专家",
        body:
          "我们为各类服务型企业提供定制化会计与财务支持。从记账到税务筹划，我们具备帮助企业稳健发展的专业能力，并以高质量交付与持续支持协助客户应对经营挑战。",
      },

      resources: {
        title: "实用会计资源工具",
        cta: "获取通知",
        items: [
          { title: "节省测算表（Excel）", note: "即将上线", icon: "ai-grid" },
          { title: "税务计算器", note: "即将上线", icon: "ai-calculator" },
          { title: "支票簿平衡工具", note: "即将上线", icon: "ai-wallet" },
          { title: "VAT 计算器", note: "即将上线", icon: "ai-calculator" },
        ],
      },

      // portal: {
      //   title: "Vacei Portal — 为客户打造",
      //   body:
      //     "每位 XLW Advisory 客户都可使用 Vacei Portal——我们的安全在线平台，让协作更顺畅、更透明。上传资料、跟踪进度、在线签署、与团队直接沟通，一站式完成。",
      //   featuresLabel: "主要功能",
      //   features: ["安全文件上传", "进度实时跟踪", "在线电子签名", "与 XLW Advisory 团队直接沟通"],
      // },

      benefits: {
        title: "XLW Advisory 的核心优势。",
        body:
          "XLW Advisory 提供广泛服务、经验丰富的专业团队、个性化方案，并可接入国际资源。我们拥有具竞争力的价格、快速交付、透明沟通、灵活与可靠，确保您获得最新且准确的财务信息。",
        items: ["个性化方案", "快速交付", "透明沟通", "灵活性", "可靠性", "技术驱动", "前瞻建议", "AI 专长"],
      },

      personalized: {
        title: "需要个性化方案？",
        body:
          "会计与审计机构（如 XLW Advisory）可根据不同客户的具体需求提供量身定制的服务。我们的专家团队将深入了解您的业务与财务目标，并设计解决方案来匹配您的实际情况。",
        ctaPrimary: "联系我们",
        ctaSecondary: "立即致电",
      },

      faq: {
        title: "常见问题",
        subtitle: "关于税务服务的高频问题，快速解答。",
        cta: "还有问题？欢迎联系我们",
        items: [
          {
            q: "你们为马耳他的企业提供哪些税务服务？",
            a:
              "我们提供税务顾问、税务优化策略、自评所得税申报（个人与公司）、预缴税与最终结算税款的计算与缴纳协助、公司税务计算表编制，以及股东税务退税登记等服务。适用于本地与通过马耳他开展业务的国际公司。",
          },
          {
            q: "你们是否可以准备并提交所得税申报表？",
            a:
              "可以。我们可为个人与公司准备自评所得税申报表，并协助计算与按时缴纳预缴税及最终税款，帮助您降低罚金与利息风险。",
          },
          {
            q: "什么是股东税务退税登记？你们能处理吗？",
            a:
              "在马耳他，公司外国籍股东可能对已收取的股息享有税务退税资格。我们可协助完成登记与资料提交，帮助符合条件的股东更高效地申请退税。",
          },
        ],
      },
    },

    auditAndAssurance: {
  meta: {
    title: "审计与鉴证 | XLW Advisory",
    description:
      "审计与鉴证服务：财务报表审计、内部审计、合规审计与风险管理审计。提升报表可信度，优化流程与内控。",
  },

  breadcrumb: { home: "首页", current: "审计" },

  intro: {
    pageTitle: "审计",
    headline: "审计与鉴证服务：为您的财务报告提供坚定信心。",
    body:
      "我们提供覆盖全面的审计与鉴证服务，并根据每位客户的实际需求进行定制。我们的专业团队将对财务报表进行深入审查，确保其准确性与完整性，帮助您建立对财务报告的高度信心。审计服务还能识别潜在错报或差异，并提出改进财务流程与内控的建议。",
    ctaBook: "预约通话",
  },

  solutions: {
    title: "我们的解决方案",
    subtitle: "为您的企业提供最合适的解决方案。",
    items: [
      {
        title: "财务报表审计",
        body: "对财务报表进行独立审查，确保其准确并符合相关会计准则与披露要求。",
        icon: "ai-file",
      },
      {
        title: "内部审计",
        body: "评估企业内部控制与运营流程，识别潜在风险并提出改进建议。",
        icon: "ai-shield",
      },
      {
        title: "合规审计",
        body: "评估企业对法律法规及行业标准的遵循情况，降低合规风险。",
        icon: "ai-check-circle",
      },
      {
        title: "风险管理审计",
        body: "识别关键风险，并评估风险管理策略与控制措施的有效性。",
        icon: "ai-target",
      },
    ],
  },

  expertise: {
    kicker: "我们的专长",
    title: "值得信赖的审计合作伙伴。",
    p1:
      "财务报表审计为投资者与相关方使用的信息提供可信保证。我们将数字转化为准确、可理解的信息，帮助管理层与利益相关方做出更高质量的决策。",
    p2:
      "这一切建立在客观、独立、透明与技术卓越的原则之上。我们持续投入培训、工具与技术，提升审计质量，让各方都能受益。",
    listLabel: "我们提供的服务包括：",
    items: ["法定财务报表审计", "特定目的财务报表审计", "审计项目质量提升"],
  },

  engagementQuality: {
    title: "项目质量提升",
    p1:
      "我们通过定制化培训帮助审计团队掌握最新准则要求（包括但不限于 ISQM 1 与 ISA 315（修订版）），提升项目执行一致性与质量。",
    p2:
      "同时，我们提供冷复核（cold file review），识别审计流程与程序的薄弱点，并提出可落地的改进方案。也可协助处理复杂的审计技术问题，确保审计符合高质量标准。",
    items: ["已完成项目复核", "技术问题支持", "培训与发展", "ISQM 1 评估"],
    cta: "联系我们",
  },

  specialists: {
    kicker: "行业",
    title: "服务型企业专家",
    body:
      "我们为各类服务型企业提供定制化的会计与财务支持。从簿记到税务规划，我们具备帮助企业稳健发展的专业能力。我们的目标是提供高质量服务与持续支持，协助客户应对经营中的各类挑战。",
  },

  resources: {
    title: "实用会计资源工具",
    cta: "获取通知",
    items: [
      { title: "节省测算表（Excel）", note: "即将上线", icon: "ai-grid" },
      { title: "税务计算器", note: "即将上线", icon: "ai-calculator" },
      { title: "支票簿平衡工具", note: "即将上线", icon: "ai-wallet" },
      { title: "VAT 计算器", note: "即将上线", icon: "ai-calculator" },
    ],
  },

  // portal: {
  //   title: "Vacei Portal — 为客户打造",
  //   body:
  //     "每位 XLW Advisory 客户都可使用 Vacei Portal——我们的安全在线平台，让协作更顺畅、更透明。上传资料、跟踪进度、在线签署、与团队直接沟通，一站式完成。",
  //   featuresLabel: "主要功能",
  //   features: ["安全文件上传", "进度实时跟踪", "在线电子签名", "与 XLW Advisory 团队直接沟通"],
  // },

  benefits: {
    title: "XLW Advisory 的核心优势。",
    body:
      "XLW Advisory 提供广泛服务、经验丰富的专业团队、个性化方案，并可接入国际资源。我们拥有具竞争力的价格、快速交付、透明沟通、灵活与可靠，确保您获得最新且准确的财务信息。",
    items: ["个性化方案", "快速交付", "透明沟通", "灵活性", "可靠性", "技术驱动", "前瞻建议", "AI 专长"],
  },

  personalized: {
    title: "需要个性化方案？",
    body:
      "会计与审计机构（如 XLW Advisory）可根据不同客户的具体需求提供量身定制的服务。我们的专家团队将深入了解您的业务与财务目标，并设计解决方案来匹配您的实际情况。",
    ctaPrimary: "联系我们",
    ctaSecondary: "立即致电",
  },

  faq: {
    title: "常见问题",
    subtitle: "关于审计与鉴证服务，你可能想了解这些",
    cta: "联系我们",
    items: [
      {
        q: "什么是审计？为什么重要？",
        a:
          "审计是对财务报表及相关记录的独立检查，旨在对信息的准确性、完整性及其是否符合相关准则提供合理保证。它有助于提升报表可信度，帮助利益相关方做出更可靠的决策。",
      },
      {
        q: "你们只做法定审计吗？",
        a:
          "我们支持多种审计与鉴证需求，包括法定财务报表审计以及根据客户报告目的而定的特定目的审计/鉴证项目。",
      },
      {
        q: "能否协助提升审计质量与内部流程？",
        a:
          "可以。除审计执行外，我们还可通过培训、冷复核以及关键准则支持（如 ISQM 1 与 ISA 315（修订版））帮助团队提升流程一致性与质量。",
      },
    ],
  },
    },

    bookkeeping: {
  meta: {
    title: "簿记服务 | XLW Advisory",
    description:
      "簿记服务：夯实财务基础。应付/应收管理、银行对账、财务记录维护与总账管理，帮助企业获得清晰可靠的财务视图。",
  },

  breadcrumb: { home: "首页", current: "簿记服务" },

  header: {
    heading: "簿记",
    subheading: "为您的财务基础提供精确与稳定",
    intro:
      "在 XLW Advisory，我们深知准确的簿记是企业稳健经营的基石。我们的簿记服务确保每一笔交易都被正确、高效地记录，为您提供清晰可用的财务洞察。我们处理细节，让您专注于业务增长，并确信账务始终准确、及时、可追溯。",
    callout: {
      kicker: "服务重点",
      badge: "簿记",
      title: "记录可靠，决策更有底气。",
      body: "通过准确分类、对账与报表，让财务可视化更清晰、更可控。",
      phoneLabel: "+356 9952 0938",
      phoneHref: "Tel:+356 9952 0938",
      emailLabel: "info@accountantsmalta.com",
      emailHref: "mailto:info@accountantsmalta.com",
    },
  },

  solutions: {
    title: "我们的解决方案",
    subtitle: "为您的企业提供最合适的解决方案。",
    items: [
      {
        title: "应付与应收管理",
        body: "高效跟踪应付与应收，提升现金流周转与回款效率。",
        icon: "ai-credit-card",
      },
      {
        title: "银行对账",
        body: "确保银行流水与内部记录一致，账实相符，数据更准确。",
        icon: "ai-refresh",
      },
      {
        title: "财务记录维护",
        body: "按法规与行业标准整理并维护财务资料，保证合规与可追溯性。",
        icon: "ai-folder",
      },
      {
        title: "总账管理",
        body: "全面记录与汇总交易，帮助您清晰掌握企业财务健康状况。",
        icon: "ai-list",
      },
    ],
    closingNote:
      "XLW Advisory 团队将以高标准簿记能力支持您的业务，让您基于可靠数据做出更明智的经营决策。",
  },

  industries: {
    title: "行业",
    heading: "服务型企业专家",
    body:
      "我们为各类服务型企业提供定制化会计与财务支持。从簿记到税务规划，我们具备帮助企业稳健发展的专业能力。我们的目标是提供高质量服务与持续支持，协助客户应对经营中的各类挑战。",
  },

  resources: {
    title: "实用会计资源工具",
    items: [
      { title: "Tax Calculator", note: "Available Soon", icon: "ai-calculator" },
      { title: "VAT Calculator", note: "Available Soon", icon: "ai-calculator" },
    ],
  },

  // portal: {
  //   title: "Vacei Portal — 为客户打造",
  //   body:
  //     "每位 XLW Advisory 客户都可使用 Vacei Portal——我们的安全在线平台，让协作更顺畅、更透明。上传资料、跟踪进度、在线签署、与团队直接沟通，一站式完成。",
  //   featuresTitle: "主要功能：",
  //   features: ["安全文件上传", "进度实时跟踪", "在线电子签名", "与 XLW Advisory 团队直接沟通"],
  // },

  benefits: {
    title: "XLW Advisory 的核心优势。",
    body:
      "XLW Advisory 提供广泛服务、经验丰富的专业团队、个性化方案，并可接入国际资源。我们拥有具竞争力的价格、快速交付、透明沟通、灵活与可靠，确保您获得最新且准确的财务信息。",
    items: ["个性化方案", "快速交付", "透明沟通", "灵活性", "可靠性", "技术驱动", "前瞻建议", "AI 专长"],
  },

  personalized: {
    title: "需要个性化方案？",
    body:
      "会计与审计机构（如 XLW Advisory）可根据不同客户的具体需求提供量身定制的服务。我们的专家团队将深入了解您的业务与财务目标，并设计解决方案来匹配您的实际情况。",
    ctaEmail: "邮件联系",
  },
    },

    payroll: {
  meta: {
    title: "薪资管理服务 | 马耳他商业伙伴",
    description:
      "薪资管理服务：管理员工薪酬与税务。员工资料管理、薪资核算、合规申报与报表、工时与考勤跟踪。",
  },

  breadcrumb: { home: "首页", current: "薪资管理" },

  header: {
    heading: "薪资管理",
    subheading: "管理员工薪酬与税务。",
    intro:
      "薪资管理服务涵盖员工工资发放的全流程，包括薪酬计算、税费与扣款处理、发放工资/转账，以及工时记录与合规申报。通过规范流程，帮助企业降低差错风险并确保按时合规。",

    callout: {
      kicker: "服务重点",
      badge: "薪资管理",
      icon: "ai-shield-check",
      title: "准确 · 保密 · 合规",
      body: "降低薪资差错风险，保持合规，确保员工按时收款。",
      phoneLabel: "+356 9952 0938",
      phoneHref: "Tel:+356 9952 0938",
      emailLabel: "info@accountantsmalta.com",
      emailHref: "mailto:info@accountantsmalta.com",
    },
  },

  solutions: {
    title: "我们的解决方案",
    subtitle: "为您的企业提供最合适的解决方案。",
    items: [
      {
        title: "员工资料管理",
        body: "维护员工基础信息、薪资结构与税务资料，确保数据完整一致。",
        icon: "ai-user",
      },
      {
        title: "薪资核算与发放",
        body: "计算薪资、扣款与税费，生成工资单并安排转账/发放。",
        icon: "ai-coins",
      },
      {
        title: "合规与报表申报",
        body: "协助满足本地法规要求，按期提交所需报表与申报材料。",
        icon: "ai-shield-check",
      },
      {
        title: "工时与考勤跟踪",
        body: "跟踪工时、休假与病假等记录，支持更准确的薪资计算。",
        icon: "ai-clock",
      },
    ],
  },

  compliance: {
    left: {
      title: "马耳他薪资服务",
      body:
        "若您的企业雇佣员工，需依法保存工资记录（含薪资、津贴、奖金）以及相关扣缴项目，如社保（SSC/NI）与税费等。该要求适用于员工从入职到离职的整个期间，无论您以公司或自雇形式雇佣员工。",
      listTitle: "我们可协助你管理",
      items: [
        "维护工资记录：薪资、津贴、奖金及社保（SSC/NI）与税费等扣款明细。",
        "协助办理 PE（Permission to Employe）编号注册，以及与 Jobsplus 的入职/离职相关手续。",
        "按月提交如 FS5（税费、SSC/NI 与母婴基金缴费等）至 CfR（税务部门）。",
        "年末法定报表：FS3（收入证明）与 FS7（年度对账/汇总报表），通常需在次年 2 月 15 日前提交。",
        "在遵守本地法规（假期、加班、通知期、NI 计算等）的前提下，保密处理员工个人与薪资数据。",
      ],
    },
    right: {
      title: "为什么外包薪资？",
      body:
        "外包薪资可降低内部行政负担，减少差错与合规风险，并帮助企业按时完成月度与年度申报。",
      ctaLabel: "立即开始合作",
      ctaHref: "/zh/contact",
    },
  },

  industries: {
    title: "行业",
    heading: "服务型企业专家",
    body:
      "我们为各类服务型企业提供定制化会计与财务支持。从簿记到税务规划，我们具备帮助企业稳健发展的专业能力，协助客户应对经营中的各类挑战。",
  },

  resources: {
    title: "实用会计资源工具",
    items: [
      {
        title: "MTCA SSC Calculator",
        note: "Official tool",
        icon: "ai-calculator",
        href: "https://irdpubserv.gov.mt/services/ssccalculator.aspx",
      },
      { title: "VAT Calculator", note: "Use now", icon: "ai-calculator", href: "#vat-calculator" },
    ],
  },


  benefits: {
    title: "XLW Advisory的核心优势。",
    body:
      "XLW Advisory 提供广泛服务、经验丰富的专业团队、个性化方案，并可接入国际资源。我们拥有具竞争力的价格、快速交付、透明沟通、灵活与可靠，确保您获得最新且准确的财务信息。",
    items: ["个性化方案", "快速交付", "透明沟通", "灵活性", "可靠性", "技术驱动", "前瞻建议", "AI 专长"],
  },

  faq: {
    title: "常见问题",
    subtitle: "关于薪资管理服务，你需要了解的关键点。",
    items: [
      {
        q: "在马耳他作为雇主需要承担哪些薪资责任？",
        a:
          "雇主需保存完整工资记录（薪资、奖金、津贴等），并准确处理社保（SSC/NI）与税费扣缴。从员工入职到离职期间均需保留记录，适用于公司与自雇雇主。",
      },
      {
        q: "可以协助办理 PE（Permission to Employ）编号吗？",
        a:
          "可以。我们可协助完成 PE 编号注册，并处理与本地机构相关的雇佣手续文件。",
      },
      {
        q: "月度薪资服务与年末报表通常包括哪些内容？",
        a:
          "月度服务通常包括工资核算与必要申报支持；年末可包含员工年度收入证明与对账/汇总类报表，协助按本地截止日期提交。",
      },
    ],
  },

  personalized: {
    title: "需要个性化方案？",
    body:
      "会计与审计机构（如 XLW Advisory）可根据不同客户的具体需求提供量身定制的服务。我们的专家团队将深入了解您的业务与财务目标，并设计解决方案来匹配您的实际情况。",
    ctaEmail: "邮件联系",
  },
    },

    liquidation: {
  meta: {
    title: "清算服务 | 马耳他商业伙伴",
    description:
      "清算服务：协助企业有序结束经营。资产处置、债权人与股东分配、破产/申报支持与自愿清算流程指导。",
  },
  breadcrumb: { home: "首页", current: "清算" },
  header: {
    heading: "公司清算服务",
    subheading: "协助企业有序结束经营。",
    intro:
      "清算服务用于协助企业结束经营（包括破产或自愿清算）。流程通常涉及处置公司资产用于偿还债务，并在完成清算后，按规定向债权人及股东分配剩余资产。",
    callout: {
      kicker: "服务重点",
      badge: "清算",
      icon: "ai-shield-check",
      title: "流程清晰 · 合规可靠",
      body: "我们以结构化执行与透明沟通，协助你稳妥完成企业清算与结束流程。",
      phoneLabel: "+356 9952 0938",
      phoneHref: "tel:+35699520938",
      emailPrefix: "也可邮件联系：",
      emailLabel: "info@accountantsmalta.com",
      emailHref: "mailto:info@accountantsmalta.com",
    },
  },
  solutions: {
    title: "我们的解决方案",
    subtitle: "为您的企业提供最合适的解决方案。",
    items: [
      { title: "资产处置", body: "通过出售公司资产用于偿还债务。", icon: "ai-bag" },
      { title: "债权人与股东分配", body: "清算完成后，将剩余资产按规定在债权人与股东之间分配。", icon: "ai-users" },
      { title: "破产申报支持", body: "协助进行破产申报并处理相关法律程序与合规要求。", icon: "ai-file" },
      { title: "自愿清算", body: "协助企业自愿结束经营并处置资产以清偿债务。", icon: "ai-power" },
    ],
  },
  process: {
    title: "清算服务",
    body:
      "当需要结束企业经营时，清算涉及资产、负债、申报文件以及利益相关方沟通等关键环节。我们协助你以更有序的方式推进流程。",
    listTitle: "我们可协助你管理",
    items: [
      "自愿清算流程指导，确保资产管理与分配符合要求。",
      "支持资不抵债企业：债权人沟通、资产管理与进度协调。",
      "确保全过程符合法律与监管要求。",
      "编制最终财务报表与结项报告，完成收尾。",
      "在高效推进的同时，尽量减少干扰并保持透明沟通。",
    ],
  },
  transition: {
    title: "平稳高效的过渡",
    body:
      "我们强调合规与透明，让你清楚了解每个阶段发生的事项——从准备到最终报告。",
    cta: "咨询你的情况",
  },
  industries: {
    title: "行业",
    heading: "服务型企业专家",
    body:
      "我们为各类服务型企业提供定制化会计与财务支持。从簿记到税务规划，我们具备帮助企业稳健发展的专业能力。",
  },
  resources: {
    title: "实用会计资源工具",
    items: [
      { title: "节省测算表（Excel）", note: "即将上线", icon: "ai-grid" },
      { title: "税务计算器", note: "即将上线", icon: "ai-calculator" },
      { title: "支票簿平衡工具", note: "即将上线", icon: "ai-wallet" },
      { title: "VAT 计算器", note: "即将上线", icon: "ai-calculator" },
    ],
  },
  // portal: {
  //   title: "Vacei Portal — 为客户打造",
  //   body:
  //     "每位xwl客户都可使用 Vacei Portal 安全在线平台：上传资料、跟踪进度、在线签署、与团队直接沟通，一站式完成。",
  //   featuresTitle: "主要功能：",
  //   features: ["安全文件上传", "进度实时跟踪", "在线电子签名", "与 XLW Advisory 团队直接沟通"],
  // },
  benefits: {
    title: "XLW Advisory的核心优势。",
    body:
      "我们提供经验丰富的专业团队、个性化方案与国际资源支持，价格具竞争力、交付快速、沟通透明且可靠。",
    items: ["个性化方案", "快速交付", "透明沟通", "灵活性", "可靠性", "技术驱动", "前瞻建议", "AI 专长"],
  },
  related: {
    title: "其他会计服务",
    subtitle: "浏览与清算规划与执行常相关的服务。",
    items: [
      { title: "税务", body: "协助税务申报与合规，并提供节税与优化建议。", icon: "ai-file", href: "/tax" },
      { title: "簿记与会计", body: "记录、分类与汇总交易，提供准确及时的财务信息。", icon: "ai-list", href: "/bookkeeping" },
      { title: "审计与鉴证", body: "独立检查财务报表与记录，确保准确并符合法规要求。", icon: "ai-shield", href: "/audit" },
      { title: "薪资管理", body: "薪资核算与合规处理，确保按时准确发放并符合规定。", icon: "ai-coins", href: "/payroll" },
      { title: "AI 簿记", body: "AI 驱动实时簿记与自动分类，提供即时洞察与报表。", icon: "ai-sparkles", href: "/ai-bookkeeping" },
      { title: "会计服务", body: "提供财务管理、报表、合规与决策支持的专业会计服务。", icon: "ai-briefcase", href: "/accounting" },
    ],
  },
  faq: {
    title: "常见问题",
    subtitle: "关于清算，你需要了解的关键点。",
    items: [
      { q: "什么是清算？", a: "清算是指通过处置资产、清偿负债并按规定向债权人与股东分配剩余资产，从而结束公司的过程。" },
      { q: "可以协助自愿清算吗？", a: "可以。我们可协助梳理文件、合规步骤、资产处置与利益相关方沟通，推进自愿清算流程。" },
      { q: "可以支持资不抵债企业吗？", a: "可以协助与债权人协调、资产管理与报告等工作，并确保流程符合相关法律与监管要求。" },
    ],
  },
  personalized: {
    title: "需要个性化方案？",
    body: "我们可根据你的业务情况与目标，设计更适合的清算支持与配套服务方案。",
    ctaEmail: "邮件联系",
  },
    },

    industries: {
      meta: {
        title: "行业 | XLW Advisory",
        description:
          "我们在马耳他服务的行业：私人客户、创业者与专业机构，并提供旅游与游艇、科技、医疗与美容、房地产与酒店、电商、教育培训等行业支持。",
      },

      breadcrumb: {
        home: "首页",
        current: "行业",
      },

      hero: {
        title: "我们服务的行业",
        subtitle:
          "马耳他是英语环境的欧盟司法辖区，服务型经济强劲，非常适合作为国际业务、跨境贸易与高效团队的运营基地。",
        body:
          "我们为马耳他关键行业提供簿记、税务合规、报表、薪资及日常财务运营支持——清晰、稳定、可审计。",
      },

      callout: {
        kicker: "我们如何帮助您",
        badge: "行业",
        title: "范围清晰，交付可靠。",
        body: "我们根据您的结构、报表需求与合规期限提供支持——避免不必要的复杂度。",
        phoneLabel: "+356 9952 0938",
        phoneHref: "tel:+35699520938",
        emailLabel: "info@accountantsmalta.com",
        emailHref: "mailto:info@accountantsmalta.com",
      },

      whoWeWorkWith: {
        title: "我们常服务的客户类型",
        subtitle: "常见客户类型与我们通常交付的核心服务一览。",
        cta: "沟通您的需求",
        items: [
          {
            id: "privateClients",
            title: "私人客户",
            body:
              "我们理解个人与家庭的财务需求，提供从税务规划到更长期结构安排的个性化支持，让您更清晰、更安心地达成目标。",
            icon: "ai-user",
            bullets: ["商业计划建议", "簿记", "税务合规", "公司注册与设立"],
          },
          {
            id: "entrepreneurs",
            title: "创业者",
            body:
              "创业伴随复杂的财务与合规挑战。我们用务实的财务运营与清晰的合规支持，帮助您从起步到扩张更有秩序。",
            icon: "ai-rocket",
            bullets: ["商业计划建议", "簿记", "税务合规", "公司注册与设立"],
          },
          {
            id: "professionalFirms",
            title: "专业机构",
            body:
              "事务所运营往往更复杂。我们提供结构化报表、审计支持与持续合规服务，让您专注于服务客户。",
            icon: "ai-briefcase",
            bullets: ["财务报表编制", "审计支持", "税务合规", "公司注册与设立"],
          },
        ],
      },

      maltaSectors: {
        title: "马耳他行业支持",
        subtitle:
          "无论是季节性现金流、高频交易，还是多实体报表——我们会根据行业实际工作方式来设计财务运营。",
        items: [
          { id: "yachting", title: "游艇与海事", body: "支持预订、包船、供应商与旺季波动，让账务更清晰、现金流更可见。", icon: "ai-globe" },
          { id: "startupTech", title: "科技与初创", body: "从第一天建立簿记与合规流程，随着团队与交易量增长可持续扩展。", icon: "ai-rocket" },
          { id: "healthBeauty", title: "医疗与美容", body: "保持薪资、供应商支出与报表一致性，让您专注服务质量。", icon: "ai-heart" },
          { id: "realEstateHospitality", title: "房地产与酒店", body: "对多主体、平台支付与周期性收款进行更严谨的对账与报表结构。", icon: "ai-home" },
          { id: "ecommerce", title: "电商", body: "支持高交易量对账、毛利可视化与凭证整理，保障报表与合规稳定。", icon: "ai-bag" },
          { id: "educationTraining", title: "教育与培训", body: "建立可重复的开票与薪资流程，让经营决策基于可靠数据。", icon: "ai-flag" },
          { id: "gaming", title: "游戏与博彩", body: "架构和管理的建议与支持，专业服务于法务，财务，税务及合规", icon: "ai-game" },
        ],
      },

      resources: {
        title: "实用财务工具",
        subtitle: "更多免费工具即将上线（敬请期待）。",
        badge: "即将上线",
        cta: "一起构建更好的未来",
        items: [
          { title: "储蓄 Excel", body: "更多工具正在路上。", icon: "ai-grid" },
          { title: "税务计算器", body: "更多工具正在路上。", icon: "ai-calculator" },
          { title: "支票簿平衡工具", body: "更多工具正在路上。", icon: "ai-wallet" },
          { title: "VAT 计算器", body: "更多工具正在路上。", icon: "ai-calculator" },
          { title: "退休规划工具", body: "更多工具正在路上。", icon: "ai-flag" },
        ],
      },

      personalized: {
        title: "需要定制方案？",
        body:
          "我们可以根据您的业务结构与目标提供定制化服务。团队将了解您的运营情况，并为您设计合适的方案。",
        ctaEmail: "发邮件给我们",
      },
    },

    aboutUs: {
  meta: {
    title: "关于我们 | XLW Advisory",
    description:
      "关于 XLW Advisory：位于马耳他的专业服务机构，专注会计、审计、税务，以及以 AI 与自动化驱动的财务运营。",
  },

  hero: {
    title: "关于我们",
    lead:
      "我们是一家位于马耳他的专业服务机构，专注会计、审计与各类财务服务。我们的团队经验丰富，致力于为客户提供高质量服务。凭借对本地市场与法规的深入理解，我们能够提供贴合不同需求的解决方案。同时，我们也持续将 AI 融入财务流程，以更高效率与更高准确性服务客户——无论您是小型企业还是大型机构。",
    tags: ["会计", "审计与鉴证", "税务服务", "AI自动化"],
  },

  breadcrumb: {
    home: "首页",
    current: "关于我们",
  },

  about: {
    kicker: "我们是谁",
    title: "深耕马耳他本地 跨国际发展 遵循国际标准 高效准确交付",
    paragraphs: [
      "马耳他是地中海的欧盟成员国，英语广泛使用，并具备对本地与国际企业都友好的商业环境。",
      "我们帮助客户保持合规、让报表更清晰，并通过更好的流程提升财务运营效率——在合适场景中引入自动化。",
      "无论您需要日常财务支持，还是复杂事项的结构化交付，我们都以稳健、可靠的方式推进工作。",
    ],
  },

  mission: {
    kicker: "我们的使命",
    title: "以 AI 推动财务服务革新",
    subtitle: "我们对创新的承诺。",
    body:
      "我们致力于走在财务服务行业创新前沿。通过将人工智能融入会计、审计与相关财务流程，我们能够更快分析数据、识别趋势，并为管理决策提供更有力的支持。对 AI 的投入，帮助客户以更高信心、更快节奏推进业务。",
    bullets: ["更快的分析与报表周期", "更好的模式识别与预测", "借助 AI自动化提升处理准确性", "可用于决策的仪表盘与洞察"],
    sideCard: {
      title: "成长型团队的可信赖伙伴",
      body: "我们支持需要清晰、合规与稳定交付的创始人和经营者。",
      stats: [
        { value: "4.9", label: "客户评分" },
        { value: "80+", label: "评价数量" },
        { value: "EU", label: "马耳他本地" },
        { value: "AI", label: "智能化流程" },
      ],
    },
  },

  values: {
    kicker: "我们的价值观",
    title: "指导我们工作的原则",
    items: [
      { title: "诚信与信任", body: "我们坚持最高道德标准，在每一次沟通中保持透明与诚实。信任是客户关系的基础。", icon: "ai-shield-check" },
      { title: "创新与卓越", body: "我们持续改进，以务实的前沿方法解决问题，为客户交付高质量与高价值。", icon: "ai-sparkles" },
      { title: "托付与伙伴关系", body: "我们以守护客户财务健康为己任，建立长期、互信、共同承担责任的合作关系。", icon: "ai-users" },
      { title: "以客户为中心", body: "我们理解客户的独特需求，提供个性化、主动式支持，以客户满意为优先。", icon: "ai-heart" },
    ],
  },

  features: {
    kicker: "我们的优势",
    title: "为什么选择 XLW Advisory？",
    items: [
      { title: "全球资源", body: "通过全球联盟与合作伙伴网络获得国际经验与支持。", icon: "ai-globe" },
      { title: "合规与创新", body: "以合规为底线，同时以技术驱动流程更高效。", icon: "ai-shield" },
      { title: "技术专家", body: "善用 AI 降低手工工作量并提升准确性。", icon: "ai-cpu" },
      { title: "定制化方案", body: "根据您的结构、行业与报表需求量身配置服务。", icon: "ai-settings" },
    ],
  },

  team: {
    kicker: "我们的团队",
    title: "专业团队",
    note: "*团队图片为占位图，准备好后可替换为真实照片。",
    items: [
      { name: "Albert Parker, ACCA", role: "合伙人及会计师", body: "Albert负责多个客户的资料录入、VAT 申报、管理报表、薪资等。业余喜欢健身、骑行、徒步与户外活动。可使用中文与英语沟通。" },
      { name: "Kanwal Fayyaz", role: "合规与审计支持", body: "Kanwal负责公司合规与审计支持，注重细节且组织能力强。下班后喜欢追剧与烘焙。" },
      { name: "Yixin QI", role: "基金发起人及投资合伙人", body: "YIXIN 是 基金创始人，热爱信息技术和智能化产品。业余时间喜欢游艇帆船。" },
      { name: "Robert Fox ACCA", role: "虚拟财务团队负责人", body: "Robert是 ACCA 会计师，喜欢用数字解决问题。业余喜欢阅读、烹饪、网球与了解不同文化。" },
      { name: "Brad Weng", role: "合伙人及客户经理", body: "Brad支持日常管理及客户工作，喜欢在快节奏环境中成长。他热爱探索新鲜事务，是可靠且有责任心的团队成员。" },
      { name: "Shawn Lou, ACCA, MIA, CPA(Practising)", role: "执行合伙人", body: "Shawn负责日常财务运营并管理团队，跨行业经验丰富，专注且持续学习。业余喜欢旅行、读书与音乐。" },
    ],
  },

  faq: {
    kicker: "常见问题",
    title: "常见问题解答",
    subtitle: "快速了解我们如何工作以及我们主要支持哪些客户。",
    items: [
      { q: "你们提供哪些服务？", a: "我们提供会计、记账、财务报表编制、预算、税务规划、审计与鉴证支持、VAT 合规以及税务咨询，并在适用场景引入技术驱动流程。" },
      { q: "你们的典型客户是谁？", a: "我们服务初创公司、家族企业、中大型公司、个体经营者、合伙企业、基金，以及在马耳他运营或计划进入马耳他的国际结构。" },
      { q: "你们的优势是什么？", a: "以合规为先，深度理解马耳他本地要求，并务实应用 AI 提升速度、准确性与透明度，同时保持响应迅速、沟通清晰的服务体验。" },
      { q: "如何开始合作？", a: "您可以通过联系表单、邮件或电话与我们沟通。我们将了解需求，提出服务范围，并对齐时间计划、交付内容与报表节奏。" },
    ],
  },
    },

    contact: {
  meta: {
    title: "联系我们 | XLW Advisory",
    description: "联系 XLW Advisory：预约免费咨询，或直接致电/电邮我们在马耳他的团队。",
  },
  breadcrumb: {
    home: "首页",
    current: "联系我们",
  },
  header: {
    title: "联系我们",
    lead: "请填写下方表单与我们联系，或直接致电 / 电邮我们。",
  },
  details: {
    phone: {
      digits: "35699520938",
      display: "+356 9952 0938",
    },
    email: "info@accountantsmalta.com",
    address: {
      line1: "XLW Advisory",
      line2: "San M. Kolbe, St. Paul's Bay, Malta",
    },
  },
  cards: {
    address: { title: "地址", ctaMap: "查看地图" },
    phone: { title: "电话", mainOffice: "WhatsApp", whatsapp: "微信", whatsappCta: "SimplerOnly" },
    schedule: {
      title: "工作时间",
      weekdaysLabel: "周一至周五",
      weekdaysFrom: "09:00",
      weekdaysTo: "17:00",
      weekendLabel: "周六至周日",
      weekendValue: "休息",
    },
    email: {
      title: "邮箱",
      generalLabel: "一般咨询",
      quickCallLabel: "想快速沟通？",
      quickCallCta: "预约免费咨询",
    },
  },
  form: {
    title: "获取免费咨询",
    fields: {
      nameLabel: "姓名",
      namePlaceholder: "您的姓名",
      companyLabel: "公司",
      companyPlaceholder: "公司名称",
      emailLabel: "邮箱",
      emailPlaceholder: "邮箱地址",
      phoneLabel: "电话",
      phonePlaceholder: "电话号码",
      serviceLabel: "需要我们协助什么？",
      serviceDefault: "公司注册",
      serviceOptions: ["公司注册", "会计", "记账", "审计与鉴证", "税务 / VAT", "薪资", "清算", "其他"],
      messageLabel: "我们如何帮助您？",
      messagePlaceholder: "请在此输入您的需求…",
    },
    topics: [
      { id: "opt-accounting", value: "Accounting", label: "会计", defaultChecked: false },
      { id: "opt-tax", value: "Tax/VAT", label: "税务 / VAT", defaultChecked: true },
      { id: "opt-audit", value: "Audit", label: "审计", defaultChecked: false },
      { id: "opt-payroll", value: "Payroll", label: "薪资", defaultChecked: false },
      { id: "opt-liquidation", value: "Liquidation", label: "清算", defaultChecked: false },
      { id: "opt-ai", value: "AI Automation", label: "AI 自动化", defaultChecked: false },
    ],
    disclaimer: "提交即表示您同意我们就本次咨询与您联系。",
    privacyAcknowledgement: "我已阅读并理解",
    privacyLinkLabel: "隐私政策",
    submitLabel: "提交请求",
    submittingLabel: "正在提交…",
    errorMessage: "暂时无法提交您的请求，请重试或直接发送邮件联系我们。",
    orEmailPrefix: "或直接电邮：",
  },
  map: {
    title: "到访马耳他",
    body: "地址确认后，可替换为 Google 地图嵌入或静态地图图片。",
    ctaCall: "立即致电",
    imageAlt: "地图占位图",
  },
    },
  },
};

export const siteCopyByLang = { en, zh } as const;

export function getSiteCopy(lang?: string): SiteCopy {
  return lang === "zh" ? siteCopyByLang.zh : siteCopyByLang.en;
}
