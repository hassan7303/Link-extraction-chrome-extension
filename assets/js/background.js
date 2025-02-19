chrome.runtime.onInstalled.addListener(() => {
    console.log("افزونه استخراج لینک‌ها نصب شد.");
});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["./content.js"]
    });
});
