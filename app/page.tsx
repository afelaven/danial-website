import { Portfolio } from "@/components/portfolio/portfolio"
import { CustomCursor } from "@/components/portfolio/custom-cursor"
import { PixelCats } from "@/components/portfolio/pixel-cats"

export default function Page() {
  return (
    <>
      <CustomCursor />
      <PixelCats />
      <Portfolio />
    </>
  )
}
