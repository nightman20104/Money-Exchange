// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var x10000 = {
    error: "You are rich, my friend! We don't have so much coins for exchange"
  };
  var obj0 = {};

  var objectResult = {};

  if (currency <=0){
    return obj0;
  }

  else if (currency > 10000) {
    return x10000;
  }

  else if (0<currency<=10000) {

 if (currency>=50){
    var coin50 = Math.floor(currency/50);
    var ostatok = currency%50;
    if (coin50) {
      objectResult.H = coin50;
    }
    var ostatok = ostatok%50;
 }
 else{
   var ostatok=currency;
 }
 if (ostatok>=25){
    var coin25 = Math.floor(ostatok/25);
   }
    if (coin25) {
      objectResult.Q = coin25;
    }
    var ostatok = ostatok%25;
 }
 if (ostatok>=10){
    var coin10 = Math.floor(ostatok/10);
    if (coin10) {
      objectResult.D = coin10;
    }
    var ostatok = ostatok%10;
 }
 if (ostatok>=5){
    var coin5 = Math.floor(ostatok/5);
    if (coin5) {
      objectResult.N = coin5;
    }
    var ostatok = ostatok%5;
 }
 if (ostatok>=1){
    var coin1 = Math.floor(ostatok/1);
    if (coin1) {
      objectResult.P = coin1;
    }
 }

  return objectResult;
}
