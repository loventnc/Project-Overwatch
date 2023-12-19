import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';


const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
};

const formats = [
'header',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image'
]


export default function CreatePost() {

    const [title, setTitile] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    
    function createNewPost(ev){
        const data = new FromData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        // data.set('files',)
        ev.preventDefault(files);
        console.log()
        // fetch('http://localhost:3000/posts', {
        //     method: 'POST',
        //     body: 
        // })
    }
    
      
    return (
        <div>
            <form onSubmit={createNewPost}>
                <input type="title" 
                placeholder={'title'} 
                value={title} 
                onChange={ev => setTitile(ev.target.value)}/>


                <input type="summary" 
                placeholder={'summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}/>

                <input type="file" 
                value={files}
                onChange={ev => setFiles(ev.target.files)}
                />

                <ReactQuill 
                    modules={modules} 
                    format={formats} 
                    value={content} 
                    onChange={newValue => setContent(newValue)}/>

                <button style={{marginTop:'5px'}}>Create Post</button>
            </form>
        </div>
    )
};