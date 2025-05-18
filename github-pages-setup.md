# Madani Group Hospitality - GitHub Pages Setup Guide

This guide will help you set up your Jekyll website on GitHub Pages, which provides free hosting for static websites.

## Step 1: Create a GitHub Account

If you don't already have one, sign up for a free GitHub account at [github.com](https://github.com).

## Step 2: Create a New Repository

1. Once logged in, click the "+" button in the top right corner and select "New repository"
2. Name your repository `madani-hospitality` (or any name you prefer)
3. Make it public
4. Do not initialize the repository with a README, .gitignore, or license
5. Click "Create repository"

## Step 3: Install Git (if not already installed)

- For macOS: Install via [Homebrew](https://brew.sh/) with `brew install git` or download from [git-scm.com](https://git-scm.com/)
- For Windows: Download and install from [git-scm.com](https://git-scm.com/)

## Step 4: Configure Git

Open a terminal or command prompt and run:

```
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## Step 5: Initialize Your Local Repository

1. Open Terminal (macOS) or Command Prompt (Windows)
2. Navigate to your project folder:
   ```
   cd /path/to/madani_hospitality
   ```
3. Initialize the Git repository:
   ```
   git init
   ```
4. Add your GitHub repository as a remote:
   ```
   git remote add origin https://github.com/your-username/madani-hospitality.git
   ```

## Step 6: Update _config.yml for GitHub Pages

Edit your `_config.yml` file and update the following lines:

```yaml
baseurl: "/madani-hospitality"  # the subpath of your site, e.g. /blog
url: "https://your-username.github.io"  # Replace with your GitHub username
```

## Step 7: Create a .gitignore File

Create a file named `.gitignore` in your project root with the following content:

```
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
.DS_Store
vendor/
.bundle/
```

## Step 8: Commit and Push Your Files

```
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

## Step 9: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch and click "Save"
5. Note the URL where your site is published (usually https://your-username.github.io/madani-hospitality/)

## Step 10: Wait for Deployment

GitHub Pages will automatically build and deploy your Jekyll site. This process may take a few minutes. You can check the status in the "GitHub Pages" section of your repository settings.

## Additional Configuration for Custom Domain (Optional)

If you have a custom domain (e.g., madanigroup.com):

1. Go to your repository settings
2. Scroll down to "GitHub Pages" section
3. Under "Custom domain", enter your domain name and click "Save"
4. Add a CNAME file to your repository with your domain name
5. Set up DNS records with your domain provider:
   - For an apex domain (madanigroup.com): Create 4 A records pointing to GitHub's IPs
   - For a subdomain (www.madanigroup.com): Create a CNAME record pointing to your-username.github.io

## Updating Your Website

To make changes to your website:

1. Make edits to your local files
2. Test locally with `bundle exec jekyll serve`
3. Commit and push your changes:
   ```
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. GitHub Pages will automatically rebuild your site

## Troubleshooting

- If your site isn't building, check the "GitHub Pages" section in your repository settings for error messages
- Ensure your repository is public (GitHub Pages is only available for public repositories on free accounts)
- Check that your _config.yml is properly formatted
- Test your site locally before pushing: `bundle exec jekyll serve`

For more help, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages) or [Jekyll documentation](https://jekyllrb.com/docs/). 