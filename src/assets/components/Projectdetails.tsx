import { useEffect, useState } from "react";

export default function Projectdetails() {
  const [projects, setProjects] = useState([]);
  const fetchprojects = async () => {
    const response = await fetch("http://127.0.0.1:8000/project/");
    const projects = await response.json();
    setProjects(projects.data);
  };

  useEffect(() => {
    fetchprojects();
  }, []);

  return projects;
}
