chrome.tabs.onUpdated.addListener(function callback(tabId, _, tab) {
    let url = tab.url;
    let regex = /www\.twitch\.tv\/(?<username>\w{4,25})$/g;
    if (regex.test(url)) {
        chrome.tabs.executeScript(
            tabId,
            {file: './inject.js'}
        );
    }
});