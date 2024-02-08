import Footer from "./components/footer";
import LandingCButtons from "./components/landingCButtons";
import LandingCard from "./components/landingCard";

export default function Page() {
  return (
    <>
      <LandingCard />
      <LandingCButtons />
      {/* <PylonKey /> */}
      <Footer />
    </>
  );
}
