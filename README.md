oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-livereload
$ oclif-livereload COMMAND
running command...
$ oclif-livereload (--version)
oclif-livereload/0.0.0 darwin-arm64 node-v18.16.1
$ oclif-livereload --help [COMMAND]
USAGE
  $ oclif-livereload COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-livereload hello PERSON`](#oclif-livereload-hello-person)
* [`oclif-livereload hello world`](#oclif-livereload-hello-world)
* [`oclif-livereload help [COMMANDS]`](#oclif-livereload-help-commands)
* [`oclif-livereload plugins`](#oclif-livereload-plugins)
* [`oclif-livereload plugins:install PLUGIN...`](#oclif-livereload-pluginsinstall-plugin)
* [`oclif-livereload plugins:inspect PLUGIN...`](#oclif-livereload-pluginsinspect-plugin)
* [`oclif-livereload plugins:install PLUGIN...`](#oclif-livereload-pluginsinstall-plugin-1)
* [`oclif-livereload plugins:link PLUGIN`](#oclif-livereload-pluginslink-plugin)
* [`oclif-livereload plugins:uninstall PLUGIN...`](#oclif-livereload-pluginsuninstall-plugin)
* [`oclif-livereload plugins:uninstall PLUGIN...`](#oclif-livereload-pluginsuninstall-plugin-1)
* [`oclif-livereload plugins:uninstall PLUGIN...`](#oclif-livereload-pluginsuninstall-plugin-2)
* [`oclif-livereload plugins update`](#oclif-livereload-plugins-update)

## `oclif-livereload hello PERSON`

Say hello

```
USAGE
  $ oclif-livereload hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/montalvomiguelo/oclif-livereload/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oclif-livereload hello world`

Say hello world

```
USAGE
  $ oclif-livereload hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oclif-livereload hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/montalvomiguelo/oclif-livereload/blob/v0.0.0/dist/commands/hello/world.ts)_

## `oclif-livereload help [COMMANDS]`

Display help for oclif-livereload.

```
USAGE
  $ oclif-livereload help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif-livereload.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.17/src/commands/help.ts)_

## `oclif-livereload plugins`

List installed plugins.

```
USAGE
  $ oclif-livereload plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oclif-livereload plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/index.ts)_

## `oclif-livereload plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif-livereload plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif-livereload plugins add

EXAMPLES
  $ oclif-livereload plugins:install myplugin 

  $ oclif-livereload plugins:install https://github.com/someuser/someplugin

  $ oclif-livereload plugins:install someuser/someplugin
```

## `oclif-livereload plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oclif-livereload plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oclif-livereload plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/inspect.ts)_

## `oclif-livereload plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif-livereload plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif-livereload plugins add

EXAMPLES
  $ oclif-livereload plugins:install myplugin 

  $ oclif-livereload plugins:install https://github.com/someuser/someplugin

  $ oclif-livereload plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/install.ts)_

## `oclif-livereload plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oclif-livereload plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ oclif-livereload plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/link.ts)_

## `oclif-livereload plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-livereload plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-livereload plugins unlink
  $ oclif-livereload plugins remove
```

## `oclif-livereload plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-livereload plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-livereload plugins unlink
  $ oclif-livereload plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/uninstall.ts)_

## `oclif-livereload plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-livereload plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-livereload plugins unlink
  $ oclif-livereload plugins remove
```

## `oclif-livereload plugins update`

Update installed plugins.

```
USAGE
  $ oclif-livereload plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
