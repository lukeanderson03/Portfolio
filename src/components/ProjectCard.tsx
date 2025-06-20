import React from "react";
import { IconType } from "react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: IconType;
  gradientFrom: string;
  gradientTo: string;
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  icon: Icon,
  gradientFrom,
  gradientTo,
  href,
}: ProjectCardProps) {
  const getTechnologyColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      TypeScript: "bg-purple-100 text-purple-800",
      Python: "bg-yellow-100 text-yellow-800",
      Figma: "bg-purple-100 text-purple-800",
      "Design System": "bg-blue-100 text-blue-800",
      Accessibility: "bg-green-100 text-green-800",
      Cisco: "bg-green-100 text-green-800",
      AWS: "bg-blue-100 text-blue-800",
      Security: "bg-red-100 text-red-800",
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`h-48 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} flex items-center justify-center`}
      >
        <Icon className="text-white text-4xl" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 ${getTechnologyColor(
                tech
              )} text-sm rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
