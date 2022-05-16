class Reporters {
    getInfo() {
        return {
            id: 'reporters',
            name: 'Reporters',
            blocks: [
                {
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
                },{
                    opcode: 'infinity',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Infinity'
                },{
                    opcode: 'obj',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '{}'
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
    obj(){
        return {};
    }
}
Scratch.extensions.register(new Reporters());