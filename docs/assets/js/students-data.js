window.STUDENTS = [
  {
    name: "PinZhen You",
    photo: "",                     
    hometown: "Hangzhou, Zhejiang, China",
    studies: "Computer Science and Technology, China Jiliang University",
    interests: "Deep learning and Machine Learning",
    shortBio: "I am a computer science graduate in the 2026 ARU–CJLU cohort, and my interests sit where machine learning theory meets trustworthy AI. What I want to understand is how we tell whether a model is right for the right reasons — and how to test that systematically rather than by intuition.",
    approved: true
  },
  ...Array.from({ length: 24 }, (_, index) => {
    const number = String(index + 2).padStart(2, '0');
    return {
      id: `student-10`,
      name: `XuRui Shen`,
      photo: "",
      hometown: "Hangzhou, Zhejiang, China",
      studies: "Computing or related discipline — details to be confirmed",
      interests: "Artificial Intelligence, Machine Learning",
      shortBio: "As a member of the 2026 ARU–CJLU cohort, I focus on artificial intelligence and software engineering. I am interested in building practical AI solutions, exploring modern machine learning frameworks, and bridging the gap between theoretical algorithms and real-world applications.",
      approved: false
    };
  })
];
