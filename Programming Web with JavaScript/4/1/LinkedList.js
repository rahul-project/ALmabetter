/* agenda :- 
_____
Linked list
    what is linked list 
        it is collection of node
        it is a data structure
        every node hase a 2 part --> data and link
    type of linked list
        1. singly linked list/single direction oneway
            [__{--}]~~>[__{--}]~~>[__{--}]~+
        2. doubly linked list
            end+~[{--}__{--}]<==>>[{--}__{--}]<==>[{--}__{--}]~+end
        3. circular linked list
            single circular linked list
                =>---------------------------------------------->!   
                ^=[{--}__{--}]<==>>[{--}__{--}]<==>[{--}__{--}]=<=          
            double circular linked list
                =>--------------------------------------------->!   
                !=[{--}__{--}]<==>>[{--}__{--}]<==>[{--}__{--}]=!
                =<---------------------------------------------<!
    implementation of linked list
        node class --> data, link 
        linked list class  --> head
    operation of linked list 
        getting
            first node
            last node
            at a given position index
        insertion
            begining
            end
            at a given index
        deletion
            begining
            end
            at a given index
    printing of linked list

*/
/* array is a continous block of memory
    train example [__{--}]~~>[__{--}]~~>[__{--}]~+ end of train
        coach--> node [__{--}]
        seating --> data[__]
        chain connect to next coach --> next{--}
*/
// // In JavaScript, a linked list looks like this:
// const list = {
//   head: {
//     value: 6,
//     next: {
//       value: 10,
//       next: {
//         value: 12,
//         next: {
//           value: 3,
//           next: null,
//         },
//       },
//     },
//   },
// }

// // Implementing a List Node in JavaScript
// class ListNode {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// // Implementing a Linked List in JavaScript
// class LinkedList {
//     constructor(head = null) {
//         this.head = head
//     }
// }
// // Putting it all together
// let node1 = new ListNode(2)
// let node2 = new ListNode(5)
// node1.next = node2
// // create a Linked list with the node1.
// let list = new LinkedList(node1)
// console.log(list.head.next.data) //returns 5

insertAtStart = function (data) {
  let node = new Node(data)
  let currentNode = this.head
  if (!currentNode) {
    this.head = node
    this.tail = node
  } else {
    node.next = this.head
    this.head.prev = node
    this.head = node
  }
}
