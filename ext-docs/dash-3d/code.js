((Scratch) => {
    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This Turbo Mode example must run unsandboxed');
    }

    let iframe = null
    let overlay = null
    let content3D = ""
    let x = 0;
    let y = 0;
    let width = -1; // negative means default
    let height = -1;

    const updateFrameAttributes = () => {
        if (!iframe) {
            return;
        }

        iframe.style.pointerEvents = interactive ? "auto" : "none";

        const { stageWidth, stageHeight } = Scratch.vm.runtime;
        const effectiveWidth = width >= 0 ? width : stageWidth;
        const effectiveHeight = height >= 0 ? height : stageHeight;

        if (resizeBehavior === "scale") {
            iframe.style.width = `${effectiveWidth}px`;
            iframe.style.height = `${effectiveHeight}px`;

            iframe.style.transform = `translate(${-effectiveWidth / 2 + x}px, ${
                -effectiveHeight / 2 - y
            }px)`;
            iframe.style.top = "0";
            iframe.style.left = "0";
        } else {
            // As the stage is resized in fullscreen mode, only % can be relied upon
            iframe.style.width = `${(effectiveWidth / stageWidth) * 100}%`;
            iframe.style.height = `${(effectiveHeight / stageHeight) * 100}%`;

            iframe.style.transform = "";
            iframe.style.top = `${
                (0.5 - effectiveHeight / 2 / stageHeight - y / stageHeight) * 100
            }%`;
            iframe.style.left = `${
                (0.5 - effectiveWidth / 2 / stageWidth + x / stageWidth) * 100
            }%`;
        }
    };

    const createFrame = (src) => {
        iframe = document.createElement("iframe");
        iframe.setAttribute("allowtransparency", "true");
        iframe.setAttribute("src", src);
        overlay = Scratch.renderer.addOverlay(iframe);
        updateFrameAttributes()
    };

    const closeFrame = () => {
        if (iframe) {
            Scratch.renderer.removeOverlay(iframe);
            iframe = null;
            overlay = null;
        }
    };

    class Dash3D {
        getInfo() {
            return {
                id: 'polzovatel87873d',
                name: 'Dash 3D',
                blocks: [
                    {
                        opcode: 'init',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Init 3D Api'
                    },
                    {
                        opcode: 'draw',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Draw all'
                    },
                    {
                        opcode: 'close3D',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Close 3D'
                    },
                    {
                        opcode: 'setPos',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Set position to x: [X] y: [Y], size: [WIDTH]x[HEIGHT]',
                        arguments: {
                            X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            WIDTH: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            HEIGHT: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            }
                        }
                    }
                ]
            };
        }

        _init () {
            content3D = `import * as ThreeJS from 'https://unpkg.com/three@0.160.0/build/three.module.js'
            window.three = ThreeJS;`
        }

        init() {
            this._init()
            content3D += `const G3D = window.three;
            const scene = new G3D.Scene();
            const camera = new G3D.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new G3D.WebGLRenderer();renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);`
        }

        async draw() {
            closeFrame()
            if (await Scratch.canEmbed(URL)) {
                createFrame(`data:text/html;,<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>3D Project</title>
    <style>
      body { margin: 0; overflow: hidden; }
      canvas { display: block; }
    </style>
  </head>
  <body>
    <script type="module">${content3D}</script>
  </body>
</html>`)
            }
        }

        close3D () {
            closeFrame()
        }

        setPos (args) {
            x = args.X
            y = args.Y
            height = args.HEIGHT
            width = args.WIDTH
            updateFrameAttributes()
        }
    }

    Scratch.extensions.register(new Dash3D());
})(Scratch)
