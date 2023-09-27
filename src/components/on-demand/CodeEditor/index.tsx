import Editor from '@monaco-editor/react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { MutableRefObject, forwardRef } from 'react'

export type MonacoEditor = monaco.editor.IStandaloneCodeEditor

interface Props {
    language: '' | 'c' | 'cpp' | 'python' | 'javascript' | 'go'
}

/**
 * Props Language List
 * https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages
 */
const CodeEditor = forwardRef<MonacoEditor | undefined, Props>(({ language }, ref) => {
    const handleEditorMount = (editor: MonacoEditor) => {
        // eslint-disable-next-line no-param-reassign
        if (ref) (ref as MutableRefObject<MonacoEditor>).current = editor
    }

    return (
        <div className='border-1 border-gray-300 rounded-md p-2'>
            <Editor onMount={handleEditorMount} height='50vh' language={language} />
        </div>
    )
})

export default CodeEditor
