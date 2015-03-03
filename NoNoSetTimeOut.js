// ==UserScript==
// @name        銀行の右クリック対策、対策
// @match https://*.jibunbank.co.jp/*
// ==/UserScript==


document.body.appendChild(function(){
  sc = document.createElement("script");
  var code = function(){
    window.setTimeout=function(){ return ( Math.floor( Math.random() * (max - min + 1) ) + min) } 
    window.clearTimeout=function(){  } 
    //じぶん銀行対策
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

