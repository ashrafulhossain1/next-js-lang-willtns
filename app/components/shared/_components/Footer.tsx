import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex justify-between my-10 md:my-14">
          <div>
            <Image
              alt=""
              src="/logo-footer.svg"
              width={182}
              height={85}
            ></Image>
          </div>
          <div className="flex md:gap-5 lg:gap-6">
            <Image alt="" src="/logos/fb.svg" width={53} height={53}></Image>
            <Image alt="" src="/logos/insta.svg" width={53} height={53}></Image>
            <Image alt="" src="/logos/yt.svg" width={53} height={53}></Image>
            <Image alt="" src="/logos/in.svg" width={53} height={53}></Image>
            <Image alt="" src="/logos/x.svg" width={53} height={53}></Image>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <footer className="footer sm:footer-horizontal text-lg p-10 bg-white text-black">
            {/* Informations légales */}
            <nav>
              <h6 className="text-black uppercase font-bold">
                Informations légales
              </h6>
              <div className="flex justify-between gap-4">
                <div className="flex flex-col space-y-3">
                  <Link href="#" className="link link-hover"></Link>
                  <Link href="#" className="link link-hover">
                    Design
                  </Link>
                  <Link href="#" className="link link-hover">
                    Marketing
                  </Link>
                  <Link href="#" className="link link-hover">
                    Advertisement
                  </Link>
                </div>
                <div className="flex flex-col space-y-3">
                  <Link href="#" className="link link-hover">
                    Branding
                  </Link>
                  <Link href="#" className="link link-hover">
                    Design
                  </Link>
                  <Link href="#" className="link link-hover">
                    Marketing
                  </Link>
                  <Link href="#" className="link link-hover">
                    Advertisement
                  </Link>
                </div>
              </div>
            </nav>

            {/* Informations légales */}
            <nav>
              <h6 className="text-black uppercase font-bold">
                Informations légales
              </h6>
              <div className="flex flex-col space-y-3">
                <Link
                  href="#"
                  className="flex items-center gap-2 link link-hover"
                >
                  <Image
                    alt="icon"
                    src="/logos/policy.svg"
                    width={34}
                    height={34}
                  />
                  Politique de confidentialité
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 link link-hover"
                >
                  <Image
                    alt="icon"
                    src="/logos/condition.svg"
                    width={34}
                    height={34}
                  />
                  Conditions d'utilisation
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 link link-hover"
                >
                  <Image
                    alt="icon"
                    src="/logos/cookies.svg"
                    width={34}
                    height={34}
                  />
                  Sécurité et conformité{' '}
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 link link-hover"
                >
                  <Image
                    alt="icon"
                    src="/logos/policy.svg"
                    width={34}
                    height={34}
                  />
                  Branding
                </Link>
              </div>
            </nav>
            {/* Contact */}
            <nav>
              <h6 className="text-black uppercase font-bold">Contact</h6>
              <div className="flex flex-col space-y-3">
                <Link
                  href="#"
                  className="flex items-center gap-2 link link-hover"
                >
                  <Image
                    alt="icon"
                    src="/logos/email.svg"
                    width={34}
                    height={34}
                  />
                  support@tchatnsign.com{' '}
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 link link-hover flex-wrap"
                >
                  <Image
                    className=""
                    alt="icon"
                    src="/logos/location.svg"
                    width={34}
                    height={34}
                  />
                  375 Boulevard De Quen, Alma, <br />
                  Québec, G8B 5P2
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 link link-hover"
                >
                  <Image
                    alt="icon"
                    src="/logos/phone.svg"
                    width={34}
                    height={34}
                  />
                  1 (844) 972-0420
                </Link>
              </div>
            </nav>
            <nav className="flex gap-4 items-center">
              <Image
                alt="icon"
                src="/logos/cirtificate-1.png"
                width={50} // default width
                height={66} // default height
                className="w-10 h-[53px] sm:w-[45px] sm:h-[60px] md:w-[50px] md:h-[66.0844px] lg:w-[60px] lg:h-[80px]"
              />
              <Image
                alt="icon"
                src="/logos/cirtificate-2.png"
                width={50}
                height={66}
                className="w-10 h-[53px] sm:w-[45px] sm:h-[60px] md:w-[50px] md:h-[66.0844px] lg:w-[60px] lg:h-[80px]"
              />
              <Image
                alt="icon"
                src="/logos/cirtificate-3.png"
                width={50}
                height={66}
                className="w-10 h-[53px] sm:w-[45px] sm:h-[60px] md:w-[50px] md:h-[66.0844px] lg:w-[60px] lg:h-[80px]"
              />
            </nav>
          </footer>
        </div>
      </div>
      {/* footer copyright */}
      <div className="py-12 bg-gradient-to-r from-[#30204D] to-[#533589] text-white">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-lg">
          {/* Left side - Copyright */}
          <div>© {year} Tchat N Sign. Tous droits réservés.</div>

          {/* Right side - Made in Canada + Flag */}
          <div className="flex items-center gap-2">
            <Image
              alt="Canada Flag"
              src="/footer-canada.png"
              width={156} // Adjusted size for inline display
              height={21}
            />
          </div>
        </div>
      </div>
    </>
  );
}
