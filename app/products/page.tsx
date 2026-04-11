import Hero from "@/components/hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <>
      <Hero
        description=""
        title="Our Product Range"
        chip="Product Categories"
      />
      <div className="container mx-auto max-w-7xl">
        <Card className="p-5">
          <CardHeader className="space-y-3">
            <h4 className="uppercase text-lg font-semibold font-mono">
              From Source Content
            </h4>
            <h1 className="text-4xl font-semibold">
              Product Details & Technical Specifications
            </h1>
          </CardHeader>
          <Separator className="" />
          <CardContent className="">
            <p className="text-base tracking-wider leading-9">
              HI SIL Glass Works has a wide range of glass products manufactured
              to high standards and stringent quality parameters. We manufacture
              conical and spherical ground joints, stop-cocks, screw-cocks,
              threaded tapered joints, single and multi-neck flasks,
              distillation and reaction components, condensers, separating and
              dropping funnels, extractors, reaction vessels and water
              distillers. We also specialize in filtration products including
              gooch crucibles, buchner funnels, pipeline filters, micro
              filtration kits, lab jacks, clamps and boss heads.
            </p>
            <p className="text-base tracking-wider leading-9 mt-3">
              Our product range consists of diverse items, offering
              comprehensive glassware and related product solutions for broad
              laboratory and industrial requirements. HI SIL Glass has earned a
              strong reputation for custom-made glassware for laboratory and
              industrial applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;
