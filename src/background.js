'use strict';

chrome.runtime.onInstalled.addListener(async () => {
    // TODO: Set a persistent variable 'name' and 'belongs' according to the setting info of optinos page
    // chrome.storage.sync.set({color: '#3aa757'}, function () {
    //     console.log("The color is green.");
    // });

    await chrome.declarativeContent.onPageChanged.removeRules(undefined);   // remove all rules
    await chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'mail.google.com'}
            })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});