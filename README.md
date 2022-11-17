# ChromeExtensionDevelopment

This is a boilerplate for chrome extension development with webpack and typescript.

## Getting Started

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Open chrome and go to `chrome://extensions`
5. Enable developer mode
6. Click on `Load unpacked` and select the `dist` folder
7. You should see the extension in your chrome browser
8. Make changes to the code and run `npm run build` to see the changes

## Directories and Files

- `public/` > You can put your static files here. They will be copied to the `dist` folder.
  - `manifest.json` > This is the manifest file for your chrome extension. You can change the name, description,
    icons, permissions, etc. here.
  - `[size].png` > These are the icons for your chrome extension. You can change them here.
- `src/` > Your codes in typescript must be in here.
  - `background.ts` > This is the background script for your chrome extension.
  - `content.ts` > You can manipulate the DOM of the current tab here.
  - `popup/`
    - `popup.ts` > This is the script for your popup.
    - `popup.html` > This is the html for your popup.
    - `popup.css` > This is the css for your popup.
  - `options/`
    - `options.ts` > This is the script for your options page.
    - `options.html` > This is the html for your options page.
    - `options.css` > This is the css for your options page.
  - `utils/` > You can put your utility functions here.
  - `types.ts` > You can put your types here. **I recommend use TypeSafe for actions like messaging between
    background.ts and content.ts.**

## Commands

```bash
    # Build the extension
    npm run build

    # Build the extension and watch for changes
    npm run start
```

## Recommendations

- Open a new tab and go to `chrome://extensions` and don't close this tab when developing.
- Start your development server with `npm run start`.
- When you make changes to your code, the dist folder will be updated. In the extensions tab, click on `Reload Icon` to
  see the changes.
- When you are done with your development, run `npm run build` to build the extension. You can then upload the `dist`
  folder to the chrome web store.

## Roadmap
- Babel Support
- SasS Support
