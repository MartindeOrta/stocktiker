let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElement = document.getElementById("stock-price");
let lastPrice= null;
ws.onmessage = (event) => {

    let stockObject = JSON.parse(event.data);
    console.log(stockObject.p);
    
        let price=parseFloat(stockObject.p).toFixed(2);
        stockPriceElement.innerText = "Precio Bitcoin a dolar: "+ price;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : lastPrice < price ? 'green' : 'red';
lastPrice= price;

}