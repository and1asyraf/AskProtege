# Conversational Portfolio

A modern, interactive portfolio website that presents information through a conversational chat interface. Instead of traditional static sections, visitors can ask questions and receive personalized responses about projects, skills, experience, and more.

## ✨ Features

- **Chat Interface**: Full-screen conversational experience
- **Pre-programmed Responses**: Intelligent responses to common questions
- **Smooth Animations**: Framer Motion animations for a polished feel
- **Typing Simulation**: Realistic 2-second delay before bot responses
- **Preset Questions**: Quick-access buttons for common queries
- **Responsive Design**: Works perfectly on desktop and mobile
- **Restart Chat**: Clear conversation and start fresh
- **Modern UI**: Clean, minimalist design with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd conversational-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Customization

### Personalizing Responses

Edit `src/utils/chatResponses.js` to customize the bot responses:

```javascript
const responses = {
  'projects': `Your custom project description here...`,
  'skills': `Your custom skills description here...`,
  // Add more responses as needed
};
```

### Styling

- **Colors**: Modify the Tailwind classes in components
- **Animations**: Adjust Framer Motion settings in components
- **Layout**: Edit the main App.js component structure

### Adding New Questions

1. Add new response keys in `src/utils/chatResponses.js`
2. Update the keyword detection logic in `getBotResponse()`
3. Optionally add preset buttons in `src/components/PresetQuestions.js`

## 📁 Project Structure

```
src/
├── components/
│   ├── ChatMessage.js      # Individual message component
│   └── PresetQuestions.js  # Quick question buttons
├── utils/
│   └── chatResponses.js    # Bot response logic
├── App.js                  # Main application component
├── index.js               # React entry point
└── index.css              # Global styles
```

## 🎨 Design Features

- **Minimalist Design**: Clean white/off-white background
- **Message Bubbles**: Distinct styling for user and bot messages
- **Smooth Scrolling**: Auto-scroll to latest messages
- **Loading States**: Typing indicators and animations
- **Responsive Layout**: Adapts to different screen sizes

## 🔧 Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icons
- **Create React App**: Zero-configuration build tool

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by modern chat interfaces
- Built with React and Tailwind CSS
- Icons from Lucide React
- Animations powered by Framer Motion

---

**Happy coding! 🎉** 