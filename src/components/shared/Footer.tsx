import Link from "next/link";
import { Facebook, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#efffef] text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2">
            {/* <Image
              src="https://i.ibb.co.com/5X92780s/charity.png"
              width={200}
              height={200}
              alt="As-Sunnah Foundation"
              className="h-12"
            /> */}

            <Link href="/" className="text-xl font-bold">
              MyLogo
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            This institution is striving to build an ideal welfare society by
            following the footsteps of the Prophet of Humanity, the Messenger of
            Human Freedom and Peace, the ideal of human service, the Prophet
            Muhammad (PBUH), in the service of humanity.
          </p>
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <Link href="https://facebook.com" target="_blank">
              <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Facebook className="h-5 w-5" />
              </div>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Youtube className="h-5 w-5" />
              </div>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Linkedin className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Menu</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Connect</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/donor/regular">Regular Donor</Link>
            </li>
            <li>
              <Link href="/donor/lifetime">Lifetime Donor</Link>
            </li>
            <li>
              <Link href="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Others</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Conditions</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
