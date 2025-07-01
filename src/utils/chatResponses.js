// Pre-programmed responses for the conversational portfolio
const responses = {
  // Projects
  'projects': `Here are some of my key projects:

🚀 **E-commerce Platform** - Full-stack React/Node.js application with payment integration
🔗 **Portfolio Website** - This conversational portfolio you're chatting with!
📱 **Mobile App** - React Native app for task management
🌐 **API Service** - RESTful API built with Express.js and MongoDB

Each project focuses on clean code, user experience, and modern development practices. Would you like me to elaborate on any specific project?`,

  // Skills
  'skills': `My technical skills include:

**Frontend:** React, Vue.js, TypeScript, Tailwind CSS, Next.js
**Backend:** Node.js, Python, Express.js, Django, PostgreSQL
**Mobile:** React Native, Flutter
**Tools:** Git, Docker, AWS, CI/CD, Figma
**Other:** REST APIs, GraphQL, Testing, Agile methodologies

I'm always learning and expanding my skill set. Currently exploring AI/ML and cloud architecture!`,

  // Experience
  'experience': `My professional journey:

👨‍💻 **Senior Developer** (2022-Present)
- Leading development teams and mentoring junior developers
- Architecting scalable solutions for enterprise clients

💼 **Full-Stack Developer** (2020-2022)
- Built and maintained multiple web applications
- Collaborated with cross-functional teams

🎓 **Junior Developer** (2018-2020)
- Started my career building responsive websites
- Learned modern development practices and tools

I have 5+ years of experience delivering high-quality software solutions.`,

  // Work in progress
  'working on': `Currently working on exciting projects:

🔥 **AI Chat Assistant** - Building an intelligent chatbot using OpenAI APIs
📊 **Data Visualization Dashboard** - Real-time analytics with D3.js
🎮 **Game Development** - Learning Unity for mobile game creation
📚 **Learning Platform** - Educational app for coding tutorials

I'm passionate about continuous learning and always have multiple projects in the pipeline!`,

  // Fun facts
  'fun fact': `Here are some fun facts about me:

🎵 I can play 3 musical instruments (guitar, piano, drums)
🌍 I've visited 15 countries and love learning about different cultures
☕ I'm a coffee enthusiast - currently exploring pour-over brewing
🏃‍♂️ I run marathons and have completed 3 so far
📚 I read 2-3 books per month, mostly tech and sci-fi
🎨 I enjoy digital art and occasionally create pixel art

Life is about balance - coding, music, travel, and staying active!`,

  // Greetings
  'hello': `Hello! 👋 Great to meet you! I'm excited to share my portfolio with you. Feel free to ask me anything about my projects, skills, experience, or just chat!`,

  'hi': `Hi there! 😊 Thanks for stopping by my conversational portfolio. What would you like to know about me?`,

  // Protege USM custom Q&A
  'protege usm': `Protege USM, under Dewan Budaya USM, is a student leadership and cultural transformation program that empowers students to take charge of impactful events, cultural initiatives, and creative projects.\n\nWe build confident, creative, and capable student leaders — one event at a time.`,

  'events': `We organize a wide range of events including:\n\n• Malaysiana – a cultural mega-show celebrating Malaysian heritage\n• Workshop Series – event management, emceeing, creative writing, and more\n• Leadership Bootcamps\n• Behind-the-Scenes Tours (technical + production side of Dewan Budaya)\n\nEvery event is a chance to lead, create, and grow.`,

  'who can join': `Any USM student with passion, creativity, and a growth mindset!\nWhether you love organizing, writing, performing, or managing social media — there's a role for you.`,

  'how to apply': `We usually open recruitment at the start of each semester.\nWatch for announcements on:\n\n• Our Instagram\n• Dewan Budaya's official portal\nOr ask one of our friendly committee members directly! 😊`,

  'skills': `Protege members have walked away with:\n\n• Public speaking & emceeing confidence\n• Team management & leadership\n• Creative production (design, scriptwriting, stage direction)\n• Event logistics & budgeting\n\nAnd best of all… lifelong friendships.`,

  'not cultural background': `Absolutely! Protege is multidisciplinary.\nWe've had tech students managing lights, engineering students on stage, and medical students directing productions.\nPassion is our only requirement 💪`,

  'committee members': `You can view our 2025/2026 committee lineup [here].\n(You can link to a team page, or render cards in chat with profile photos!)`,

  'next event': `Our next big event is [Event Name], happening on [Date]!\nWant to join as a crew or audience? Drop us a message or visit our [Instagram link].`,

  'social media': `Follow us on Instagram: [@protegeusm]\nWe post updates, behind-the-scenes, and open calls. Don't miss out!`,

  // Default response
  'default': `That's an interesting question! I'd be happy to help you learn more about me. You can ask about:

• My projects and work
• Technical skills and experience  
• What I'm currently working on
• Fun facts about me
• Or just say hello!

Feel free to use the preset questions above or type your own!`
};

export const getBotResponse = (userInput) => {
  const input = userInput.toLowerCase();
  
  // Protege USM Q&A matching
  if (input.includes('what is protege')) return responses['protege usm'];
  if (input.includes('event')) return responses['events'];
  if (input.includes('who can join') || input.includes('who is eligible') || input.includes('can i join')) return responses['who can join'];
  if (input.includes('how do i apply') || input.includes('how to apply') || input.includes('join protege')) return responses['how to apply'];
  if (input.includes('what skills') || input.includes('skills can i gain')) return responses['skills'];
  if (input.includes('not from a cultural') || input.includes('not from cultural') || input.includes('not cultural background')) return responses['not cultural background'];
  if (input.includes('committee member') || input.includes('current committee')) return responses['committee members'];
  if (input.includes('next event') || input.includes('upcoming event')) return responses['next event'];
  if (input.includes('social media') || input.includes('instagram') || input.includes('follow you')) return responses['social media'];

  // Check for specific keywords and phrases
  if (input.includes('project') || input.includes('work') || input.includes('build')) {
    return responses.projects;
  }
  
  if (input.includes('skill') || input.includes('technology') || input.includes('tech') || input.includes('stack')) {
    return responses.skills;
  }
  
  if (input.includes('experience') || input.includes('background') || input.includes('career') || input.includes('job')) {
    return responses.experience;
  }
  
  if (input.includes('working on') || input.includes('current') || input.includes('now') || input.includes('developing')) {
    return responses['working on'];
  }
  
  if (input.includes('fun fact') || input.includes('interesting') || input.includes('hobby') || input.includes('personal')) {
    return responses['fun fact'];
  }
  
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return responses.hello;
  }
  
  // Return default response for unrecognized input
  return responses.default;
}; 