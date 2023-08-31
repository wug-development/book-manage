/*
* ContentJs 可以操作Dom，插入无限制的api
* */

// 容器
let container = document.createElement('div');
container.style.position = 'absolute'
container.style.top = '300px'
container.style.left = '300px'
container.style.width = '300px'
container.style.height = '300px'
container.style.zIndex = '1000'
container.style.background = 'chocolate'
container.style.textAlign = 'center'
container.style.color = 'white'
container.style.fontSize = '30px'

container.innerText = '看不见我🙈'

document.body.appendChild(container)

chrome.runtime.onMessage.addListener(
  function (r, sender, sendResponse) {
    let cmd = r.cmd || '';
    console.log(`【recv】 -->`, r);

    switch (cmd) {
      case 'titleUpdatedEvent':
        container.innerText = r.newTitle
        break
    }
  }
)
