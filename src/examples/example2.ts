import * as express from "express";
import { Config } from "../config"
import { IExample } from "../core/base";

export class Example2 extends IExample {
    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express()

        // using middleware.
        app.use(express.urlencoded({
            extended: false
         }))

        // autocomplete 設定為 “off”，以避免瀏覽器自動填入資料.
        app.get('/', function (req, res) {
          res.send(`
            <form action="/answer" method="POST">
            <p>猜猜看，我喜歡什麼顏色的衣服？</p>
            <input name="preferColor" autocomplete="off">
            <button>送出</button>
            </form>`)
        })

        // preferColor為Html在打Post的時候帶過來的參數.
        app.post('/answer', function (req, res) {
            if (req.body.preferColor == "紅色") {
                res.send("答對了，你真暸解我")
            } else {
                res.send("對不起，不是這個答案")
            }
            res.send("感謝送出表單")
        })

        app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`)
        })
    }
}