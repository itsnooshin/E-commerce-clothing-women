import Image from 'next/image';

import collection from '@/public/Frame-header-collection.png';

export default function CollectionImageBannerMobile() {
  return (
    <Image
      src={collection}
      style={{ width: '100%', objectFit: 'cover' }}
      width={600}
      height={600}
      alt="banner for collection"
      quality={100}
      sizes="100vw"
    />
  );
}
