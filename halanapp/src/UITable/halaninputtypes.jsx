import React, { useState } from "react";

export default function Form() {
  const [newCompany, setCompany] = useState("");
  const [newPosition, setPosition] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newNote, setNewNote] = useState("");

  return (
        <form>
          <input
            value={newCompany}
            onChange={(e) => setCompany(e.target.value)}
            label="Company"
          />
          <input
            value={newPosition}
            onChange={(e) => setPosition(e.target.value)}
            label="Job Title"
          />
          <input
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            label="Job Link"
          />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <input
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            label="Note"
          />
          <button type="submit"> Submit </button>
        </form>
  );
}