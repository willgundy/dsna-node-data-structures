// class BinaryTreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor(value) {
//     this.root = new BinaryTreeNode(value);
//   }

//   add(newNode, current) {
//     if (newNode >= current.value) {
//       if (!current.right) {
//         current.right = new BinaryTreeNode(newNode);
//       } else {
//         this.add(newNode, current.right);
//       }
//     } else {
//       if (!current.left) {
//         current.left = new BinaryTreeNode(newNode);
//       } else {
//         this.add(newNode, current.left);
//       }
//     }
//   }
// }

// const list = new BinaryTree('C');
// console.log(list);
// list.add('B', list.root);
// console.log(list);
// list.add('A', list.root);
// console.log(list);
// list.add('D', list.root);
// console.log(list);
// list.add('F', list.root);
// console.log(list);
// list.add('M', list.root);
// console.log(list);


class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
}
class personTree {
    constructor(person) {
        this.root = new PersonTreeNode(person);
    }    
  
    add(newPerson, currentPerson) {
        if (newPerson.name >= currentPerson.name) {
          if (!currentPerson.right) {
            currentPerson.right = new PersonTreeNode(newPerson);
          } else {
            this.add(newPerson, currentPerson.right);
          }
        } else {
          if (!currentPerson.left) {
            currentPerson.left = new PersonTreeNode(newPerson);
          } else {
            this.add(newPerson, currentPerson.left);
          }
        }
      }
  
    findPerson(name, current) {
      if ( name === current.value) {
        return current.person;
      } else if ( name < current.value) {
        return this.findPerson(name, current.right);
      } else {
        return this.findPerson(name, current.left);
      }
    }
}

const personList = new personTree({ name: 'Jeff', phone: '555-1212' })
console.log(personList);
personList.add({ name: 'Will', phone: '999-9999' }, personList.root);
console.log(personList);
const findWill = personList.findPerson('Will', personList.root);
console.log(findWill);