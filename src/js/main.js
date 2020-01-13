let prism = require('prismjs');
let loadLanguage = require('prismjs/components');
const textArea = document.getElementById('ta-code');

let code = document.getElementById('code').innerHTML;

const html = Prism.highlight(code, Prism.languages.html, 'html');
textArea.value = code;
document.getElementById('output').innerHTML = html;

textArea.addEventListener('input', (event) => {
  let value = event.target.value;
  const html = Prism.highlight(value, Prism.languages.html, 'html');
  document.getElementById('output').innerHTML = html;

  let code = document.getElementById('code');
  const parser = new DOMParser();
  const el = parser.parseFromString(value, 'image/svg+xml');
  code.innerHTML = '';
  code.appendChild(el.documentElement);
});