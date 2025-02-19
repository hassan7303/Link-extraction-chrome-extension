chrome.runtime.onInstalled.addListener(() => {
    console.log("افزونه استخراج لینک‌ها نصب شد.");
});

chrome.action.onClicked.addListener((tab) => {
    console.log("آیکن افزونه کلیک شد.");
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["assets/js/content.js"]
    }, () => {
        console.log("اسکریپت content.js با موفقیت به تب تزریق شد.");
    });
});
