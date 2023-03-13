import * as express from "express";
import * as path from "path";
import { Config } from "../config"
import { Logger } from "../common/logger";

export class NetWork {
    private static instance : NetWork;
    private socket_io: any;
    private sockets: any[] = [];

    static getInstance () : NetWork {
        if (!NetWork.instance){
            NetWork.instance = new NetWork ();
        }
        return NetWork.instance;
    }

    get SocketIO (): any {
        return this.socket_io;
    }

    public getSocket(socket_id: string): any {
        Logger.Info(`getSocket socket_id - ${socket_id}`);
        for (let socket of this.sockets) {
            if(socket.id === socket_id) {
                return socket;
            }
        }
    }
    public run() {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express()
        app.get('/', function (req, res) {
        res.send('Hello World!')
        })

        app.listen(port, function () {
        console.log('Example app listening on port 8000!')
        })
    }
}