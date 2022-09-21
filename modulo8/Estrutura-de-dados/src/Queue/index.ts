import { LinkedList } from "../LinkedList";
import { ListNode } from "../LinkedList/ListNode";

export class Queue {
   constructor(
      public items: LinkedList = new LinkedList()
   ) { }

   public isEmpty = (): boolean => this.items.start === null

   public enqueue = (
      value: any
   ): void => {
      this.items.addToTail(value)
   }

   public dequeue = (): ListNode | null => {

      if (this.items.start === null) return null

      const removedItem = { ...this.items.start }

      this.items.start = this.items.start.next

      return removedItem
   }
}

const requests = new Queue()

requests.enqueue("request 1")
requests.enqueue("request 2")
requests.enqueue("request 3")

const request = requests.dequeue()