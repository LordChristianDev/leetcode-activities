/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {    
    const current = new ListNode(0);
    const reversedL1 : ListNode | null = reverseList(l1);
    const reversedL2 : ListNode | null = reverseList(l2);

    let addend1 = 0n;
    let addend2 = 0n;

    if(reversedL1 != null) {
        addend1 = listToNumber(reversedL1);
        console.log("Addend One: ",addend1);
    }

    if(reversedL2 != null) {
        addend2 = listToNumber(reversedL2);
        console.log("Addend Two: ",addend2);
    }

    const sum = addend1 + addend2;
    const list = numberToList(sum);
    const reversedList = reverseList(list);

    return reversedList;
};

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        const nextNode = current.next; 
        current.next = prev;           
        prev = current;                
        current = nextNode;            
    }

    return prev;
}

function listToNumber(head: ListNode | null): bigint {
    let num = 0n;
    let current = head;

    while (current !== null) {
        num = num * 10n + BigInt(current.val);
        current = current.next;
    }

    return num;
}

function numberToList(num: bigint): ListNode | null {
    if (num === 0n) return new ListNode(0);

    const digits = num.toString().split("").map(d => Number(d));

    let dummy = new ListNode(0);
    let current = dummy;

    for (const digit of digits) {
        current.next = new ListNode(digit);
        current = current.next;
    }

    return dummy.next;
}


