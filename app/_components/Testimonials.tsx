import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "CreatorLink helped me grow my audience by 300% in just 3 months. The analytics tools are incredibly useful for understanding what content performs best.",
      author: "Alex Morgan",
      role: "Fashion Influencer",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      platform: "instagram",
    },
    {
      quote:
        "I love how easy it is to showcase my TikTok videos alongside my Instagram content. My engagement rates have never been higher!",
      author: "Jordan Lee",
      role: "Dance Creator",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      platform: "tiktok",
    },
    {
      quote:
        "The monetization features alone paid for my subscription in the first week. My audience loves supporting me through the tip jar feature.",
      author: "Victoria Shelly",
      role: "Lifestyle Creator",
      avatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      platform: "instagram",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl md:text-4xl font-bold text-center">
          Loved by Creators
        </h3>
        <p className="text-sm md:text-2xl text-gray-400 text-center">
          See what other content creators are saying about CreatorLink.
        </p>
      </div>
      <ul className="flex flex-row flex-wrap justify-center w-fit mx-auto gap-8">
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.author}
            className="flex flex-col justify-start bg-white/5 border border-slate-400 rounded-lg p-6 w-full md:w-[25rem] gap-4"
          >
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-row items-start w-full">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} />
                ))}
              </div>
              <p className="text-gray-400">&quot;{testimonial.quote}&quot;</p>
              <div className="border-t border-gray-500 w-full flex flex-row gap-2 pt-2">
                <div className="max-w-[60px]">
                  <img
                    src={testimonial.avatar}
                    alt="aa"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Testimonials;
