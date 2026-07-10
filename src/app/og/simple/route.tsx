import { readFileSync } from "node:fs"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import {
  MARK_PATH,
  MARK_VIEWBOX_HEIGHT,
  MARK_VIEWBOX_WIDTH,
} from "@/components/smlee-mark"

const pretendardSemiBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Pretendard-SemiBold.otf")
)

const monoplexKRRegular = readFileSync(
  join(process.cwd(), "src/assets/fonts/MonoplexKR-Regular.ttf")
)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get("title")
  const description = searchParams.get("description")

  return new ImageResponse(
    <div tw="flex h-full w-full bg-black text-zinc-50">
      <div tw="absolute inset-y-0 left-12 flex w-px border border-zinc-800" />
      <div tw="absolute inset-y-0 right-12 flex w-px border border-zinc-800" />
      <div tw="absolute inset-x-0 top-12 flex h-px border border-zinc-800" />
      <div tw="absolute inset-x-0 bottom-12 flex h-px border border-zinc-800" />

      <div tw="absolute top-18 left-18 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${MARK_VIEWBOX_WIDTH} ${MARK_VIEWBOX_HEIGHT}`}
          width={150}
          height={40}
        >
          <path fill="#fafafa" d={MARK_PATH} />
        </svg>
      </div>

      <div tw="absolute inset-x-0 top-40 bottom-24 flex flex-col justify-end border-t-2 border-zinc-800">
        <div
          tw="border-t-2 border-b-2 border-zinc-800 px-18"
          style={{
            fontFamily: "Pretendard",
            fontWeight: 600,
            fontSize: 64,
            lineHeight: 1,
            textWrap: "balance",
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </div>

        {description && (
          <div tw="flex flex-col">
            <div
              tw="border-b-2 border-zinc-800 px-18 py-8 text-zinc-400"
              style={{
                fontFamily: "MonoplexKR",
                fontWeight: 400,
                fontSize: 32,
                lineHeight: 1.25,
                textWrap: "balance",
              }}
            >
              {description}
            </div>
          </div>
        )}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Pretendard",
          data: pretendardSemiBold,
          weight: 600,
        },
        {
          name: "MonoplexKR",
          data: monoplexKRRegular,
          weight: 400,
        },
      ],
    }
  )
}
