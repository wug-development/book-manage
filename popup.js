function updateTabTitle(tabId, title) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: updateDocTitle,
    args: [title],
  }, () => {
    // noinspection JSUnresolvedVariable
    console.log('update tab title:', title)
  });
}

function updateDocTitle(title) {
  document.title = title
}


// 获取当前窗口
window.onload = async () => {
  let tab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];
  console.log(`tab -->`, tab)

// 显示当前标题
  let titleInp = document.getElementById('title-inp');
  titleInp.value = tab.title

  // 只能动态绑定事件
  document.getElementById('submit')
    .onclick = function () {
    // 修改新标题
    let newTitle = titleInp.value;
    updateTabTitle(tab.id, newTitle)

    // 发送消费，给当前活跃的页面脚本 ContentJs
    chrome.tabs.sendMessage(tab.id, { cmd: 'titleUpdatedEvent', newTitle: newTitle });
  }
}
