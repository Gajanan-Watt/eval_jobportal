import { useState } from "react";

export const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [range, setRange] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    let payload = { name, title, range, location, type, description };
    e.preventDefault();
    fetch("http://localhost:8000/job_Details", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        //  dispatch(loginSuccess(res));
        // setToken(res.token);
      });
    // setIsauth(!isAuth);
  };
  return (
    <div>
      <h1>Job Details Form</h1>
      <form onSubmit={handleSubmit}>
        <input style={{width: "40%", height: "50px"}}
          type="text"
          placeholder="Company Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        
        <input style={{width: "40%", height: "50px"}}
          type="text"
          placeholder="Job Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        
        <input style={{width: "40%", height: "50px"}}
          type="text"
          placeholder="Salary Range..."
          onChange={(e) => setRange(e.target.value)}
        />
        <br />
        
        <input style={{width: "40%", height: "50px"}}
          type="text"
          placeholder="Job Description..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        
        <input style={{width: "40%", height: "50px"}}
          type="text"
          placeholder="location..."
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        
        <input style={{width: "40%", height: "50px"}}
          type="text"
          placeholder="Job type(remote)..."
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        
        <input style={{width: "40%", height: "50px"}} type="submit" />
      </form>
    </div>
  );
};
