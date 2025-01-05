import Feature from "../components/Feature";
import Reviews from "../components/Reviews";
import Hero from "../components/hero";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import useTop from "../customhooks/scrolltop";

export default function Home() {
  useTop();
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Reviews />
      <Feature />
    </>
  );
}
