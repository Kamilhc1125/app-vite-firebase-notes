import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Landing, Layout, NoteList, NoteAdd, NoteDetails, NotFound,  ProtectedRoute } from "@/components";
import { useAuthStatus } from "@/hooks";

export const App = () => {

  const isLoggedIn = useAuthStatus();

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={isLoggedIn ? <NoteList /> : <Landing />} />
          <Route
            path="/note/add"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <NoteAdd />
              </ProtectedRoute>
            }
          />
          <Route
            path="/note/:id"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <NoteDetails />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
