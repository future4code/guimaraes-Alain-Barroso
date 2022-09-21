export class ListNode {
    constructor(
       public value: any,
       public next: ListNode | null = null
    ) { }
 
 
 }
 
 export const node = new ListNode("segunda", new ListNode("terça"))