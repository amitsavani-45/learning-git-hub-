/*GitHub Pull Requests - Detailed Guide

What is a Pull Request?
A pull request is a mechanism for a developer to notify team members that they have completed a feature or fix. It's called a "pull request" because you're asking the repository maintainers to "pull" your changes into their codebase.
Think of it like submitting a draft of your work for peer review before it becomes official. You're saying "Here are my changes - please review them and if they look good, merge them into the main project."
The Complete Pull Request Workflow

1. Creating a Branch
Before making changes, you create a separate branch from the main codebase:
git checkout -b feature/new-login-page
This isolates your work so you don't affect the main code while developing.

2. Making Changes
You write your code, fix bugs, or add features on this branch. You make commits as you progress:
git add .
git commit -m "Add user authentication to login page"
git commit -m "Fix validation errors"

3. Pushing to GitHub
Once your work is ready, you push your branch to GitHub:
git push origin feature/new-login-page

4. Opening the Pull Request
On GitHub, you click "New Pull Request" and select:

Base branch: Where you want your changes merged (usually main or develop)
Compare branch: Your feature branch with the changes

You then fill out:

Title: Brief description of what the PR does
Description: Detailed explanation including what changed, why, and any relevant context
Reviewers: People you want to review your code
Labels: Categories like "bug fix", "enhancement", "documentation"
Assignees: Who's responsible for the PR

5. Code Review Process
Reviewers examine your changes and can:

Comment on specific lines of code with suggestions or questions
Request changes if something needs to be fixed
Approve the PR if everything looks good
Start discussions about implementation approaches

6. Making Updates
Based on feedback, you make additional commits to the same branch:
git commit -m "Address review comments - improve error handling"
git push origin feature/new-login-page
These new commits automatically appear in the existing pull request.

7. Merging
Once approved, the PR can be merged using different strategies:

Merge commit: Keeps all commits and creates a merge commit
Squash and merge: Combines all commits into one clean commit
Rebase and merge: Replays commits on top of the base branch

8. Cleanup
After merging, the feature branch is typically deleted to keep the repository clean.
Key Components of a Pull Request
*/
