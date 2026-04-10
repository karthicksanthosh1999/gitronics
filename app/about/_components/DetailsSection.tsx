import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Building2, CalendarCheck2, Users } from "lucide-react";

const DetailsSection = () => {
  const cardDetails = [
    {
      title: "Business Type",
      details: "Manufacturer, Supplier",
      icon: Building2,
    },
    {
      title: "No. of Staff",
      details: "10+ trained team members",
      icon: CalendarCheck2,
    },
    {
      title: "Established",
      details: "Since 2007",
      icon: BadgeCheck,
    },
    {
      title: "Core Strength",
      details: "Reliable quality and delivery",
      icon: Users,
    },
  ];

  const badges = [
    "Scientific Glassware",
    "Distillation Units",
    "Separatory Funnels",
    "Glass Condensers",
    "Jacketed Vessels",
    "PTFE Components",
    "Heat Exchangers",
    "Reaction Setups",
  ];

  const primary = [
    {
      id: "0",
      title: "Ethical business policy",
    },
    {
      id: "1",
      title: "Competitive pricing",
    },
    {
      id: "2",
      title: "Wide distribution network",
    },
    {
      id: "3",
      title: "Honest business dealing",
    },
  ];

  return (
    <>
      <div className="space-y-5 xl:mx-0 mx-3">
        <Card className="md:p-5 p-3">
          <CardContent>
            <CardHeader>
              <h1 className="text-gray-900 text-3xl font-semibold">
                Hitech Scientific Glass Industries
              </h1>
            </CardHeader>
            <Separator className={"my-2"} />
            <p className="text-base font-normal tracking-wider text-gray-800">
              Established 18 years ago, we are led by experienced professionals
              with a mission to manufacture quality scientific laboratory
              glasswares and equipment. We are recognized as a dependable
              manufacturer and supplier of scientific glassware, distillation
              systems, separators, heat exchangers, PTFE accessories and
              customized laboratory assemblies. Our team understands production
              complexity and controls every stage to deliver consistent quality.
            </p>
          </CardContent>
        </Card>

        <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-5">
          {cardDetails &&
            cardDetails.map((item) => (
              <Card className="p-5">
                <CardContent className="space-y-3">
                  <item.icon size={35} />
                  <h1 className="text-2xl font-semibold ">{item.title}</h1>
                  <h4 className="text-lg font-normal ">{item.details}</h4>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="flex h-full w-full items-stretch justify-between">
          <div>
            <Card className="p-5 w-full max-w-xl h-full shadow-sm">
              <CardHeader>
                {" "}
                <h1 className="text-gray-900 text-3xl font-semibold">
                  Popular Product Range
                </h1>
              </CardHeader>
              <Separator className={"my-2"} />
              <CardContent className="flex flex-wrap gap-3">
                <ul className="max-w-md space-y-1 text-body list-inside">
                  {primary.map((item) => (
                    <li key={item.id} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-fg-success me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="p-5 w-full max-w-xl h-full shadow-sm hover:shadow-lg">
              <CardHeader>
                {" "}
                <h1 className="text-gray-900 text-3xl font-semibold">
                  Popular Product Range
                </h1>
              </CardHeader>
              <Separator className={"my-2"} />
              <CardContent className="flex flex-wrap gap-3">
                {badges.map((item) => (
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm text-white font-semibold  bg-blue-500 text-foreground-inverse">
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
