export default function LandingCButtons() {
  return (
    <div className="grid grid-cols-1 grid-rows-4 px-20 gap-2 sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 md:grid-cols-4  md:gap-4 ">
      <div className="col-span-1 mx-8 rounded-lg bg-vc-border-gradient shadow-lg shadow-bl_steel-notpurp/30">
        <div className="p-3 rounded-md bg-bl_steel-charyo text-bl_steel-notpurp">
          On-Ramp
        </div>
      </div>
      <div className="col-span-1 mx-8 rounded-lg bg-vc-border-gradient shadow-lgshadow-bl_steel-notpurp/30">
        <div className="p-3 rounded-md bg-bl_steel-charyo text-bl_steel-notpurp">
          Off-Ramp
        </div>
      </div>
      <div className="col-span-1 mx-8 rounded-lg bg-vc-border-gradient shadow-lg shadow-bl_steel-notpurp/30">
        <div className="p-3 rounded-md bg-bl_steel-charyo text-bl_steel-notpurp">
          OTC
        </div>
      </div>
      <div className="col-span-1 mx-8 rounded-lg bg-vc-border-gradient shadow-lg shadow-bl_steel-notpurp/30">
        <div className="p-3 rounded-md bg-bl_steel-charyo text-bl_steel-notpurp">
          Paycast
        </div>
      </div>
    </div>
  );
}
