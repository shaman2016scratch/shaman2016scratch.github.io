function ruTran() {
  document.body.innerHTML = `
    <h1>Документация по JavaScript Runner <button onclick="enTran()">[En]</button></h1>
    <h2>Что это такое?</h2>
    <p>JavaScript Runner — это расширение для запуска JavaScript-кода в <a href="https://dashblocks.github.io/">Dash</a></p>
    <h2>Где его можно найти?</h2>
    <p>В <a href="https://dashblocks.github.io/extensions/">Галерее расширений Dash</a></p>
    <p>В <a href="https://dashblocks.github.io/scratch-gui/editor.html">Dev-версия Dash</a></p>
    <h2>Поддерживается ли он где-то кроме Dash?</h2>
    <p>Да, скорее всего он поддерживается в PenguinMod.</p>
    <scirpt src="/ext-docs/JavaScriptRunner/js.js"></scirpt>
  `
}
function enTran() {
  document.body.innerHTML = `
    <h1>JavaScript Runner Documentation <button onclick="ruTran()">[Ru]</button></h1>
    <h2>What is it?</h2>
    <p>JavaScript Runner is an extension for <a href="https://dashblocks.github.io/">Dash</a> to run code directly in a project.</p>
    <h2>Where can I find him?</h2>
    <p>In the <a href="https://dashblocks.github.io/extensions/">Dash extensions gallery</a></p>
    <p>In the <a href="https://dashblocks.github.io/scratch-gui/editor.html">Dash Dev-version</a></p>
    <h2>Is it supported anywhere other than Dash?</h2>
    <p>Yes, it is most likely supported in PenguinMod.</p>
    <scirpt src="/ext-docs/JavaScriptRunner/js.js"></scirpt>
  `
}
