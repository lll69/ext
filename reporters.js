class Reporters {
    getInfo() {
        return {
            id: 'reporters',
            name: 'Reporters',
            blocks: [
                {
                    opcode: 'strictlyEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] === [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Value'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'value'
                        }
                    }
                }, {
                    opcode: 'True',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'true'
                }, {
                    opcode: 'False',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'false'
                }, {
                    opcode: 'nan',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'NaN'
                }, {
                    opcode: 'infinity',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Infinity'
                }, {
                    opcode: 'obj',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '{}'
                }, {
                    opcode: 'array',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[]'
                }, {
                    opcode: 'getLocation',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'location'
                },{
                    opcode: 'referrer',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'referrer'
                }, {
                    opcode: 'userAgent',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'userAgent'
                }, {
                    opcode: 'language',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'language'
                }
            ]
        };
    }
    True() {
        return true;
    }
    False() {
        return false;
    }
    nan() {
        return NaN;
    }
    infinity() {
        return Infinity;
    }
    obj() {
        return {};
    }
    array() {
        return [];
    }
    strictlyEquals(args) {
        // Note strict equality: Inputs must match exactly: in type, case, etc.
        return args.ONE === args.TWO;
    }
    getLocation() {
        return location.toString();
    }
    referrer(){
        return document.referrer;
    }
    userAgent() {
        return navigator.userAgent;
    }
    language() {
        return navigator.language;
    }
}
Scratch.extensions.register(new Reporters());