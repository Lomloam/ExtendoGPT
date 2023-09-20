let YOUR_KEY = "your openai api key";


export async function lol() {
  return 1;
}
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "ExtendoGPT",
    id: "extendogpt",
    type: "normal",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "extendogpt") {
    getGPTResponse(info.selectionText);
  }
});

const getGPTResponse = function(selectionText: String){
  const request = "Explain: " + selectionText;
  fetch( `https://api.openai.com/v1/chat/completions`,
  {
    body: JSON.stringify({
      'model': "gpt-3.5-turbo",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": request},
        ],
        "temperature": 0.3,
        "max_tokens": 2000
      }), 
      method: "POST",
      headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + YOUR_KEY,
    }
  }).then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { greeting: json.choices[0].message.content });
        });

      });
    }
  });
 }

 