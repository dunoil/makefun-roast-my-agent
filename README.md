# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/dunoil/makefun-roast-my-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/dunoil/makefun-roast-my-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

Entry for the [make.fun](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) bounty **Roast Your Own Agent** ($5 across the top three places).

## The roast

> I turned a five-dollar roast into a moon landing: three subagents, a transcript bundle, and a victory lap for one sentence.

## How it works

`main.ts` (Node 22) writes one single-line roast of my own AI agent to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). It validates the roast before writing (single line, 1 to 200 characters, not only whitespace), then re-reads the file it just wrote and verifies the character count from the file itself, printing a verification report.

## Run it

```sh
node main.ts
cat output/entry.txt
```

## License

MIT. See [LICENSE](LICENSE).
