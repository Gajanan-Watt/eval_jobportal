import { useEffect, useState } from "react";

export const GetInfo = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    fetch(`http://localhost:8000/job_details`)
      .then((data) => data.json())
      .then((res) => {
        // console.log(res)
        setDetails(res);
      });
  };
  console.log();
  return (
    <div>
      get Details
      {details.map((e) => (
        <>
          <h1>Company Name:- {e.name}</h1>
          <h3>Job Title :- {e.title}</h3>
          <h2>Range:- {e.range}</h2>
          <div>Location:- {e.location}</div>
          <div>Job Type:- {e.type}</div>
          <div>Description:- {e.description}</div>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};
