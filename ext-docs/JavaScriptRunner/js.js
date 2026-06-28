function ruTran() {
  document.body.innerHTML = `
    <h1>Документация по JavaScript Runner <button onclick="enTran()">[En]</button></h1>
    <h2>Что это такое?</h2>
    <p>JavaScript Runner — это расширение для запуска JavaScript-кода в <a href="https://dashblocks.org/">Dash</a></p>
    <h2>Где его можно найти?</h2>
    <p>В <a href="https://dashblocks.org/extensions/">Галерее расширений Dash</a></p>
    <p>В <a href="https://dashblocks.org/scratch-gui/editor.html">Dev-версия Dash</a> (в редакторе, кнопка "выбрать дополнение")</p>
    <p>На <a href="code.js">этом сайте</a> (код расширения)</p>
    <p>В <a href="https://dashblocks.org/editor.html">Dash</a> (в редакторе, кнопка "выбрать дополнение")</p>
    <h2>Поддерживается ли он где-то кроме Dash?</h2>
    <p>НЕТ.</p>
    <h2>Как с ним работать?</h2>
    <script src="/ext-docs/JavaScriptRunner/js.js"></script>
  `
}
function enTran() {
  document.body.innerHTML = `
    <h1>JavaScript Runner Documentation <button onclick="ruTran()">[Ru]</button></h1>
    <h2>What is it?</h2>
    <p>JavaScript Runner is an extension for <a href="https://dashblocks.org/">Dash</a> to run code directly in a project.</p>
    <h2>Where can I find him?</h2>
    <p>In the <a href="https://dashblocks.org/extensions/">Dash extensions gallery</a></p>
    <p>In the <a href="https://dashblocks.org/scratch-gui/editor.html">Dash Dev-version</a> (In the editor, button "select extension")</p>
    <p>On <a href="code.js">this website</a> (his code)</p>
    <p>In the <a href="https://dashblocks.org/editor.html">Dash</a> (In the editor, button "select extension")</p>
    <h2>Is it supported anywhere other than Dash?</h2>
    <p>NO.</p>
    <h2>How to work with it?</h2>
    <script src="/ext-docs/JavaScriptRunner/js.js"></script>
  `
}

ruTran()
