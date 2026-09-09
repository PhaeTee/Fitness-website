import Navbar from "../components/Shared/Navbar";
import Hero from "../components/Home/Hero";
import WhyGetFit from "../components/Home/WhyGetFit";
import MembershipPlan from "../components/MembershipSection/MembershipPlan";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyGetFit />
      <MembershipPlan />
      
    </>
  );
}
