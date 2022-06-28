class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
  }

  add(newNode, current) {
    if (newNode >= current.value) {
      if (!current.right) {
        current.right = new BinaryTreeNode(newNode);
      } else {
        this.add(newNode, current.right);
      }
    } else {
      if (!current.left) {
        current.left = new BinaryTreeNode(newNode);
      } else {
        this.add(newNode, current.left);
      }
    }
  }
}

const list = new BinaryTree('C');
console.log(list);
list.add('B', this.root);
console.log(list);
list.add('A', this.root);
console.log(list);
list.add('D', this.root);
console.log(list);
