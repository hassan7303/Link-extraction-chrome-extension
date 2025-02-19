document.getElementById("getLinks").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["./content.js"]
        }, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "getLinks" }, function (response) {
                document.getElementById("linksOutput").value = response.links || "لینکی یافت نشد!";
            });
        });
    });
});

document.getElementById("copyLinks").addEventListener("click", function () {
    let textArea = document.getElementById("linksOutput");
    textArea.select();
    document.execCommand("copy");
    alert("لینک‌ها کپی شدند! 📋");
});
