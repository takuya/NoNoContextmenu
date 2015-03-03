// ==UserScript==
// @name        フォームをエンターキーで送信できないとか頭いいな。
// @match https://direct.jp-bank.japanpost.jp/*
// ==/UserScript==

document.body.appendChild(function(){
  sc = document.createElement("script");
  var code = function(){
    event_function_names = ["onsubmit"];
    //右クリック対策
    // document/ document.body に埋め込まれるのも嫌だ。 
    Array.apply(null,document.querySelectorAll("form")).forEach(function(e){
      event_function_names.forEach(function(e_name){e[e_name]=undefined})
    })

  }
  src = "("+code.toString()+")()"
  sc.type="text/javascript";
  sc.text=src
  return sc;
}()
);


