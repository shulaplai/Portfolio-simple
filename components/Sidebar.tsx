import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
 
  return (
    <>
      <Image
        src="data:image/jpeg;base64,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"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Lai</span> Shu Lap
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Resume.pdf"
        download="Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.linkedin.com/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/shulaplai/">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Hong Kong </span>
        </div>
        <p className="my-2 ">shulaplai@gmail.com </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:shulaplai@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </>
  );
};

export default Sidebar;