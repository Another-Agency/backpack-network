export default function LandingCard() {
  return (
    <div className="px-36 pt-24 pb-20 ">
      <div className="rounded-3xl bg-vc-border-gradient shadow-lg shadow-black/20">
        <div className="w-auto h-auto p-4 rounded-3xl bg-bl_steel-charyo text-bl_steel-notpurp">
          <div className="h-96 rounded-lg bg-vc-border-gradient shadow-lg shadow-black/40">
            <div className="h-96 rounded-lg border-bl_steel-charyo bg-bl_steel-graish">
              <div className="grid grid-cols-1 px-4 space-x-4 ">
                <h1 className="p-4 pt-6 text-bl_steel-charyo font-semibold">
                  What is Backpack?
                </h1>
                <p className=" text-bl_steel-charyo">
                  Backpack is a way to orchestrate your money. Self custody, so
                  you are in control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}