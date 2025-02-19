chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getLinks") {
        let links = Array.from(document.getElementsByTagName("a")).map(a => a.href);
        console.log("Links found: ", links);
        sendResponse({ links: links });
    }
    return true; 
});
