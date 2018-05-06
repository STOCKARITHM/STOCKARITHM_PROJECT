function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

var query = document.getElementById("symbol").value;
var qs = parse_query_string(query);
var sym = qs.symbol.toUpperCase();

function getQuote(string) {
  var str1 = "https://api.iextrading.com/1.0/stock/";
  var str2 = "/quote";
  var fullString = str1.concat(string, str2);
  return fullString; 
};

function getLogo(string) {
  var str1 = "https://api.iextrading.com/1.0/stock/";
  var str2 = "/logo";
  var fullString = str1.concat(string, str2);
  return fullString; 
};

var company, sector, price, change, stockLogo;
$.ajax({
  url: getQuote(sym),
  async: false,
  dataType: 'json',
  success: function (json) {
      company = json.companyName;
      sector = json.sector;
      price = json.latestPrice.toFixed(2);
      change = json.change;
  }
});

$.ajax({
  url: getLogo(sym),
  async: false,
  dataType: 'json',
  success: function (json) {
      stockLogo = json.url;
  }
})