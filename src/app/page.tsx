'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import SideNav from '@/components/SideNav';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

export default function Home() {
  useScrollAnimations();

  return (
    <>
      <SideNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <StatsSection />
        <ContactSection />
      </main>
    </>
  );
}