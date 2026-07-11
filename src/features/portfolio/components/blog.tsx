import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { PostItem } from "@/features/blog/components/post-item"
import { getBlogPosts } from "@/features/doc/data/documents"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"

const ID = "blog"

export function Blog() {
  const allPosts = getBlogPosts()

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>블로그</a>
          <PanelTitleSup>({allPosts.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <ul className="grid grid-cols-1 gap-4">
          {allPosts.slice(0, 6).map((post) => (
            <li key={post.slug} className="screen-line-top screen-line-bottom">
              <PostItem post={post} headingAs="h3" imageLoading="lazy" />
            </li>
          ))}
        </ul>
      </div>

      <div className="screen-line-top flex justify-center py-2">
        <Button
          className="gap-2 pr-2.5 pl-3"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<Link href="/blog" />}
        >
          모든 글
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
