import typescript from "@rollup/plugin-typescript"
import banner from "../../banner"

import { DIST_MODULE_ES as outDir, SRC } from "../../const"

export default {
  input: `${SRC}/index.ts`,
  plugins: [
    typescript({
      outDir: `./${outDir}`,
      module: "ESNext", //"None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext"
      target: "ESNext", //"ES3"  "ES5" "ES6"/"ES2015" "ES2016" "ES2017" "ES2018" "ES2019" "ES2020" "ESNext"
    })
  ],
  output: {
    // file: `${outDir}/index.js`,
    dir: outDir,
    format: "es",
    name: "quranMeta",
    // sourcemap: false,
    banner: banner,
  },
}
