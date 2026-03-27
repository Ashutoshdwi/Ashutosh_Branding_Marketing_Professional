export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  category: string;
  description: string;
  heroTag: string;
  overview: {
    role: string;
    duration: string;
    objective: string;
  };
  problem: string;
  insight: string;
  strategy: string[];
  execution: string[];
  results: string[];
  learning: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  media?: {
    type: "image" | "youtube";
    src: string;
    title: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "acwo-inner-voice",
    title: "#SunApneAndarKiAwaaz",
    company: "ACwO",
    category: "Brand Film / Campaign Ideation",
    description:
      "An emotional storytelling campaign built around identity, introspection, and authentic brand voice.",
    heroTag: "Brand Storytelling",
    overview: {
      role: "Branding & Marketing",
      duration: "Campaign Project",
      objective:
        "Move communication beyond product features and establish a deeper emotional connection with the audience.",
    },
    problem:
      "After a strong product-focused quarter, the brand risked becoming functional and forgettable. The challenge was to create a campaign that expressed what the brand stands for, not just what it sells.",
    insight:
      "We do not just sell sound. We sell what sound unlocks internally — reflection, emotion, and the voice within.",
    strategy: [
      "Develop a campaign idea rooted in emotional truth rather than product-first messaging.",
      "Build a unique narrative format instead of a standard brand ambassador video.",
      "Use introspection as the central storytelling device.",
    ],
    execution: [
      "Conceptualized a dialogue where Sunil Chhetri speaks to his inner self.",
      "Shaped the script so the inner voice questions the public persona.",
      "Worked across ideation, narrative structure, and creative execution.",
      "Positioned the campaign to feel meaningful, shareable, and culturally relatable.",
    ],
    results: [
      "Generated millions of organic views.",
      "Picked up by fan clubs, meme pages, and motivational communities.",
      "Achieved strong organic spread without paid media support.",
      "Helped the brand communicate authenticity and emotional depth.",
    ],
    learning:
      "Strong branding comes from authenticity. The most powerful campaigns are often built on a simple but truthful human insight.",
    metrics: [
      { label: "Organic Reach", value: "Millions" },
      { label: "Paid Spend", value: "0" },
      { label: "Format", value: "Narrative-led" },
    ],
    media: [
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/kP_3i-2emyM?list=PLxK77nTilfC_cz0k3T9549YJibM21dx8-",
        title: "Main Campaign Film",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/sStTkSBRRlA?list=PLxK77nTilfC_cz0k3T9549YJibM21dx8-",
        title: "Supporting Video 1",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/NLP9rUGw1Og",
        title: "Supporting Video 2",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/pSWmq2RX6So",
        title: "Supporting Video 3",
      },
    ],
  },
  {
    slug: "pvr-exhibitions",
    title: "PVR Controls Exhibition Expansion",
    company: "PVR Controls",
    category: "Strategy / Execution / BTL",
    description:
      "Streamlining exhibition execution and expanding the brand’s market presence through smarter regional participation.",
    heroTag: "Exhibition Strategy",
    overview: {
      role: "Sr. Brand Executive",
      duration: "Ongoing",
      objective:
        "Create a structured exhibition process and expand presence beyond a few large expos into multiple regional opportunities.",
    },
    problem:
      "Exhibition planning was scattered and reactive. The company mainly focused on 3–4 larger trade shows, leaving market exploration and execution efficiency underdeveloped.",
    insight:
      "For a technical manufacturing company, exhibitions are not just branding moments — they are business development touchpoints that need systems, planning, and wider market coverage.",
    strategy: [
      "Introduce a 3-month pre-planning structure before every exhibition.",
      "Standardize vendor coordination and execution timelines.",
      "Test smaller exhibitions in new cities to widen market presence at lower cost.",
    ],
    execution: [
      "Streamlined exhibition workflows across stakeholders and vendors.",
      "Finalized more reliable vendors for consistency and budget control.",
      "Pitched and executed participation in smaller city-level events.",
      "Used exhibitions as a live market-testing mechanism for new regions.",
    ],
    results: [
      "Expanded exhibition footprint beyond a few annual large shows.",
      "Improved execution quality and planning consistency.",
      "Unlocked new learnings from markets previously considered low-potential.",
      "Built stronger experience in vendor management and budget handling.",
    ],
    learning:
      "Growth does not always come from going bigger. Sometimes it comes from creating systems and increasing smart market exposure.",
    metrics: [
      { label: "Planning Window", value: "3 Months" },
      { label: "Approach", value: "Big + Regional" },
      { label: "Outcome", value: "Wider Presence" },
    ],
  },
  {
    slug: "pvr-traffic-growth",
    title: "PVR Targeted Traffic Growth",
    company: "PVR Controls",
    category: "Digital / Audience Targeting",
    description:
      "Creative-led ad execution and niche audience targeting that helped grow relevant website traffic significantly.",
    heroTag: "Creative + Performance",
    overview: {
      role: "Sr. Brand Executive",
      duration: "Campaign Phase",
      objective:
        "Increase qualified website traffic and build a more relevant digital audience for the refrigeration and automation space.",
    },
    problem:
      "Website traffic was limited and lacked clear targeting. The digital audience base needed sharper segmentation and better alignment between content and ads.",
    insight:
      "Performance does not work in isolation. The right creative, shown consistently to the right niche audience, produces more meaningful growth than random reach.",
    strategy: [
      "Create audience buckets specific to refrigeration and automation interests.",
      "Align content direction with ad intent rather than boosting randomly.",
      "Focus on consistency instead of short-term spikes.",
    ],
    execution: [
      "Ran targeted campaigns with niche industry relevance.",
      "Applied creative learnings from previous brand/content experience.",
      "Optimized content and targeting for audience quality, not just traffic volume.",
      "Used content direction to support follower and visibility growth.",
    ],
    results: [
      "Website traffic increased from roughly 3–4K to 12–13K.",
      "Improved audience relevance.",
      "Contributed to stronger digital visibility and follower growth.",
    ],
    learning:
      "Performance is more sustainable when creative clarity and audience precision work together.",
    metrics: [
      { label: "Traffic", value: "3–4K → 12–13K" },
      { label: "Audience", value: "Industry-specific" },
      { label: "Approach", value: "Consistency-led" },
    ],
  },
  {
    slug: "acwo-sms-optimization",
    title: "ACwO SMS Communication Optimization",
    company: "ACwO",
    category: "Channel Insight / Communication",
    description:
      "A simple but sharp audience-language insight that improved SMS campaign response within days.",
    heroTag: "Audience Insight",
    overview: {
      role: "Branding & Marketing",
      duration: "Campaign Optimization",
      objective:
        "Improve click performance for soundbar promotional SMS communication.",
    },
    problem:
      "The initial SMS campaign carried humor and emotion, but clicks remained weak. The messaging tone felt right creatively, yet the channel response suggested a disconnect.",
    insight:
      "The issue was not only the offer or structure — it was language. Previous successful SMS campaigns used Hinglish, while the new communication was written fully in English.",
    strategy: [
      "Pause instead of continuing to spend on weak communication.",
      "Study previous high-performing SMS campaigns.",
      "Adapt the language to match audience consumption habits.",
    ],
    execution: [
      "Reviewed older SMS campaigns with the channel partner.",
      "Identified the pattern in language and response behavior.",
      "Shifted the copy from English to Hinglish.",
      "Relaunched quickly with better audience alignment.",
    ],
    results: [
      "Clicks improved within 2 days.",
      "Reduced risk of wasting more budget on the wrong communication style.",
      "Reinforced the importance of contextual messaging.",
    ],
    learning:
      "Good communication is not just creative — it has to fit the audience’s natural language and behavior.",
    metrics: [
      { label: "Change Made", value: "English → Hinglish" },
      { label: "Response Shift", value: "Within 48 Hours" },
      { label: "Key Lesson", value: "Context Matters" },
    ],
  },
];
