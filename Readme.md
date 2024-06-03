# repo steps

Prepare typescript

```bat
npm --install
```

Build jsModule folder:

```bat
.\node_modules\.bin\tsc.cmd --build  .\jsModule\ --verbose --force
```

Results in correct `jsModule/jsModule.js`

```js
export class TreeView {
    constructor() { }
}
```

Build src folder:

```bat
.\node_modules\.bin\tsc.cmd --build  .\src\ --verbose --force
```

Changes existing `jsModule/jsModule.js` to:

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeView = void 0;
class TreeView {
    constructor() { }
}
exports.TreeView = TreeView;

```
