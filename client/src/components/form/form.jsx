import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [data, setData] = useState({
    title: "The Miserable Code",
    message: "the difficulties faces programmers",
    creator: "Som3a ",
    tags: "code, DB, server, client",
    selectedFile: "",
  });
console.log(data)
  //Reset the fields 
  const handleReset = (event) => {
    event.preventDefault();
    console.log(data.selectedFile);
    setData({title: "",message: "",creator: "",tags: [],selectedFile:null });
  };
  return (
    <form className="w-full shadow-2xl bg-transparent">
      <fieldset className="fieldset  border-base-300 rounded-box  border p-4">
        <legend className="fieldset-legend text-black text-2xl">
          Adding Memory
        </legend>

        <label className="label text-black">Title</label>
        <input
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          type="text"
          className="input bg-white border border-black"
          placeholder="the memory about ?"
        />

        <label className="label text-black">Message</label>
        <input
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          type="text"
          className="input bg-white border border-black"
          placeholder="write your feeling"
        />

        <label className="label text-black">Creator</label>
        <input
          value={data.creator}
          onChange={(e) => setData({ ...data, creator: e.target.value })}
          type="text"
          className="input bg-white border border-black"
          placeholder="creator name"
        />
        <label className="label text-black">Tags</label>
        <input
          value={data.tags}
          onChange={(e) => setData({ ...data, tags:e.target.value })}
          type="text"
          className="input bg-white border border-black"
          placeholder="#tags saperated by , "
        />
        <fieldset className="fieldset bg-white">
          <legend className="fieldset-legend text-black">Pick a file</legend>
          <input
     
            onChange={(e) =>
              setData({ ...data, selectedFile: e.target.files[0] })
            }
            type="file"
            className="file-input bg-white"
          />
          {/* <label className="label">Max size 2MB</label> */}
        </fieldset>

        <button
          className="btn btn-primary"
          onClick={(e) => onSubmit(e, data)}
        >
          Send
        </button>
        <button onClick={(e) => handleReset(e)} className="btn btn-outline">
          Reset
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
