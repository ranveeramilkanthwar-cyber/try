export const campusData = {
  home: {
    title: "Welcome to Campus Navigator",
    description: "Your ultimate guide to navigating the university campus with ease. Explore departments, find facilities, and stay updated with live events.",
    stats: [
      { label: "Departments", value: "12" },
      { label: "Facilities", value: "45+" },
      { label: "Active Events", value: "8" }
    ]
  },
  departments: [
    { id: 1, name: "Computer Science", building: "Building A", floor: "3rd", description: "Center for innovation and software engineering." },
    { id: 2, name: "Mechanical Engineering", building: "Building C", floor: "Ground", description: "Design and manufacturing excellence." },
    { id: 3, name: "Physics Department", building: "Science Block", floor: "2nd", description: "Exploring the fundamentals of the universe." },
    { id: 4, name: "Business School", building: "Building D", floor: "1st", description: "Shaping future leaders and entrepreneurs." }
  ],
  facilities: [
    { id: 1, name: "Central Library", category: "Academic", hours: "8 AM - 10 PM" },
    { id: 2, name: "Student Cafeteria", category: "Dining", hours: "9 AM - 8 PM" },
    { id: 3, name: "Health Center", category: "Medical", hours: "24/7" },
    { id: 4, name: "Sports Complex", category: "Recreation", hours: "6 AM - 9 PM" }
  ],
  events: [
    { id: 1, name: "Tech Symposium", date: "Oct 15", location: "Auditorium" },
    { id: 2, name: "Career Fair", date: "Oct 18", location: "Main Hall" },
    { id: 3, name: "Hackathon 2024", date: "Oct 22", location: "CS Lab" }
  ],
  emergency: {
    contacts: [
      { name: "Campus Security", phone: "+1 (555) 123-4567" },
      { name: "Medical Hotline", phone: "+1 (555) 987-6543" },
      { name: "Fire Safety", phone: "911 (Ext. 444)" }
    ]
  }
};
