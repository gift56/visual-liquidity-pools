"use client";

import { redirect } from "next/navigation";
import {
  AlertsToastsSection,
  CardsContainersSection,
  ColorPaletteSection,
  DesignSystemHero,
  DesignSystemLayout,
  FormsInteractionsSection,
  IconSetSection,
  IllustrationsSection,
  MoodBoardSection,
  NavigationSection,
  TypographySection,
  UIComponentsSection,
} from "@/components/design-system";

export default function DesignSystemPage() {
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }

  return (
    <DesignSystemLayout>
      <DesignSystemHero />
      <ColorPaletteSection />
      <TypographySection />
      <UIComponentsSection />
      <CardsContainersSection />
      <IconSetSection />
      <IllustrationsSection />
      <NavigationSection />
      <AlertsToastsSection />
      <FormsInteractionsSection />
      <MoodBoardSection />
    </DesignSystemLayout>
  );
}
