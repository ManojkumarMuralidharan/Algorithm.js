// Lowest Common Ancestor of a Binary Search Tree  
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w 
// as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
// Things to consider
// [1] THIS CONSIDERS THAT BOTH NODES ARE IN THE TREE 
//     IF WE SEARCH FOR A NODE and its CHILD - we return the first node that is encountered , i.e., 
//     if we search  p and q and q is the child of p, we encounter P first and return it as the answer, we dont search q

// [2] P can be > Q, so make sure if in a BST you mantain p always < q
// [3] its possible that left subtree has LCA but right is not, in this case we still need to return LEFT not NULL unlike 
//  binary tree



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //takes care of p > q scenario
  if(p!=undefined&&q!=undefined){
      if(p.val>q.val){
          var temp = p;
          p = q;
          q= temp;
      }
  }
  console.log('p ',p.val,'q ',q.val);
  if(root===null){
      return null;
  }
  //compare nodes, not values, read QUESTION properly
  //Also takes care of p and q being parent, child scenario
  if(root===p||root===q){
      return root;
  }
  else if(root.val>p.val && root.val<q.val){
      console.log('comes inside > and <');
      var left =  lowestCommonAncestor(root.left,p,q);
      var right = lowestCommonAncestor(root.right,p,q);
      //This section is different from Binary Tree
      if(left && right){
          return root;
      }else{
          if(left!=null){
              return left;
          }else if(right!=null){
              return right
          }else{
              return null;
          }
      }
  }else if(root.val > p.val && root.val >q.val){
      return lowestCommonAncestor(root.left,p,q);
  }else if(root.val < p.val && root.val < q.val){
      return lowestCommonAncestor(root.right,p,q);
  }else{
      return null;
  }
    
};