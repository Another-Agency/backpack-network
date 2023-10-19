export default function LandingCard() {
  return (
    <div className=" pt-12 pb-8 px-2 sm:pt-24 sm:pb-20 sm:px-20 md:px-36">
      <div className="rounded-3xl bg-vc-border-gradient shadow-lg shadow-black/20">
        <div className="w-auto h-auto p-4 rounded-3xl bg-bl_steel-charyo text-bl_steel-notpurp">
          <div className="h-96 rounded-lg bg-vc-border-gradient shadow-lg shadow-black/40">
            <div className="h-96 rounded-lg border-bl_steel-charyo bg-bl_steel-graish overflow-auto">
              <div className="grid grid-cols-1 px-4 space-x-4">
                <p className=" text-bl_steel-charyo pt-4 ">
                  Imagine a world where managing your finances is as simple and
                  instantaneous as sending a text message. With Backpack, that's
                  not a dream—it's reality. Just like you don't need a post
                  office to send a letter anymore, you don't need a traditional
                  bank to manage your money. You're in control, sending,
                  receiving, and investing your assets as effortlessly as you
                  send a text.
                </p>
                <h1 className="p-4 pt-20 justify-center text-center text-bl_steel-charyo font-semibold">
                  ** MORE COMING SOON-ISH **
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
