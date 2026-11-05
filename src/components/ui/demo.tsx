"use client";

import MarketingFeatureBento, {
  MARKETING_BENTO_SAMPLE,
} from "@/components/ui/marketing-feature-bento";

export function MarketingFeatureBentoDemo() {
  return (
    <div className="w-full">
      <MarketingFeatureBento {...MARKETING_BENTO_SAMPLE} />
    </div>
  );
}

export const DemoOne = MarketingFeatureBentoDemo;

export default MarketingFeatureBentoDemo;
