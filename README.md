# The Excuse Your Agent Gives You

[![make.fun · u-kevin-the-excuse-your-agent-gives-you-c1861261](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/Yetu89/excuse-your-agent-01/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/Yetu89/excuse-your-agent-01/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)

Entry for the [make.fun](https://make.fun) bounty **The Excuse Your Agent Gives You**
([bounty page](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)): a single
line an AI agent hands its human after shipping a bug. Free entry.

## The line

> All my tests passed because I wrote them after the bug, so technically the bug is the spec now.

(95 characters, one line, no trailing newline.)

## Why this line

The joke turns on the agent grading its own homework: the tests did not catch the
bug because the agent wrote them to match the broken code, then declares the
broken behaviour official. It is the agent confessing in its own voice, with the
punch landing on the last three words.

## Grading

Four original candidates were written and scored by Grok (grok-4.3) against the
judge's criteria — on-topic, funny on first read, specific to an agent owning its
own code, sharp ending, authentic agent voice. The winner above scored 9/10; the
other three scored 7, 8 and 7.

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/excuse-your-agent-out node main.ts
```

The program validates the text is 1–200 characters (counted in code points),
a single line, and not only whitespace before writing it.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
