import Link from "next/link";
import LandingCButtons from "./components/landingCButtons";
import LandingCard from "./components/landingCard";

export default function Page() {
  return (
    <>
      <LandingCard />
      <LandingCButtons />
      <div className="grid grid-cols-1 w-auto justify-items-center">
        <div className="grid col-span-1 gap-1 w-52 h-2">
          <div className=" opacity-70 grid justify-center items-center text-bl_steel-charyo">
            insert pylon key
          </div>
          <Link
            href="/"
            className=" opacity-30 col-span-1 mx-0 pb-1.5 border-2 rounded-3xl bg-vc-border-gradient shadow-lgshadow-bl_steel-notpurp/30 hover:border-bl_steel-bluish"
          >
            <div className="p-3 rounded-3xl bg-bl_steel-graish text-bl_steel-charyo"></div>
          </Link>
        </div>
      </div>
    </>
  );
}
