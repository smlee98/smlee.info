import Link from "next/link"
import { BookOpenIcon } from "lucide-react"

import type { Doc } from "@/features/doc/types/document"

/**
 * Series overview box shown at the top of a post detail page.
 * Lists every post that shares the current post's `project`, ordered by
 * `projectOrder`, with the current post highlighted. Renders nothing for
 * standalone posts or single-post series.
 */
export function PostSeriesNav({
  current,
  posts,
}: {
  current: Doc
  posts: Doc[]
}) {
  const { project } = current.metadata
  if (!project) return null

  const seriesPosts = posts
    .filter(
      (post) =>
        post.metadata.project === project && post.metadata.projectOrder != null
    )
    .sort(
      (a, b) => (a.metadata.projectOrder ?? 0) - (b.metadata.projectOrder ?? 0)
    )

  if (seriesPosts.length < 2) return null

  return (
    <nav
      className="rounded-xl border border-line p-4 sm:p-5"
      aria-label={`${project} 시리즈`}
    >
      <p className="flex items-center gap-2 font-medium">
        <BookOpenIcon className="size-4 shrink-0 text-info" aria-hidden />
        {project} 시리즈
        <span className="text-sm font-normal text-muted-foreground">
          ({seriesPosts.length}편)
        </span>
      </p>

      <ol className="mt-3 space-y-2">
        {seriesPosts.map((post) => {
          const isCurrent = post.slug === current.slug

          return (
            <li key={post.slug} className="flex gap-2 text-sm leading-relaxed">
              <span
                className={
                  isCurrent
                    ? "shrink-0 font-semibold text-info"
                    : "shrink-0 text-muted-foreground"
                }
              >
                {post.metadata.projectOrder}.
              </span>
              {isCurrent ? (
                <span className="font-semibold text-info" aria-current="page">
                  {post.metadata.title}
                </span>
              ) : (
                <Link
                  className="text-foreground/80 hover:text-foreground hover:underline"
                  href={`/blog/${post.slug}`}
                >
                  {post.metadata.title}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
