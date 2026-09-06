# LHP Website

## 🤹🏾 LHP GitHub Account Management

### Introduction

Welcome to The LHP Website, of which now you are the webmaster. This guide assumes you have very minimal experience with code so it will be (hopefully) way more detailed than it needs to be for many steps. Hopefully, as long as you follow it top to bottom you will be a-okay :)

Remember: You won't break the live website by tinkering around with anything on your computer/locally. Nothing you do will show up on the real website unless you "sync" or "push" your code (the very last step in this guide!) - so do not be afraid to mess around and see what things work and look like.

**Website Info:**
- Link to live site: https://theliquidhotplates.github.io
- Website is hosted on GitHub Pages and is mostly written in CSS + HTML
- Tools used: VSCode (to edit the code)
- General Pathway: You download the code file/"Repo" → You edit to your hearts content on your own laptop (you can also preview changes! Also a section below!!) → When you are satisfied with what you have built, you can "push" those changes onto the main GitHub Repo → GitHub will automatically rebuild the site within a couple minutes → You have an updated website!
- I have a Windows so some stuff MAY be different, hopefully not. I would assume Apple is pretty similar. If not I apologize.

I used Claude to help build the website so feel free to ask it questions to help edit and stuff.

Also, you really do not need to know how to code to update the website. Hopefully the most you will HAVE to do is swap out/update photos, copy-paste pages and text & update words, change dates & event names.

---

## I. One-Time Setup

You only need to worry about doing all of the stuff in this step once, when you are first getting everything set up. I would also argue this is the hardest part. Once you have done this, you can skip straight to editing + pushing content, which is **Section III below.**

### 1. Accounts + Downloads + Access + Syncing

#### 1a. GitHub Account

There are 2 ways you can access and update the correct folder of code, or "Repo":

