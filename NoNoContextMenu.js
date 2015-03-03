// ==UserScript==
// @name        銀行の右クリック対策、対策
// @match https://*.jibunbank.co.jp/*
// @match https://*.shinseibank.com/*
// @match https://direct.jp-bank.japanpost.jp/*
// ==/UserScript==

document.body.appendChild(function(){
  sc = document.createElement("script");
  var code = function(){
    event_function_names = ["oncontextmenu","onmousedown","onmouseup","onkeydown"];
    //右クリック対策
    // document/ document.body に埋め込まれるのも嫌だ。 
    [document , document.body].forEach(function(e){
      event_function_names.forEach(function(e_name){e[e_name]=void(0)})
    })

    //HTMLソースに書かれてて要素に埋め込まれるのも嫌だ
		event_function_names.forEach(function(e_name){
		  Array.apply(null, document.querySelectorAll("*["+e_name+"]") ).forEach(function(e){if(e[e_name]){e[e_name]="return true;"}})
		})
    //
    //じぶん銀行の自動タイムアウト対策
    //あとで別の場所へ
    if(typeof fireTimeOut  != "undefined"){
      fireTimeOut = function(){}
      window.clearTimeout(temp_timer);
    }
  }
  src = "("+code.toString()+")()"
  sc.type="text/javascript";
  sc.text=src
  return sc;
}()
);


