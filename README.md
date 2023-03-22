# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - Express 入門學習
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [操作說明](#操作說明)
* [切換範例](#切換範例)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---
<br>

## 簡介.
針對nodejs在使用express實作一些入門的範例.

---
<br>

## 操作說明.
#### 1. 安裝套件 [^1]
> npm install --save

#### 2. 編譯 & 運行
> npm run start

---
<br>

## 切換範例
> 編輯在app.json中的"exsample_mode"，填入的數字代表第幾個範例.

---
<br>

## 延伸項目
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---
<br>

## 參考資料
* [Example1 - Hello world example](https://expressjs.com/en/starter/hello-world.html) <br>
* [Example2 - 從一個實例看Express 的運作方式](https://medium.com/web-design-zone/%E5%BE%9Enode-js-%E5%BE%9E%E4%B8%80%E5%80%8B%E5%AF%A6%E4%BE%8B%E7%9C%8Bexpress-%E7%9A%84%E9%81%8B%E4%BD%9C%E6%96%B9%E5%BC%8F-7c61cdd477f5) <br>
* [Example3 - 路由設計](https://ithelp.ithome.com.tw/articles/10307712) <br>
* [Example4 - Middlware 觀念解說](https://www.jollen.org/blog/2013/11/expressjs-middleware.html) <br>
  > Express4 不在內建一些插件，而basicAuth就是其中之一. <br>
  > 其他方案 - [express-basic-auth](https://www.npmjs.com/package/express-basic-auth) <br>
* [RUNOOB - Node.js Express框架](https://www.runoob.com/nodejs/nodejs-express-framework.html) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---
## 備註：

[^1]: 在這個範例中我們需要安裝express，指令如下：<br>
`npm install express --save` <br>
因為這個套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好