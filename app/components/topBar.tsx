"use client";

import Link from "next/link";
import { useState } from "react";
import Chat from "./chatGpt";

export default function TopBar() {
  const [isChatOpen, setChatOpen] = useState(false);

  return (
    <div className="bg-vc-border-gradient shadow-lg shadow-black/20">
      <div className=" bg-bl_steel-charyo text-bl_steel-notpurp py-8">
        <div className="grid grid-cols-4 w-max px-4 mr-12 mx-auto space-x-4">
          <Link href="/">
            <h1 className="text-center self-center text-bl_steel-notpurp">
              Backpack
            </h1>
          </Link>
          <Link href={"/storefront"}>
            <h1 className="text-center self-center text-bl_steel-notpurp">
              Storefront
            </h1>
          </Link>
          <Link href={"https://pylon-api.readme.io/"}>
            <h1 className="text-center self-center text-bl_steel-notpurp">
              Pylon API
            </h1>
          </Link>
          <h1
            className="text-center self-center text-bl_steel-notpurp"
            onClick={() => setChatOpen(true)}
          >
            Agent Poly🦜
          </h1>
        </div>
      </div>
      <Chat isChatOpen={isChatOpen} setChatOpen={setChatOpen} />
    </div>
  );
}
