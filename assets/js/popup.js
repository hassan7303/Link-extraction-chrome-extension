document.getElementById("getLinks").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs.length > 0) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["assets/js/content.js"]
            }, () => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "getLinks" }, function (response) {
                    console.log("Response received: ", response);
                    if (response && response.links) {
                        document.getElementById("linksOutput").value = response.links.join("\n");
                    } else {
                        document.getElementById("linksOutput").value = "لینکی یافت نشد!";
                    }
                });
            });
        } else {
            console.log("No active tab found");
        }
    });
});
