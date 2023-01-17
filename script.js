{
    // chrome.tabs.getSelected(null, function (tab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
        var tablink = tab[0].url;
        console.log(">>>>>>>>>", tablink);
        const TextElement = document.getElementById('TextElement');
        const btn = document.getElementById("btn")

        if (TextElement) {
            TextElement.value = tablink;
        }

        btn.addEventListener("click", () => {
            TextElement.select();
            document.execCommand("copy");
        })
    });
}