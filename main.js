const listItems = document.querySelectorAll('li');

listItems.forEach(listItem => {
  listItem.addEventListener('click', function() {
    const img = this.querySelector('img');
    img.style.display = img.style.display === 'none' ? 'block' : 'none';
  });
});