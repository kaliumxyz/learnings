"use strict";

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

TreeNode.prototype.breadthFirst = function (callback) {
	const queue = [this];

	while(queue.length) {

		let root = queue.shift();

		callback(root)

		if(root.left)
			queue.push(root.left)
		if(root.right)
			queue.push(root.right)
	
	}
};

TreeNode.prototype.depthFirst = function (callback, type = "pre-order") {
	if(type === "pre-order" || type === "*")
	callback(this)

	if (this.left)
		this.left.depthFirst(callback);

	if(type === "in-order" || type === "*")
	callback(this)

	if (this.right)
		this.right.depthFirst(callback);

	if(type === "post-order" || type === "*")
	callback(this)

	return;
};

/**
 * return the length of the longest branch
 */
TreeNode.prototype.maxDepth = function () {
	let leftDepth = 1;
	let rightDepth = 1;

	if (!this || !this.val && this.val !== 0)
		return 0;
	if(!this.right && !this.left)
		return 1

	if (this.left)
		leftDepth += maxDepth(this.left)
	if (this.right)
		rightDepth += maxDepth(this.right)

	if(leftDepth < rightDepth)
		return rightDepth
	else
		return leftDepth

};


function SearchTreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}


SearchTreeNode.prototype = TreeNode.prototype

SearchTreeNode.prototype.min = function () {
	if(this.left)
		return this.left.min()
	else
		return this.val
}

SearchTreeNode.prototype.max = function () {
	if(this.right)
		return this.right.min()
	else
		return this.val
}

/**
 * insert a value into the SearchTree below the node it was called at
 * @param {*} value
 */
SearchTreeNode.prototype.insert = function (val) {
	if (val <= this.val) {
		if (!this.left) 
			this.left = new SearchTreeNode(val);
		else
			this.left.insert(val);
	} else if (val > this.val) {
		if (!this.right)
			this.right = new SearchTreeNode(val);
		else
			this.right.insert(val);
	}
}

/**
 * check if a value is already in the tree
 * @param {*} value
 */
SearchTreeNode.prototype.contains = function (val) {
	// if we have the value, return true
	if(this.val === val)
		return true

	// if the value is smaller then the node its value, check the left node
	if(val < this.val){
		if(!this.left)
			return false
		return this.left.contains(val)
	}

	// if the value is bigger then the node its value, call this function on the right node
	if(val > this.val){
		if(!this.right)
			return false
		return this.right.contains(val)
	}
}

/**
 * return an inverted binary tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
	if (!root || !root.val || !root.right && !root.left)
		return root;
	let result = new TreeNode(root.val);
	if (root.left)
		result.right = invertTree(root.left)
	if (root.right)
		result.left = invertTree(root.right)

	return result
};

/**
 * return the length of the longest branch
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function maxDepth(root) {
	let leftDepth = 1;
	let rightDepth = 1;

	if (!root || !root.val && root.val !== 0)
		return 0;
	if(!root.right && !root.left)
		return 1

	if (root.left)
		leftDepth += maxDepth(root.left)
	if (root.right)
		rightDepth += maxDepth(root.right)

	if(leftDepth < rightDepth)
		return rightDepth
	else
		return leftDepth

};

/**
 * return the legnth of the shortest branch
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function minDepth(root, n=0) {

	let leftDepth;
	let rightDepth;

	n += 1

	if (!root || !root.val && root.val !== 0)
		return 0;

	if(!root.right && !root.left)
		return n;

	if (root.left)
		leftDepth = minDepth(root.left, n)
	if (root.right)
		rightDepth = minDepth(root.right, n)


	if(leftDepth && rightDepth){
		if(leftDepth < rightDepth)
			return leftDepth
		else
			return rightDepth
	}
		

	return  leftDepth || rightDepth || 0


};

module.exports = {SearchTreeNode, invertTree, TreeNode, minDepth, maxDepth}
