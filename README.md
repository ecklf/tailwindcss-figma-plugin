# TailwindCSS Figma Plugin &middot; ![CI](https://action-badges.now.sh/impulse/tailwindcss-figma-plugin) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/impulse/tailwindcss-figma-plugin/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Making your life with Tailwind CSS and Figma easier.

![plugin banner](./images/banner.png)

## Usage

1. Generate a resolved TailwindCSS config (make sure dependencies are installed)

   ```sh
   $ cd yourtailwindproject/
   $ npx tailwind.json
   ```

2. Drag the generated `tailwind.json` in the plugin.
3. Done!

## Setup

This Plugin will only work when running within Figma since it relies on its API.

Go to the Plugins tab and add this projects `manifest.json`. For more info read the [Figma docs](https://www.figma.com/plugin-docs/intro/)

1. Then, install your dependencies:

   ```sh
   $ yarn install
   ```

2. The config offers either a dev or build script

   ```sh
   $ yarn dev
   $ yarn build
   ```

## Hot Reloading (macOS only)

Not the smoothest experience, but at better than needing to press a hotkey. In case you use the Figma Beta change App name in `applescript.sh`.

```sh
  $ brew install modd
  $ cd tailwindcss-figma-plugin/
  $ modd
```

## License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KA95DEV"><img src="https://avatars1.githubusercontent.com/u/32483834?v=4" width="100px;" alt=""/><br /><sub><b>KA95DEV</b></sub></a><br /><a href="https://github.com/impulse/tailwindcss-figma-plugin/commits?author=KA95DEV" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/leinardi"><img src="https://avatars2.githubusercontent.com/u/273338?v=4" width="100px;" alt=""/><br /><sub><b>Roberto Leinardi</b></sub></a><br /><a href="#ideas-leinardi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/impulse/tailwindcss-figma-plugin/commits?author=leinardi" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
