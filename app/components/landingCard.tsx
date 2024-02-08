export default function LandingCard() {
  return (
    <div className=" pt-12 pb-8 px-2 sm:pt-24 sm:pb-20 sm:px-20 md:px-36">
      <div className="rounded-3xl bg-vc-border-gradient shadow-lg shadow-black/20">
        <div className="w-auto h-auto p-4 rounded-3xl bg-bl_steel-charyo text-bl_steel-notpurp">
          <div className="h-96 rounded-lg bg-vc-border-gradient shadow-lg shadow-black/40">
            <div className="h-96 rounded-lg border-bl_steel-charyo bg-bl_steel-graish overflow-auto">
              <div className="grid grid-cols-1 px-4 space-x-4">
                <p className=" text-bl_steel-charyo pt-4 ">
                  Nobody wants to think about using crypto, we're making it so
                  you don't have to.
                </p>
                <h1 className="p-4 pt-20 justify-center text-center text-bl_steel-charyo font-semibold">
                  ** Backpack Self Banking services **
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
