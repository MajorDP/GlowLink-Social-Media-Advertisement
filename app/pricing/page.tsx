import { CheckCircle } from "lucide-react";
import Link from "next/link";

function page() {
  const starterFeatures = [
    {
      title: "Basic Templates",
      icon: "CheckCircle",
    },
    {
      title: "1 Link Page",
      icon: "CheckCircle",
    },
    {
      title: "Social Integrations",
      icon: "CheckCircle",
    },
    {
      title: "Social Media Links",
      icon: "CheckCircle",
    },
    {
      title: "Custom Domain",
      icon: "CheckCircle",
    },
    {
      title: "Auto-Updates",
      icon: "CheckCircle",
    },
  ];

  const paidFeatures = [
    {
      title: "Beautiful Templates",
      description:
        "Choose from a variety of professionally designed templates that make your content shine.",
    },
    {
      title: "Custom Branding",
      description:
        "Match your brand with custom colors, fonts, and layouts that reflect your unique style.",
    },
    {
      title: "Monetization Tools",
      description:
        "Accept tips, sell products, and manage affiliate links all in one place.",
    },
    {
      title: "Performance Analytics",
      description:
        "Get detailed insights into your page performance and visitor engagement.",
    },
    {
      title: "Lightning Fast",
      description:
        "Optimized for speed to ensure your content loads instantly on any device.",
    },
    {
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security to keep your content and audience data safe.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white px-4 py-24 flex flex-col items-center">
      <div className="w-full text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transparent <span className="text-blue-400">Pricing</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Simple plans. Powerful features. No hidden fees.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 justify-center items-center mb-24">
        <div className="flex flex-col gap-4 bg-white text-black p-8 rounded-2xl w-full max-w-xs shadow-xl">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-3xl font-bold">Starter</h2>
            <p className="text-slate-600 text-sm md:text-base">
              Perfect for beginners
            </p>
            <p className="text-4xl font-bold">$0</p>
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {starterFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="hidden md:block text-green-500 w-4 h-4" />
                {feature.title}
              </li>
            ))}
          </ul>
          <Link
            href="/auth"
            className="mt-6 w-full text-center bg-black text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        <div className="flex flex-col w-full md:w-[30rem] gap-4 bg-gradient-to-br from-blue-600 to-teal-500 text-white p-8 rounded-2xl shadow-xl border border-white/20">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-3xl font-bold">Pro</h2>
            <p className="text-white/80 text-sm md:text-base">
              Everything you need to be flashy
            </p>
            <p className="text-4xl font-bold">
              $5.99<span className="text-xl font-normal">/mo</span>
            </p>
          </div>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <CheckCircle className="hidden md:block text-white w-5 h-5" />{" "}
              Everything from Starter
            </li>
            {paidFeatures.slice(0, 6).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 mt-1">
                <CheckCircle className="hidden md:block text-white w-5 h-5" />
                {feature.title}
              </li>
            ))}
          </ul>
          <Link
            href="/auth"
            className="mt-6 w-full text-center px-4 py-2 bg-white text-black rounded-lg hover:opacity-90 transition-opacity"
          >
            Upgrade to Pro
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
