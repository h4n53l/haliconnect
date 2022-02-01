import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

const Home = ({providers}) => {

    return (
        <div className="">
            <header className="flex justify-around items-center py-4">
                <div className="relative w-36 h-10">
                    <Image src="https://rb.gy/mju7xu" layout="fill" objectFit="contain" />
                </div>
                <div classname="flex flex-row items-center sm:divide-x divide-gray-300">
                    <div className="hidden sm:flex space-x-8 pr-4">
                        <HeaderLink Icon={ExploreIcon} text="Discover" />
                        <HeaderLink Icon={GroupIcon} text="Connections" />
                        <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
                        <HeaderLink Icon={BusinessCenterIcon} text="HaLiBee" />
                    </div>
                    
                    {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
                </div>
            </header>

            <main
                className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto"
            >
                <div className="space-y-6 xl:space-y-10">
                    <h1 className="text-3xl md:text-5xl text-amber-700 max-w-xl !leading-snug pl-4 xl:pl-0">
                        Welcome to your HaLi community
                    </h1>
                    <div className="space-y-4">
                        <div className="intent">
                            <h2 className="text-xl">Search for a client</h2>
                            <ArrowForwardIosRoundedIcon className="text-gray-700" />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Find a freelancer</h2>
                            <ArrowForwardIosRoundedIcon className="text-gray-700" />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Learn a new skill</h2>
                            <ArrowForwardIosRoundedIcon className="text-gray-700" />
                        </div>
                    </div>
                </div>

                <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
                    <Image src="https://rb.gy/gp0ctp" layout="fill" priority />
                </div>
            </main>
        </div>
    );
};

export default Home;

export async function getServerSideProps(context) {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
  }