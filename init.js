/*Git Init - Complete Detailed Explanation
What is git init?
git init is the very first command you use when you want to start tracking a project with Git. It initializes (starts) Git in your project folder, transforming a regular folder into a Git repository.
Simple Definition: git init tells Git, "Hey, start tracking all the changes I make in this folder!"

 Purpose of git init
The main purposes are:

Start Version Control - Begin tracking changes to your files
Create Git Infrastructure - Set up the necessary Git files and folders
Enable Git Commands - Allow you to use other Git commands like add, commit, push
Local Repository Creation - Create a local database to store your project history


 How to Use git init
Basic Syntax:
bashgit init
Step-by-Step Process:
Step 1: Navigate to Your Project Folder
bash# If you already have a folder
cd /path/to/your/project

# Or create a new folder first
mkdir MyNewProject
cd MyNewProject
Step 2: Run git init
bashgit init
Step 3: See the Output
bash# You'll see something like:
Initialized empty Git repository in /Users/amit/MyNewProject/.git/
```

---

##  **What Happens When You Run `git init`?**

### **1. Creates a Hidden `.git` Folder**

When you run `git init`, Git creates a hidden folder called `.git` in your project directory.
```
MyProject/
├── .git/              ← This folder is created by git init
│   ├── config
│   ├── objects/
│   ├── refs/
│   ├── HEAD
│   └── ... (other Git files)
├── index.html
├── style.css
└── script.js
2. What's Inside the .git Folder?
The .git folder contains everything Git needs to track your project:

config - Repository configuration settings
objects/ - All your file contents and commits (Git's database)
refs/ - References to commits (branches, tags)
HEAD - Points to the current branch you're on
hooks/ - Scripts that run automatically on certain Git events
info/ - Additional repository information
description - Description of the repository
*/