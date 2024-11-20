'use client'
// Import React dependencies.
import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor, Descendant } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

export default function Home() {

  const [editor] = useState(() => withReact(createEditor()))
  
  // Define a React component renderer for our code blocks.
  const CodeElement = (props : any) => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

  const DefaultElement = (props : any) => {
    return <p {...props.attributes}>{props.children}</p>
  }

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        onKeyDown={event => {
          if (event.key === '&') {
            // Prevent the ampersand character from being inserted.
            event.preventDefault()
            // Execute the `insertText` method when the event occurs.
            editor.insertText('and')
          }
        }}
      />
    </Slate>
  )
}
