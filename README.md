# roll20-api-boilerplate
Developing for the Roll20 API shouldn't make your eyes bleed. Develop your script commands using modern javascript, compile it down to something compatible for Roll20, and profit!

This tool will make a `!module` command available in the chat by default. you can change the command name in `./src/meta.js`.

The subcommands of your module can be found in `./src/commands`. The only command that is here by default is `!module help`. If you add more, be sure to both add a handler and a meta file, and register them in their appropriate indexes.

`debugLog` is a wrapper around `log` and `sendChat` that is dependent on the `debug` setting in `./src/meta.js`. This is, by design, very verbose. When you are ready to use your script without those logs, simply turn `debug` to false in the meta file, and you should be good to go.

**Note: you should never need to change what is in `./src/lib` unless you are developing on this tool in specific.**

***Note 2: I am not here to debug your roll20 scripts. I made this boilerplate so I could expedite my own development, and figured it could help other folk too, hence opening the source. Do not open issues here related to your own scripts, or scripts you make using this boilerplate, they will be summarily closed. If you have issues with this boilerplate in its current unaltered form, or have suggestions or PRs, those are welcome.***

## Prerequisites
- Node
- Yarn (or NPM)

Once you've cloned the repo, run the following to install the dependencies:

```
yarn
```

## Development
To develop, run the following:

```
yarn dev
```

This will start rollup in watch mode. Any changes made to the files in the `./src` directory will automatically be built into the `./build` directory.

## Build
To build without watching for changes, run

```
yarn build
```

This will run rollup once, which is good for small, predefined changes.

## Use in Roll20

After building or developing, you can find the compiled code in `./build/bundle.js`. Copy the contents of that file into the editor in your campaign (https://app.roll20.net/campaigns/scripts/<GAME_ID_HERE>)

Reset your sandbox, and enjoy your new commands!