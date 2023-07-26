import type { NextPage } from "next";
import FormSide from "../components/form-side";
import ImageSide from "../components/image-side";

const Web: NextPage = () => {
  return (
    <div className="relative bg-standard-white w-full h-auto overflow-hidden flex flex-row flex-wrap items-start justify-start md:flex-row md:items-start md:justify-start md:h-auto">
      <FormSide />
      <ImageSide />
    </div>
  );
};

export default Web;
