// error TS7016: Could not find a declaration file for module 'treeview'.
// '<path>/include/TreeView.js' implicitly has an 'any' type.
// => TS has found the correct js file but does not use the content
export type mappedModule = typeof import("treeview");

// error TS7016: Could not find a declaration file for module 'treeview'.
// '<path>/include/TreeView.js' implicitly has an 'any' type.
// => TS has found the correct js file but does not use the content
import("treeview").then((mappedModule) => {
  // mappedModule is any
  mappedModule.TreeView;
});

// This works:
export type directModule = typeof import("../include/TreeView.js");
import("../include/TreeView.js").then((directModule) => {
  // directModule has correct type
  directModule.TreeView;
});
