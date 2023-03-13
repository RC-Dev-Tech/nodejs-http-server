import { Config } from "./config"
import { NetWork } from "./core/network"
import { Logger } from "./common/logger"

export class App {
    private env : string = "";

    constructor ()
    {
      const env = Config.getInstance().getParam ("environment");
      this.env = env;
    }

    async run () {
      Logger.Info(`App-Env Run ${this.env} Version.`)
      NetWork.getInstance().run();
    }
}