import type React from "react"

import { cn } from "@/lib/utils"

/** Formats a "YYYY.MM"/"YYYY" period as "start – end", using "현재" when ongoing. */
export function formatPeriod(period: { start: string; end?: string }) {
  return `${period.start} – ${period.end ?? "현재"}`
}

/** The paper-like document surface. Always light so it mirrors the exported PDF. */
export function PreviewSheet({
  className,
  children,
}: React.ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "preview-sheet bg-white px-10 py-12 text-zinc-900 shadow-sm print:px-0 print:py-0 print:shadow-none",
        className
      )}
    >
      {children}
    </article>
  )
}

/** Document header: name, role, tagline on the left; contact lines on the right. */
export function PreviewDocHeader({
  name,
  role,
  tagline,
  contacts,
}: {
  name: string
  role: string
  tagline?: string
  contacts: string[]
}) {
  return (
    <header className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4 border-b border-zinc-300 pb-6">
      <div className="min-w-0">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          {name}
        </h1>
        <p className="mt-1 text-lg font-medium text-zinc-600">{role}</p>
        {tagline ? (
          <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
            {tagline}
          </p>
        ) : null}
      </div>

      <ul className="shrink-0 space-y-1 text-sm text-zinc-600 sm:text-right">
        {contacts.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </header>
  )
}

/** A titled section with an underlined label. */
export function PreviewSection({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("mt-8", className)}>
      <h2 className="mb-4 border-b border-zinc-200 pb-1.5 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

/** A single entry: title + right-aligned meta (period), optional subtitle. */
export function PreviewEntryHeader({
  title,
  subtitle,
  meta,
}: {
  title: string
  subtitle?: string
  meta?: string
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
        {subtitle ? <p className="text-sm text-zinc-600">{subtitle}</p> : null}
      </div>
      {meta ? (
        <span className="font-mono text-xs text-zinc-500">{meta}</span>
      ) : null}
    </div>
  )
}

/** Compact tag chips for a skills list. */
export function SkillTags({ skills }: { skills: string[] }) {
  if (!skills.length) return null
  return (
    <ul className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-md border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-xs font-medium text-zinc-700"
        >
          {skill}
        </li>
      ))}
    </ul>
  )
}

/** Prose wrapper for Markdown-rendered descriptions, tuned for a light sheet. */
export function PreviewProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-sm max-w-none text-zinc-700 prose-zinc prose-headings:text-zinc-900 prose-p:my-1.5 prose-a:font-normal prose-a:text-zinc-900 prose-a:underline prose-a:decoration-zinc-300 prose-strong:text-zinc-900 prose-ul:my-1.5 prose-li:my-0.5">
      {children}
    </div>
  )
}
