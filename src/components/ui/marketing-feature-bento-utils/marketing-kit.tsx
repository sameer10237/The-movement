"use client";

import React, { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BlockTone = "auto" | "light" | "dark" | "muted" | "brand" | string;

export interface BlockLink {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

export const blockFrame = "mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8";

export function blockToneProps(tone?: BlockTone): {
  "data-tone"?: string;
  className?: string;
} {
  if (!tone || tone === "auto") {
    return { "data-tone": "auto" };
  }
  return {
    "data-tone": tone,
    className: tone === "dark" ? "dark" : undefined,
  };
}

export function useBlockReducedMotion(): boolean {
  return Boolean(useReducedMotion());
}

const motionElements = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  span: motion.span,
  ul: motion.ul,
  ol: motion.ol,
} as const;

export interface RevealProps {
  as?: keyof typeof motionElements;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: RevealProps) {
  const shouldReduceMotion = useBlockReducedMotion();
  const MotionTag = motionElements[as] ?? motion.div;

  if (shouldReduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export interface SectionHeaderProps {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-3 text-left", className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--bjork-accent,#ec7d43)]">
          {eyebrow}
        </div>
      )}
      <h2
        id={id}
        className="text-3xl font-extrabold tracking-tight text-[var(--bjork-text)] sm:text-4xl @3xl:text-5xl font-bjork-display"
      >
        {title}
      </h2>
      {description && (
        <div className="text-base text-[var(--bjork-text-muted)] leading-relaxed max-w-2xl">
          {description}
        </div>
      )}
    </div>
  );
}

export interface CtaLinkProps {
  link: BlockLink;
  variant?: "primary" | "secondary" | "outline" | "ghost" | string;
  arrow?: boolean;
  className?: string;
}

export function CtaLink({
  link,
  variant = "secondary",
  arrow = true,
  className,
}: CtaLinkProps) {
  const isExternal =
    link.href.startsWith("http://") || link.href.startsWith("https://");
  const baseClasses =
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClasses =
    variant === "primary"
      ? "bg-[var(--bjork-accent,#ec7d43)] text-white hover:opacity-90 shadow-sm"
      : "border border-[var(--bjork-border-strong,#343434)] bg-[var(--bjork-surface-hover,#161616)] text-[var(--bjork-text,#ededed)] hover:bg-[var(--bjork-surface-active,#202020)]";

  return (
    <Link
      href={link.href}
      target={link.target || (isExternal ? "_blank" : undefined)}
      rel={link.rel || (isExternal ? "noopener noreferrer" : undefined)}
      className={cn(baseClasses, variantClasses, className)}
    >
      <span>{link.label}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
