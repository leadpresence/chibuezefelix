import React from 'react';
import { Code, Layout, Terminal, Smartphone, CreditCard, Boxes } from 'lucide-react';

export default function Portfolio() {
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const skills = [
    { name: 'Mobile Dev', icon: <Smartphone className="w-6 h-6" />, details: 'Flutter, Kotlin, Swift' },
    { name: 'Architecture', icon: <Boxes className="w-6 h-6" />, details: 'MVVM, Clean Architecture' },
    { name: 'Payment Systems', icon: <CreditCard className="w-6 h-6" />, details: 'Fintech, Banking' },
    { name: 'Frontend', icon: <Layout className="w-6 h-6" />, details: 'UI/UX, Jetpack Compose' },
    { name: 'Backend', icon: <Terminal className="w-6 h-6" />, details: 'Node.js, Firebase' },
    { name: 'Development', icon: <Code className="w-6 h-6" />, details: 'CI/CD, Testing' },
  ];

  const projects = [
    {
      title: "CyberPay",
      description: "Fintech application enabling virtual wallets, bank transfers, and utility payments",
      tech: "Flutter, Firebase, API Integration"
    },
    {
      title: "Quantum Zenith",
      description: "Investment banking application for asset management",
      tech: "Flutter, Java API services"
    },
    {
      title: "K11 POS",
      description: "POS terminal application for merchants",
      tech: "Kotlin, Jetpack Compose"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-mono mb-4">
            Creating seamless<br />mobile experiences<br />from scratch
          </h1>
          <p className="text-gray-400 mb-8">
            Senior Software Engineer specializing in mobile application development with 6 years of expertise in creating innovative fintech solutions and banking applications.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded border border-gray-700"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded border border-gray-700"
            />
            <button className="bg-green-400 text-black px-6 py-3 rounded font-medium hover:bg-green-300 transition-colors">
              Schedule a call
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="/api/placeholder/600/400"
            alt="Mobile Developer coding"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-mono mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-800 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <div className="bg-green-400 p-2 rounded">
                  {skill.icon}
                </div>
              </div>
              <p className="text-sm text-gray-400">{skill.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-mono mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm text-green-400">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-green-400 p-8 rounded">
          <h2 className="text-2xl font-mono text-black mb-4">Profile</h2>
          <p className="text-gray-900 mb-8">
            👋 Hello! I'm Chibueze Felix, a Senior Software Engineer specializing in mobile application development. With extensive experience in fintech and banking applications, I've led teams in developing successful products like CyberPay, Quantum Zenith, and various POS solutions. My expertise spans Flutter, Kotlin, and Swift, with a strong focus on creating secure and scalable financial applications.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <Terminal className="w-5 h-5" />
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}