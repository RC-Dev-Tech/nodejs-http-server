import { IExample } from "./base";

export class NetWork {
    private static instance : NetWork;

    static getInstance () : NetWork {
        if (!NetWork.instance){
            NetWork.instance = new NetWork ();
        }
        return NetWork.instance;
    }

    public run(example: IExample ) {
       example.run();
    }
}