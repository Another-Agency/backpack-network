import { Analytics } from "@vercel/analytics/react";
import LandingCButtons from "./components/landingCButtons";
import LandingCard from "./components/landingCard";

export default function Page() {
  return (
    <>
      <LandingCard />
      <LandingCButtons />
      <Analytics />
    </>
  );
}
