"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import PageWrapper from "@/components/wrapper/PageWrapper";
import Clients from "@/components/Clients";

// import RecentProjects from "@/components/RecentProjects";
import { HeroSection } from "@/components/ui/landingHome";
// import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
import { LogoTicker } from "@/components/ui/LogoTicker";
// import TopNav from "@/components/TopNav";

const Home = () => {
  return (
    <PageWrapper>
      {/* <HeroSection /> */}
      <Hero />
      <Grid />
      <Clients />
      {/* <LogoTicker /> */}
      {/* <Experience /> */}
      {/* <Approach /> */}
    </PageWrapper>
  );
};

export default Home;
