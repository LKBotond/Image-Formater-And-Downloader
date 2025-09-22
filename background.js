chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "convertImage",
    title: "Convert and Download Image",
    contexts: ["image"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "convertImage" && info.srcUrl) {
    chrome.tabs.sendMessage(tab.id, {
      action: "convert-image",
      imageUrl: info.srcUrl,
      mimeType: "image/png",
    });
  }
});
