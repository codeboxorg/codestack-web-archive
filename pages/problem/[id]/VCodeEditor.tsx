import Editor from '@monaco-editor/react'
import { Button } from 'antd'
import React from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
export type MonacoEditor = monaco.editor.IStandaloneCodeEditor

type Props = {
  handleEditorMount: (editor: MonacoEditor) => void
  handleCodeSubmit: () => void
}

const VCodeEditor = ({ handleEditorMount, handleCodeSubmit }: Props) => {
  return (
    <>
      <Editor
        onMount={handleEditorMount}
        height="50vh"
        defaultLanguage="javascript"
      />
      <Button onClick={handleCodeSubmit}>제출</Button>
    </>
  )
}

export default VCodeEditor
