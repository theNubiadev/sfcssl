import { Card, CardDescription, CardHeader } from "./ui/card";

interface Testimony {
  tag: string;
  description: string;
  client: string;
  company: string;
}
export default function Testimonials() {
  const testimony: Testimony[] = [
    {
      tag: "Healthcare Staffing",
      description:
        "Finding reliable healthcare staff at short notice used to be one of our biggest challenges. Since partnering with SF Care and Support Services, that problem is behind us. Their team understands urgency, and every professional they send us is prepared, compliant, and genuinely committed to quality care.",
      client: "Margaret T",
      company: "Registered Manager, Care Home - Salford",
    },
    {
      tag: "Commercial Cleaning",
      description:
        "We brought SFCSSL in to manage our office cleaning contract and the difference was immediate. The team is punctual, thorough, and completely professional. They work around our business hours without any disruption, and the standard has been consistently excellent from week one.",
      client: "James O.",
      company:
        "Operations Director, Professional Services Firm - Manchester City Center",
    }
  ];
  return (
    <>
      <section className="bg-[#fdf8f0]/10  py-28 px-[6%]">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="text-center">
            <div className="font-semibold tracking-tight uppercase font-mont flex items-center justify-center gap-3 mb-3">
              <span className="w-7.5 h-0.5 bg-sub" />
              <h4 className="font-semibold tracking-tight text-sub uppercase font-mont">
                CLIENT EXPERIENCES
              </h4>
            </div>

            <h2 className="font-mont text-[clamp(2.2rem,4vw,3.2rem)] leading-normal text-main font-bold">
              Trusted by Families,
              <br />
              <span>Businesses & Professionals</span>
            </h2>

            <p className="max-w-2xl mx-auto font-mont text-light">
              The relationships we build with our clients are the heartbeat of
              everything we do. Here is what some of them have to say about
              working with us.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3" >
          <Card>
            <CardHeader className="text-main">
              Herr
            </CardHeader>
            <CardDescription className="text-main">
              The relationships we build with our clients are the heartbeat of
              everything we do. Here is what some of them have to say about
              working with us.
            </CardDescription>
          </Card>

              <Card>
            <CardHeader className="text-main">
              Herr
            </CardHeader>
            <CardDescription className="text-main">
              The relationships we build with our clients are the heartbeat of
              everything we do. Here is what some of them have to say about
              working with us.
            </CardDescription>
          </Card>

              <Card>
            <CardHeader className="text-main">
              Herr
            </CardHeader>
            <CardDescription className="text-main">
              The relationships we build with our clients are the heartbeat of
              everything we do. Here is what some of them have to say about
              working with us.
            </CardDescription>
          </Card>

              <Card>
            <CardHeader className="text-main">
              Herr
            </CardHeader>
            <CardDescription className="text-main">
              The relationships we build with our clients are the heartbeat of
              everything we do. Here is what some of them have to say about
              working with us.
            </CardDescription>
          </Card>
        </div>
      </section>
    </>
  );
}
