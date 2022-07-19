import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: 'transpile.js',
  output: {
    name: 'tsToJs',
    file: 'tsToJs.txt',
    format: 'iife',
    globals: { 
      inspector: "{}"
    }
  },
  plugins: [nodePolyfills({include: ["fs", "path", "os", "buffer"]}), nodeResolve(), commonjs(), json(), terser()]
};