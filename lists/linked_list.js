class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }

    setHead(newHead) {
        let oldHead = this.head;
        this.head = newHead;
        newHead.next = oldHead;
    }

    printList() {
        let node = this.head;
        while (node) {
            console.log(node.data);
        }
    }



}