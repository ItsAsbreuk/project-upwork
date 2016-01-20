// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * Model to retrieve "this.props" for the faq-view.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/faq.js
 * @class ModelFaq
 * @since 2.0.0
*/

require("js-ext/lib/promise"); // for Promise.finishAll support

let _allFaqData = {};

const REGEXP_FILENAME = /[^\w|-]/g,
    REGEXP_TRAILING_MINUS = /(-*)$/,
    REGEXP_MULTI_MINUS = /-(-+)/g;

const fsMD = require("itsa-react-fs-markdown")(__dirname); // <-- de huidige map moet worden doorgegeven als argument

/**
 * Holds the Faq from the file /models/data/faq.js
 *
 * @property FAQPromise
 * @type Promise
 * @since 2.0.0
*/
const FAQPromise = require("./data/faq");

/**
 * Holds the ezhome url's to facebook, twitter etc.
 *
 * @property ezhomeURLs
 * @type Object
 * @since 2.0.5
*/
const ezhomeURLs = require("./data/ezhome-links");

/**
 * Retrieves the answers for a specific faq,
 * by examine the corresponding markdown-file
 * within the directory: /markdowns/{lang}/faq/
 *
 * @method retrieveAnswer
 * @protected
 * @param question {String} the faq, which corresponds with should the filename
 * @return {Promise} A promise that holds the answer
 * @since 2.0.0
 */
const retrieveAnswer = (question, language) => {
    let filename, fullFilename;
    question || (question="");

    filename = question.replace(REGEXP_FILENAME, "-")
                       .replace(REGEXP_TRAILING_MINUS, "")
                       .replace(REGEXP_MULTI_MINUS, "-");
    fullFilename = "../markdowns/"+language+"/faq/" + filename.toLowerCase() + ".MD";

    return fsMD.readFile(fullFilename); // asynchronous Promise
};

/**
 * Retrieves all the answers for the FAQ"s, by examine the markdown-files
 * within the directory: /markdowns/{lang}/faq/
 *
 * @method retrieveAnswers
 * @protected
 * @param language {String} The language being used
 * @return {Promise} A promise holds all faq with the answers
 * @since 2.0.0
 */
const retrieveAnswers = language => {
    return FAQPromise.then(faq => {
        let allAnswers = [];

        faq.forEach(category => {
            category.answers = [];
            category.questions.forEach((question, i) => {
                allAnswers.push(
                    retrieveAnswer(question, language)
                    .then(answer => category.answers[i]=answer)
                    .catch(() => category.answers[i]="")
                );
            });
        });

        return Promise.finishAll(allAnswers)
                      .finally(() => faq);
    });
};

/**
 * Waits (and loads) all Faq-data.
 *
 * @method allDataPresent
 * @protected
 * @return {Promise} A promise that gets resolved as soon as all faq-data is retrieved
 * @since 2.0.0
 */
const allDataPresent = (language) => {
    _allFaqData[language] || (_allFaqData[language]=retrieveAnswers(language));
    return _allFaqData[language];
};

const model = (options, language) => {
    // this === request
    return allDataPresent(language)
           .then(FAQ => {
               return {
                   ezhomeURLs: ezhomeURLs,
                   faq: FAQ,
                   titleHeader: "Frequently Asked Questions"
               };
           })
           .catch(() => {
               return {
                   ezhomeURLs: ezhomeURLs,
                   faq: [],
                   titleHeader: "Frequently Asked Questions"
               };
           });
};

module.exports = model;
