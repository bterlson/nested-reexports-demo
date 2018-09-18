# Nested re-exports demo
**module1.js** and **module2.js** declare some simple functions which get grouped and re-exported in **index.js**. **sample.js** imports from the index and uses one export from one of the modules.

You should see in the prettified bundle that the module that goes completely unused is tree-shaken out, but all exports from the partially used module are included.

It sounds like `export * as Name from "path"` will eventually become a thing but it's not there yet. So this sample really just demonstrates that the grouped, nested re-exports essentially makes tree-shaking impossible within the sub-modules.