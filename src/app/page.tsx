'use client'
import { Plate, usePlateEditor } from '@udecode/plate-common/react';
import { Editor, EditorContainer } from '../components/plate-ui/editor';

import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  CodePlugin,
} from '@udecode/plate-basic-marks/react';
import { HeadingPlugin } from '@udecode/plate-heading/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { CodeBlockPlugin } from '@udecode/plate-code-block/react';

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
    plugins: [
      HeadingPlugin,
      BlockquotePlugin,
      CodeBlockPlugin,
      BoldPlugin,
      ItalicPlugin,
      UnderlinePlugin,
      CodePlugin
    ],
  });

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor placeholder="Type..." />
      </EditorContainer>      
    </Plate>
  );
}
