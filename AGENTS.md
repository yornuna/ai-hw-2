<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Process Logging

Every time you run a process, you **must** append an entry to `logs/agent.log`. This is mandatory — do not skip logging even for short or failed processes.

**Log file:** `logs/agent.log` — create `logs/` if it does not exist.

**Format:**

```
YYYY-MM-DD - HH:MM:SS - Duration : Xs (or Xms if under 1 second)
```

**Example:**

```
2026-05-14 - 09:42:17 - Duration : 3s
```

**Rules:**

1. Append one entry per process run, immediately after it completes or fails.
2. Duration = wall-clock time including tool calls.
3. Never delete or overwrite previous entries — always append.

**Shell snippet:**

```bash
START=$(python3 -c "import time; print(int(time.time()*1000))")
# ... run your process here ...
END=$(python3 -c "import time; print(int(time.time()*1000))")
DURATION=$(( END - START ))

mkdir -p logs
echo "$(date +%Y-%m-%d) - $(date +%H:%M:%S) - Duration : ${DURATION}ms" >> logs/agent.log
```
