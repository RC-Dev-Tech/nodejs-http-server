import { Config } from "./config"
import { IExample } from "./core/base";
import { NetWork } from "./core/network"
import { Example1 } from "./examples/example1";
import { Example2 } from "./examples/example2";

export class App {
    private exsample_mode: number = -1;

    constructor () {
      this.exsample_mode = Config.getInstance().getParam ("exsample_mode");
    }

    run () {
      var example: IExample = null;
      switch(this.exsample_mode) {
        case 1: example = new Example1(); break;
        case 2: example = new Example2(); break;
      }

      if(example) {
        NetWork.getInstance().run(example);
      }
    }
}