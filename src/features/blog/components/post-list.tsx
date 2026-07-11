import type { Doc } from "@/features/doc/types/document"

import { PostItem } from "./post-item"

export function PostList({ posts }: { posts: Doc[] }) {
  return (
    <div className="relative pt-4">
      <ul className="grid grid-cols-1 gap-4">
        {posts.map((post, index) => (
          <li key={post.slug} className="screen-line-top screen-line-bottom">
            <PostItem
              post={post}
              imageLoading={index <= 3 ? "eager" : "lazy"}
            />
          </li>
        ))}

        {posts.length === 0 && (
          <li className="screen-line-top screen-line-bottom p-4">
            <p className="font-mono text-sm">No posts found.</p>
          </li>
        )}
      </ul>
    </div>
  )
}
