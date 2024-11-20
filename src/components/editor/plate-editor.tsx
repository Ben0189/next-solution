'use client';

import { Plate } from '@udecode/plate-common/react';
import { Editor, EditorContainer } from '../plate-ui/editor';
import { useCreateEditor } from './use-create-editor';

export function PlateEditor() {
  const editor = useCreateEditor();

  const handleSubmit = () => {
    // Get the editor's content as plain text
    const content = editor.children;
    console.log('Editor content:', content);
  };

  editor.onChange = () => {
    // Update the editor's content
    console.log('Editor content updated:', editor.children);
  };

  return (
    <>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant="demo" placeholder="Type..." />
        </EditorContainer>
      </Plate>

      <button 
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </>
  );
}
