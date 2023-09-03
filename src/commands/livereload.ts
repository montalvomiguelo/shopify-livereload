import {Command, Flags} from '@oclif/core'
import pc from 'picocolors'
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
      console.log(`LiveReload listening on port ${pc.green(port)}`)
    })

    chokidar
    .watch(paths, {ignoreInitial: true})
    .on('add', debouncedReload)
    .on('change', debouncedReload)
  }

  reload(path: string): void {
    console.log(`Reloading ${pc.green(path)}`)
    this.server.changed({
      body: {
        files: [path],
      },
    })
  }
}

