import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
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
];

export default function CreatePost() {
  const [title, setTitile] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    ev.preventDefault();

    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
        setRedirect(true);
    }
  }


  if (redirect) {
    return <Navigate to={'/community'} />;
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
               onChange={ev => setFiles(ev.target.files)}
        />

        <ReactQuill 
          modules={modules} 
          formats={formats} 
          value={content} 
          onChange={newValue => setContent(newValue)}
        />

        <button style={{marginTop:'5px'}} type="submit">Create Post</button>
      </form>
    </div>
  );
}
