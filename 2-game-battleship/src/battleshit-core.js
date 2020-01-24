const ID_SIZE = "cell_size";
const ID_INFO = "info_board";
const ID_CONTENT = "game_board";
let genericUtils = {
    /**
     * Modifies a DOM element with the content provided
     * @param id html element
     * @param val innerHtml value
     */
    setContent: function (id, val) {
        let elem = document.getElementById(id);
        elem.innerHTML = val;
    },
    /**
     * Generates a vDOM element with html
     * @param type tag type
     * @param content html
     */
    genElement: function (type, content) {
        let elem = document.createElement(type);
        elem.innerHTML = content;
        return elem;
    }
};
let battleShit = {
    start: function () {
        let size = document.getElementById(ID_SIZE).value;
        genericUtils.setContent(ID_INFO, "Board size:" + size);
        let btn = this.getCell(size, size);
        //genericUtils.setContent(ID_CONTENT,btn);
        document.getElementById(ID_CONTENT).appendChild(btn);
    }, getRow: function (cols) {
    }, getCell: function (row, col) {
        let btn = genericUtils.genElement("button"
            , "(" + row + "," + col + ")");
        return btn;
    }
};