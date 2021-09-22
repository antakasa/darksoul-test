# Dataviz starter kit

Powered by [Parcel v2](https://v2.parceljs.org/).

- Automates the boring stuff: Fynd hooks etc.
- Deploy your project to lusi-dataviz S3 bucket with one command.
- `postcss-prefix-selector` - CSS selectors get `[data-yle-vis-id="YOUR_APP_NAME"]` prefix.
- `autoprefixer` - vendor prefixes added according to predefined settings.
- Use modern Javascript features. Build files will be transpiled to support older browsers.
- Common web technologies such as Typescript, SASS, LESS, React/Vue, CSS Modules etc. should work either out of the box or with minor changes – please refer to [Parcel v2 docs](https://v2.parceljs.org/) for more info.

## Prerequisities

- Node 14.
- In order to push your app to S3, AWS Cli and Yle AWS credentials with `lusi-aws-yle` account are required. Create credentials by following [Yle's instructions](https://github.com/Yleisradio/wiki/wiki/01-Credentials). AWS Cli installation is also detailed in [Yleisradio wiki](https://github.com/Yleisradio/wiki/wiki/05-Tools#aws-cli).

### Create access token for GitHub packages

Create a GitHub access token with `read:packages` permission. See [instructions for creating a token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token).

Create `~/.npmrc` file by replacing `TOKEN` with your personal access token:

```rc
@yleisradio:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=TOKEN
```

## Getting started

```bash
git clone git@github.com:Yleisradio/lusi-dataviz-starter-kit.git [your-project-name]
cd [your-project-name]
rm -rf .git
git init
npm install
```

After install, open `package.json` and change the `name` property. This is important because it gives an unique identifier to your project which is used to create S3 directory, prefix CSS selectors etc.

Start the dev environment by running `npm start`.

Use `src/index.js` as the entry point for your project.

In dev environment you can pass parameters for the visualisation using query parameters (eg. <http://localhost:1234/?key=value>).

## Styling

Per default, all selectors in CSS files are prefixed.

```css
.hello {
  font-size: 3em;
}
```

becomes to

```css
[data-yle-vis-id='YOUR_APP_NAME'] .hello {
  font-size: 3em;
}
```

Vendor prefixes are added by Autoprefixer.

```css
::placeholder {
  color: gray;
}
```

becomes

```css
::-webkit-input-placeholder {
  color: gray;
}
:-ms-input-placeholder {
  color: gray;
}
::-ms-input-placeholder {
  color: gray;
}
::placeholder {
  color: gray;
}
```

## Build & Deploy

```bash
npm run build
```

- Creates static html site to `build` folder.
- Creates `conf.json` and `dataviz.html` and puts them to `build`

```bash
npm run deploy
```

- Runs npm run build (see above)
- Syncs build folder to `https://lusi-dataviz.ylestatic.fi/$npm_package_name/` where $npm_package_name is the name of the project. You can paste this URL to yle visualisation node.

### externalContent

To declare that your dataviz supports Yle's applications edit your `package.json` file and set `yleDataviz.externalContent` to `true`:

```json
{
  "yleDataviz": {
    "externalContent": true
  }
}
```

When this configuration is present, and the value equals `true` the `npm run deploy` command adds the
corresponding property to the generated conf.json.

## Share API

### Link example

`https://share.api.yle.fi/share/varipeli/12.html?url=aihe/ihmeelliset-aivot/varipeli`

### Command examples

1. list all configs

`yle asu lusi-aws-yle "aws s3 ls s3://lusi-dataviz-prod/share_configs/"`

2. download single config

`yle asu lusi-aws-yle "aws s3 cp s3://lusi-dataviz-prod/share_configs/2021_varipeli.json ."`

3. Upload config (JSON)

`yle asu lusi-aws-yle "aws s3 sync . s3://lusi-dataviz-prod/share_configs --exclude='*' --include='filename.json'"`

4. Check created HTML of uploaded config

`yle asu lusi-aws-yle "aws s3 ls s3://lusi-dataviz-prod/share/varipeli/"`

5. Download HTML files (e.g. for previewing purposes) to current directory

`yle asu lusi-aws-yle "aws s3 cp s3://lusi-dataviz-prod/share/varpeli/ . --recursive"`

## JSON example

```json
[
  {
    "id": "0",
    "image": "https://lusi-dataviz.ylestatic.fi/2021-varipeli/varipeli.jpg",
    "title": "Sain 0 pistettä - Olisi ehkä syytä tyhjentää työmuisti?",
    "description": "Kokeile miten itse pärjäät Yle Oppimisen Väripelissä!"
  },
  {
    "id": "1",
    "image": "https://lusi-dataviz.ylestatic.fi/2021-varipeli/varipeli.jpg",
    "title": "Sain yhden pisteen - Olisi ehkä syytä tyhjentää työmuisti?",
    "description": "Kokeile miten itse pärjäät Yle Oppimisen Väripelissä!"
  },
  ...
]
```

## Yle Player

Fynd and Synd have Yle Player v2 under the hood, and you can use the dynamic embed (see more [here](https://github.com/Yleisradio/player-static/wiki/Player-embed-instructions)) with the `embedYlePlayer` helper function:

```js
yleVisualisation.embedYlePlayer(root, '1-12345678', { playFullScreen: true });
```

The `root` should be an empty div or similar and `id` has to be a string in form `"1-12345678"`. Both are required.

**options** is a non-required object where following properties could be declared:

- **verticalVideo** boolean,
- **autoplay** boolean
- **seek** number in seconds
- **playFullScreen** boolean
- **onPlayerReady** function

For more information about the player, please have a look at [Yle Player Docs](https://github.com/Yleisradio/player-static/wiki/Player-embed-instructions)

## Yle Analytics

Yle Analytics SDK is available via global object `window.yleAnalytics`. To read more about yleAnalytics SDK in Finnish, see [documentation](http://chili.yle.fi/confluence/display/YLEWEB/Yle+Analytics+SDK).

Moreover, `yleVisualisation.trackEvent()` works the same way as [yleAnalytics.trackEvent](<http://chili.yle.fi/confluence/display/YLEWEB/Yle+Analytics+SDK#YleAnalyticsSDK-yleAnalytics.trackEvent(eventName[,settings])>).

```js
yleVisualisation.trackEvent('my-event-name-prefix.my-vis-was-loaded');
```
