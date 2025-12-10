import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 my-10">
          {/* Logo */}
          <div className="relative w-[160px] sm:w-[180px] md:w-[200px] aspect-[182/85]">
            <Image
              src="/logo-footer.svg"
              alt="Tchat N Sign Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {['fb', 'insta', 'yt', 'in', 'x'].map((platform) => (
              <div
                key={platform}
                className="relative w-10 sm:w-11 md:w-12 aspect-square"
              >
                <Image
                  src={`/logos/${platform}.svg`}
                  alt={platform}
                  fill
                  className="object-contain hover:opacity-80 transition"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-300 my-6" />

        {/* Main Content */}
        <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 bg-white text-black">
          {/* Column 1 */}
          <nav>
            <h6 className="font-bold text-base md:text-lg mb-5 uppercase">
              Informations légales
            </h6>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col space-y-3 text-base md:text-lg">
                {['Design', 'Marketing', 'Advertisement', 'About us'].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="hover:text-purple-600 transition"
                    >
                      {item}
                    </Link>
                  ),
                )}
              </div>

              <div className="flex flex-col space-y-3 text-base md:text-lg">
                {['Branding', 'Design', 'Marketing', 'Careers'].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="hover:text-purple-600 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Column 2 */}
          <nav>
            <h6 className="font-bold text-base md:text-lg mb-5 uppercase">
              Informations légales
            </h6>

            <div className="flex flex-col space-y-4 text-base md:text-lg">
              {[
                {
                  icon: '/logos/policy.svg',
                  text: 'Politique de confidentialité',
                },
                {
                  icon: '/logos/condition.svg',
                  text: "Conditions d'utilisation",
                },
                { icon: '/logos/cookies.svg', text: 'Sécurité et conformité' },
                { icon: '/logos/policy.svg', text: 'Accessibilité' },
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center gap-3 hover:text-purple-600 transition"
                >
                  <div className="relative w-7 aspect-square flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt="icon"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {item.text}
                </Link>
              ))}
            </div>
          </nav>

          {/* Column 3 */}
          <nav>
            <h6 className="font-bold text-base md:text-lg mb-5 uppercase">
              Contact
            </h6>

            <div className="flex flex-col space-y-4 text-base md:text-lg">
              {/* Email */}
              <Link
                href="mailto:support@tchatnsign.com"
                className="flex items-start gap-3 hover:text-purple-600 transition"
              >
                <div className="relative w-7 aspect-square mt-1">
                  <Image
                    src="/logos/email.svg"
                    alt="email"
                    fill
                    className="object-contain"
                  />
                </div>
                support@tchatnsign.com
              </Link>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="relative w-7 aspect-square mt-1">
                  <Image
                    src="/logos/location.svg"
                    alt="location"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>
                  375 Boulevard De Quen, Alma,
                  <br />
                  Québec, G8B 5P2
                </span>
              </div>

              {/* Phone */}
              <Link
                href="tel:18449720420"
                className="flex items-center gap-3 hover:text-purple-600 transition"
              >
                <div className="relative w-7 aspect-square">
                  <Image
                    src="/logos/phone.svg"
                    alt="phone"
                    fill
                    className="object-contain"
                  />
                </div>
                1 (844) 972-0420
              </Link>
            </div>
          </nav>

          {/* Column 4 Certificates */}
          <div className="flex justify-center lg:justify-end items-center gap-5">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="relative w-16 sm:w-20 md:w-24 aspect-[80/106] hover:scale-105 transition"
              >
                <Image
                  src={`/logos/cirtificate-${num}.png`}
                  alt={`certificate ${num}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </footer>
      </div>

      {/* Bottom Bar */}
      <div className="bg-linear-to-r from-[#30204D] to-[#533589] text-white py-10">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-base md:text-lg font-bold">
            © {year} Tchat N Sign. Tous droits réservés.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-base md:text-lg font-bold">Made in</span>

            <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 aspect-[156/21]">
              <Image
                src="/footer-canada.png"
                alt="Canada"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
