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
                    opcode: 'OF',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'item [INDEX] of [OBJ]',
                    arguments: {
                        INDEX: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        OBJ: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Object'
                        }
                    }
                }, {
                    opcode: 'stringify',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'stringify [OBJ]',
                    arguments: {
                        OBJ: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Object'
                        }
                    }
                }, {
                    opcode: 'parseJSON',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'parseJSON [STR]',
                    arguments: {
                        STR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{}'
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
                    text: '0~F'
                }, {
                    opcode: 'getLocationString',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'locationString'
                }, {
                    opcode: 'getLocation',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'location'
                }, {
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
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    }
    strictlyEquals(args) {
        // Note strict equality: Inputs must match exactly: in type, case, etc.
        return args.ONE === args.TWO;
    }
    OF(args) {
        return args.OBJ[args.INDEX];
    }
    stringify(args) {
        return JSON.stringify(args.OBJ);
    }
    parseJSON(args){
        return JSON.parse(args.STR);
    }
    getLocationString() {
        return location.toString();
    }
    getLocation() {
        return JSON.parse(JSON.stringify(location));
    }
    referrer() {
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