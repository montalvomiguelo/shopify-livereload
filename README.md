Shopify oclif LiveReload Plugin
=================

The Shopify oclif LiveReload Plugin is designed to enhance your development experience within the Shopify Theme Editor. It integrates seamlessly with the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli), allowing you to reload the page automatically when file changes are detected.

## Installation

```bash
shopify plugins:install shopify-plugin-livereload
```

## Usage

### Starting the LiveReload Server

To start the LiveReload server, use the following command:

```bash
shopify livereload --watch /tmp/theme.update --delay 1600
```

### Theme Development with LiveReload

Integrate LiveReload into your theme development workflow in the Shopify CLI:

```bash
shopify theme dev --notify /tmp/extension.update
```

### Install LiveReload.js

Add the following code just before the closing `</body>` tag within your layout file. Alternatively, you can use
the [LiveReload Chrome plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).

```html
<script src="http://localhost:35729/livereload.js"></script>
```

## Command

```bash
USAGE
  $ livereload --watch <value> [--port <value>] [--delay <value>]

FLAGS
  --delay=<value>     [default: 25] Delay to wait before reloading.
  --port=<value>      [default: 35729] LiveReload port.
  --watch=<value>...  (required) Paths to watch for changes.

DESCRIPTION
  LiveReload plugin for oclif
```

## License
Made with ❤️

Published under [MIT License](./LICENSE).

