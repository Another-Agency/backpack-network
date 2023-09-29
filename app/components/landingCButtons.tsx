import Link from "next/link";

export default function LandingCButtons() {
  return (
    <div className="grid grid-cols-1 grid-rows-4 px-20 gap-2 sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 md:grid-cols-4  md:gap-4 ">
      <Link
        href="https://checkout.mybackpack.app/"
        className="col-span-1 mx-0 rounded-lg bg-vc-border-gradient shadow-lg shadow-bl_steel-notpurp/30"
      >
        <div className=" p-3 rounded-md bg-bl_steel-charyo text-bl_steel-notpurp">
          I/O Ramps
        </div>
      </Link>
      <Link
        href="https://www.circle-jerk.me/"
        className="col-span-1 mx-0 rounded-lg bg-vc-border-gradient shadow-lgshadow-bl_steel-notpurp/30"
      >
        <div className="p-3 rounded-md bg-bl_steel-charyo text-bl_steel-notpurp">
          Stable Swap
        </div>
      </Link>
      <Link
        href="/otc"
        className="col-span-1 mx-0 rounded-lg bg-vc-border-gradient shadow-lg shadow-bl_steel-notpurp/30"
      >
        <div className="p-3 rounded-md bg-bl_steel-charyo text-bl_steel-notpurp">
          OTC
        </div>
      </Link>
      <Link
        href="/paycast"
        className="col-span-1 mx-0 rounded-lg bg-vc-border-gradient shadow-lg shadow-bl_steel-notpurp/30"
      >
        <div className="p-3 rounded-md bg-bl_steel-charyo text-bl_steel-notpurp">
          Paycast
        </div>
      </Link>
    </div>
  );
}
