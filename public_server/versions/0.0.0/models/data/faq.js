// NOTE: models have to use ES5 "require" and "module.exports"
// Probably ES6 module-structure can"t handle Promises?

"use strict";

/**
 * Faq-data for the ezhome.io site.
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module models/data/faq.js
 * @class DataFaq
 * @since 2.0.0
*/

/**
 * When fulfilled, the promise returns an array with faq categories,
 * which are objects, holding the category"s questions and answers.
 *
 * @property faq
 * @type Promise
 * @since 2.0.0
*/

// In reality, these values should be read from a db

const faq = Promise.resolve([
    {
        name: "General",
        slug: "general",
        icon: "ezh-button-list-icon-faq-general",
        questions: [
            "How does technology help gardening?",
            "Why does ezhome have gardeners as employees vs contractors?",
            "Is ezhome insured?",
            "Do you have a referral program?",
            "Does ezhome service commercial properties?",
            "Will my gardener be the same every visit?",
            "Is ezhome more expensive than my current service?",
            "What is the best way to contact ezhome?"
        ]
    },
    {
        name: "Getting Started",
        slug: "getting-started",
        icon: "ezh-button-list-icon-faq-getting-started",
        questions: [
            "How do you determine my service cost?",
            "Why do you need to take photos of my garden?",
            "How long after I sign-up online does my service start?",
            "How long is a typical service visit?",
            "Why would I need an initial clean-up?",
            "I don\"t need my lawn mowed. How will this change my price?",
            "I have turf instead of lawn, how will this change my price?"
        ]
    },
    {
        name: "Maintenance",
        slug: "maintenance",
        icon: "ezh-button-list-icon-faq-maintenance",
        questions: [
            "What gardening tasks are included in your service?",
            "How should I select between Weekly and Bi-Weekly service?",
            "What if I want organic fertilizers and weed control?",
            "Can you use an electric blower at my home?",
            "Are there tasks I should not ask gardeners to do?",
            "How will you dispose of debris?",
            "I don\"t have a lawn anymore, what service will ezhome provide?",
            "Will ezhome service my flower beds, flower pots, and vegetable beds?"
        ]
    },
    {
        name: "Enhancements",
        slug: "enhancements",
        icon: "ezh-button-list-icon-faq-enhancements",
        questions: [
            "What type of projects does ezhome provide?"
        ]
    },
    {
        name: "Scheduling",
        slug: "scheduling",
        icon: "ezh-button-list-icon-faq-scheduling",
        questions: [
            "When is ezhome open for service?",
            "Do I need to be home for your scheduled visits?",
            "When will the gardeners arrive?",
            "I prefer service on Wednesdays, can you accommodate my preference?",
            "Will I still get service when it rains or shortly after it rains?",
            "After I start service, can I change from Bi-Weekly to Weekly service or add more services?",
            "I am going on vacation, can I put my services on hold for a couple of weeks?",
            "Can my dog be in the yard while the gardener is there?"
        ]
    },
    {
        name: "Billing",
        slug: "billing",
        icon: "ezh-button-list-icon-faq-billing",
        questions: [
            "How can I pay for ezhome?",
            "Is my credit card information safe?",
            "When and how will I be billed for ezhome services?",
            "What is your cancellation/refund policy if I need to discontinue service?"
        ]
    },
    {
        name: "Best Practices",
        slug: "best-practices",
        icon: "ezh-button-list-icon-faq-best-practices",
        questions: [
            "How long do I need to keep my kids/animals away after your weed spray application?",
            "When is the best time of year for irrigation checks?",
            "When is the right time to prune my trees and shrubs?",
            "What is the benefit of mulch in my planting bed? How much mulch is needed?",
            "What are the benefits of aeration and when should it be done?"
        ]
    }
]);

module.exports = faq;
