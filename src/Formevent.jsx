import React, { useState } from "react";

const Formevent = () => {
  const [name, setname] = useState("");
  const [user, setuser] = useState("");
  const Formevent = (e) => {
    setname(e.target.value);
  };
  const onclick = (e) => {
    e.preventDefault();
    setuser(name);
  };
  return (
    <div>
      Formevent
      <section>
        <p>{user}</p>
        <form onSubmit={onclick}>
        <label>Enter the name </label>
        <input type="text" onChange={Formevent} />
        <button type="submit">submit</button>
</form>
      </section>
    </div>
  );
};

export default Formevent;
