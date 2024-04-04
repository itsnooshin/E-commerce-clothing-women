import Image from "next/image";
import collection from "@/public/ffdslfs.jpg";

const CollectionImageBanner = () => {
  return (
    <Image
      src={collection}
      style={{ width: "100%", objectFit: "cover" }}
      width={600}
      height={600}
      alt="banner for collection"
      quality={100}
      sizes="100vw"
    />
  );
};

export default CollectionImageBanner;
