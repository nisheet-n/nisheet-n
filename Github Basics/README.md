# GitHub Basic Commands

<br>

## 1. Creating a Repository on GitHub.

* Go to <a href="https://github.com/">GitHub</a> and Sign In or Sign Up if you haven't already.
* Click on the green button on the top-right which says `New repository`.
* Name your Repository and keep it as public. (Private Repository will not be visible to others)
* It is recommended that the Checkbox saying `Initialize this repository with a README` is unchecked.

<br>

## 2. Setting up a Project on your Local Machine

* Make sure you have Git installed before proceeding further. Visit <a href="https://git-scm.com/downloads">here</a> if you haven't.
* Create your Project Folder called `projectName`.
* Go into that folder.
* Create a file called `fileName` and save it with any file extension of suitable choice.

* Open a Terminal window. (Example: Command Prompt on Windows)

* Type `cd` followed by path of your Project Folder. <br>
  `cd C:\...\projectName`

* Start by running `git init`. This initialises an empty Repository in your local Machine. The required files are created by Git and kept hidden by default.

* Run `git remote add origin [Repository URL from the browser].git`. Now your Project folder gets linked to the Repository online which you had previously created on GitHub. 

<br>

## 3. Pushing your Project files to GitHub

* Check the files which are ready to be upoloaded by running `git status`.

* Next, run `git add -A`. This selects all the files in that folder to be uploaded.
  <br>
  Alternatively, for choosing only some particular files, run `git add fileName.fileExtension`.

* Provide a message to this uploading process by running `git commit -m "Your message here"`.

* Finally, upload your files by `git push origin`. Make sure you are connected to the internet.

* Refresh your Repository on GitHub and see the changes done.

<br>

## Done!
