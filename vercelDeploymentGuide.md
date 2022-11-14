## LINK FOR BELOW BLOG IS :- https://blog.logrocket.com/deploy-react-app-for-free-using-vercel/

Deploy a React app for free using Vercel
January 11, 2022  5 min read 

Deploy A React App For Free Using Vercel
Introduction
Have you ever thought of making your projects available through a live URL without having to go through the stress of hosting providers?

In the past, before the emergence of cloud platforms like Vercel, hosting was only carried out by hosting providers (e.g., GoDaddy) that require you to upload your static assets (like a project build folder) every time you make changes. This upload is done either by FTP software or some kind of system like cPanel, which could become very stressful and technical.

Today with the emergence of GitHub, developers have access to cloud platforms like Vercel that make deployments easy.

Vercel is a serverless cloud platform that allows developers (basically frontend developers) to host websites and online services that launch instantaneously, grow automatically, and require no monitoring, all with minimal/no configuration. Vercel is a perfect choice for deploying your React applications easily providing comprehensive tools to build high-performance websites and applications.

Why use Vercel?
Vercel provides you with free domains (which contains the vercel.app suffix) to deploy your code on the live server. It also allows you to utilize your own unique/personal domain
Vercel supports automatic deployments, meaning any time you push changes to your repository’s production branch (main or master), Vercel will detect and deploy them to the server automatically
Every deployment built by Vercel is securely protected with an auto-renewing SSL certificate and powered by their Edge Network. This ensures that your content is always delivered securely and quickly, with no configuration required
With a single click, you can enable the Vercel GitHub and GitLab connections for continuous deployment previews
Vercel has a marketplace for integrating third-party tools such as Google Lighthouse, Slack, Shopify, and others
And lots more…
Getting Started
For this guide, we will make use of a random quotes generator app that gets random quotes from an API.

Before getting started, let’s take a look at some prerequisites needed to make use of Vercel:

Have an account with any Git provider (GitHub, GitLab, or Bitbucket)
npm (which comes with Node) or Yarn
Basic understanding of how to use the terminal
Pushing your code to GitHub
For you to deploy your applications/projects on Vercel, you need to push your project to any Git provider.

For this guide, I will make use of GitHub via the terminal to push our React application.

First thing, let’s create a repository on GitHub:

Creating A New Repository in Vercel
Then ensure you fill in the necessary information and click Create repository:

Creating A New Repository in Vercel
Back in the terminal, let’s start by staging all our files so we can commit them to the repository, then create a new branch main using the following commands:

git init
git add .
git commit -m "first commit"
git branch -M main
Once this is done, we can now push to the created remote repository using the following commands:

git remote add origin https://github.com/Dipesh107/Memories-frontend
git push -u origin main
N.B., replace the GitHub remote URL with yours.

When you refresh your repository, your code should show up!

Inputting A New Code Into A Vercel Repository
Inputting a new code into a Vercel Repository
Moving on, there are about four ways to make deployments to Vercel, but we will only consider the two major methods (this works with every other framework).

Let’s explore both methods, which are manual deployment (Vercel for Git) and terminal deployment via the Vercel CLI. At the end, we will conclude which is best.

Deploying with Vercel CLI
This first step would be to visit https://vercel.com/ and click the Sign Up button in the top-right corner. You can signup with either GitHub, GitLab, or Bitbucket:

Signing Up For Vercel
Once that is successful, your dashboard will look like this:

Vercel Dashboard
The next step would be to install the Vercel CLI. We will only make use of the necessary commands to push our project to React for this guide. You can check out their CLI documentation for more commands and their functions.

To install the Vercel CLI globally, you would run the command below on your terminal:

npm i -g vercel
N.B., to confirm if it installed successfully, you can run vercel--version on your terminal.


Over 200k developers use LogRocket to create better digital experiences
Learn more →
Once it has been successfully installed, the next step would be to push our codes. Since this is our first time, we would need to log in to Vercel via our terminal. Run the command below on your terminal:

vercel
It would bring up the following:

Vercel Login Terminal
Use your direction buttons to either move up or down and tap the enter button to select your preferred option.

This will redirect you to a browser tab where it will either show it’s successful or failed.

N.B., ensure you log in with the account you used to create a Vercel account earlier.

The next step would be to return to the terminal and continue what you started. 😄 By answering the questions, the first thing will be to confirm that this is the project you want to deploy:

? Set up and deploy “path to your project”? [Y/n] y
The next question would be to confirm which account to deploy your app:

? Which scope do you want to deploy to? Your Vercel Account
N.B., this would provide a default option; just hit Enter to continue.

Moving on, you’ll be asked if you want to link this to the existing project. Just type N:

? Link to existing project? [y/N] n
The next step is to name your project:

? What’s your project’s name? project-name
You’ll now be prompted to specify the path. This will make use of the default option ./ since we’re already in the project directory:

? In which directory is your code located? ./
Finally, one awesome feature the CLI has is its automatic framework detection, which allows it to detect the framework you are using and offer default project settings accordingly. This includes Build Command, Output Directory, and Development Command.

This simply means that it will auto-detect whether your project was initialized using create-react-app and configure the settings accordingly. Otherwise, you will be asked to set them:

Auto-detected Project Settings (Create React App):
- Build Command: `npm run build` or `react-scripts build`
- Output Directory: build
- Development Command: react-scripts start
The last question would be to confirm if you want to override the settings. Just type n:

? Want to override the settings? [y/N] n
Hurray, your project is successfully deployed! Here is a summary of what it looks like:

Deployed Project In Vercel Terminal
Once this is successful, Vercel automatically copies your production link to your clipboard. Go to your browser and paste the production link or ctrl + click the link in your terminal.

Pasting A Production Link in The Vercel Terminal
