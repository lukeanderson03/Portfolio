import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaPalette,
  FaNetworkWired,
  FaShieldAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Luke Anderson</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Luke Anderson</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm currently pivoting
            from web development into networking and cybersecurity, driven by
            curiosity and a love for problem-solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a versatile technology professional with expertise spanning
                multiple domains. My background in web development has taught me
                the importance of creating intuitive, accessible user
                experiences, while my work in networking and security has given
                me a deep understanding of system architecture and data
                protection.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I believe in building solutions that not only solve technical
                challenges but also provide meaningful value to users. Whether
                it's crafting responsive web applications, designing user
                interfaces, or securing network infrastructure, I approach each
                project with attention to detail and a focus on best practices.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding or designing, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaCode className="mr-3" />
                  Full-stack web development
                </li>
                <li className="flex items-center">
                  <FaPalette className="mr-3" />
                  User experience design
                </li>
                <li className="flex items-center">
                  <FaNetworkWired className="mr-3" />
                  Network infrastructure
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="mr-3" />
                  Security implementation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-3xl mb-4">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Web Development
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Databases</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-purple-600 text-3xl mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                UX Design
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>User Research</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>UI/UX Design</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-green-600 text-3xl mb-4">
                <FaNetworkWired />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Networking
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>Network Design</li>
                <li>Routing & Switching</li>
                <li>Cloud Infrastructure</li>
                <li>Network Security</li>
                <li>Troubleshooting</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-red-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Security
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>Penetration Testing</li>
                <li>Security Auditing</li>
                <li>Incident Response</li>
                <li>Compliance</li>
                <li>Security Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <FaCode className="text-white text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Web Application
                </h3>
                <p className="text-gray-600 mb-4">
                  A modern web application built with React and Node.js,
                  featuring responsive design and real-time functionality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <FaPalette className="text-white text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  UX Design System
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive design system with reusable components,
                  accessibility guidelines, and design tokens.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    Design System
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Accessibility
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <FaNetworkWired className="text-white text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Network Infrastructure
                </h3>
                <p className="text-gray-600 mb-4">
                  Designed and implemented a scalable network infrastructure
                  with security best practices and monitoring.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Cisco
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    AWS
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                    Security
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">More projects coming soon...</p>
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Interested in working together? Let's talk!
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to connect, feel
            free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:andersonluke0330@gmail.com"
              className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <FaEnvelope />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/luke-anderson-2a2b6c7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://github.com/lukeanderson03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Luke Anderson. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
