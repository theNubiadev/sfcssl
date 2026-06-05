import { Card, CardContent } from "./ui/card";
import { Badge, } from "./ui/badge";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface Testimony {
  stars?: number;
  service: string;
  description: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
}


const testimonials = [
  {
    quote:
      "SF Care staff are reliable, professional and maintain a consistently high standard. Communication is excellent and every request is handled swiftly.",
    author: "James H.",
  },
  {
    quote:
      "Classrooms and facilities are left spotless every day. The team are professional, punctual and incredibly thorough, complete peace of mind.",
    author: "Edunmont Co",
  },
  {
    quote:
      "Nothing but fabulous efficient, reliable and friendly. They quickly understood our needs and delivered exactly what we required.",
    author: "Alana Joe",
  },
];
const TESTIMONIALS: Testimony[] = [
  {
    service: "Healthcare Staffing",
    description:
      "Finding reliable healthcare staff at short notice used to be one of our biggest challenges. Since partnering with SF Care and Support Services, that problem is behind us.",
    author: {
      name: "Margaret T.",
      role: "Registered Manager, Care Home  Salford",
      avatar: "👩",
    },
  },
  {
    service: "Commercial Cleaning",
    description:
      "We brought SFCSSL in to manage our office cleaning contract and the difference was immediate. The team is punctual, thorough, and completely professional.",
    author: {
      name: "James O.",
      role: "Operations Director  Manchester City Centre",
      avatar: "👨",
    },
  },
  {
    service: "Concierge & Hospitality",
    description:
      "As a working mother of three, I simply did not have the time or energy to keep on top of everything at home. The concierge team has been an absolute blessing.",
    author: {
      name: "Amara S.",
      role: "Working Parent & Private Client  Trafford",
      avatar: "👩",
    },
  },
  {
    service: "Domestic Cleaning",
    description:
      "From the very first visit I knew I had made the right choice. My cleaner is punctual, careful with my belongings, and does an outstanding job every single time.",
    author: {
      name: "Patricia A.",
      role: "Retired Client  Stockport",
      avatar: "👵",
    },
  },
];

function TestimonialCard({ stars = 5, service, description, author }: Testimony) {
  return (
    <Card
      className={cn(
        "relative bg-main rounded-xl border border-amber-100 shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-lg hover:border-amber-300",
      )}
    >
      <CardContent className="p-8">
        {/* Top row  stars + service badge */}
        <div className="flex items-start justify-between mb-5">
          <span className="text-amber-500 tracking-widest text-sm">
            {"★".repeat(stars)}{"☆".repeat(5 - stars)}
          </span>
          <Badge
            variant="secondary"
            className="text-[0.6rem] font-semibold tracking-widest uppercase
                       bg-amber-50 text-amber-600 border border-amber-200
                       rounded-full px-2.5 py-0.5 hover:bg-amber-50"
          >
            {service}
          </Badge>
        </div>

        {/* Decorative quote mark */}
        <span
          aria-hidden="true"
          className="font-serif text-6xl text-amber-100 leading-none block -mt-2 mb-2 select-none"
        >
          &ldquo;
        </span>

        {/* Quote text */}
        <p className="text-sm text-slate-500 leading-relaxed italic mb-6 font-mont">
          {description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center
                          text-lg bg-linear-to-br from-slate-800 to-slate-700 border-2 border-amber-100">
            {author.avatar ?? author.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 leading-none font-mont">
              {author.name}
            </p>
            <p className="text-xs text-slate-400 mt-1 leading-none font-mont">
              {author.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#fdf8f0]/10 py-28 px-[6%]">

      {/* Section heading */}
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-7 h-0.5 bg-sub" />
            <h4 className="font-semibold tracking-tight text-sub uppercase font-mont text-sm">
              Client Experiences
            </h4>
          </div>

          <h2 className="font-mont text-[clamp(2.2rem,4vw,3.2rem)] leading-normal text-main font-bold">
            Trusted by Families,
            <br />
            <span>Businesses &amp; Professionals</span>
          </h2>

          <p className="max-w-2xl mx-auto font-mont text-light mt-3">
            The relationships we build with our clients are the heartbeat of
            everything we do. Here is what some of them have to say about
            working with us.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

 

    </section>
  );
}