/*Git Add . - Complete Detailed Explanation

 What is git add .?git add . is a command that moves your changes from the Working Directory to the Staging Area. It prepares your files to be committed (saved) in Git.Simple Definition: git add . tells Git, "Take all the changes I made and get them ready to save!"The dot (.) means "everything in the current directory and all subdirectories." Purpose of git add .The main purposes are:
Stage Changes - Prepare files for the next commit
Select What to Save - Choose which changes should be included
Review Before Committing - Create a checkpoint before permanent save
Organize Work - Group related changes together
🔧 How to Use git add .Basic Syntax:
bashgit add .Step-by-Step Process:Step 1: Make Changes to Your Files
bash# Edit existing file
nano index.html

# Create new file
touch about.html

# Delete a file
rm old-file.jsStep 2: Check What Changed
bashgit status

# Output shows:
# Changes not staged for commit:
#   modified:   index.html
# 
# Untracked files:
#   about.htmlStep 3: Stage All Changes
bashgit add .

# All changes are now stagedStep 4: Verify Changes Are Staged
bashgit status

# Output shows:
# Changes to be committed:
#   modified:   index.html
#   new file:   about.htmlThe Three States of Files in GitUnderstanding where files are is crucial:╔════════════════════╗
║ Working Directory  ║  ← Your actual files (where you edit)
║  - index.html      ║
║  - style.css       ║
╚════════════════════╝
         ↓
    git add .
         ↓
╔════════════════════╗
║  Staging Area      ║  ← Prepared for commit (temporary)
║  - index.html      ║
║  - style.css       ║
╚════════════════════╝
         ↓
    git commit
         ↓
╔════════════════════╗
║  Git Repository    ║  ← Permanently saved (history)
║  Commit: a1b2c3d   ║
╚════════════════════╝Real-World Example ScenarioScenario: Building a Websitebash# Step 1: You're working on your website
cd MyWebsite

# Current files:
# index.html
# style.css
# script.js

# Step 2: You make changes
# - Edit index.html (add new section)
# - Edit style.css (change colors)
# - Create contact.html (new page)
# - Delete old-page.html (no longer needed)

# Step 3: Check what changed
git status

# Output:
# On branch main
# Changes not staged for commit:
#   modified:   index.html      ← Red color (not staged)
#   modified:   style.css        ← Red color (not staged)
#   deleted:    old-page.html    ← Red color (not staged)
#
# Untracked files:
#   contact.html                 ← Red color (new file)

# Step 4: Stage all changes
git add .

# Step 5: Check status again
git status

# Output:
# On branch main
# Changes to be committed:
#   modified:   index.html      ← Green color (staged!)
#   modified:   style.css        ← Green color (staged!)
#   new file:   contact.html     ← Green color (staged!)
#   deleted:    old-page.html    ← Green color (staged!)

# Step 6: Now commit
git commit -m "Add contact page and update styling"

# Step 7: Push to GitHub
git push origin main Different Ways to Use git add1. Add All Changes (Current Directory)
bashgit add .

# Adds everything in current directory and subdirectories
# Most commonly used2. Add Specific File
bashgit add index.html

# Only stages index.html3. Add Multiple Specific Files
bashgit add index.html style.css script.js

# Stages only these three files4. Add All Files by Extension
bashgit add *.html

# Stages all HTML filesbashgit add *.js

# Stages all JavaScript files5. Add Entire Directory
bashgit add src/

# Stages everything in src/ folder6. Add All Changes (Entire Repository)
bashgit add -A
# or
git add --all

# Stages everything in entire repository, even if you're in a subdirectory7. Add Modified and Deleted Files Only
bashgit add -u
# or
git add --update

# Stages modified and deleted files, but NOT new files8. Interactive Add
bashgit add -i
# or
git add --interactive

# Opens interactive menu to choose what to stage9. Add Parts of a File (Patch)
bashgit add -p
# or
git add --patch

# Allows you to stage specific parts of a file
# Useful when you have multiple changes in one file📋 What Does git add . Actually Add?It Stages:

New files (untracked files)
Modified files (changed files)
Deleted files (removed files)
Renamed files (moved files)
Example:
bash# Before changes:
MyProject/
├── index.html
├── style.css
└── old.js

# After changes:
MyProject/
├── index.html       (modified)
├── style.css        (modified)
├── new.js           (new file)
└── old.js is deleted

# Running git add . stages ALL of these changes:
git add .

# Now staged:
# - index.html (modified)
# - style.css (modified)
# - new.js (added)
# - old.js (deleted) 
*/