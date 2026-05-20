import React from 'react';

import alexImg from '../../assets/speakers/alex-rivera.png';
import johnImg from '../../assets/speakers/john-cruz.png';
import anaImg from '../../assets/speakers/ana-thorne.png';
import josephImg from '../../assets/speakers/joseph-tan.png';
import bgImg from '../../assets/speaker-bg.png'; 

const SPEAKERS = [
  { id: 1, name: "Alex Rivera", role: "CLOUD ARCHITECT", company: "AWS Philippines", topic: "The Physics of Cloud Infrastructure", imageUrl: alexImg.src },
  { id: 2, name: "John Cruz", role: "PRINCIPAL AI ENGINEER", company: "Google Research", topic: "Neural Networks & Embedded Systems", imageUrl: johnImg.src },
  { id: 3, name: "Ana Thorne", role: "CYBERSECURITY LEAD", company: "CyberShield Int.", topic: "Securing the Digital Bridge", imageUrl: anaImg.src },
  { id: 4, name: "Joseph Tan", role: "OPERATIONS DIRECTOR", company: "SmartTech Solutions", topic: "Industrial IoT & Automation", imageUrl: josephImg.src },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative w-full py-24 bg-[#1a0219] font-montserrat overflow-hidden">
      
      <img 
        src={bgImg.src}
        alt="Section Background"
        className="absolute -bottom-12 right-52 translate-x-[10%] w-[50%] h-auto object-contain object-right z-0 pointer-events-none opacity-30"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Featured <span style={{ color: '#FE594E' }}>Speakers</span>
          </h2>
          
          <p className="font-inter font-light text-[15px] text-[#FFEBF799]/60 max-w-none mx-auto tracking-wide whitespace-nowrap antialiased subpixel-antialiased">
            Learn from industry experts and academic leaders at the forefront of computer engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {SPEAKERS.map((speaker) => (
            <div 
              key={speaker.id} 
              className="relative bg-[#250524] border-2 border-white/10 rounded-3xl p-6 pt-10 pb-8 flex flex-col items-center text-center transition-all duration-300"
              style={{ minHeight: '520px'}}
            >
              <div className="absolute -top-[3px] -left-[2px] w-7 h-7 border-t-[3px] border-l-[3px] border-[#A1005A] z-10"></div>
              <div className="absolute -bottom-[3px] -right-[2px] w-7 h-7 border-b-[3px] border-r-[3px] border-[#FF5A4F] z-10"></div>

              <div className="w-5/6 aspect-square bg-[#220021] border-[3px] border-[#FFB0CA80] rounded-2xl mb-6 flex flex-col items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:10px_10px] opacity-30 z-0"></div>
                <img 
                  src={speaker.imageUrl} 
                  alt={`${speaker.name} Headshot`}
                  className="absolute inset-0 w-full h-full object-cover object-center z-10"
                />
              </div>
              
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4 tracking-wide leading-relaxed">
                {speaker.name}
              </h3>
              
              <p className="font-inter text-[11px] font-bold tracking-[0.25em] text-[#FF2F8E] mb-2 uppercase px-2 whitespace-nowrap">
                {speaker.role}
              </p>
              
              <div className={`font-inter flex flex-col justify-start items-center w-full grow text-white/70 italic text-sm tracking-wide font-light leading-[2.5] px-2 py-4 ${speaker.id === 3 ? 'whitespace-nowrap' : ''}`}>
                <span>"{speaker.topic}"</span>
              </div>
              
              <div className="font-inter w-full pt-6 border-t-2 border-white/5 font-bold text-sm text-white tracking-wide shrink-0">
                {speaker.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}