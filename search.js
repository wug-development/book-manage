const CreateSearchBox = () => {
  const box = document.createElement('div');
  box.style.position = 'fixed';
  box.style.top = '300px';
  box.style.left = '0px';
  box.style.width = '300px';
  box.style.height = '10vh';
  box.style.zIndex = '9999999';
  box.style.background = 'white';
  box.style.textAlign = 'center';
  box.style.color = 'black';
  box.style.fontSize = '14px';
  box.id = 'box_book_manage_gw_wrapper';

  const btn_close = document.createElement('div');
  btn_close.style.position = 'position';
  btn_close.style.top = '10px';
  btn_close.style.right = '15px';
  btn_close.style.width = '30px';
  btn_close.style.height = '30px';
  btn_close.style.fontSize = '30px';
  btn_close.innerText = 'X';
  btn_close.id = 'btn_book_manage_gw_close';

  btn_close.addEventListener('click', e => {
    const b = document.getElementById('box_book_manage_gw_wrapper');
    document.body.removeChild(b);
  });

  box.appendChild(btn_close);

  document.body.appendChild(box)
};

export default CreateSearchBox;
