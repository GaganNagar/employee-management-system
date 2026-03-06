const employees = [
{
id: 1,
firstName: "Aarav",
email: "aarav@company.com",
password: "123",
taskNumbers: {
active: 2,
newTask: 1,
completed: 1,
failed: 1
},
tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
taskTitle: "Fix Login Bug",
taskDescription: "Resolve authentication issue on login page",
taskDate: "2026-03-05",
category: "Bug Fix"
},
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Update UI",
taskDescription: "Improve dashboard layout and responsiveness",
taskDate: "2026-03-06",
category: "Frontend"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Create API",
taskDescription: "Develop API for user authentication",
taskDate: "2026-03-01",
category: "Backend"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
taskTitle: "Fix Payment Gateway",
taskDescription: "Payment gateway integration failed",
taskDate: "2026-03-07",
category: "Bug Fix"
}
]
},

{
id: 2,
firstName: "Rohan",
email: "rohan@company.com",
password: "123",
taskNumbers: {
active: 3,
newTask: 2,
completed: 1,
failed: 1
},
tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
taskTitle: "Build Navbar",
taskDescription: "Create responsive navbar using React",
taskDate: "2026-03-05",
category: "Frontend"
},
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Optimize Images",
taskDescription: "Compress images for faster loading",
taskDate: "2026-03-07",
category: "Performance"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Write Documentation",
taskDescription: "Document API endpoints",
taskDate: "2026-02-28",
category: "Documentation"
},
{
active: true,
newTask: true,
completed: false,
failed: false,
taskTitle: "Implement Dark Mode",
taskDescription: "Add dark mode feature",
taskDate: "2026-03-08",
category: "Feature"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
taskTitle: "Fix Search Bug",
taskDescription: "Search functionality not returning results",
taskDate: "2026-03-09",
category: "Bug Fix"
}
]
},

{
id: 3,
firstName: "Vikram",
email: "vikram@company.com",
password: "123",
taskNumbers: {
active: 2,
newTask: 1,
completed: 1,
failed: 1
},
tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
taskTitle: "Database Backup",
taskDescription: "Schedule MongoDB backups",
taskDate: "2026-03-05",
category: "Database"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Fix CSS Issues",
taskDescription: "Resolve mobile layout issues",
taskDate: "2026-03-02",
category: "Frontend"
},
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Setup Logging",
taskDescription: "Implement server logging",
taskDate: "2026-03-07",
category: "Backend"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
taskTitle: "API Timeout Error",
taskDescription: "Fix API response delay",
taskDate: "2026-03-06",
category: "Backend"
}
]
},

{
id: 4,
firstName: "Aditya",
email: "aditya@company.com",
password: "123",
taskNumbers: {
active: 3,
newTask: 2,
completed: 1,
failed: 1
},
tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
taskTitle: "Create Landing Page",
taskDescription: "Design company landing page",
taskDate: "2026-03-05",
category: "UI Design"
},
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "SEO Optimization",
taskDescription: "Improve SEO tags",
taskDate: "2026-03-09",
category: "SEO"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Fix Footer",
taskDescription: "Correct footer alignment",
taskDate: "2026-03-01",
category: "Frontend"
},
{
active: true,
newTask: true,
completed: false,
failed: false,
taskTitle: "Add Animations",
taskDescription: "Add framer motion animations",
taskDate: "2026-03-10",
category: "UI Enhancement"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
taskTitle: "Broken Image Links",
taskDescription: "Fix broken assets",
taskDate: "2026-03-08",
category: "Bug Fix"
}
]
},

{
id: 5,
firstName: "Kunal",
email: "kunal@company.com",
password: "123",
taskNumbers: {
active: 3,
newTask: 2,
completed: 1,
failed: 1
},
tasks: [
{
active: true,
newTask: true,
completed: false,
failed: false,
taskTitle: "Testing Login Flow",
taskDescription: "QA test login system",
taskDate: "2026-03-05",
category: "Testing"
},
{
active: true,
newTask: false,
completed: false,
failed: false,
taskTitle: "Write Unit Tests",
taskDescription: "Add unit tests for auth module",
taskDate: "2026-03-08",
category: "Testing"
},
{
active: false,
newTask: false,
completed: true,
failed: false,
taskTitle: "Setup CI/CD",
taskDescription: "Configure GitHub Actions",
taskDate: "2026-03-02",
category: "DevOps"
},
{
active: true,
newTask: true,
completed: false,
failed: false,
taskTitle: "Security Audit",
taskDescription: "Check API vulnerabilities",
taskDate: "2026-03-12",
category: "Security"
},
{
active: false,
newTask: false,
completed: false,
failed: true,
taskTitle: "Session Expiry Issue",
taskDescription: "User session expiring early",
taskDate: "2026-03-11",
category: "Bug Fix"
}
]
}
]

  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
  

   return { employees, admin }
}