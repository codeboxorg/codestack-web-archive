import Editor from '@monaco-editor/react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
export type MonacoEditor = monaco.editor.IStandaloneCodeEditor

type CodeEditorProps = {
  handleEditorMount: (editor: MonacoEditor) => void
  languageId: number
}

/**
 * Language List
 * https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages
 */
const EDITOR_LANGUAGE = ['', 'c', 'cpp', 'python', 'javascript', 'go']

const CodeEditor = ({ handleEditorMount, languageId }: CodeEditorProps) => {
  return (
    <>
      <div className="border-1 border-gray-300 rounded-md p-2">
        <Editor
          onMount={handleEditorMount}
          height="50vh"
          language={EDITOR_LANGUAGE[languageId]}
        />
      </div>
    </>
  )
}

export default CodeEditor
