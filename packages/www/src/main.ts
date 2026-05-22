import './style.css'
import '@sneas/telephone';

let contentToRotate = `<p>This component draws a smartphone frame around any HTML.</p>`

document.body.addEventListener('keydown', (e) => {
  if (e.key !== 'f') {
    return;
  }
  const androidContent = document.getElementById('android-content');
  if (!androidContent) {
    return;
  }

  const currentContent = androidContent.innerHTML;
  androidContent.innerHTML = contentToRotate;
  contentToRotate = currentContent;
  e.preventDefault();
}, false)
