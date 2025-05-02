const NoteForm = ({ handleChange, handleSubmit, handleDelete, note, type }) => {

  return (
    <div className="w-[500px]">
      <fieldset className="fieldset">
        <input
          name="title"
          type="text"
          className="input focus:outline-none w-full"
          placeholder="Title..."
          value={note?.title || ''}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="fieldset">
        <input
          name="content"
          type="text"
          className="input focus:outline-none w-full"
          placeholder="Content..."
          value={note?.content || ''}
          onChange={handleChange}
        />
      </fieldset>
      <div className="flex flex-row justify-between">
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          {type == "add" ? "Add" : "Edit"} Note
        </button>
        {type != "add" && (
          <button
            className="btn btn-error"
            onClick={handleDelete}
          >
            Delete Note
          </button>
        )}
      </div>
    </div>
  )
}

export default NoteForm;
