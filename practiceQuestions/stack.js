
class MyStack {
    constructor() {
        this.items = [];
        this.min;
    }

    push(x) {
        if (this.items.length === 0) {
            this.items.push(x);
            this.min = x;
        }
        else if (x >= this.min) {
            this.items.push(x);
        }
        else {
            const val = x + (x - this.min);
            this.items.push(val);
            this.min = x;
        }
    }

    pop() {
        if (this.items.length === 0) return -1;
        else {
            if(this.items[this.items.length - 1] >= this.min) {
                return this.items.pop();
            }
            else {
                const og = this.min;
                this.min = (2 * this.min) - this.items.pop();
                return og;
            }
        }
    }

    getMin() {
        if (this.items.length === 0) return -1;
        return this.min;
    }
}