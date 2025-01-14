The collaborative process in Git and GitHub involves multiple developers working together on a shared project. Here's a breakdown of how this process typically works:
### Recomended VSCode Extension: [Gitless](https://marketplace.visualstudio.com/items?itemName=maattdd.gitless)

### 1. **Set Up the Repository** without loosing the git tracking history
   - **Create a Repository on GitHub**: One person (usually the project owner) creates a repository on GitHub. This is the central location where the code will be stored.
   - **Clone the Repository**: Developers who want to contribute clone the repository to their local machines using the command:
     ```bash
     git clone https://github.com/Loukass23/spike-app.git
     ```
   - Alternatively, GitHub has a "Fork" button on the repository page to make a personal copy of a repository without cloning it locally. This is often useful for contributing to open-source projects.

### 2. **Branching and Development**
   - **Create a Branch**: When working on new features or bug fixes, developers typically create a new branch to keep changes isolated from the main codebase (often called `main` or `master`).
     ```bash
     git checkout -b feature-branch-name
     ```
   - **Work Locally**: Developers make changes to the code on their local machine within this branch. This could include writing new code, fixing bugs, or updating documentation.

### 3. **Committing Changes**
   - **Stage and Commit Changes**: After making changes, developers need to stage the changes and commit them locally:
     ```bash
     git add .
     git commit -m "Descriptive message about the changes"
     ```
   - **Push the Changes**: Once changes are committed locally, they are pushed to GitHub:
     ```bash
     git push origin feature-branch-name
     ```

### 4. **Pull Requests**
   - **Create a Pull Request (PR)**: After pushing the changes, the developer can open a pull request on GitHub to propose merging their feature branch into the main branch. A PR includes a description of the changes and any relevant context.
   - **Review and Discuss**: Other developers (and sometimes project maintainers) review the changes. They can comment on the PR, suggest improvements, and request changes. This review process ensures the code meets the project's standards.

### 5. **Merging the Pull Request**
   - **Merge the PR**: After the pull request is approved, it is merged into the main branch. This can be done by the PR creator or a project maintainer.
     - There are three common merge strategies:
       - **Merge Commit**: Combines the feature branch into the main branch with a merge commit.
       - **Squash and Merge**: Combines all the commits in the feature branch into a single commit before merging.
       - **Rebase and Merge**: Re-applies the changes from the feature branch on top of the main branch, preserving a linear commit history.

### 6. **Pulling Changes**
   - **Sync the Local Repository**: To keep the local repository up to date with the latest changes from the main branch, developers regularly pull the changes:
     ```bash
     git pull origin main
     ```

### 7. **Conflict Resolution**
   - **Handle Merge Conflicts**: Sometimes, multiple developers might make changes to the same part of the code. If this happens, Git will flag a merge conflict. The developer must manually resolve these conflicts, test the code, and commit the resolved changes.

### 8. **Repeat**
   - Developers continue the cycle of creating branches, committing changes, pushing to GitHub, opening pull requests, reviewing code, and merging until the project is complete or new features are added.

### Tools and Features to Enhance Collaboration:
   - **Issues and Labels**: GitHub allows users to create issues for bugs, tasks, or feature requests. Labels help categorize and prioritize them.
   - **Actions/Workflows**: GitHub Actions can automate tasks like testing and deployment when changes are pushed to the repository.
   - **Wiki and Documentation**: GitHub also provides tools for project documentation, such as a built-in Wiki or README files.

This process allows for efficient collaboration while maintaining a clean, well-organized project history. It minimizes conflicts, fosters code quality through review, and enables effective teamwork.