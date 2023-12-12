import Link from "next/link";

export default function LandingCButtons() {
  return (
    <div className="grid grid-cols-1 grid-rows-4 px-20 gap-2 sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 md:grid-cols-4  md:gap-4 ">
      <Link
        href="/ioRamps"
        className="col-span-1 mx-0 pb-1.5 border-2 rounded-lg bg-vc-border-gradient shadow-lgshadow-bl_steel-notpurp/30 hover:border-bl_steel-ualert"
      >
        <div className="p-3 rounded-md bg-bl_steel-graish text-bl_steel-charyo">
          One:One
        </div>
      </Link>
      <Link
        href="https://www.circle-jerk.me/"
        className="col-span-1 mx-0 pb-1.5 border-2 rounded-lg bg-vc-border-gradient shadow-lgshadow-bl_steel-notpurp/30 hover:border-bl_steel-ualert"
      >
        <div className="p-3 rounded-md bg-bl_steel-graish text-bl_steel-charyo">
          Multi-Party
        </div>
      </Link>
      <Link
        href="/otc"
        className="col-span-1 mx-0 pb-1.5 border-2 rounded-lg bg-vc-border-gradient shadow-lg shadow-bl_steel-notpurp/30 hover:border-bl_steel-ualert"
      >
        <div className="p-3 rounded-md bg-bl_steel-graish text-bl_steel-charyo">
          Subs & Streams
        </div>
      </Link>
      <Link
        href="/paycast"
        className="col-span-1 mx-0 pb-1.5 border-2 rounded-lg bg-vc-border-gradient shadow-lg shadow-bl_steel-notpurp/30 hover:border-bl_steel-ualert"
      >
        <div className="p-3 rounded-md bg-bl_steel-graish text-bl_steel-charyo">
          Plugins
        </div>
      </Link>
    </div>
  );
}
