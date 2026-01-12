// Git Commands - Complete Guide
// Git is a version control system that tracks and manages your code. Let's understand each command in detail.

// git init - Initialize Repository
// What Is It?
// The git init command converts your project folder into a Git repository. This command starts Git tracking.
// What Happens?

// A hidden .git folder is created in your project directory
// This .git folder stores all Git history and information
// Only after this can Git track your changes

// When to Use?

// When you're starting a new project
// When you want to track an existing project with Git

// Command:
// bashgit init
// Example Scenario:
// bash# Let's say you created a folder
// mkdir MyProject
// cd MyProject

// # Now make it a Git repository
// git init

// # Output: Initialized empty Git repository in /path/to/MyProject/.git/
// What Happens in the Background?

// Git creates a local database
// This database will track all your changes, commits, and branches
// No commits yet, just tracking is ready


//  git add . - Stage Changes
// What Is It?
// The git add . command puts your changes into the staging area. The staging area is a temporary area where changes go before being committed.
// Working Directory → Staging Area → Repository
// There are three stages:

// Working Directory: Where you edit files
// Staging Area: Where changes are ready to be committed
// Repository: Where committed changes are permanently saved

// What Does git add . Mean?

// The . (dot) means "all files in the current directory"
// All new, modified, and deleted files will go to the staging area

// Commands:
// bashgit add .              # Add all files
// git add filename.js    # Add only one specific file
// git add *.js           # Add all .js files
// git add folder/        # Add entire folder
// Example Scenario:
// bash# Let's say you created three files
// touch index.html
// touch style.css
// touch script.js

// # Now stage all files
// git add .

// # Or add individual files
// git add index.html
// git add style.css script.js
// Why Is the Staging Area Important?

// You can choose which files to commit
// Prevents accidentally committing unwanted files
// You can organize your changes
// You can review before committing

// Checking Status:
// bash# See which files are staged
// git status

// # Output example:
// # Changes to be committed:
// #   (use "git restore --staged <file>..." to unstage)
// #         new file:   index.html
// #         new file:   style.css

//  git commit - Save Changes
// What Is It?
// The git commit command permanently saves your staged changes in Git history. Each commit is a snapshot of your project.
// Commit = Checkpoint
// A commit is like a checkpoint. Just like you save in a game, a commit saves your code.
// Command:
// bashgit commit -m "Your message here"
// Why Are Messages Important?

// You'll remember what changes were made later
// Team members can understand what changed
// History remains clear and organized