import React from "react";
import WeddingCategory from "../home/weddingCategory/WeddingCategory";
import { allCategories } from "@/data/weddingCategoriesData"; // Adjust path if needed
import VendorSlider from "./TrendingChoreographers";
import TrendingMakeupArtists from "./WeddingMakeupArtists";
import TrendingPhotographers from "./TrendingPhotographers";
import VenuesNearYou from "./VenuesNearYou";

function Vendors() {
  return (
    <>
      <WeddingCategory
        categories={allCategories}
        showHeader={true}
        showLink={false}
      />
      <VendorSlider />
      <TrendingMakeupArtists/>
      <TrendingPhotographers/>
      <VenuesNearYou/>
    </>
  );
}

export default Vendors;