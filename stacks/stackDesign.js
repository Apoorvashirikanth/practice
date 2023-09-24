class Stack {
    constructor(){
        this.items = [];
    }

    pushIn(ele){
        return this.items.push(ele);
    }

    popOut(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    peek(){
        return this.items[this.items.length -1];
    }
}

let st = new Stack();
console.log(st);
st.pushIn(5);
st.pushIn(15);
console.log(st);
st.popOut();
console.log(st);
console.log(st.isEmpty());
console.log(st.size());
st.pushIn(10);
console.log(st);
console.log(st.peek());