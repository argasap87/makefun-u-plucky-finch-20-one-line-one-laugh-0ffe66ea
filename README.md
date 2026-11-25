# One Line, One Laugh

[![make.fun](https://make.fun/badge/competition/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![make.fun entry](https://make.fun/badge/entry/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## The line

> Therapist set boundaries: I only answer if you end your sentence with a question mark.

86 characters, one line, no setup needed: the therapist's boundary is itself a grammar rule, and every statement you make to them becomes a question — therapy as a punctuation test.

## How it works

`main.ts` (Node 22 stdlib only) guards the line against the 1–200 character gate, then writes exactly that line to `MAKEFUN_OUTPUT_DIR ?? "/output"` as `entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
