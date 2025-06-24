# SyncScribble

![SyncScribble Logo](screenshots/HomePage.png)

A powerful real-time collaborative whiteboard application that enables seamless drawing, sketching, and visual brainstorming. SyncScribble provides an intuitive platform where multiple users can collaborate instantly with comprehensive drawing tools, real-time synchronization, and integrated communication features.

Live Demo: [syncscribble.onrender.com](https://syncscribble.onrender.com/)

## 📸 Screenshots

<div align="center">
  <img src="screenshots/HomePage.png" alt="SyncScribble Home Page" width="800"/>
  <p><em>Clean and modern home page interface</em></p>
  <br><br/>
</div>

<div align="center">
  <img src="screenshots/CreateRoom.png" alt="Create Room Interface" width="800"/>
  <p><em>Intuitive room creation and joining interface</em></p>
  <br><br/>
</div>

<div align="center">
  <img src="screenshots/WhiteBoard.png" alt="Collaborative Whiteboard" width="800"/>
  <p><em>Feature-rich collaborative whiteboard with advanced drawing tools</em></p>
  <br><br/>
</div>

<div align="center">
  <img src="screenshots/ChatBox.png" alt="Integrated Chat" width="800"/>
  <p><em>Real-time chat integration for seamless team communication</em></p>
  <br><br/>
</div>

<div align="center">
  <img src="screenshots/NotFound.png" alt="404 Page" width="800"/>
  <p><em>Custom 404 page with elegant design</em></p>
</div>

![GitHub contributors](https://img.shields.io/github/contributors/shubh-garg18/SyncScribble?style=for-the-badge&color=48bf21)
![GitHub Repo stars](https://img.shields.io/github/stars/shubh-garg18/SyncScribble?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/shubh-garg18/SyncScribble?style=for-the-badge&color=d7af2d)
![GitHub pull requests](https://img.shields.io/github/issues-pr/shubh-garg18/SyncScribble?style=for-the-badge&color=f47373)
![GitHub License](https://img.shields.io/github/license/shubh-garg18/SyncScribble?style=for-the-badge&color=e67234)
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fshubh-garg18%2FSyncScribble&label=Repo%20Views&countColor=%2337d67a&labelStyle=upper)

## 🔮 Features

- 🎨 **Real-Time Collaborative Drawing:** Multiple users can draw simultaneously with instant synchronization
- 🚀 **Unique Room System:** Create and join rooms with secure room IDs for team collaboration
- ✏️ **Advanced Drawing Tools:** Pen, eraser, shape drawing with precision controls
- 🔳 **Comprehensive Shape Library:** Circles, rectangles, polygons, lines, and custom shapes
- 🎨 **Dynamic Color System:** Custom color picker with brush size controls
- 🖼️ **Image Integration:** Drag, drop, and manipulate images directly on the canvas
- 💬 **Integrated Real-time Chat:** Communicate with team members while drawing
- ♻️ **Smart Undo/Redo:** Intelligent history control for seamless workflow
- 💾 **Canvas Export:** Download collaborative artwork as high-quality PNG files
- ⚡ **WebSocket Synchronization:** Lightning-fast real-time updates across all connected users
- 📱 **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- 🎭 **Smooth Animations:** Framer Motion powered transitions and interactions
- 🖱️ **Intuitive UI/UX:** Clean interface with tooltips and visual feedback
- 🔐 **Secure Collaboration:** Protected room access with unique identifiers
- 🚫 **Error Handling:** Robust 404 pages and connection management
- 🎯 **TypeScript Support:** Fully typed for enhanced development experience

## 🚀 Live Preview

You can view the live preview of the project [here](https://syncscribble.onrender.com/).

## 💻 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

## ⚙️ Installation

1. **Fork this repository:** Click the Fork button located in the top-right corner of this page.
2. **Clone the repository:**
   ```bash
   git clone https://github.com/shubh-garg18/SyncScribble.git
   ```
3. **Navigate to the project directory:**
   ```bash
   cd SyncScribble
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Set up environment variables (if needed):**
   Create a `.env.local` file in the root directory:
   ```bash
   # Add any required environment variables
   NEXT_PUBLIC_APP_NAME=SyncScribble
   ```
6. **Start the development server:**
   ```bash
   npm run dev
   ```
7. **Access the application:**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📁 Available Scripts

| Script  | Description                      |
|---------|----------------------------------|
| `dev`   | Start the development server     |
| `build` | Build the app for production     |
| `start` | Launch the production server     |
| `lint`  | Lint the code using ESLint       |

## 🎨 Usage Guide

### Creating a Room
1. Visit the homepage at [syncscribble.onrender.com](https://syncscribble.onrender.com/)
2. Click "Create Room" to generate a unique room ID
3. Share the room ID with your collaborators
4. Start drawing and collaborating in real-time!

### Joining a Room
1. Enter the room ID provided by the room creator
2. Click "Join Room"
3. You'll be instantly connected to the collaborative whiteboard

### Drawing Tools
- **Pen Tool:** Free-hand drawing with customizable colors and brush sizes
- **Shape Tools:** Draw perfect circles, rectangles, polygons, and lines
- **Eraser:** Remove unwanted elements with precision
- **Color Picker:** Choose from preset colors or create custom colors
- **Brush Size Control:** Adjust stroke width for different drawing needs
- **Image Upload:** Drag and drop images directly onto the canvas

### Advanced Features
- **Undo/Redo:** Smart history management for better workflow control
- **Canvas Export:** Download your collaborative artwork as PNG files
- **Real-time Chat:** Communicate with team members without leaving the canvas
- **Responsive Design:** Seamless experience across all devices

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Test real-time functionality thoroughly
- Keep animations smooth and purposeful
- Ensure accessibility standards are met

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support Us

If you find SyncScribble helpful or valuable, please consider 🌟 starring the repository. It helps us gain visibility and encourages further development of collaborative tools.

## 🙏 Acknowledgments

Special thanks to:

- **Next.js** for the powerful React framework:
  - [Next.js Repository](https://github.com/vercel/next.js)
  - [Next.js Documentation](https://nextjs.org/docs)

- **Socket.IO** for enabling real-time communication:
  - [Socket.IO Repository](https://github.com/socketio/socket.io)
  - [Socket.IO Documentation](https://socket.io/docs/)

- **Recoil** for elegant state management:
  - [Recoil Repository](https://github.com/facebookexperimental/Recoil)

- **Framer Motion** for smooth animations:
  - [Framer Motion Documentation](https://www.framer.com/motion/)

### 📫 Get in Touch:

GitHub: [@shubh-garg18](https://github.com/shubh-garg18)
<br><br/>
Project Repository: [SyncScribble](https://github.com/shubh-garg18/SyncScribble)
<br><br/>


---

*Built with ❤️ by Shubh Garg*
