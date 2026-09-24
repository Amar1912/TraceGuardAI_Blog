import React from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'problem', label: 'Problem' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'technology-choices', label: 'Technology choices' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results-observations', label: 'Results / Observations' },
  { id: 'future-improvements', label: 'Future Improvements' },
  { id: 'conclusion', label: 'Conclusion' },
];

export default function TableOfContents({ activeSection }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // header height + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="text-sm space-y-2">
      <p className="font-semibold text-[#18181B] mb-3 uppercase tracking-wider text-xs">
        Table of Contents
      </p>
      <ul className="space-y-2 border-l border-[#E4E4E7] pl-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-left transition-colors text-xs leading-snug py-1 block w-full ${
                  isActive
                    ? 'text-[#EC4899] font-medium'
                    : 'text-[#71717A] hover:text-[#18181B]'
                }`}
              >
                {section.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
