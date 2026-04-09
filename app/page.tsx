import Home from "./home/page";
import Logomarquee from "./home/components/logoScroller";
import ProductList from "./products/_components/ProductList";

const page = () => {
  return (
    <>
      <Home />
      <ProductList />
      <Logomarquee />
    </>
  );
};

export default page;
