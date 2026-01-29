# github-reminder-lab

This repository is a small lab project designed **specifically for GitHub reminder / notification workflow tasks** in MCPMark.

It contains:

- A minimal Node.js project under `src/` (just enough to open pull requests against).
- One or more GitHub Actions workflows under `.github/workflows/` that are responsible for:
  - Automatically adding reminder labels to issues.
  - Posting reminder comments on issues or pull requests.
  - Demonstrating how maintainers can be notified when important events happen.

You can use this repository as a controlled environment to:

- Practice designing GitHub Actions workflows for reminders/notifications.
- Create issues and pull requests whose titles start with `Remind:` and then
  verify whether the reminder workflows behave as expected.

> Note: This repository is intentionally simple so that verification scripts
> can reliably check workflow side effects (labels, comments, workflow runs)
> without being affected by unrelated project complexity.


