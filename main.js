const request = require("request");
const cheerio = require("cheerio");
let profiles = [
    "https://www.codechef.com/users/richaroy007",
    "https://www.codechef.com/users/mainaakch",
    "https://www.codechef.com/users/spaul_12",
    "https://www.codechef.com/users/sahadat_2002",
    "https://www.codechef.com/users/i_am_dumbbbb",
    "https://www.codechef.com/users/vedangc03",
    "https://www.codechef.com/users/maitisattwik",
    "https://www.codechef.com/users/alky_003",
    "https://www.codechef.com/users/hussain15527",
    "https://www.codechef.com/users/abhi_jitnag123",
    "https://www.codechef.com/users/soumi12",
    "https://www.codechef.com/users/fantacy123",
];
//iterating through all the profiles...
for (let i = 0; i < profiles.length; i++) {
    reqUser(profiles[i]);
}
function reqUser(link) {
    request(link, cb); // requesting server for html..
    function cb(error, callBack, html) {
        if (error) {
            console.log(error);
            return;
        }
        htmlHandler(html);
    }
}
//extracts details about the user....
function htmlHandler(html) {
    const $ = cheerio.load(html);
    let name = $("header h1").text(); // extracted name..
    let rating = $(".rating-number").text(); // extracted rating..
    let solved = $(".content h5");
    let fullySolved = $(solved[0]).text();
    let temp = fullySolved.split("(")[1];
    let number = temp.substring(0, temp.length - 1); // extraced number of problems solved..
    printDetails(name, rating, number);
}
//just to print things....
function printDetails(name, rating, number) {
    console.log("USER NAME:", name);
    console.log("USER RATING:", rating);
    console.log("NUMBER OF PROBLEM SOLVED", number);
    console.log(".........................................................");
}
