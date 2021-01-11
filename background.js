chrome.runtime.onInstalled.addListener(function () {
    // 如果不申请 storage permission 的话，会报 undefined 错误
    chrome.storage.sync.set({
        color: '#3aa757'
    }, function () {
        console.log('the color is green');
    });

    // 进入 developer.chrome.com 时，打开本扩展
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostEquals: 'developer.chrome.com',
                    }
                })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});