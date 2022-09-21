import { ListNode, node } from "./ListNode";

export class LinkedList {
   constructor(
      public start: ListNode | null = null
   ) { }

   public addToTail = (
      value: any
   ): void | undefined => {

      if (!this.start) {
         this.start = new ListNode(value)
         return
      }

      let currentNode = this.start

      while (currentNode.next !== null) {
         currentNode = currentNode.next
      }

      currentNode.next = new ListNode(value)

   }

   public find = (
      value: any
   ): ListNode | null => {

      let currentNode = this.start

      while(
         currentNode !== null &&
         currentNode.value !== value
         ){
         currentNode = currentNode.next
      }

      return currentNode
   }
}

const list = new LinkedList()

list.addToTail("segunda")
list.addToTail("terça")
list.addToTail("quarta")
list.addToTail("quinta")