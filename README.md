Shopify LiveReload Plugin
=================

The Shopify LiveReload Plugin is designed to enhance your development experience within the Shopify Theme Editor. It integrates seamlessly with the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli), allowing you to reload the page automatically when file changes are detected.

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

Serve your theme and provide the `--notify` flag with a file path you want to update when the workers have gone idle.

```bash
shopify theme dev --notify /tmp/theme.update
```

### Install LiveReload.js

Add the following code just before the closing `</body>` tag within your layout file. Alternatively, you can use
the [LiveReload Chrome plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).

```html
<script src="http://localhost:35729/livereload.js"></script>
```

## Command

```
USAGE
  $ shopify livereload --watch <value> [--port <value>] [--delay <value>]

FLAGS
  --delay=<value>     [default: 25] Delay to wait before reloading.
  --port=<value>      [default: 35729] LiveReload port.
  --watch=<value>...  (required) Paths to watch for changes.

DESCRIPTION
  LiveReload plugin for Shopify
```

## License
Made with ❤️

Published under [MIT License](./LICENSE).
