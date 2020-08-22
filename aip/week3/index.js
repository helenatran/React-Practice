const express = require('express');
const app = express();
const port = 3000;

const thresholds = {
    0: 'suitable for all purposes',
    10: 'suitable for internal use and official reports',
    14: 'appropriate only for internal use'
};

function checkLanguageComplexity(req, res) {
    if (req.query.value) {
        // eliminate excess whitespace if the user uses two spaces at the end of each sentence
        let cleaned = req.query.value.replace(/  /g, " ");
        // split string into sentences (delimited by full stop)
        let sentences = cleaned.split(".");
        // split string into individual words
        let words = cleaned.split(" ");
        // calculate readability score
        // this formula is based on Wikipedia article ......
        let score = 4.71 * (cleaned.length / words.length) +
            0.5 * (words.length / (sentences.length - 1)) - 21.43;

        // find the highest policy threshold less than the score .....
        let policy;
        for (let threshold in thresholds) {
            if (score > threshold) {
                policy = thresholds[threshold];
            }
        }

        res.send(
            `<p>Your writing is at a grade level of ${score}</p>
                <p>According to company policy, this is ${policy}</p>`
        );
    } else {
        res.send(
            `<p>Paste your writing here:</p>
                <form>
                <textarea name="value" autofocus></textarea>
                <input type="submit" value="Evaluate"/>
                </form>`
        );
    }
}


app.get('/', checkLanguageComplexity);
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`)
});
