 // Lowest Common Ancestor of a Binary Tree   QuestionEditorial Solution  My Submissions
// Total Accepted: 65726
// Total Submissions: 224874
// Difficulty: Medium
// Contributors: Admin
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// THIS CONSIDERS THAT BOTH NODES ARE IN THE TREE 
// IF WE SEARCH FOR A NODE and its CHILD - we return the first node that is encountered , i.e., 
// if we search  p and q and q is the child of p, we encounter P first and return it as the answer, we dont search q
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
   // console.log('this is left',root.left?root.left.val:'','this is right',root.right?root.right.val:'');
    
       if(root===undefined || root===null){
           return null;
       }
      // Comparisions should be done by node references not values !!!!
      // READ THE QUESTION AND I/P parameters well
        if(root===p||root===q ){
           console.log('found Node:',root.val);
            return root;
        }
        var isFoundinLeft = lowestCommonAncestor(root.left,p,q);
        var isFoundinRight = lowestCommonAncestor(root.right,p,q);
            
       
        if(isFoundinLeft!==null && isFoundinRight!==null){
            //This section is different from Binary Search Tree, its simple here
            console.log('comes in here',isFoundinLeft.val,'p',p,'right',isFoundinRight.val,'and q is ',q,'root is ',root.val);
            if((isFoundinLeft===p&&isFoundinRight===q) || (isFoundinLeft===q&&isFoundinRight===p)){ // unwanted condition
                return root;
             }else{
                return null;    
            }
        }
        if(isFoundinLeft!==null){
             return isFoundinLeft;
        }
      
             return isFoundinRight;
    
        
        
      
    
};