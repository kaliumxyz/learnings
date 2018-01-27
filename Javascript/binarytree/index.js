"use strict";
//import {TreeNode, SearchTreeNode, invertTree, maxDepth, minDepth} from './trees.js'
const {TreeNode, SearchTreeNode, invertTree, maxDepth, minDepth} = require('./trees.js')

let a = new TreeNode(10)
a.left = new TreeNode(29)

let b = new SearchTreeNode(4)
b.insert(1)
b.insert(2)
b.insert(3)
b.insert(5)
b.insert(6)

let c = new SearchTreeNode()
let d = new SearchTreeNode(0)

console.log(invertTree(a))
console.log("b contains 33: ", b.contains(33))
console.log("b does not contain 34: ", !b.contains(34))

const log = node => console.log(node.val)

console.log("depthFirst A")
a.depthFirst(log)
console.log("depthFirst B")
b.depthFirst(log)

console.log("breadthFirst A")
a.breadthFirst(log)
console.log("breadthFirst B")
b.breadthFirst(log)

console.log("maxDepth")
console.log(maxDepth(b))
console.log(maxDepth(c))
console.log(maxDepth(d))

console.log("minDepth")
console.log(minDepth(b))
console.log(minDepth(c))
console.log(minDepth(d))

console.log("min")
console.log(b.min())
console.log("max")
console.log(b.max())

//module.exports = {binarySearchTree, invertTree, binaryTree, TreeNode}
