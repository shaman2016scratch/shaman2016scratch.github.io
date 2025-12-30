import React from "react";
import { createRoot } from "react-dom/client";
import "./top.css";
const rootEl = document.getElementById("topboard");
const root = createRoot(rootEl);
let projects_req = fetch("https://shaman2016-trampline.vercel.app/scratch/studios/36416387/projects")
let projects = projects_req.json()
for(let i = 0; i < projects.length; i++){}
root.render(app);
