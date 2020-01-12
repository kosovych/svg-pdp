let prism = require('prismjs');
let loadLanguage = require('prismjs/components');

const code = document.getElementById('code-1').innerHTML;

const html = Prism.highlight(code, Prism.languages.html, 'html');
document.getElementById('output').innerHTML = html;
