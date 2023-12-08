const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
  setTimeout(() => {
    const h2 = document.getElementById('text');
    h2.textContent = 'ボタンをクリックしました';
    }, 2000)
  });
