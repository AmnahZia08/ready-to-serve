import {
  Footer as FooterFB,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

import { ImFacebook2 } from "react-icons/im";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const theme = {
  root: {
    base: "w-full bg-black shadow md:flex md:items-center md:justify-between",
    container: "w-full p-6",
  },
//   groupLink: {
//     base: "flex flex-wrap text-sm text-white",
//     link: {
//       base: "me-4 last:mr-0 md:mr-6",
//       href: "hover:underline",
//     },
//     col: "flex-col space-y-4",
//   },
//   icon: {
//     base: "text-white dark:hover:text-white",
//     size: "h-5 w-5",
//   },
//   title: {
//     base: "mb-6 text-sm font-semibold uppercase text-white",
//   },
//   divider: {
//     base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8",
//   },
//   copyright: {
//     base: "text-sm text-white sm:text-center",
//     href: "ml-1 hover:underline",
//     span: "ml-1",
//   },
//   brand: {
//     base: "mb-4 flex items-center sm:mb-0",
//     img: "mr-3 h-8",
//     span: "self-center whitespace-nowrap text-2xl font-semibold text-white",
//   },
};

const Footer = () => {
  return (
    <FooterFB theme={theme}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle className="text-white" title="Company" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-white">
                About us
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Our offerings
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Blog
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Careers
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Gift cards
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="Offers" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-white">
                Home-made meals
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Grocery
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Catering
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="Legal" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-white">
                Privacy Policy
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Terms &amp; Conditions
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Accessibility
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="Become a partner" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-white">
                Home-made Kitchen
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Grocery store
              </FooterLink>
              <FooterLink href="#" className="text-white">
                Catering services
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-black px-4 py-6 sm:flex sm:items-center sm:justify-between border-t border-[#454545]">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center gap-10 mb-5">
            <FooterIcon href="#" className="text-white" icon={ImFacebook2} fontSize={16}/>
            <FooterIcon href="#" className="text-white" icon={FaXTwitter} />
            <FooterIcon href="#" className="text-white" icon={FaYoutube} />
            <FooterIcon href="#" className="text-white" icon={FaLinkedin} />
            <FooterIcon href="#" className="text-white" icon={FaInstagram} />
          </div>
          <FooterCopyright
            href="#"
            by="Ready-To-Serve"
            year={2024}
            className="text-white"
          />
        </div>
      </div>
    </FooterFB>
  );
};

export default Footer;
