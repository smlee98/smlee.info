import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/base/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { GitHubIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export function NavItemGitHub() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            className="gap-1.5 border-none px-1.5"
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={
              <a
                href={addQueryParams(SOCIAL.github.href, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
                <span className="sr-only">GitHub Profile</span>
              </a>
            }
          />
        }
      />
      <TooltipContent>GitHub</TooltipContent>
    </Tooltip>
  )
}
