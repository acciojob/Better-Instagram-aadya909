const images = document.querySelectorAll('.image');
let dragged = null;

// When dragging starts
images.forEach(img => {
  img.addEventListener('dragstart', (e) => {
    dragged = e.target;
    // Optional: Highlight the selected item
    dragged.classList.add('selected');
  });

  img.addEventListener('dragend', () => {
    if (dragged) dragged.classList.remove('selected');
  });

  // Allow dropping on other images
  img.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // When dropped onto another image — swap background-image
  img.addEventListener('drop', (e) => {
    e.preventDefault();
    if (dragged && dragged !== e.target) {
      const temp = dragged.style.backgroundImage;
      dragged.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  });
});
//your code here