1. **Recommended: Sign up for a personal GitHub account (it's free!)**
   Using this ensures that YOU get credit for the code and changes you make, and it is reflected on your own personal account's history. This also lets you avoid accessing the entire email and only focus on the GitHub Repo.
   - a. Sign up with your email, standard stuff, nothing crazy
   - b. Tell whoever is admin on the LHP GitHub Repo/LHP GitHub account that they need to add you as a collaborator. This is necessary to be able to push changes and update the website
     - ***If you are the only user, check out Step 1. Adding/Removing People on a Repo on this page.**
   - c. Once you have been added as a collaborator, make sure you have access to edit the repository - you should have been given either the "write", "admin", or "all" role.
   - d. Once everything has been shared, you should have received an invitation to the repository or organization.

   **If the Repository was shared to you:**
   - a. Go to your profile. No matter what page you land on, you can access your profile by clicking the circular profile icon on the top left > hit "Profile"
   - b. Click on your "Repositories", it should be listed there.
   - c. Click on the Website Repository
     - a. Note that the Repository hosting the live website will ALWAYS end in ".io"

   **If the Organization was shared to you:**
   - a. Go to your profile. No matter what page you land on, you can access your profile by clicking the circular profile icon on the top left > hit "Profile"
   - b. Your profile will look something like this. Go to "The Liquid Hotplates" under your organizations:
     - a. If you have multiple organizations, you can hover over them to see which one is LHP
   - c. You are now in the organization! Once in the Organization, you will see something like this. Click on "Repositories"
   - d. Click on the Website Repository
     - a. Note that the Repository hosting the live website will ALWAYS end in ".io" & that there is only one live website allowed on this whole account.
   - e. Once you have proper access & have correctly navigated to the website Repository, it should look something like this:
     - ***Note that the file names might be different as the website gets updated over time, and the top row "update" might be different, but the structure of the page will be very similar.
   - f. If it looks like this, great! Move on to the next steps. This is what you will need for Step 2 below (Cloning the Repo).

2. **Log in to the LHP GitHub account**
   - a. You will need to log into the LHP GitHub account which is linked to the email. You may sign straight into the LHP account if you are logged into the email!
   - b. No matter what page you land on, you can access your profile by clicking the circular profile icon on the top left > hit "Profile"
   - c. Your profile will look something like this. Click on "The Liquid Hotplates" under "Organizations"
   - d. Once in the Organization, you will see something like this. Click on "Repositories"
   - e. Click on the Website Repository
     - a. Note that the Repository hosting the live website will ALWAYS end in ".io" & that there is only one live website allowed on this whole account.
   - f. You should land on a page that looks like this & contains all the code files & images.
     - ***Note that the file names might be different as the website gets updated over time, and the top row "update" might be different, but the structure of the page will be very similar.
   - g. If it looks like this, great! Move on to the next steps. This is what you will need for Step 2 below (Cloning the Repo).

#### 1b. Download Git

Even though you won't use many different commands, you must download "Git" to make sure everything works smoothly behind the scenes.

- Link: https://git-scm.com/downloads
- Download the latest one & the right one for your operating system (Windows or Mac)
- Just hit default for everything (especially Git Bash)
  - FYI: Installing Git also downloads something called "Git Bash," which is a terminal. There are ways to use this if you want (specifically in downloading/cloning the repository and updating the repository), but I find that using VS Code's direct integration is much easier. Feel free to ignore it on your desktop unless you want to use it.

#### 1c. Download VSCode

- Link: https://code.visualstudio.com/download
- Download the right one for your laptop
- Hit defaults for everything on the installer & open VS Code when it's done installing

#### 1d. Linking GitHub & VS Code

1. Open VS Code
2. On the bottom-left corner, click on the small person icon.
3. Choose "Sign in with GitHub"
4. This will likely open up your browser and ask you to sign in to GitHub & authorize access. Allow it to!
5. Come back to VS Code - and it should now show that you are signed in! However, there are some more steps we need to take to finish it off.

There is a separate connection you need to make between Git & VS Code that Git requires before it will let you commit or push anything, so any changes you make are attributed to you. You can do the following steps either when you make your first commit (in which VS Code will usually give you a pop-up asking you to give Git your username or email - you can follow those prompts) OR you can do it manually right now since we are setting everything up (or if the mentioned prompts do not pop up for some reason).

6. In VS Code, go to the top menu → Terminal → New Terminal
7. Type this, using your own name, then press Enter:
   ```
   git config --global user.name "Your Name"
   ```
8. Type this, using the same email as your GitHub account, then press Enter:
   ```
   git config --global user.email "youremail@example.com"
   ```
9. You can close the terminal - you will never need to do this again and the setting will be saved forever and ever :)

One more important thing to remember is that the first time you ever try to push code into the repository, you will still get a pop-up asking you to log into GitHub and authorize - just to ensure that the laptop is allowed to push code on your behalf - this is yet another one of those one-time permissions you have to give.

#### 1e. Install Live Server Extension [Recommended]

This live server extension makes it easier to preview your changes and see what it would look like on the site before you push it into the live site - found it helpful, but it is optional!

1. On VS Code, look at the left sidebar for an icon that looks like 4 squares. Click on this to access all of VS Code's extensions.
2. In the search bar, type in `Live Server`. It should be the one by **Ritwick Dey** (and it will have many installs & reviews). Install this one!
3. You won't see any changes immediately, but we will use it later.

Okay, all the downloads, installations, and (almost) all the syncing is done! The next part is to actually get the repository.

### 2. Cloning the Repo (Saving the Repo Locally)

In order to actually edit, update, and use everything we have downloaded, you must first download the website files onto your laptop ("cloning" the repository). I found the easiest and best way to do it is using the Git integration directly in VS Code, which is what I also recommend.

1. Start by navigating to the repo home page on the website: https://github.com/The-Liquid-Hotplates/the-liquid-hotplates.github.io

   It should look similar to this: ** Note that the file names will change over time as more things get added, but you should be able to see the basic filenames such as "README.md", several ".html" pages, and the green "code" button we see below.

