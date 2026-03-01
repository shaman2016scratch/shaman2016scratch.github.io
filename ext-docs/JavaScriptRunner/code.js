// Name: JavaScript Runner
// ID: shaman2016JavaScriptRunner
/* By:
SHAMAN2016 <https://scratch.mit.edu/users/SHAMAN2016/>
damir2809 <https://scratch.mit.edu/users/damir2809/>
*/
// License: MIT

(function (Scratch) {
    "use strict";

    if (!Scratch.extensions.unsandboxed) return alert("This extension needs to be unsandboxed to run!");

    const Cast = Scratch.Cast;
    const _runnerFunctions = `
        data = {
            name: "JavaScript Runner",
            authors: [
                {
                    name: "SHAMAN2016",
                    scratch: "https://scratch.mit.edu/users/SHAMAN2016",
                    github: "https://github.com/shaman2016scratch"
                },
                {
                    name: "DBDev IT",
                    scratch: "https://scratch.mit.edu/users/damir2809",
                    github: "https://github.com/DBDev-IT"
                }
            ],
            version: "3.1.2",
            id: "shaman2016JavaScriptRunner",
            docs: "https://shaman2016scratch.github.io/ext-docs/JavaScriptRunner/"
        };
        function output (toOut) {
            window.RUNNER_OUTPUT = toOut;
            return toOut;
        };
        function warn (toWarn) {
            window.RUNNER_OUTPUT = \`Warning: \${toWarn}\`;
            return \`Warning: \${toWarn}\`;
        };
        async function error (toErr) {
            window.RUNNER_OUTPUT = \`Error: \${toErr}\`;
            return \`Error: \${toErr}\`;
        };
    `;

    class JavaScriptExtension {
        getInfo () {
            return {
                id: "shaman2016JavaScriptRunner",
                name: "JavaScript Runner",
                docsURL: "https://shaman2016scratch.github.io/ext-docs/JavaScriptRunner/",
                color1: "#0fbd8c",
                blocks: [
                    {
                        opcode: "command",
                        text: "command [CODE], is async [isAsync]",
                        blockType: Scratch.BlockType.COMMAND,
                        arguments: {}
                    },
                    {
                        opcode: "reporter",
                        text: "reporter return",
                        blockType: Scratch.BlockType.REPORTER,
                        arguments: {}
                    },
                    {
                        opcode: "boolean",
                        text: "boolean return",
                        blockType: Scratch.BlockType.BOOLEAN,
                        arguments: {}
                    },
                    {
                        opcode: "array",
                        text: "array return",
                        blockType: Scratch.BlockType.ARRAY,
                        arguments: {}
                    },
                    {
                        opcode: "object",
                        text: "object return",
                        blockType: Scratch.BlockType.OBJECT,
                        arguments: {}
                    }
                ]
            }
        }
        async _runSandboxed (code, isAsync) {
            window.RUNNER_OUTPUT = null;

            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.onload = () => {
                    script.remove()
                    resolve();
                };
                script.onerror = () => {
                    script.remove()
                    reject(new Error(`Error in sandboxed script. Check the console for more info`));
                };
                if (isAsync) {
                    script.src = `data:application/javascript,(async => { ${encodeURIComponent(_runnerFunctions)};${encodeURIComponent(code)} })()`;
                } else {
                    script.src = `data:application/javascript,${encodeURIComponent(_runnerFunctions)};${encodeURIComponent(code)}`;
                };
                document.body.appendChild(script);
            });
        }

        async command (args) {
            const code = Cast.toString(args.CODE);
            await this._runSandboxed(code, args.isAsync);
        }

        async reporter (args) {
            return window.RUNNER_OUTPUT;
        }

        async boolean (args) {
            return window.RUNNER_OUTPUT;
        }

        async array (args) {
            return window.RUNNER_OUTPUT;
        }

        async object (args) {
            return window.RUNNER_OUTPUT;
        }
    }

    Scratch.extensions.register(new JavaScriptExtension);
})(Scratch);
