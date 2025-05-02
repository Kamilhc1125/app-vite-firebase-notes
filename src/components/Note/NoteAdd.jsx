import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from "@/store/useUserStore";
import { useAuthStatus, useForm} from '@/hooks';
import { addNote } from '@/services/notes';
import { NoteForm, Warning} from '@/components';

const NoteAdd = () => {

  const user = useUserStore((state) => state.user);
  const isLoggedIn = useAuthStatus();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { form: note, handleChange, resetForm } = useForm({
    title: '',
    content: '',
    userId: ''
  });

  const handleSubmit = async () => {

    if (!user) return;
    if (!note.title.trim() || !note.content.trim()) {
      setError("Please fill all fields")
      return;
    }

    const noteNew = {...note, userId: user.uid};

    await addNote(noteNew);
    resetForm();
    navigate('/');
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Add note</h1>
      {isLoggedIn && <NoteForm handleChange={handleChange} handleSubmit={handleSubmit} note={note} type="add" />}
      {error && <Warning message="Please fill all the fileds"/>}
    </div>
  )
}

export default NoteAdd;