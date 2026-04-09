import { Card, CardContent, CardHeader } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <>
      <Card>
        <CardContent>
          <CardHeader>
            <h1 className="text-gray-900 text-4xl font-semibold">
              Hitech Scientific Glass Industries
            </h1>
          </CardHeader>
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
    </>
  );
};

export default DetailsSection;
