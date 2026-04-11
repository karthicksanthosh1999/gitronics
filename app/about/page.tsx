import Hero from "@/components/hero";
import DetailsSection from "./_components/DetailsSection";
import GallerySection from "./_components/GallerySection";
import TeamMembers from "./_components/TeamMembers";

const page = () => {
  return (
    <>
      <Hero
        description="Reliable scientific glassware manufacturing expertise built over 18 years with strong process discipline and customer focus."
        title="Company Profile"
        chip="About Us"
      />
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-5">
          {/* GALLERY SECTION */}
          <GallerySection />
          {/* DETAILS CARD SECTION */}
          <DetailsSection />
          <TeamMembers />
        </div>
      </div>
    </>
  );
};

export default page;
