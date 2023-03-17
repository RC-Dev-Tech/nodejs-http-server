import * as express from "express";
import { Config } from "../config"
import { IExample } from "../core/base";

export class Example1 extends IExample {
    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express()

        // 基本用法.
        // test url: http://localhost:3001/
        app.get('/', function (req, res) {
           res.send('Hello World!')
        })

        app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`)
        })
    }
}