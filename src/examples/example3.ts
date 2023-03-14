import * as express from "express";
import { Config } from "../config"
import { IExample } from "../core/base";

export class Example3 extends IExample {
    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        var app = express()

        // 使用 params 取得指定路徑的參數.
        // 如果是用params的方式去定義參數的時候，其Url就一定要輸入對應的參數，不然會找不到網址.
        // using url: http://localhost:3001/page/ricky
        app.get('/page/:name/:other_params', function (request, response) {
            let params = request.params.name;
            let other_params = request.params.other_params;
            console.log(`the url params ':name' is ${params}`);
            console.log(`the url params ':other' is ${other_params}`);

            if (params !== "ricky") {
              response.send(`<h1>param is Not Found</h1>`);
            } else {
              response.send(`<h1>param is ${params}, and other_params (${other_params}) </h1>`);
            }
        })

        // 透過 query 取得網址參數.
        // 如果是透過query的方式去定義參數，其Url在帶入參數的時候，不一地要帶入全部.
        // using url: http://localhost:3001/page2/ricky?limit=99&key_name=Orz
        app.get("/page2/:name", (request, response) => {
            let params = request.params.name;
            let limit = request.query.limit;
            console.log(`the url query limit is ${limit}`); // 網址帶入的參數
            let key_name = request.query.key_name;
            console.log(`the url query key_name is ${key_name}`); // 網址帶入的參數
            response.send(
              `<h1>${params} 的播放清單</h1>` +
              `<p>關鍵字為 ${key_name} 的資料中找出 ${limit} 資料 </p>`
            );
        });

        app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`)
        })
    }
}