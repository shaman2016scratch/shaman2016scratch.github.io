let projects_req
let projects
async function projectGet() {
  projects_req = await fetch("https://shaman2016-trampline.vercel.app/scratch/studios/36416387/projects")
  projects = await projects_req.json()
}
for(let i = 0; i < projects.length; i++) {}
