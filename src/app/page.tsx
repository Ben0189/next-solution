'use client'
import { Plate, usePlateEditor } from '@udecode/plate-common/react';
import { Editor, EditorContainer } from '../components/plate-ui/editor';

const value = [
  {
    type: 'p',
    children: [
      {
        text: 'This is editable plain text with react and history plugins, just like a <textarea>!',
      },
    ],
  },
];

export default function Home() {
  const editor = usePlateEditor({
    value,
  });

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor placeholder="Type..." />
      </EditorContainer>      
    </Plate>
  );
}
