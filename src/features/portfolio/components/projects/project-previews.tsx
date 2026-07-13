import { ImageIcon } from "lucide-react"

import { ImageZoom } from "@/components/kibo-ui/image-zoom"

import type { ProjectPreview } from "../../types/projects"

export function ProjectPreviewsPending({ count }: { count: number }) {
  return (
    <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 scroll-px-4">
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className="w-56 shrink-0 snap-start sm:w-64">
          <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-1.5 rounded-lg bg-muted text-muted-foreground">
            <ImageIcon className="size-5 opacity-60" />
            {index === 0 && <span className="text-xs">화면 준비 중</span>}
            <div className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ProjectPreviews({ previews }: { previews: ProjectPreview[] }) {
  return (
    <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 scroll-px-4">
      {previews.map((preview) => (
        <li key={preview.src} className="w-56 shrink-0 snap-start sm:w-64">
          <figure>
            <div className="relative">
              <ImageZoom zoomImg={{ src: preview.src, alt: preview.alt }}>
                <img
                  src={preview.src}
                  alt={preview.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full rounded-lg bg-muted object-cover object-top"
                />
              </ImageZoom>

              <div className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
            </div>

            {preview.caption && (
              <figcaption className="mt-1.5 truncate text-xs text-muted-foreground">
                {preview.caption}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  )
}
