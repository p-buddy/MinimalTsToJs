import {transpileModule, ScriptTarget, ModuleKind, NewLineKind} from "typescript";

export default function transpile(source){
  const result = transpileModule(source, { compilerOptions: {
    target: ScriptTarget.ESNext,
    module: ModuleKind.None,
    newLine: NewLineKind.CarriageReturnLineFeed
  }});
  return result.outputText;
}