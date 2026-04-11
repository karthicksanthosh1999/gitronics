import AccordionProducts from "@/components/productDetails";
import { VerticalTabsDemo } from "../_components/ProductsTab";
import Hero from "@/components/hero";

const page = () => {
  return (
    <>
      <Hero
        description=""
        title="Our Product Range"
        chip="Product Categories"
      />
      <div className="container mx-auto max-w-7xl">
        <div>
          <VerticalTabsDemo />
          <AccordionProducts />
        </div>
      </div>
    </>
  );
};

export default page;
