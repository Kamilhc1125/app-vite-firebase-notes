import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Layout, NoteList, NoteAdd, NoteDetails, NotFound } from "@/components";
import { useAuthStatus } from "@/hooks";

export const App = () => {

  const isLoggedIn = useAuthStatus();

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {!isLoggedIn ? (
            <Route path="/" element={<Landing />} />
          ) : (
              <Route path="/" element={<NoteList />} />
          )}
          <Route path="/note/add" element={<NoteAdd />} />
          <Route path="/note/:id" element={<NoteDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
