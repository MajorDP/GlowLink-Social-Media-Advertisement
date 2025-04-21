import {
  Palette,
  Layout,
  Share2,
  CreditCard,
  LineChart,
  Zap,
  Shield,
  Globe,
  Sparkles,
} from "lucide-react";
function Features() {
  const features = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Beautiful Templates",
      description:
        "Choose from a variety of professionally designed templates that make your content shine.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Custom Branding",
      description:
        "Match your brand with custom colors, fonts, and layouts that reflect your unique style.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Custom Domain",
      description:
        "Use your own domain name for a professional and branded presence.",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Integration",
      description:
        "Seamlessly connect your Instagram and TikTok accounts to showcase your best content.",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Monetization Tools",
      description:
        "Accept tips, sell products, and manage affiliate links all in one place.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Performance Analytics",
      description:
        "Get detailed insights into your page performance and visitor engagement.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description:
        "Optimized for speed to ensure your content loads instantly on any device.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security to keep your content and audience data safe.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Auto-Updates",
      description:
        "Your page automatically updates when you post new content on social media.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl md:text-4xl font-bold text-center">
          Everything you need
        </h3>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm md:text-2xl text-gray-400 text-center">
            We&apos;ve built all the tools you need to create a stunning landing
            page for your social media content.
          </p>
          <p className="text-xs md:text-xl text-gray-400">
            Customizeable. Rewarding. Efficient.
          </p>
        </div>
      </div>
      <ul className="flex flex-row flex-wrap justify-center w-fit gap-8">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex flex-col justify-start bg-white/10 border border-slate-400 rounded-lg p-6 w-full md:w-[25rem] gap-4 hover:bg-white/20 hover:scale-105 duration-200 transition-all"
          >
            <div className="bg-white/15 w-fit p-2 rounded-lg">
              {feature.icon}
            </div>
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="text-sm md:text-base text-gray-400">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
