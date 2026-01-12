/*Git Commit - Complete Detailed Explanation

 What is git commit?git commit is a command that permanently saves your staged changes to the Git repository. It creates a snapshot (checkpoint) of your project at that moment in time.Simple Definition: git commit tells Git, "Save these changes permanently in the project history with a description of what I did!"Think of it like saving your game progress - you can always come back to this exact point later.🎯 Purpose of git commitThe main purposes are:
Create Permanent Record - Save changes permanently in Git history
Document Changes - Record what was changed and why
Enable Time Travel - Allow reverting to any previous state
Track Progress - Show evolution of the project over time
Facilitate Collaboration - Help team members understand changes
🔧 How to Use git commitBasic Syntax:
bashgit commit -m "Your commit message here"Step-by-Step Process:Step 1: Make Changes
bash# Edit files
nano index.htmlStep 2: Stage Changes
bashgit add .Step 3: Commit with Message
bashgit commit -m "Add homepage header section"Step 4: Verify Commit
bashgit log
# Shows your commit in the history The Journey from Edit to CommitWorking Directory
   └── index.html (you edit this)
   
         ↓  You make changes
         
2️⃣ Working Directory (Modified)
   └── index.html (changed, not saved in Git)
   
         ↓  git add .
         
3️⃣ Staging Area
   └── index.html (ready to be committed)
   
         ↓  git commit -m "message"
         
4️⃣ Repository (Git History)
   └── Commit abc123: "Add homepage header"
       └── index.html (permanently saved)
       
         ↓  git push origin main
         
5️⃣ Remote Repository (GitHub)
   └── Commit abc123 is now online Real-World Example ScenarioScenario: Building a Login Featurebash# Day 1: Start working
cd MyWebsite

# Create login page
touch login.html
nano login.html
# ... write HTML code ...

# Stage the file
git add login.html

# Commit
git commit -m "Add login page HTML structure"

# Output:
# [main 7f3a891] Add login page HTML structure
#  1 file changed, 45 insertions(+)
#  create mode 100644 login.html


# Day 2: Add styling
nano login.css
# ... write CSS ...

git add login.css
git commit -m "Add login page styling"

# Output:
# [main 8e4b9a2] Add login page styling
#  1 file changed, 28 insertions(+)
#  create mode 100644 login.css


# Day 3: Add JavaScript validation
nano login.js
# ... write JavaScript ...

git add login.js
git commit -m "Add form validation to login page"

# Output:
# [main 9f5c0b3] Add form validation to login page
#  1 file changed, 52 insertions(+)
#  create mode 100644 login.js


# Check commit history
git log --oneline

# Output:
# 9f5c0b3 Add form validation to login page
# 8e4b9a2 Add login page styling
# 7f3a891 Add login page HTML structure
# 6d2a780 Initial commit Commit Messages - The Most Important PartWhy Are Commit Messages Important?
Future You - You'll forget what you did in 2 weeks
Team Members - Others need to understand your changes
Code Review - Makes reviewing easier
Bug Tracking - Find when bugs were introduced
Documentation - Acts as project changelog
Anatomy of a Good Commit Messagebashgit commit -m "Type: Brief description (50 chars max)

Optional detailed explanation of what and why.
Can be multiple paragraphs.

- Bullet points are fine too
- Explain the problem that this commit solves
- Reference issue numbers if applicable

Fixes #123"
*/