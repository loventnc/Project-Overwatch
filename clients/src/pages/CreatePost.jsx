import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';

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

    const response = await fetch('http://localhost:3000/community/posts', {
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
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className='text-4xl font-bold flex justify-center mb-4'>Create a new Post</div>
      <form onSubmit={createNewPost} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitile(ev.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <label className="w-full block">
          <span className="text-gray-700">Choose a File</span>
          <input
            type="file"
            onChange={(ev) => setFiles(ev.target.files)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </label>

        <Editor value={content} onChange={setContent} />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Create Post
        </button>
      </form>
</div>


  );
}
