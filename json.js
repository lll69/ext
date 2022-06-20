class Json {
    getInfo() {
        return {
            id: 'json',
            name: 'JSON',
            blocks: [ {
                    opcode: 'LENGTH',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'length of [OBJ]',
                    arguments: {
                        OBJ: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Object'
                        }
                    }
                },  {
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
                },{
                    opcode: 'stringify',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'stringify [OBJ]',
                    arguments: {
                        OBJ: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Object'
                        }
                    }
                },{
                    opcode: 'tostring',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'toString [OBJ]',
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
                    opcode: 'TYPEOF',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'typeof [OBJ]',
                    arguments: {
                        OBJ: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        }
                    }
                }
            ]
        };
    }
    LENGTH(args) {
        return args.OBJ.length;
    }
    OF(args) {
        return args.OBJ[args.INDEX];
    }
    stringify(args) {
        return JSON.stringify(args.OBJ);
    }
    tostring(args) {
        return String(args.OBJ);
    }
    parseJSON(args){
        return JSON.parse(args.STR);
    }
    TYPEOF(args){
        return typeof(args.OBJ);
    }
}
Scratch.extensions.register(new Json());