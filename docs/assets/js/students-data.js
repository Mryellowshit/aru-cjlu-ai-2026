window.STUDENTS = [
  {
    name: "PinZhen You",
    photo: "assets/images/students/orian-pin-zhen-you-square.jpg",
    hometown: "Hangzhou, Zhejiang, China",
    studies: "Computer Science and Technology, China Jiliang University",
    interests: "Deep learning and Machine Learning",
    shortBio: "I am a computer science graduate in the 2026 ARU–CJLU cohort, and my interests sit where machine learning theory meets trustworthy AI. What I want to understand is how we tell whether a model is right for the right reasons — and how to test that systematically rather than by intuition.",
    approved: true
  },
  {
    name: "Sihan Li",
    photo: "assets/images/students/pinzhen-you.jpg",                     
    hometown: "Hangzhou, Zhejiang, China",
    studies: "Physics, University of Toronto",
    interests: "Intelligent Control",
    shortBio: "I'm Sihan Li, a physics graduate from the University of Toronto with an interest in artificial intelligence, autonomous systems, and control theory. I'm particularly interested in how intelligent systems can learn and adapt to changing environments, with applications in autonomous driving and robotics.",
    approved: true
  },
  ...Array.from({ length: 24 }, (_, index) => {
    const number = String(index + 2).padStart(2, '0');
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
];
