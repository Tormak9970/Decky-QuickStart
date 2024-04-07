# Decky QuickStart Template

A modified version of the [Decky Plugin Template](https://github.com/SteamDeckHomebrew/decky-plugin-template) that helps you get up and running faster, and includes a variety of quality of life changes.


## Features
 - Global state, backend interop, logging, and intialization are all already set up.
 - Automatic changelog generation and plugin building with GitHub Actions.
 - Intuitive project structure.
 - Helpful comments throughout.


## Examples of Plugins Made with QuickStart

<!-- TODO -->


## Testing on Your Steamdeck

### Setup
1. Install the recommended VSCode extensions for this repository
2. Enable SSH on your steamdeck. I recommend [this](https://shendrick.net/Gaming/2022/05/30/sshonsteamdeck.html) guide. I also find that automatically starting the ssh server is incredibly useful during dev
3. Get your deck's ip address with `hostname -I` or in the settings in game mode
4. In VSCode, go to the `Remote Explorer` tab, and add a new target. Enter `your_deck_user@ip_address` in the field, and then connect with your sudo password
5. Once you've connected, open the Desktop directory of your Steamdeck (you'll need to enter your password again)
6. (**Optional**) make a directory to store your in dev plugins in (ex: I made a dev-plugins directory)
7. Run `sudo ln -S ~/homebrew/plugins/YourPluginName ~/Desktop/dev-plugins/YourPluginName` (This is to avoid having to authenticate every time you edit your plugin)

### Deploying
1. In your plugin directory (on your machine), run `pnpm build`
2. Copy `plugin.json`, `package.json`, `LICENSE`, `main.py` into the directory on your Steamdeck you made earlier
3. Copy `dist/index.js` into the same directory (it should look like `~/Desktop/dev-plugins/YourPluginName/dist/index.js`)
4. If you have files in `./defaults`, copy those into the directory as well (ex: `./defaults/docs` becomes `~/Desktop/dev-plugins/YourPluginName/docs`)
5. Run `sudo systemctl restart plugin_loader` on your deck


## Debugging

<!-- TODO: checking log files -->
<!-- TODO: CEF https://wiki.deckbrew.xyz/en/plugin-dev/cef-debugging -->


## Your TODO:
 - package.json
   - [ ] Change the plugin name
   - [ ] Change the the author name
   - [ ] Change the description
   - [ ] Change all git urls
   - [ ] Change the keywords
 - plugin.json
   - [ ] Change the plugin name
   - [ ] Change the the author name
   - [ ] Change description
   - [ ] Change the tags
 - src/index.tsx
   - [ ] Change the display name on line #48
 - src/components/QuickAccessContent.tsx
   - [ ] Change `QuickStart` on line line #30
   - [ ] Change the Git and Discord Urls starting on line #35
 - src/components/styles/QamStyles.tsx
   - [ ] Change all instances of `quick-start` to your plugin's name
 - src/lib/PluginController.tsx
   - [ ] Change the name and color used for the Logger on line #24
 - main.py
   - [ ] Change the name `QuickStart` on line #109
   - [ ] Define your settings getters on line #47
   - [ ] Define your settings setters on line #65
   - [ ] Load your settings initially on line #61
 - .github/workflows/release.yml
   - [ ] replace `QuickStart` with your plugin's name on line #49
   - [ ] replace `QuickStart` with your plugin's name on line #82
   - [ ] replace `QuickStart` with your plugin's name on line #136
   - [ ] replace `QuickStart` with your plugin's name on line #152
   - [ ] replace `QuickStart` with your plugin's name on line #163
 - Remove any files you dont need


## Publishing
 1. Create a logo and place it in `./assets/`. (I recommend overlaying it over a screenshot of the plugin)
 2. Fork [decky-plugin-database](https://github.com/SteamDeckHomebrew/decky-plugin-database/fork) and make a new branch with the name of your plugin
 3. Open up your fork on your computer, and add your plugin as a Git Submodule (see below)
 4. Push the changes
 5. Make a Pull Request to the `decky-plugin-database` repository


## Updates
 1. Sync the branch of your `decky-plugin-database` fork
 2. Open up your fork on your computer, and update the Git Submodule for your plugin (see below)
 3. Push the changes
 4. Make a Pull Request to the `decky-plugin-database` repository


## Good Practices
 - All custom styling rules should be wrapped in a scoping class with the name of your plugin in it
 - Use Decky Frontend Lib (DFL) where ever possible, to reduce maintenance required for your plugin.
 - Notify users when errors occur


## Some Additional Tips
 - Validate your settings after they are loaded on the frontend, sometimes weird things happen to your settings file
 - Always define fallbacks for settings when loading them


## Adding a Git Submodule
 1. git submodule add `<plugin git url>` "plugins/YourPluginName"
 2. git submodule update --init "plugins/YourPluginName"


## Updating a Git Submodule
 1. git submodule update --init "plugins/YourPluginName"
 2. git submodule update --remote "plugins/YourPluginName"


## Licensing
 - This program is licensed under the [GNU General Public License Version 3](https://www.gnu.org/licenses/#GPL) and [BSD 3-Clause License](https://opensource.org/license/bsd-3-clause/) <br/>
