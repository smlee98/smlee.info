"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Doc } from "@/features/doc/types/document"

import { useFilteredPosts } from "../hooks/use-filtered-posts"
import { useProjectFilter } from "../hooks/use-project-filter"
import { PostList } from "./post-list"

const ALL = "all"

export function PostListWithSearch({ posts }: { posts: Doc[] }) {
  const { project, setProject } = useProjectFilter()
  const searchedPosts = useFilteredPosts(posts)

  const projects = Array.from(
    new Set(
      posts
        .map((post) => post.metadata.project)
        .filter((name): name is string => Boolean(name))
    )
  )

  const filteredPosts = project
    ? searchedPosts.filter((post) => post.metadata.project === project)
    : searchedPosts

  return (
    <>
      {projects.length > 0 && (
        <div className="screen-line-bottom p-2">
          <Tabs
            value={project ?? ALL}
            onValueChange={(value) => {
              setProject(value === ALL ? null : value)
            }}
          >
            <TabsList>
              <TabsTrigger value={ALL}>전체</TabsTrigger>
              {projects.map((name) => (
                <TabsTrigger key={name} value={name}>
                  {name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}

      <PostList posts={filteredPosts} />
    </>
  )
}
