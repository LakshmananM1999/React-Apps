import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const getRecords = async () => {
    const response = await fetch(`http://localhost:5000/`);
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    setNotes(records);
  };
  useEffect(() => {
    getRecords();
    return;
  });

  function addNote(note) {
    setNotes((preItems) => {
      return [...preItems, note];
    });
  }

  async function deleteItem(id) {
    try {
      await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE",
      });
      const newRecords = notes.filter((no) => no._id !== id);
      setNotes(newRecords);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => (
        <Note
          key={noteItem._id}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
