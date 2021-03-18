class Item {
    static lastID = 0
    constructor(text) {
        this.text = text;
        this.id = Item.lastID++;
        this.done = false
    }
};

export default Item;