let insertGreetingBtn = document.getElementById('insert-greeting-btn');

// TODO: Get user name and belong from Chrome storage
// chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });

insertGreetingBtn.onclick = (element) => {
    // let color = element.target.value;

    chrome.tabs.executeScript(
        {file: 'injections/insertGreetings.js'},
    );
};