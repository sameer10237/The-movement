import { describe, it, expect } from "vitest"
import React from "react"
import { Hero, type HeroProps } from "@/components/ui/hero-1"
import DemoOne from "@/components/ui/demo"

describe("Hero Component (hero-1.tsx)", () => {
  it("exports Hero functional component", () => {
    expect(typeof Hero).toBe("function")
  })

  it("exports DemoOne preview component", () => {
    expect(typeof DemoOne).toBe("function")
  })

  it("instantiates Hero element with required props", () => {
    const props: HeroProps = {
      title: "Decentralized Civic Action",
      subtitle: "Verified consensus for community organizing.",
      eyebrow: "Field Protocol v2",
      ctaLabel: "Launch Console",
      ctaHref: "/feed",
    }
    const element = React.createElement(Hero, props)
    expect(element.type).toBe(Hero)
    expect(element.props.title).toBe("Decentralized Civic Action")
    expect(element.props.subtitle).toBe("Verified consensus for community organizing.")
    expect(element.props.eyebrow).toBe("Field Protocol v2")
    expect(element.props.ctaLabel).toBe("Launch Console")
    expect(element.props.ctaHref).toBe("/feed")
  })

  it("instantiates DemoOne without error", () => {
    const element = React.createElement(DemoOne, null)
    expect(element.type).toBe(DemoOne)
  })
})

