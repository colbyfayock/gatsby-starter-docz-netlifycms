# Gatsby Starter for Docz & Netlify CMS

Easily spin up a new documentation site with the power of Docz and Netlify CMS.

### Here's What You Get
* [Docz](https://docz.site) Documentation engine powered by [Gatsby](https://www.gatsbyjs.org/)
* [Netlify CMS](https://www.netlifycms.org/) Content management

## Quick Start with Netlify

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/colbyfayock/gatsby-starter-docz-netlifycms)

Note: This will request Github access and will create a repository for you

### Enable & Config Netlify Identity

* Navigate to **Identity** in the Netlify navigation
* Click **Enable Identity**
* Click **Invite Users** and enter your first user's email
* Click **Settings & Usage**
* **Optional:** If you'd like to close registration, scroll to **Registration Preferences** and change to **Invite Only**
* Scroll down to **Git Gateway** and click **Enable**
* You're ready to register and log in!

Once the invited user completes registration via the link in their email, they'll be able to log in via:

```https://[your site].netlify.com/admin```

## Getting Started

### Requirements
* [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)
* [Yarn](https://yarnpkg.com/en/)

### Setting Up the App
* Inside the directory of your choice, scaffold a new Gatsby site:
```
gatsby new [folder-name] https://github.com/colbyfayock/gatsby-starter-docz-netlifycms
```
For example, if I want my installation in `~/Code/my-docs`, I would navigate to `~/Code` and run:
```
gatsby new my-docs https://github.com/colbyfayock/gatsby-starter-docz-netlifycms
```
* Navigate to your new directory and run:
```
yarn develop
```
* You should now be running a new Gatsby site locally! 🎉

### Setting up Netlify CMS

