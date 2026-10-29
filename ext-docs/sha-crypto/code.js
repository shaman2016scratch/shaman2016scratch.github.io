(function (Scratch) {

    if (!Scratch.extensions.unsandboxed) {
        throw new Error("This Extension must run unsandboxed");
    }

class ShaCrypto8787 {
    async sha1(text) {
        text = text.text
        const val = new TextEncoder().encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-1', val)
        const arr = new Uint8Array(hashBuffer)
        return arr.reduce((a, b) => a + b.toString(16).padStart(2, '0'), '')
    }

    async sha256(text) {
        text = text.text
        const val = new TextEncoder().encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-256', val)
        const arr = new Uint8Array(hashBuffer)
        return arr.reduce((a, b) => a + b.toString(16).padStart(2, '0'), '')
    }

    async sha384(text) {
        text = text.text
        const val = new TextEncoder().encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-384', val)
        const arr = new Uint8Array(hashBuffer)
        return arr.reduce((a, b) => a + b.toString(16).padStart(2, '0'), '')
    }

    async sha512(text) {
        text = text.text
        const val = new TextEncoder().encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-512', val)
        const arr = new Uint8Array(hashBuffer)
        return arr.reduce((a, b) => a + b.toString(16).padStart(2, '0'), '')
    }

    getInfo() {
        return {
            id: 'shacryptobypolzovatel8787',
            name: 'Sha Crypto',
            blocks: [
                {
                    opcode: 'sha1',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'encrypt [text] to sha-1',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Secret"
                        }
                    }
                },
                {
                    opcode: 'sha256',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'encrypt [text] to sha-256',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Secret"
                        }
                    }
                },
                {
                    opcode: 'sha384',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'encrypt [text] to sha-384',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Secret"
                        }
                    }
                },
                {
                    opcode: 'sha512',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'encrypt [text] to sha-512',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Secret"
                        }
                    }
                }
            ]
        };
    }
}

Scratch.extensions.register(new ShaCrypto8787());
  })(Scratch);
