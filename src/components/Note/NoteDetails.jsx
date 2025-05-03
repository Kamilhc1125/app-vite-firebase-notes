import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNoteById, updateNote, deleteNote } from "@/services/notes";
import { useForm } from '@/hooks';
import { NoteForm, Warning, Heading } from "@/components";

const NoteDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [noteData, setNoteData] = useState(null);

  const { form: note, handleChange, resetForm } = useForm({
    title: '',
    content: ''
  });

  useEffect(() => {

    const fetchNote = async () => {
      try {
        const data = await getNoteById(id);
        setNoteData(data);
        resetForm({
          title: data.title,
          content: data.content
        });
        
      } catch (err) {
        console.error(err);
      }
    };

    if (id) fetchNote();

  }, [id]);

  const handleSubmit = async () => {

    if (!note.title.trim() || !note.content.trim()) {
      setError("Please fill all fields");
      return;
    }

    await updateNote({ ...note, id: id });
    navigate('/');
  };

  const handleDelete =  async () => {
    await deleteNote(id);
    navigate('/');
  }

  return (
    <div>
      <Heading text="Edit Note" />
      {noteData && (
        <NoteForm 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          note={note} 
        />
      )}
      {error && <Warning message="Please fill all the fileds" />}
    </div>
  );
};

export default NoteDetails;
