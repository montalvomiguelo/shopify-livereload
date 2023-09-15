import {Command, Flags} from '@oclif/core'
import chokidar from 'chokidar'

const tinylr = require('tiny-lr')

const debounce = <T extends (...args: any[]) => void>(callback: T, time: number): (...args: Parameters<T>) => void => {
  let timer: ReturnType<typeof setTimeout> | null
  return (...args: Parameters<T>) => {
    if (timer !== null) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      callback(...args)
    }, time)
  }
}

export default class LiveReload extends Command {
  static description = 'LiveReload plugin for Shopify'
  server: any

  static flags = {
    port: Flags.string({description: 'LiveReload port.', default: '35729'}),
    watch: Flags.string({description: 'Path to watch for changes (Multiple flags allowed).', required: true, multiple: true}),
    delay: Flags.string({description: 'Delay in ms to wait before reloading.', default: '25'}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(LiveReload)
    const {port, watch: paths, delay} = flags

    const debouncedReload = debounce(this.reload.bind(this), Number.parseInt(delay, 10))

    this.server = tinylr({
      port: port,
    })

    this.server.listen(port, function () {
    // eslint-disable-next-line unicorn/escape-case, unicorn/no-hex-escape
      console.log('\x1b[33m%s\x1b[0m %s %s', '*', 'LiveReload is listening on port', port)
    })

    chokidar
    .watch(paths, {ignoreInitial: true})
    .on('add', debouncedReload)
    .on('change', debouncedReload)
  }

  reload(path: string): void {
    // eslint-disable-next-line unicorn/escape-case, unicorn/no-hex-escape
    console.log('  \x1b[38;5;244m%s %s\x1b[0m %s \x1b[38;5;244m%s %s\x1b[0m', '\u2022', timestamp(), 'Reloading', '\u00BB', path)
    this.server.changed({
      body: {
        files: [path],
      },
    })
  }
}

function timestamp() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}
