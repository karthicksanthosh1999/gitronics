import DetailsSection from "./_components/DetailsSection";
import GallerySection from "./_components/GallerySection";
import TeamMembers from "./_components/TeamMembers";

const page = () => {
  return (
    <div className="space-y-5">
      {/* GALLERY SECTION */}
      <GallerySection />
      {/* DETAILS CARD SECTION */}
      <DetailsSection />
      <TeamMembers />
    </div>
  );
};

export default page;
