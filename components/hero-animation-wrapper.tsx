"use client"

import dynamic from "next/dynamic"

// Dynamically load heavy canvas animation only on the client to shrink the initial JS bundle
const HeroAnimation = dynamic(() => import("./hero-animation").then((m) => m.HeroAnimation), {
  ssr: false,
  loading: () => null,
})

export function HeroAnimationWrapper() {
  return <HeroAnimation />
} 