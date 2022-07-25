# 🤗 Contributing

## Getting Started

When contributing, we suggest you develop an understanding of the languages used within the project. Rungeon is written in JavaScript, CSS, Bootstrap and HTML.
If you plan on making visual changes familiarize yourself with CSS & Bootstrap, we assume you are already competent with JavaScript & HTML.

### Prerequisites

Rungeon makes use of the following programs for development:

- [NodeJS](https://nodejs.org) (and npm)
- [Express](https://expressjs.com/)

### Running Rungeon

Rungeon can be ran with the following terminal commands given that [the prerequisites](#prerequisites) have been met:

```sh
npm install   # installs any new npm dependencies
npm start     # actually starts the localhost server
```

On a successful run, a message similar to the following will be printed to the terminal. It will specify the port that the server is using to host the website on.

```sh
~/p/rungeon docs *2 !2 ?1 ❯ npm start

> rungeon@1.1.0 start
> nodemon .

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node .`
Listening on port 3000
```

Afterwards, direct a browser tab to point to `localhost:<port>` (e.g. localhost:3000).

### Running Rungeon on Other Devices

In order to connect on your phone or another device,

- Start the server from your computer with the instructions above.
- Determine your computer's IP address with `ipconfig` (Windows), `ifconfig` (MacOS), or `ip` (Linux).
- Under the `en0` section, look for a `10.X.X.X` number and remember it.
- Make sure that your device is connected to the same network as the computer that's running the server
- Type `http://<10.X.X.X>:<port>/[route]` (e.g. http://10.0.0.4:3000/) in a browser tab on the device.

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.
If you have little to no experience with Github we suggest you [check this video](https://www.youtube.com/watch?v=iv8rSLsi1xo), it outlines the basics you need to get started.

## General Pull Request

Here are the simplified steps for an issue/feature related pull request:

- Find an issue or a feature that you would like to add.
- Fork the repository and find it under `your-username/rungeon`
- Clone the repo to your local machine via `git clone https://github.com/devkennyy/rungeon.git`
- Create a new branch for your fix by running `git checkout -b branch-name`
- Modify the code for your issue/feature.
- Add and commit the changes `git commit -am "changes made"`
- Submit your pull request.

## Stage Pull Request

Here are the simplified steps for an issue/feature related pull request:

- Understand how you want the stage to work and the stage number.
- Find an icon that will fit your stage [here](https://fontawesome.com/v5/cheatsheet/free/solid).
- Fork the repository and find it under `your-username/rungeon`
- Clone the repo to your local machine via `git clone https://github.com/devkennyy/rungeon.git`
- Create a new branch for your stage by running `git checkout -b stage-number`
- Start by copy pasting this stage template before the `stage_end` div:

```html
<div id="stage_z" class="stage d-flex flex-column flex-nowrap vh-100 d-none">
  <div
    id="stage_z-icon"
    class="icon fas fa-icon fa-3x align-self-center"
    onclick="Stage_Specific_Function"
  ></div>
  <h1>First line</h1>
  <p>Second line</p>
  <div class="d-flex justify-content-center">
    <button class="btn btn-danger me-5" onclick="Previous_Stage(z)">
      Return
    </button>
    <button
      id="stage_z-btn"
      class="btn btn-primary"
      disabled
      onclick="Next_Stage(z)"
    >
      Continue
    </button>
  </div>
</div>
```

- Replace instances of `z` with your stage number (previous stage + 1)
- Edit the h1, paragraph, and icon text as you see fit. (e.g fa-egg, fa-monkey).
- Be sure to increment the `totalStages` variable (previous count plus 1).
- If your stage requires a unique function create one in `main.js`.
- Revert hidden elements within the `Reset_Stage` function.
- Test thoroughly and ensure the stage guidelines below.
- Add and commit the changes `git commit -am "describe changes"`
- Submit your pull request with screenshots.

## Guidelines

- Format your code with ESLint before submitting.
- Ensure your contributions are safe for work.
- Test your changes and ensure it works after clearing cache.

## ESLint

- Run the linter for a list of issues

```
npm run lint
```

- Run linter to automatically fix issues

```
npm run lint-fix
```

## Questions

If you had trouble understanding this guide or have a general question, [join the Discord](https://discord.gg/SFX2KSuzep) and I'll be happy to assist you.
