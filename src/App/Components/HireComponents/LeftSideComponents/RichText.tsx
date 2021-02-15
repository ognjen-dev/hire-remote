import React from 'react'
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';

// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface RichProps {
    title:string
}

const RichText = ({ title }:RichProps) => {
    return (
        <div>
            <p className="ml-5 mt-6 font-bold text-sm text-gray-700">{title}</p>
            <div className="px-4 pt-4 lg:w-max w-11/12 ml-4 lg:mr-0">
                <CKEditor
                    editor={ClassicEditor}
                    data="<p></p><p></p><p></p><p></p>"
                    // @ts-ignore
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    // @ts-ignore
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    // @ts-ignore
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    // @ts-ignore
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        </div>
    )
}

export default RichText
