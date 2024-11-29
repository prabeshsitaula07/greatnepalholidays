import React, { useState, useRef } from 'react';

function RichTextEditor() {
  const [editorContent, setEditorContent] = useState('');
  const editorRef = useRef(null);

  // Function to apply style to selected text
  const applyStyle = (style) => {
    document.execCommand(style, false, null);
  };

  // Function to change font size
  const changeFontSize = (size) => {
    document.execCommand('fontSize', false, size);
  };

  // Handle content change
  const handleChange = () => {
    setEditorContent(editorRef.current.innerHTML);
  };

  return (
    <div className="editor-container p-4">
      <div className="toolbar mb-4">
        <button onClick={() => applyStyle('bold')} className="btn">Bold</button>
        <button onClick={() => applyStyle('italic')} className="btn">Italic</button>
        <button onClick={() => applyStyle('underline')} className="btn">Underline</button>
        <select onChange={(e) => changeFontSize(e.target.value)} className="btn">
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>
        <button onClick={() => applyStyle('insertOrderedList')} className="btn">Ordered List</button>
        <button onClick={() => applyStyle('insertUnorderedList')} className="btn">Unordered List</button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        className="editor border p-4 min-h-[200px] rounded-md focus:outline-none"
        onInput={handleChange}
        dangerouslySetInnerHTML={{ __html: editorContent }}
      />

      <div className="output mt-4 p-4 bg-gray-100 rounded-md">
        <h3>Editor Content:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
}

export default RichTextEditor;
