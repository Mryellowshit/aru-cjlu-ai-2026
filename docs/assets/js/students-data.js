window.STUDENTS = [
  {
    name: "PinZhen You",
    photo: "",                     
    hometown: "Hangzhou, Zhejiang, China",
    studies: "Computer Science and Technology, China Jiliang University",
    interests: "Deep learning and Machine Learning",
    shortBio: "I am a computer science graduate in the 2026 ARU–CJLU cohort...",
    approved: true
  },
  {
    id: "student-10",
    name: "XuRui Shen",
    photo: "",
    hometown: "Hangzhou, Zhejiang, China",
    studies: "Computer Science and Technology, China Jiliang University",
    interests: "Artificial Intelligence, Machine Learning",
    shortBio: "As a member of the 2026 ARU–CJLU cohort, I focus on artificial intelligence and software engineering. I am interested in building practical AI solutions, exploring modern machine learning frameworks, and bridging the gap between theoretical algorithms and real-world applications.",
    approved: true  // 必须是 true！
  },
  ...Array.from({ length: 23 }, (_, index) => {
    const number = String(index + 3).padStart(2, '0');
    return {
      id: `student-${number}`,
      name: `Student ${number}`,
      photo: "",
      hometown: "To be confirmed",
      studies: "Computing or related discipline — details to be confirmed",
      interests: "Future academic and professional interests to be added",
      shortBio: "This profile is reserved for a member of the 2026 ARU–CJLU cohort and will be completed after the student reviews and approves the wording.",
      approved: false
    };
  })
]
]
