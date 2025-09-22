chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "convert-image" && message.imageUrl) {
    convertImageToType(message.imageUrl, message.mimeType);
  }
});

async function convertImageToType(imageUrl, mimeType) {
  const imgResponse = await fetchImg(imageUrl);
  if (!imgResponse) {
    return;
  }
  const imgBlob = await responseToBlob(imgResponse);
  const img = await blobToImage(imgBlob);
  const convertedBlob = await convertFormat(img, mimeType);
  downloadBlob(convertedBlob);
}

async function fetchImg(url) {
  const imgResponse = await fetch(url);
  if (!imgResponse.ok) {
    return null;
  }
  return imgResponse;
}
async function responseToBlob(imgResponse) {
  return imgResponse.blob();
}
function blobToImage(blob) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      resolve(img);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(blob);
  });
}
function createCanvas(img) {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  return canvas;
}
async function convertFormat(img, mimeType) {
  const canvas = createCanvas(img);
  const drawer = canvas.getContext("2d");
  drawer.drawImage(img, 0, 0);
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, mimeType);
  });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const hiddenDownloadButton = document.createElement("a");
  hiddenDownloadButton.href = url;
  hiddenDownloadButton.download = filename;
  document.body.appendChild(hiddenDownloadButton);
  hiddenDownloadButton.click();
  hiddenDownloadButton.remove();
  URL.revokeObjectURL(url);
}
