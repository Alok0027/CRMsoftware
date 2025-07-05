import React, { useState } from 'react';
import shakingHands from '../assets/shaking-hands-2.svg';
import lateMeeting from '../assets/late-for-meeting-2.svg';
import takingNotes from '../assets/taking-notes-2.svg';
import remoteWork from '../assets/remote-work-2.svg';
import workParty from '../assets/work-party-2.svg';

import shakingHands2 from '../assets/shaking-hands-3.svg';
import lateMeeting2 from '../assets/late-for-meeting-3.svg';
import takingNotes2 from '../assets/taking-notes-3.svg';
import remoteWork2 from '../assets/remote-work-3.svg';
import workParty2 from '../assets/work-party-3.svg';

const features = [
  {
    title: "Visual Sales Pipelines",
    desc: [
      "Track every deal with a drag-and-drop pipeline.",
      "Customize stages to match your exact workflow.",
    ],
    img: shakingHands,
    hoverImg: shakingHands2,
  },
  {
    title: "Smart Reminders",
    desc: [
      "Never miss a follow-up or deadline again.",
      "Get timely nudges where and when you need them.",
    ],
    img: lateMeeting,
    hoverImg: lateMeeting2,
  },
  {
    title: "Collaborative Notes & Tasks",
    desc: [
      "Share checklists, notes, and tasks in real time.",
      "Keep your entire team aligned and informed.",
    ],
    img: takingNotes,
    hoverImg: takingNotes2,
  },
  {
    title: "Remote-Ready Access",
    desc: [
      "Work from anywhere with a fully cloud-based CRM.",
      "Updates sync instantly across your devices.",
    ],
    img: remoteWork,
    hoverImg: remoteWork2,
  },
  {
    title: "Simple, Human-Centered Design",
    desc: [
      "Clean UI with zero clutter or confusion.",
      "Everything feels natural — nothing’s in your way.",
    ],
    img: workParty,
    hoverImg: workParty2,
  },
];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6 space-y-20">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
        Features That Make Work Flow
      </h2>
      {features.map((feature, index) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-20 px-12 py-12 bg-white w-full md:w-[1200px] mx-auto rounded-xl shadow-lg">
            <img
              src={isHovered ? feature.hoverImg : feature.img}
              alt={feature.title}
              className="w-40 h-40 transition duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <div className="max-w-3xl self-center">
              <h3 className="text-3xl font-semibold text-gray-800 mb-5">{feature.title}</h3>
              {feature.desc.map((line, i) => (
                <p key={i} className="text-xl text-gray-600 mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;