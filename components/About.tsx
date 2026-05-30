import { ReactElement } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Hero from "@/public/cleaning.jpeg";
import { HandHeart, Shield, Star, Heart } from "lucide-react";
interface Deal {
  title: string;
  subtitle: string;
}

interface Passion {
  icon: React.ElementType;
  title: string;
  description: string;
}
export default function About() {
  const deal: Deal[] = [
    {
      title: "4+",
      subtitle: "Professional Services",
    },
    {
      title: "GM",
      subtitle: "Greater MAnchester",
    },
    {
      title: "100%",
      subtitle: "DBS CHecked Staff",
    },
    {
      title: "24/7",
      subtitle: "Healthcare On-Call",
    },
  ];

  const passion: Passion[] = [
    {
      icon: HandHeart,
      title: "Community First",
      description:
        "We are rooted in Greater Manchester and proud to serve the people who make this city thrive.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Every team member is vetted, DBS checked, and insured before entering any home or workplace.",
    },
    {
      icon: Star,
      title: "Consistent Excellence",
      description:
        "We hold ourselves to a high standard on every job no matter how big or small.",
    },
    {
      icon: Heart,
      title: "Genuine Care",
      description:
        "Behind every service is a real human connection we care about the people we work with and for.",
    },
  ];

  return (
    <>
      <section className="relative px-[6%] py-28  overflow-hidden bg-main">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c8973a' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative grid md:grid-cols-2 gap-24 items-center    ">
          <div className="reveal">
            <div className="bg-linear-to-br from-[#152a4e] to-[#0d1f3c] border border-[#c8973a]/20 rounded-xl p-12 relative overflow-hidden">
              <div className="absolute -top-2.5 left-5 text-[12rem] text-[#c8973a]/10 font-mont leading-none">
                “
              </div>

              <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#c8973a] to-[#e2b660] flex items-center justify-center text-3xl mb-6 border-4 border-[#c8973a]/30">
                👩🏾
                {/* <Avatar>
                  <AvatarImage src="/public/cleaning.jpeg" alt="" />
                </Avatar> */}
              </div>

              <p className=" font-mont text-[1.25rem] italic text-[#fdf8f0] leading-[1.7] mb-6">
                "I started this company because I believe everyone deserves to
                live and work in a clean, safe, and well-supported environment,
                and that the people who make that possible should be treated
                with the highest professional standards."
              </p>

              <div className="text-[0.85rem] font-mont font-semibold text-[#c8973a] tracking-[1px]">
                Rebecca Durodola
              </div>
              <div className="text-[0.75rem] font-mont text-[#8899b0] mt-1">
                Founder &amp; Managing Director, SF Care and Support Services
                Ltd
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {deal.map((deal, i) => (
                <div
                  key={i}
                  className="bg-sub/10 border text-center border-sub rounded-lg p-5  transition"
                >
                  <h3 className="text-sub font-semibold font-mont text-xl  tracking-[0.5px] uppercase mb-1">
                    {deal.title}
                  </h3>
                  <p className="text-[0.8rem] font-mont text-sub/60 leading-relaxed">
                    {" "}
                    {deal.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="text-[0.68rem] font-mont font-semibold tracking-[4px] uppercase text-[#e2b660] flex items-center gap-3 mb-3">
              <span className="w-7.5 h-0.5 bg-[#e2b660]" />
              Our Story
            </div>
            <h2 className="font-mont text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#fffdf9] mb-6">
              Built on Passion.
              <br />
              Grounded in Community.
            </h2>
            <p className="text-[0.92rem] font-mont text-[#fdf8f0]/70 leading-[1.95] mb-6">
              SF Care and Support Services Ltd was founded by Rebecca Durodola
              out of a deep passion for people and community. Having seen
              first-hand how much a clean, safe, and well-supported environment
              can transform a person's quality of life, Rebecca set out to build
              a company that would make that difference professionally,
              reliably, and with genuine heart
            </p>
            <p className="text-[0.92rem] font-mont text-[#fdf8f0]/70 leading-[1.95] mb-6">
              Her vision was simple but powerful: to give working families the
              gift of time by handling the tasks that consume their days; to
              help businesses present themselves at their very best; and to
              ensure that vulnerable individuals and elderly clients always have
              a trusted, caring presence nearby. Every member of the SFCSSL team
              is selected not just for their skills, but for their character,
              because in this work, who you are matters just as much as what you
              can do.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {passion.map((pass, i) => {
                const Icon = pass.icon;
                return (
                  <div key={i} className="bg-[#c8973a]/10 border border-[#c8973a]/15 rounded-lg p-5 hover:bg-[#c8973a]/20 hover:border-[#c8973a]/30 transition">
                    <Icon className="text-xl mb-2 text-sub" />

                    <h2 className="text-[#e2b660] ca font-mont font-semibold text-[0.72rem]   tracking-[0.5px] uppercase mb-1">
                      {pass.title}
                    </h2>
                    <p className="text-[0.8rem] font-mont text-[#fdf8f0]/60 leading-[1.6]">
                      {pass.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
