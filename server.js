const http = require("http"); //httpを読み込む requireで　httpでクライアントとサーバーをつなげる
const PORT = 8000;//8000をポートに指定。任意
const html = require("fs").readFileSync("./index.html"); //fsライブラリは、ファイルを処理するためのモジュール。readFileSync関数は、ファイルを非同期で読み込む関数

//webサーバーを作ろう
    //事前に用意してあるcreateServer関数を使用して、サーバーを作成。
    //req res の引数を受け取ることができる　req resはブラウザから受け取る
const server = http.createServer((req, res) => {

    //ブラウザからアクセスが来たときの処理
        ////200は成功　300問題　400クライアント側に問題があった。
        //writeHead()関数は、レスポンスがあった場合こういうヘッダー情報を返しますよ。
        //ヘッダー情報は、日本語なのか、htmlなのかなどの情報
        //write()関数　なにを書き込むのかを記述 body要素にhtmlを書く
        //end()で記述を終える
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(html)
    res.end();

    //お客さんがGETするのかPOSTするのかで処理を変えたりできる
    if (req.method == "GET") {
    }
    if (req.method == "POST") {
    }

});

//サーバーを起動
    //listen()関数でポート指定
    //PORT は港ってイメージ　どの港から見ますか？
    //server.listen(PORT);
server.listen(PORT, () => {
    console.log("server running!");
});