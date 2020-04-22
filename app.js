const axios = require('axios');
const cheerio = require('cheerio');
var fs = require('fs');

let getTestCaseFromProblemHtml = (dir, html) => {
    fs.copyFileSync(`${dir}/../skeleton.cpp`, `${dir}/sol.cpp`);
    data = []
    const $ = cheerio.load(html);
    $('div .input').each((i, element) => {
        data[i] = {
            ...data[i],
            input : $(element).find('pre').text(),
        };
    });
    $('div .output').each((i, element) => {
        data[i] = {
            ...data[i],
            output : $(element).find('pre').text(),
        };
    });
    data.forEach((elem, i) => {
        fs.writeFile(`${dir}/in${i}.txt`, elem.input, function(err){
            if (err) {
                console.log(err);
            }
            else console.log(`${dir}/in${i}.txt was successfully saved`)
        });
        fs.writeFile(`${dir}/out${i}.txt`, elem.output, function(err){
            if (err) {
                console.log(err);
            }
            else console.log(`${dir}/out${i}.txt was successfully saved`)
        });
    })
}

function getTestCaseFromProblemUrl(url) {
    let dir = `./task${url.substring(url.lastIndexOf('/')+1)}`;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    axios.get(url) 
    .then(response => {
        getTestCaseFromProblemHtml(dir, response.data);
    })
    .catch(err => console.log(err));
}

let getTotalProblemsFromContestHtml = (html) => {
    data = [];
    const $ = cheerio.load(html);
    $('tr td.id a').each((i, elem) => {
        problemurl = 'https://codeforces.com/' + $(elem).attr('href')
        getTestCaseFromProblemUrl(problemurl);
    });
}

axios.get(process.env.cf_contest)
    .then(response => {
        getTotalProblemsFromContestHtml(response.data);
    })
