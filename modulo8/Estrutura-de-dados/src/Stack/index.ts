export class Stack {
    constructor(
       public frames: any[] = []
    ) { }
 
    public isEmpty = () => this.frames.length === 0
 
    public push = (
       value: any
    ): void => {
 
       const index = this.frames.length
 
       this.frames[index] = value
    }
 
    public pop = ():any=>{
 
       const index = this.frames.length - 1
 
       const removedItem = this.frames[index]
 
       this.frames.length--
 
       return removedItem
    }
 }
 
 const stack = new Stack()
 
 stack.push("segunda")
 stack.push("terça")
 stack.push("quarta")