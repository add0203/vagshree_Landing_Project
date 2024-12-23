"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import PageWrapper from "@/components/wrapper/PageWrapper";
import Clients from "@/components/Clients";
import CarousalMain from "@/components/carousel/carousalMain";
import TopNav from "@/components/wrapper/TopNav";
const Home = () => {
  return (
    <PageWrapper>
      <TopNav />
      <Hero />
      <Clients />
      <Grid />
      <CarousalMain />
    </PageWrapper>
  );
};

export default Home;
