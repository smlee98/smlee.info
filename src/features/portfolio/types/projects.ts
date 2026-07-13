export type ProjectPreview = {
  /** Image path under /public (e.g., "/images/projects/n-bank-rpa/01.webp"). */
  src: string
  /** Accessible description of the captured screen. */
  alt: string
  /** Short caption shown under the thumbnail. */
  caption?: string
}

export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  title: string
  /**
   * Project period for display and sorting.
   * Use "YYYY.MM" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "2025.05"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** Public URL (site, repository, demo, or video). Omit to hide the link button. */
  link?: string
  /** GitHub repository URL; renders a GitHub icon button when set. */
  github?: string
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Screen captures shown as a scrollable strip; click to zoom. */
  previews?: ProjectPreview[]
  /**
   * When set (and `previews` is empty), renders this many muted placeholder
   * tiles in the preview strip to signal captures are on the way.
   */
  previewsPending?: number
  /** Logo image URL (absolute or path under /public). */
  logo?: string
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
}
