import { useRef } from 'react'
import VCodeEditor, { MonacoEditor } from './VCodeEditor'

const CodeEditor = () => {
  const editorRef = useRef<MonacoEditor>()

  const handleEditorMount = (editor: MonacoEditor) => {
    editorRef.current = editor
  }

  const handleCodeSubmit = () => {
    console.log(editorRef.current?.getValue())
  }

  const vCodeEditorProps = {
    handleEditorMount,
    handleCodeSubmit,
  }

  return (
    <>
      <VCodeEditor {...vCodeEditorProps} />
    </>
  )
}

export default CodeEditor
