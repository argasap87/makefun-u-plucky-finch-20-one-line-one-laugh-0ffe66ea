# One Line, One Laugh

[![make.fun](https://make.fun/badge/competition/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![make.fun entry](https://make.fun/badge/entry/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## The line

> My phone's Face ID flinches every morning.

42 characters, one line, no setup needed: your phone doesn't fail to recognise you, it visibly recoils — the familiar unlock feature turned into a tiny daily betrayal, with the punchline landing on the last word.

## How it works

`main.ts` (Node 22 stdlib only) guards the line against the 1–200 character gate, then writes exactly that line to `MAKEFUN_OUTPUT_DIR ?? "/output"` as `entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
