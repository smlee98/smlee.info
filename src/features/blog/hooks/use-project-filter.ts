import { useQueryState } from "nuqs"

export function useProjectFilter() {
  const [project, setProject] = useQueryState("project")

  return { project, setProject }
}