2. Download the repo locally by pressing the green "code" button > copy that link shown below. The link will look similar to what you see in the image below.

   ⚠️ **Quick warning before you copy that link:** there are two green-button options - "Download ZIP" and the clone link (HTTPS). Download ZIP gives you a dead, disconnected copy of the files that can never push changes back to GitHub. Make sure you're copying the **clone URL** (ending in `.git`), not clicking Download ZIP.

3. Open VS Code
4. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac) to open the commands for VS Code. It will look like a search bar at the top of the screen
5. Type in: `Git: Clone` & hit enter
6. Paste the link we saw earlier and press enter
7. VS Code will ask you to pick a folder where you want to save all the files on your laptop. I recommend using something easy to find & access, such as desktop.
8. Once it is done, VS Code will ask if you would like to open the cloned repository → hit yes to continue exploring and to move on to the next step. If not, you must remember where you saved the download to open it next time.

You now have the entire website saved on your laptop!! You are now set up FOR GOOD and will never need to repeat any of the above steps again! PHEW!!!

---

## II. Navigating & Understanding The Website

| File / Folder | What it controls |
|---|---|
| `index.html` | The homepage/landing page |
| `members.html` | The Members + Alumni page |
| `events.html` | The Events timeline page |
| `contactus.html` | The Contact page |
| `styles.css` | Controls ALL the visual styling (colors, fonts, spacing) for every page at once. If there are fonts, colors, visual changes you want to make, this is the spot |
| `js/` folder | Shared JavaScript. Right now this is just one file, `reveal-text.js`, which powers the "letters flying in one by one" animation used on nearly every heading across the site (the homepage title, the Events page title, every event page's title, etc.) - one shared file instead of repeating the same code on every page |
| `images/` folder | Logo, background photos used across the whole site |
| `member-images/` folder | Individual member headshots |
| `events/` folder | Sub-pages for individual events (like the Alottacappella recap page), plus photo galleries for each event |

**General Rule of Thumb:** If you want to make site-wide stylistic changes (font colors, font choices, font sizing, section sizes, colors, anything stylistic), check the `styles.css` page first.

---

## III. Updating + Editing the Website

This section of the guide will walk you through making the most common edits. The general pattern is to find the similar block/style/chunk that you want to duplicate, copy it, update/change the words, and then push it into the live site!

### 1. Before Making Any Changes

Always pull the repo from online first, EVERY SINGLE TIME you sit down to work, even if you are sure that nothing has changed. This will download anyone else's changes that have been pushed into the live site onto your computer before you start adding more content and layers of content on top. This is to avoid merging conflicts when you push into GitHub.

This step is especially important if more than one person is editing the site. If there are two people who are editing at the same time, Git will get confused about whose version should "win" - aka a "merge conflict" and quite frankly it's messy and hard to untangle cleanly.

1. Open VS Code with the project folder open. It will look similar to the image below. You can do this by either opening VS Code and navigating to where you saved/cloned the repository from Section I.2 Cloning the Repo, or by launching it from your downloads. Then, either drag up your terminal or press `` Ctrl+` `` to open VS Code's internal terminal. If everything opens correctly, it will look something like this.

2. Type in the command `git pull`. If the repo saved on your laptop is the same as the live site's repo, then the terminal will say that everything is up to date.

3. If the locally saved version was not up-to-date with the live site version, Git will start downloading the files that changed - you'll see a short list of filenames scroll by, and it'll finish with something like "Fast-forward" once it's done. That's your confirmation it worked. Once you see that, you're safe to start editing.

Some habits that keep this from ever turning into an actual mess:
- Pull before every single editing session (Step 2 above), even if you don't think anything's changed. It takes two seconds and costs you nothing.
- Push your own changes often, in smaller chunks, instead of sitting on a huge pile of unpushed edits for days. The longer you wait, the more likely it is that someone else touches the same file in the meantime.
- If you know two of you are about to edit around the same time, just say so out loud - agree on who's touching what (e.g. one person does Members, the other does Events) so you're not both changing the exact same lines.

If you ever do end up with a merge conflict - you'll know because Git will show you a file suddenly full of `<<<<<<<` and `>>>>>>>` symbols - stop right there and don't try to guess your way through it by hand. Screenshot it and ask Claude to walk you through resolving it, or reach out to whoever's handled it before.

### 2. Page Content Changes

#### 2a. Home Page (`index.html`)

The homepage has four sections, top to bottom:

- **Nav** - unlike every other page, the homepage nav has no logo/site name next to the pill of links, just the pill itself, centered. (The giant hero title right below it already carries the branding, so the logo would be redundant here.) Every other page keeps the logo.
- **Hero** - a full-screen background photo with the site title and tagline animating in letter-by-letter on load (the "reveal-text" effect - see Section II above for where that lives). To change the photo, swap `images/home_img.jpg` for a new file with the exact same name (easiest), or update the filename referenced in `styles.css` under `.hero-home`. To change the title/tagline text, just edit the words inside the `<h1>`/`<p>` tags in `index.html` - the animation applies automatically to any text inside an element with `class="reveal-text"`.
- **Who We Are** - a plain paragraph + a "Meet The Team" button. Just edit the text inside the `<p>` tag.
- **What We Do** - two flip cards ("We Sing" / "We Compete") that flip over on hover to reveal more text and a button. To add a new card, copy one of the existing `.info-flip-card` blocks and edit the emoji, title, and both sides' text.
- **LHP Through The Years** - the photo gallery near the bottom. This uses a masonry/tetris layout (photos of different heights pack together with no gaps), and hovering over any photo reveals its year in a small overlay. To add a photo: copy one of the existing `<div class="tetris-gallery-item">` blocks, point its `<img src="...">` at your new photo (drop the file into the `images/gallery/` folder first), and update the year text. You can add or remove as many of these blocks as you want - the gallery automatically reflows to fit however many you give it.

#### 2b. Members Page (`members.html`)

- **Current Members / Alumni headings** - both animate in with the same reveal-text effect as the homepage title.
- **Member cards** - each member is a flip card: the front shows their photo (filling the whole card) with their name/title/part/year overlaid at the bottom on a dark gradient (so the text stays readable no matter what the photo looks like); the back reveals their bio and any awards on hover.
  To add a new member: find a similar existing card, copy the whole `<div class="flip-card">...</div>` block, paste it in, then edit:
  - The photo: `src="member-images/yourfile.jpg"` (drop the actual photo into the `member-images/` folder with that exact filename)
  - Name (appears twice - front and back)
  - Title (e.g. "President", or just "Member" for general members)
  - Voice part, class year
  - Bio lines on the back
  - Optional: a `<p class="member-award">Award Name (Year)</p>` line for any competition awards - renders as an orange pill badge
- **Alumni section** - same card pattern, but photos live in `member-images/alum/` instead, and the year field is a range (e.g. "Fall 2022 - Spring 2026") instead of a single class year. This section also has a slightly different background (a navy-tinted dark tone, blended with a soft background glow) to visually separate it from Current Members.
- **"If you are an LHP alumni..." note** - sits at the very bottom of the Alumni section, after the last card. Just a plain centered `<p>` - edit the text directly if you want to reword it.

#### 2c. Events Page (`events.html`) + Individual Event Pages

**The Events hub (`events.html`)** is a vertical timeline, not a calendar grid - each event is a clickable row with a dot, connected by a line, grouped under year headings (2026, 2025, 2024, etc., newest at the top). The page title ("Events") is left-aligned so it lines up with the timeline's vertical line, and reveals in with the same letter animation as everything else.

To add a new event to the timeline:
1. Copy an existing `<a href="events/...html" class="timeline-item">...</a>` block.
2. Update the event name, one-line description, date, and - most importantly - the `href`, which needs to point at the real file you're about to create (next step).
3. Make sure it's placed under the correct year heading, in the right chronological order.

**Individual event pages** (e.g. `events/2026/OTR-2026.html`) each follow the same template:
- A full-screen hero (same treatment as the homepage) with the event name and date/location revealing in letter-by-letter.
- A "← Back to Timeline" link, sitting at the **bottom** of the page (after the photo gallery), not the top.
- Award badges (if the event had any competition results) - same orange-pill style as the Members page awards, sitting right under the "About" heading.
- An About paragraph, with any standout members' names highlighted in blue (wrap a name in `<span class="name-highlight">Name</span>` to do this anywhere in the text).
- A Setlist section.
- A YouTube video embed (if there's a recording) - **important:** the embed URL must use the `/embed/VIDEO_ID` format, not the regular `watch?v=VIDEO_ID` link you'd copy from the address bar - see the YouTube note in Section IV below if this ever shows a "refused to connect" error.
- A photo gallery at the bottom, using the same masonry/tetris layout as the homepage gallery (just without the year-hover effect, since there's only one event per page).

**Real folder/file naming convention:** each event's HTML file lives inside a folder named after its year (`events/2026/`, `events/2025/`, etc.), and its photos live in a sibling folder right next to it, named after the event itself (e.g. `events/2026/OTR-2026-images/`). Keeping the hero photo and all gallery photos in that same folder (rather than scattered across different folders) is what makes each event self-contained and easy to find later.

**To create a brand-new event page:** copy an entire existing event `.html` file, rename it, update all the text/photos/links inside it, then go back to `events.html` and add its timeline entry pointing to the new file.

#### 2d. Contact Page (`contactus.html`)

- No hero on this page - just a plain heading ("Contact Us!") with the same reveal-text animation, sitting close to the top since there isn't much content on this page.
- Background uses the aurora glow effect (see the note on this in Section V) with 3 color blobs instead of 2 - the usual two blues, plus an orange one, for a bit more warmth on this page specifically.
- Two buttons: Instagram (opens in a new tab) and "Email Us" (a `mailto:` link).
  - The email button also copies the address to the visitor's clipboard when clicked, with a small "Email copied!" confirmation message underneath - this is a fallback for visitors whose device doesn't have a default mail app configured, since `mailto:` links aren't 100% reliable across every device/browser. If you ever change the email address, you need to update it in **three** places in the file: the `href="mailto:..."` attribute, the visible button text, and the JavaScript variable near the bottom of the file that handles the clipboard copy.
- The footer is intentionally left out on this page (commented out in the code) since there isn't enough content to need one.

### 3. Previewing Changes

Before pushing anything live, check it locally first:

1. Save your edits (`Ctrl/Cmd + S`).
2. In the sidebar, right-click the `.html` file you edited → **"Open with Live Server."**
3. Your browser opens a local preview - this is exactly what it'll look like live, but only visible on your computer.
4. Check your change looks right (photo shows up, text reads correctly, nothing overlapping or broken).
5. If it looks wrong, go back, fix it, save again - Live Server auto-refreshes the preview every time you save.
6. Close the tab once you're happy with it - this doesn't publish anything, it's purely local.

**Tip:** if Live Server shows an old version even after saving, do a hard refresh in that preview tab (`Ctrl+Shift+R` / `Cmd+Shift+R`) - your browser sometimes caches the page.

### 4. Pushing Changes

Once you've previewed and you're happy, publish it using the terminal:

1. Open VS Code's terminal (drag it up from the bottom, or press `` Ctrl+` ``) if it isn't already open from Section III.1.
2. Make sure you're in the project folder (you should already be, from cloning it in Section I.2).
3. Type the following three commands, pressing Enter after each one:
   ```bash
   git add .
   git commit -m "insert whatever update you want to add"
   git push
   ```
   Replace the text in quotes with a short plain-English description of what you changed, e.g. `"Added new member Jane Doe"` or `"Updated Fall Showcase date"` - this becomes a permanent label in the site's history, so future-you (or whoever inherits this next) can see what changed and when.
