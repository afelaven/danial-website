// Pixel cat sprite data. Cats face RIGHT; the engine flips via CSS for left.
// Grids are 30x20 strings; each char is a palette key, "." is transparent.

export const SPRITE_W = 30
export const SPRITE_H = 20

export type PaletteName = "orange" | "tabby"

const PALETTES: Record<PaletteName, Record<string, string>> = {
  orange: {
    K: "#3f2a17", // outline
    B: "#f6a54b", // fur
    S: "#d97e2e", // stripes / shade
    H: "#ffc978", // highlight
    L: "#fff3dd", // muzzle / chest / paws
    P: "#f4939c", // nose / inner ears
    E: "#2c2018", // eye outline + pupil
    G: "#74c04c", // iris
    W: "#ffffff", // eye shine
  },
  tabby: {
    K: "#362a1e",
    B: "#a3907a",
    S: "#6b5744",
    H: "#c2b09a",
    L: "#f4e9d8",
    P: "#d98a80",
    E: "#26201a",
    G: "#9db24f",
    W: "#ffffff",
  },
}

const BODY_STAND = [
  "..............................",
  "..................K......K....",
  ".................KPK....KPK...",
  ".................KBBK..KBBK...",
  "................KHHBBBBBBBK...",
  "...............KBHHBBBBBBBBK..",
  "...............KBBBBBBBBBBBK..",
  "...............KBBBBBBBBBBBK..",
  "...............KBBBLLLLLLBBK..",
  "...KKKKKKKKKKKKKBBBLLPPLLBBK..",
  "..KBHHHHHHHHHBBBKBBLLLLLLBK...",
  "..KBBSSBBSSBBBBBBKBLLLLLBK....",
  "..KBBSSBBSSBBBBBBKBBBBBBK.....",
  "..KBBBBBBBBBBBBBBBBBBBBK......",
  "..KBLLLLLLLLLLLLLLLBBBK.......",
  "...KKKKKKKKKKKKKKKKKK.........",
]

const LEGS_STAND = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  "....BBB.........BBB...........",
  "....KBK..SS....SS.KBK.........",
  "....KBK..SS....SS.KBK.........",
  "....KBK..SS....SS.KBK.........",
  "....KLK...........KLK.........",
  "....KKK...........KKK.........",
]

const LEGS_W1 = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  "....BBB.........BBB...........",
  "...KBK....SS...SS..KBK........",
  "..KBK.....SS...SS...KBK.......",
  "..KBK......S...S....KBK.......",
  "..KLK...............KLK.......",
  "..KKK...............KKK.......",
]

const LEGS_WPASS = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  "....BBB.........BBB...........",
  "....KBK...S....S..KBK.........",
  ".....KBK..S....S..KBK.........",
  ".....KBK.........KBK..........",
  ".....KLK.........KLK..........",
  ".....KKK.........KKK..........",
]

const LEGS_W3 = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  "....BBB.........BBB...........",
  ".....KBK..SS...SS.KBK.........",
  "......KBK.SS...SS.KBK.........",
  ".......KBK.S...S.KBK..........",
  ".......KLK.......KLK..........",
  ".......KKK.......KKK..........",
]

const LEGS_RUN1 = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  "....BBB.........BBB...........",
  "..KBK.....SS...SS....KBK......",
  ".KBK.......SS.SS......KBK.....",
  ".KBK..................KBK.....",
  ".KLK..................KLK.....",
  ".KKK..................KKK.....",
]

const LEGS_RUN2 = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  "....BBB.........BBB...........",
  "......KBK..S..S..KBK..........",
  ".......KBBK....KBBK...........",
  "........KBK....KBK............",
  "........KLK....KLK............",
  "........KKK....KKK............",
]

const TAIL_UP = [
  "", "", "",
  ".KK...........................",
  "KBBK..........................",
  "KBBK..........................",
  "KBBK..........................",
  ".KBBK.........................",
  "..KBBK........................",
  "...KBB........................",
]

const TAIL_MID = [
  "", "", "", "", "",
  ".KK...........................",
  "KBBK..........................",
  ".KBBK.........................",
  "..KBBK........................",
  "...KBBK.......................",
  "....KB........................",
]

const EYES_OPEN = [
  "", "", "", "", "", "",
  "..................EW...EW.....",
  "..................EG...EG.....",
  "..................EE...EE.....",
]

const EYES_BLINK = [
  "", "", "", "", "", "", "",
  "..................KK...KK.....",
]

const BODY_SIT = [
  "..............................",
  "..................K......K....",
  ".................KPK....KPK...",
  ".................KBBK..KBBK...",
  "................KHHBBBBBBBK...",
  "...............KBHHBBBBBBBBK..",
  "...............KBBBBBBBBBBBK..",
  "...............KBBBBBBBBBBBK..",
  "...............KBBBLLLLLLBBK..",
  "...............KBBBLLPPLLBBK..",
  "................KBBLLLLLLBK...",
  ".................KBLLLBK......",
  "............KKKKKKBLLLBK......",
  "..........KKBBBBBKBLLLBK......",
  "........KKBBBBBBBKBLLLBK......",
  ".......KBBSSBBSSBKBBBBK.......",
  "......KBBSSBBSSBBKKBKSS.......",
  "......KBBBBBBBBBBKKBKSS.......",
  "......KBBBBBBBBBBKKLKS........",
  ".......KKKKKKKKKKKKKKK........",
]

