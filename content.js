/*
* ContentJs 可以操作Dom，插入无限制的api
* */

chrome.runtime.onInstalled.addListener(e => {
  console.log('e :>> ', e);
});

// const getTrees = () => {
//   chrome.bookmarks.getTree((tree) => {
//     console.log('tree', tree);
//     // const bookmarkList = document.getElementById('bookmarkList');
//     // displayBookmarks(tree[0].children, bookmarkList);
//   });
// };

const CreateSearchInput = () => {
  const input = document.createElement('input');
  input.style.border = '0px';
  input.style.height = '100%';
  input.style.width = '100%';
  input.style.padding = '0 50px 0 15px';
  input.style.fontSize = '14px';
  input.style.display = 'block';
  input.placeholder = '请输入书签名称';

  return input;
};

const CreateSearchTitle = () => {
  const title = document.createElement('div');
  // title.innerText = '书签搜索';
  title.style.height = '45px';
  title.style.lineHeight = '45px';
  title.style.textAlign = 'left';
  title.style.fontSize = '16px';
  title.style.borderBottom = '1px solid #ddd';

  const inputHtml = CreateSearchInput();
  title.appendChild(inputHtml);
  return title;
};

const CreateBoxCloseButton = () => {
  const btn_close = document.createElement('div');
  btn_close.style.position = 'absolute';
  btn_close.style.top = '6px';
  btn_close.style.width = '30px';
  btn_close.style.height = '30px';
  btn_close.style.lineHeight = '1px';
  btn_close.style.right = '8px';
  btn_close.style.fontSize = '30px';
  btn_close.style.display = 'flex';
  btn_close.style.alignItems = 'center';
  btn_close.style.justifyContent = 'center';
  btn_close.style.cursor = 'pointer';
  btn_close.innerText = 'x';
  btn_close.id = 'btn_book_manage_gw_close';

  btn_close.addEventListener('click', e => {
    const b = document.getElementById('box_book_manage_gw_wrapper');
    document.body.removeChild(b);
  });
  return btn_close;
};

const CreateSearchBox = () => {
  const box = document.createElement('div');
  box.style.position = 'fixed';
  box.style.top = '0';
  box.style.left = '0px';
  box.style.width = '450px';
  box.style.height = '100%';
  box.style.zIndex = '9999999';
  box.style.background = 'white';
  box.style.textAlign = 'center';
  box.style.color = 'black';
  box.style.fontSize = '14px';
  box.style.boxShadow = '2px 0 4px #ccc';
  box.id = 'box_book_manage_gw_wrapper';  

  const titleHtml = CreateSearchTitle();
  const btnHtml = CreateBoxCloseButton();
  box.appendChild(btnHtml);
  box.appendChild(titleHtml);

  document.body.appendChild(box)
};

// 容器
let container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '300px';
container.style.left = '-15px';
container.style.width = '30px';
container.style.height = '30px';
container.style.zIndex = '9999998';
// container.style.background = 'chocolate';
container.style.textAlign = 'center';
container.style.color = 'white';
container.style.fontSize = '30px';
container.style.cursor = 'pointer';
container.style.transition = 'all .3s';

container.innerText = '🙈'
container.addEventListener('mouseover', e => {
  container.style.left = '0px';
});
container.addEventListener('mouseout', e => {
  container.style.left = '-15px';
});
container.addEventListener('click', e => {
  container.style.left = '0px';
  CreateSearchBox();
  // getTree();
});


document.body.appendChild(container)

// chrome.runtime.onMessage.addListener(
//   function (r, sender, sendResponse) {
//     let cmd = r.cmd || '';
//     console.log(`【recv】 -->`, r);

//     switch (cmd) {
//       case 'titleUpdatedEvent':
//         container.innerText = r.newTitle
//         break
//     }
//   }
// )