4. The very first time ever, a browser window may pop open asking you to log into GitHub and Authorize - do that, then run `git push` again and it'll finish.
5. Wait 1-2 minutes, then check the live site and hard-refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`).

Note that you must be in the repo folder in the terminal for this to work. You do not need to be on any specific page - Git works on the whole project folder and will push ALL changes you've made, not just one file.

> **GUI alternative:** if you'd rather click buttons than type commands, VS Code's Source Control panel does the exact same thing as the three commands above:
> 1. Click the **Source Control** icon in the left sidebar (branch/fork shape).
> 2. Hover over "Changes" → click the **`+`** to stage everything (or stage individual files with their own `+`) - this is the same as `git add .`
> 3. Type your update message in the box at the top, then click **Commit** - same as `git commit -m "..."`
> 4. Click **Sync Changes** - same as `git push`
>
> Neither method is more "correct" than the other - they do the exact same thing. Use whichever one you're more comfortable with.

---

## IV. Common Fixes + Issues

- **"It won't let me Sync / push"** → You probably aren't added as a collaborator on the GitHub repo yet, or aren't signed in. Check Section I, Steps 1 and 4.
- **You accidentally broke something and want to undo it** → Type `git restore filename.html` in the terminal (using the actual file's name) to revert just that file back to how it was before your edits - only works before you've committed. (GUI alternative: in the Source Control panel, right-click the file and choose "Discard Changes.")
- **You published something broken** → Don't panic, nothing is permanent. Go to the GitHub repo webpage → click "commits" → find the last good version → you (or the original admin) can revert to it. Or just fix the mistake the normal way and push again.
- **Merge conflict** (the `<<<<<<<` / `>>>>>>>` symbols) → See **Section III.1** above. Ask Claude to walk you through it rather than guessing.
- **Be mindful of photo file types when adding images** (`.png` vs `.jpg` vs `.jpeg`) - if the filename in the code doesn't exactly match the real file's extension, the image will show up broken/missing. If you click on a broken image in the browser's dev tools, it'll usually tell you the exact path it tried (and failed) to load, which helps spot the mismatch.
- **Images look fine in Live Server but show up corrupted (or 0 bytes) after pushing to GitHub** → This has two possible causes:
  1. Uploading a lot of photos at once in a single push can occasionally cause one or two to get corrupted in transit.
  2. A more common root cause on Windows specifically: Git can sometimes "auto-correct" line endings inside files, which silently corrupts binary files like images if Git isn't explicitly told not to touch them. The permanent fix for this is a `.gitattributes` file in the project - ask Claude for one if the repo doesn't already have it, since it stops this from happening again for good.
  Either way, the fix for an already-corrupted image is the same: delete it from the images folder, then re-upload/re-add a fresh copy of the same photo.
- **YouTube video embed shows "refused to connect"** → You're using the wrong link format. The regular YouTube URL you'd copy from your browser (`youtube.com/watch?v=...`) is blocked from loading inside the site - you need the embed-specific format instead. Take the ID (the part after `v=`, and before any `&` if there's extra stuff in the link) and use it like this: `https://www.youtube.com/embed/VIDEO_ID_HERE`.
- **Something behaves differently on your phone vs. your laptop, or in one browser vs. another** → This does happen sometimes (iOS Safari, Windows Chrome, and GitHub's own preview can each render things slightly differently). If something looks broken specifically on one device/browser but fine elsewhere, mention that explicitly when you ask Claude for help - it makes the bug much easier to track down.
- **You're stuck on literally anything** → Ask Claude (claude.ai). This whole site was originally built with Claude's help - you can paste in the relevant HTML/CSS file and describe what you want changed, and it can write the exact code for you to paste in.

---

## V. UI Elements

Reference links for a few visual components used on the site, in case you ever want to find the original inspiration or credit the source:

- https://uiverse.io/joe-watson-sbf/rude-shrimp-21
- https://uiverse.io/joe-watson-sbf/wise-quail-35
- https://uiverse.io/Cksunandh/loud-crab-37 - this is the glowing gradient badge effect (the "aurora" background glow used behind the Events/Members/Contact page content is adapted from this same visual style)
- Timeline: https://preline.co/docs/components/timeline.html - this is the original inspiration for the Events page's vertical timeline layout

*(Note: I don't have a confident record of exactly which feature the first two links map to specifically - if you remember, it's worth jotting a one-line note next to each so future-you doesn't have to guess.)*