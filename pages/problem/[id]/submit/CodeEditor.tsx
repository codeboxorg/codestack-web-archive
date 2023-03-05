import Editor from '@monaco-editor/react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
export type MonacoEditor = monaco.editor.IStandaloneCodeEditor

type CodeEditorProps = {
  handleEditorMount: (editor: MonacoEditor) => void
}

const CodeEditor = ({ handleEditorMount }: CodeEditorProps) => {
  return (
    <>
      <div className="border-1 border-gray-300 rounded-md p-2">
        <Editor
          onMount={handleEditorMount}
          height="50vh"
          defaultLanguage="javascript"
        />
      </div>
    </>
  )
}

export default CodeEditor
