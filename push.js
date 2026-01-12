/*Git Push - Complete Detailed Explanation

What is git push?
git push is the command used to upload your Local Repository content (the changes you have committed on your computer) to a Remote Repository (like GitHub, GitLab, or Bitbucket).

Simple Definition: git push tells Git, "Take the snapshots I saved on my computer and upload them to my project in the cloud!"

Purpose of git push
Backup: Saves your code safely in the cloud so you don't lose it if your computer crashes.

Collaboration: Shares your updates with teammates so they can see and use your code.

Synchronization: Allows you to work on the same project from different computers.

Deployment: Sends your code to live servers to update a website or application.

🔧 How to Use git push
Step-by-Step Process:
Step 1: Commit Your Changes You cannot push changes that haven't been committed yet.

Bash

git add .
git commit -m "Describe your changes here"
Step 2: Check Your Remote Connection Ensure your local folder knows where the GitHub repository is.

Bash

git remote -v
# Should show your GitHub URL next to 'origin'
Step 3: Execute the Push

Bash

git push origin main
(Note: origin is the default name for your remote server, and main is your branch name.)

The Three States to Remote Flow
Understanding the data flow is key to mastering Git:

Staging Area: git add . (Preparing the files)

Local Repository: git commit (Saving the version locally)

Remote Repository: git push (Uploading the version to GitHub)

 Different Ways to Use git push
1. Push and Set Default (Upstream)
Bash

git push -u origin main
The -u flag links your local branch to the remote branch. After doing this once, you can just type git push in the future.

2. Push All Branches
Bash

git push --all origin
Uploads every branch you have created to the remote server.

3. Force Push (Use with Caution!)
Bash

git push --force origin main
This overwrites the code on GitHub with your local code. Warning: This can delete your teammates' work if not used carefully.

4. Delete a Remote Branch
Bash

git push origin --delete feature-branch-name
This removes the branch from the GitHub server.
*/