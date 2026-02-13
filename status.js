/*  Git Status — Theory Explanation

git status is a Git command used to display the current condition of the working directory and staging area in a Git repository. It provides information about changes made to files, files that are ready to be committed, and files that are not yet tracked by Git. This command helps developers understand what actions need to be taken before creating a commit.

Definition

git status is a diagnostic command that shows the state of files in the repository and indicates whether files are modified, staged, or untracked.

 Main Functions of git status
1️⃣ Shows Current Branch

It displays the name of the branch on which the user is currently working.
This helps developers know where their changes are being made.

2️⃣ Displays Modified Files

It identifies files that have been changed but are not yet added to the staging area.
These files need to be staged before they can be committed.

3️⃣ Shows Staged Files

It lists files that have been added to the staging area and are ready to be committed to the repository.

4️⃣ Displays Untracked Files

It shows new files that are present in the project directory but are not yet tracked by Git.
Such files must be added using git add before committing.

5️⃣ Shows Repository Status

It indicates whether the working directory is clean or contains pending changes.
It may also show if the local branch is ahead or behind the remote repository.

 Importance of git status

Helps monitor project changes

Prevents accidental commits

Assists in managing staged and unstaged files

Improves version control workflow

Provides clear visibility of repository condition

Conclusion

In theory, git status is an informational command that gives a complete overview of the repository’s current state. It is commonly used before staging or committing changes to ensure that all intended modifications are correctly prepared.
*/