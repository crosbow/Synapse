import classNames from "classnames";
import { HamburgerMenu } from "./design/Header";
import Button from "./ui/Button";

const NavBar = ({ openNavigation }) => {
  const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#",
    },
    {
      id: "2",
      title: "How to use",
      url: "#",
    },
    {
      id: "4",
      title: "New account",
      url: "#",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#",
      onlyMobile: true,
    },
    {
      id: "6",
      title: "Profile",
      url: "#",
      onlyMobile: true,
    },
  ];

  return (
    <>
      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
      >
        <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
          {navigation.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className={classNames(
                //   common styles
                "hover:text-n-1",
                `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 `,

                //   mobile only routes
                `${link.onlyMobile ? "lg:hidden" : ""} `,

                `${link.title === "Profile" && "bg-black/60"}`,

                // common styles
                `px-6 py-4 md:py-5 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:leading-5 lg:hover:text-n-1 hover:text-1 xl:px-8 `
              )}
            >
              {link.title}
            </a>
          ))}
        </div>

        <HamburgerMenu />
      </nav>

      <div>
        <div className="flex items-center">
          <a href="#">
            <span className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
              New account
            </span>
          </a>
          <div className="hidden lg:flex">
            <a href="#">
              <Button href="#" white>
                Sign in
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
