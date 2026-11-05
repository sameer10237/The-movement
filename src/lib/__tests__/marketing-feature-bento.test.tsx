import { describe, it, expect } from "vitest"
import React from "react"
import MarketingFeatureBento, {
  MARKETING_BENTO_SAMPLE,
} from "@/components/ui/marketing-feature-bento"
import { MarketingFeatureBentoDemo } from "@/components/ui/demo"
import {
  blockFrame,
  blockToneProps,
  useBlockReducedMotion,
} from "@/components/ui/marketing-feature-bento-utils/marketing-kit"

describe("Marketing Feature Bento Component", () => {
  it("exports MarketingFeatureBento component", () => {
    expect(typeof MarketingFeatureBento).toBe("function")
  })

  it("exports MarketingFeatureBentoDemo preview component", () => {
    expect(typeof MarketingFeatureBentoDemo).toBe("function")
  })

  it("contains rich sample features covering all visual types", () => {
    expect(MARKETING_BENTO_SAMPLE.features.length).toBeGreaterThanOrEqual(7)
    const types = MARKETING_BENTO_SAMPLE.features.map((f) => f.visual.type)
    expect(types).toContain("waterfall")
    expect(types).toContain("replay")
    expect(types).toContain("alerts")
    expect(types).toContain("cost")
    expect(types).toContain("code")
    expect(types).toContain("keys")
    expect(types).toContain("redact")
  })

  it("instantiates MarketingFeatureBento with sample props without errors", () => {
    const element = React.createElement(MarketingFeatureBento, MARKETING_BENTO_SAMPLE)
    expect(element.type).toBe(MarketingFeatureBento)
    expect(element.props.title).toBe(MARKETING_BENTO_SAMPLE.title)
    expect(element.props.eyebrow).toBe(MARKETING_BENTO_SAMPLE.eyebrow)
  })

  it("verifies marketing kit helpers", () => {
    expect(typeof blockFrame).toBe("string")
    expect(blockFrame).toContain("max-w-7xl")

    const autoTone = blockToneProps("auto")
    expect(autoTone["data-tone"]).toBe("auto")

    const darkTone = blockToneProps("dark")
    expect(darkTone["data-tone"]).toBe("dark")
    expect(darkTone.className).toBe("dark")

    expect(typeof useBlockReducedMotion).toBe("function")
  })

  it("instantiates MarketingFeatureBentoDemo wrapper element", () => {
    const demoElement = React.createElement(MarketingFeatureBentoDemo, null)
    expect(demoElement.type).toBe(MarketingFeatureBentoDemo)
  })
})
