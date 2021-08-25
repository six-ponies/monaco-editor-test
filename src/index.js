import _ from 'lodash';
import * as monaco from 'monaco-editor'
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

monaco.editor.create(document.getElementById('editor'), {
  value: 'console.log("Hello, world")',
  language: 'javascript'
});
