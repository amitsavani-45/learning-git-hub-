/*
## What is `git status`?

`git status` is a **Git command** that shows the **current state of your working directory and staging area**.
It tells you **what’s happening in your project right now**.

---

## Why is `git status` used?

It helps you know:

* Which files have been **modified**
* Which files are **staged** (ready to commit)
* Which files are **untracked** (not added to Git yet)
* Whether your branch is **up to date** with the remote repository

Think of it as a **project health check** 🩺

---

## Basic Command

```bash
git status
```

---

## What Information Does `git status` Show?

### 1. Branch Information

```text
On branch main
Your branch is up to date with 'origin/main'.
```

✔ Shows which branch you’re on
✔ Tells if your branch is synced with remote

---

### 2. Changes to Be Committed (Staged Files)

```text
Changes to be committed:
  modified: index.html
```

✔ Files added using `git add`
✔ Ready for `git commit`

---

### 3. Changes Not Staged for Commit

```text
Changes not staged for commit:
  modified: app.js
```

✔ Files changed but **not added**
✔ Use `git add` to stage them

---

### 4. Untracked Files

```text
Untracked files:
  newfile.txt
```

✔ Files Git is not tracking
✔ Use `git add newfile.txt` to track them

---

## Common File States in Git

| State     | Meaning                      |
| --------- | ---------------------------- |
| Untracked | New file, not tracked by Git |
| Modified  | File changed                 |
| Staged    | File added, ready to commit  |
| Committed | Saved in Git history         |

*/

