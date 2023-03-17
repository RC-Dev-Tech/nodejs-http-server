import { Config } from "../config"
import { IExample } from "../core/base";

export class Example4 extends IExample {
    run(): void {
        const httpconf = Config.getInstance().get()["portal"];
        const port : number = httpconf ["port"];

        const app = require('express')()

        // Middleware 中間件 (通常會被使用管理流程的控制).
        // middleware是會按順序執行的，所以在設定app.use的時候，要注意上下的順序.
        // Express.js 傳入的 next 參數，表示「進行下一個流程」的意思，
        // 下面一個簡單的例子，當該流程的方法執行完之後，則進行下一個流程(這邊用nextFunc來示範).
        // test url: http://localhost:3001/hello
        app.get('/hello', function (req: any, res: any, next: any) {
            console.log(req.query);
            next();
        }, this.nextFunc);

        app.listen(port, function () {
           console.log(`Example app listening on port ${port}!`)
        })
    }
    
    nextFunc() {
        console.log(`the function is test.`);
    }
}