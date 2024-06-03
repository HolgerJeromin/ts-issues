// both of these two imports trigger the bug:
type TreeView = import("../jsModule/services.js").TreeView;
import("../jsModule/services.js").then((module) => {
  const _TreeView = module.TreeView;
});
