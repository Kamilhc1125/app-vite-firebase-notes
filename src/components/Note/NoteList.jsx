import { useEffect, useState } from 'react';
import { useAuthStatus } from "@/hooks";
import useUserStore from "@/store/useUserStore";
import { getNotesByUserId } from '@/services/notes';
import { Table, Heading } from '@/components';

const NoteList = () => {

  const user = useUserStore((state) => state.user);
  const isLoggedIn = useAuthStatus();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchNotes = async () => {
      const data = await getNotesByUserId(user.uid);
      setNotes(data);
    };

    fetchNotes();
  }, [user]);

  return (
    <div>
      <Heading text="Note List" />
      {isLoggedIn && (
        <Table array={notes} /> 
      )}
    </div>
  )
}

export default NoteList;