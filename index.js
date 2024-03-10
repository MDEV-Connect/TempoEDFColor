fetch = require('node-fetch-commonjs');
module.exports.getTempoColor = async function () {
         const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        const goodformatdate = year + "-" + month + "-" + day;

        var response = await fetch("https://particulier.edf.fr/services/rest/referentiel/searchTempoStore?dateRelevant=" + goodformatdate);
        const body = await response.text();
        return JSON.parse(body);
}