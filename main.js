const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://playoverwatch.com/en-us/career/pc/' + "Third-21930"; // battletag

rp(url).then(function(html){
    var $ = cheerio.load(html);

    var data = {}
    var index = "";

    $('.DataTable-tableBody>.DataTable-tableRow>.DataTable-tableColumn').each(function(i,e){
        var value = $(this).text().trim();
        if (i%2 == 0){
            index = value
        }else{
            data[index] = value;
            console.log(index + " = " + value);
        }
    })
}).catch(function(err){
    console.log(err)
});