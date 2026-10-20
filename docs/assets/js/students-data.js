window.STUDENTS = [
  {
    id: "w261802113",              
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
