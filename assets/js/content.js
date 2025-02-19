function getAllLinks() {
    let links = document.querySelectorAll("a");
    let linkList = Array.from(links).map(link => link.href).filter(href => href);
    return linkList.join("\n");
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getLinks") {
        sendResponse({ links: getAllLinks() });
    }
});
