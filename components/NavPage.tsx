import Link from 'next/link';
import BannerHeader from './BannerHeader';
import Image from 'next/image';
import Logo from '../public/image/Logo.png';
import IconHeader from './IconHeader';

function NavPage() {
  return (
    <div>
      <BannerHeader />
      <div className="flex justify-between items-center  w-full px-16 py-3	">
        <div>
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo for shop"
              width="200px"
              height="300px"
            />
          </Link>
        </div>

        <nav>
          <ul className=" flex gap-14 items-center justify-center">
            <li>
              <Link href="/collection">Collection</Link>
            </li>

            <li>
              <Link href="/newin">New In</Link>
            </li>
            <li>
              <Link href="/modiweek">Modiweek</Link>
            </li>
            <li>
              <Link href="/plus-size">Plus Size</Link>
            </li>
            <li>
              <Link href="/sustainability">Sustainability </Link>
            </li>
          </ul>
        </nav>
        <IconHeader />
      </div>
    </div>
  );
}

export default NavPage;