const TAIL_SIT_WRAP = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  ".KBBBK........................",
  "..KKKKK.......................",
]

const TAIL_SIT_UP = [
  "", "", "", "", "", "", "", "", "", "",
  "..KK..........................",
  ".KBBK.........................",
  ".KBBK.........................",
  ".KBK..........................",
  ".KBK..........................",
  "..KBK.........................",
  "...KBK........................",
  "....KB........................",
]

const SLEEP_1 = [
  "", "", "", "", "", "", "", "", "", "",
  "..................KK..KK......",
  "......KKKKKKKKKKKKBBKKBBK.....",
  "....KKBBBBBBBBBBBBBBBBBBK.....",
  "...KBBBBBBBBBBBBBBKKBBKKBK....",
  "...KBBSSBBSSBBSSBBBLLLLLBK....",
  "..KBBBBBBBBBBBBBBBLLPPLLBK....",
  "..KBBBBBBBBBBBBBBBBLLLLBBK....",
  "..KBSSSBBBBBBBBBBBBBBBBBK.....",
  "...KBSSSSSSSSSSSSSSBBBBK......",
  "....KKKKKKKKKKKKKKKKKKK.......",
]

const SLEEP_2 = [
  "", "", "", "", "", "", "", "", "", "", "",
  "..................KK..KK......",
  "......KKKKKKKKKKKKBBKKBBK.....",
  "...KKBBBBBBBBBBBBBKKBBKKBK....",
  "...KBBSSBBSSBBSSBBBLLLLLBK....",
  "..KBBBBBBBBBBBBBBBLLPPLLBK....",
  "..KBBBBBBBBBBBBBBBBLLLLBBK....",
  "..KBSSSBBBBBBBBBBBBBBBBBK.....",
  "...KBSSSSSSSSSSSSSSBBBBK......",
  "....KKKKKKKKKKKKKKKKKKK.......",
]

const STRETCH = [
  "..............................",
  "..............................",
  ".KK...........................",
  "KBBK..........................",
  "KBBK..........................",
  ".KBBK..KKK....................",
  "..KBK.KBBBK...................",
  "...K.KBHHBBK..................",
  ".....KBBSSBBK.......K......K..",
  ".....KBBSSBBBK.....KPK....KPK.",
  ".....KBBBBBBBBK....KBBK..KBBK.",
  ".....KBBBBBBBBBK..KHHBBBBBBK..",
  ".....KBBK..KBBBBKKBBBBBBBBBBK.",
  ".....KBBK...KBBBBBBBBEWBBEWBK.",
  ".....KBBK....KBBBBBBBLLLLLLBK.",
  ".....KBBK......KKBBLLLPPLLBK..",
  ".....KBBK........KBBLLLLLLK...",
  ".....KBBK.........KBBKKKKK....",
  ".....KLBK.........KLBK........",
  ".....KKKK.........KKKK........",
]

const FRAME_LAYERS = {
  stand: [BODY_STAND, LEGS_STAND, TAIL_MID, EYES_OPEN],
  "stand-blink": [BODY_STAND, LEGS_STAND, TAIL_MID, EYES_BLINK],
  "stand-tailup": [BODY_STAND, LEGS_STAND, TAIL_UP, EYES_OPEN],
  "walk-1": [BODY_STAND, LEGS_W1, TAIL_MID, EYES_OPEN],
  "walk-pass": [BODY_STAND, LEGS_WPASS, TAIL_UP, EYES_OPEN],
  "walk-3": [BODY_STAND, LEGS_W3, TAIL_MID, EYES_OPEN],
  "run-1": [BODY_STAND, LEGS_RUN1, TAIL_MID, EYES_OPEN],
  "run-2": [BODY_STAND, LEGS_RUN2, TAIL_UP, EYES_OPEN],
  "sit-wrap": [BODY_SIT, TAIL_SIT_WRAP, EYES_OPEN],
  "sit-blink": [BODY_SIT, TAIL_SIT_WRAP, EYES_BLINK],
  "sit-tailup": [BODY_SIT, TAIL_SIT_UP, EYES_OPEN],
  "sleep-1": [SLEEP_1],
  "sleep-2": [SLEEP_2],
  stretch: [STRETCH],
} satisfies Record<string, string[][]>

export type FrameKey = keyof typeof FRAME_LAYERS

export function renderFrames(palette: PaletteName, scale: number): Record<FrameKey, HTMLCanvasElement> {
  const colors = PALETTES[palette]
  const frames = {} as Record<FrameKey, HTMLCanvasElement>

  for (const key of Object.keys(FRAME_LAYERS) as FrameKey[]) {
    const canvas = document.createElement("canvas")
    canvas.width = SPRITE_W * scale
    canvas.height = SPRITE_H * scale
    const ctx = canvas.getContext("2d")
    if (!ctx) continue

    for (const layer of FRAME_LAYERS[key]) {
      for (let y = 0; y < layer.length; y++) {
        const row = layer[y]
        for (let x = 0; x < row.length && x < SPRITE_W; x++) {
          const color = colors[row[x]]
          if (!color) continue
          ctx.fillStyle = color
          ctx.fillRect(x * scale, y * scale, scale, scale)
        }
      }
    }
    frames[key] = canvas
  }

  return frames
}
