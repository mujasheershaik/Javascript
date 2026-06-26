// Github :- 
        // Github is a cloud based platform where developers store, manage, share and collaborate on code using
        // Git, a version control system. 

// Git ===> A tool it tracks the changes in code 
// Github ===> A website that stores Git repositories online and makes collaboration easy. 

// Git                                         VS                                      Github 

// Version Control Software                                                        Cloud Platform
// Installed on Computer                                                           Runs in Browser
// Tracks code changes                                                          Stores Git repositories online 
// Works offline                                                                Requires internet for syncing

// Example :- 

// Computer 
//     |
//     |
//    Git
//     |
//     |
//  Git Push
//     |
//     |
// Git Server

// Fundamentals of Github :- 

// (1) Repository (Repo) :- 
                // A Repository is a file that contains project and its Git history. 
                // A Repository is like a project folder that contains code and its history. 
                // On Github repositories can be private (self access or restricted access) or 
                // public (anyone can see). 
                // Ex :-  Mywebsite repo contains html, css, js files and commit history.

// Example :- 

// Github Introduction and Fundamentals/

// index.html 
// index.css 
// script.js
// READ.md

// This entire folder is called Repository. 

// (2) Clone :- 
            // Clone means copying Github repository (project) from cloud to our computer.
            // After cloning we have entire project history (all branches, files, commits) on our computer.
            // We can edit, test and push changes back to Github. 

// Command :- 

// git clone https://github.com/mujasheershaik/Javascript.git 

// (3) Commit :- 
            // A commit is a saved snapshot of project. 

            // Think of it as pressing Save with a message describing what changed.

// Example :- 

// Commit 1 :- 
// Added Login Page

// Commit 2 :-
// Fixed Login Bug

// Commit 3 :-
// Added Dashboard

// Command :- 

// git commit -m "Added login page"

// (4) Push :- 
            // Push uploads your local commits to GitHub.

// Computer
    // |
    // |
//    Push
    // |
    // |
//  Github

// Command :- 

// git push

// (5) Pull :- 
        // Pull downloads the latest changes from GitHub to our computer. 

// Github
//    |
//    |
//  Pull
//    |
//    |
// Computer

// Command :- 

// git pull 

// (6) Add :- 
        // It is used to add Single or Mutiple files and send to staging area 
        // Its like selecting the files. 

// (6.1) To add a single file :- 
             // This command adds only the index.html file to the staging area.

// Command :- 

// git add index.html(file name)

// (6.2) To add Multiple files :- 
            // Add all modified, new, and deleted files in the current folder. 

// Command :- 

// git add . 

// (6.3) To add Multiple files :- 
            // Stages only the listed files.

// Command :- 

// git add index.html style.css 

// (6.4) To add a Entire Folder :- 
        // This stages all files inside the images folder. 

// Folder Name :- 
        // |
        // |
    //  Images/ 
    //    |
    //    |
    // index.html 
    // indexedDB.css 
    // indexedDB.js 
    // logo.png
    // banner.jpg 
    
// Command :- 

// git add images/ 

