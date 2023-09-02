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
  static description = 'Live Reload listening on port 35729'
  server: any

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    port: Flags.string({description: 'Livereload port.', default: '35729'}),
    path: Flags.string({description: 'Paths to watch for changes.', required: true, multiple: true}),
    delay: Flags.string({description: 'Delay to wait before reloading.', default: '25'}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(LiveReload)
    const {port, path, delay} = flags

    const debouncedReload = debounce(this.reload.bind(this), Number.parseInt(delay, 10))

    this.server = tinylr({
      port: port,
    })

    this.server.listen(port, function () {
      console.log(`Live Reload listening on port ${pc.green(port)}`)
    })

    chokidar
    .watch(path, {ignoreInitial: true})
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

