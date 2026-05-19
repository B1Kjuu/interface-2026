import React from 'react';

import cube from '../../assets/icons/cube.png';
import monitor from '../../assets/icons/monitor.png';
import record from '../../assets/icons/record.png';
import trophy from '../../assets/icons/trophy.png';
import agendaBg from '../../assets/background.png';

const Icons = {
  LogIn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  ),

  Record: () => (
    <img
      src={record.src}
      alt="Record Icon"
      className="w-6 h-6 object-contain"
    />
  ),

  Globe: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),

  Trophy: () => (
    <img
      src={trophy.src}
      alt="Trophy Icon"
      className="w-6 h-6 object-contain"
    />
  ),

  Coffee: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),

  Box: () => (
    <img
      src={cube.src}
      alt="Cube Icon"
      className="w-6 h-6 object-contain"
    />
  ),

  Tv: () => (
    <img
      src={monitor.src}
      alt="Monitor Icon"
      className="w-6 h-6 object-contain"
    />
  ),

  Power: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
  ),

  Star: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

const MORNING = [
  {
    time: '09:00 AM – 09:45 AM',
    event: 'Ingress',
    icon: Icons.LogIn,
    sub: 'Arrival and registration of attendees (45 mins)',
  },
  {
    time: '09:45 AM – 10:25 AM',
    event: 'Opening Ceremonies',
    icon: Icons.Record,
    sub: 'Call to Order, Prayer, National Anthem, and Remarks',
  },
  {
    time: '10:25 AM – 11:45 AM',
    event: 'Seminar I & Open Forum',
    icon: Icons.Globe,
    sub: 'Main technical presentation followed by Q&A session',
  },
  {
    time: '11:45 AM – 11:55 AM',
    event: 'Awarding Ceremony',
    icon: Icons.Trophy,
    sub: 'Recognition of Speaker I',
  },
  {
    time: '11:55 AM – 01:00 PM',
    event: 'Lunch Break',
    icon: Icons.Coffee,
    sub: 'Networking and interactive booths (65 mins)',
  },
];

const AFTERNOON = [
  {
    time: '01:00 PM – 02:30 PM',
    event: 'Seminar II & Open Forum',
    icon: Icons.Box,
    sub: 'Technical session including Speaker II intro and awarding',
  },
  {
    time: '02:30 PM – 04:05 PM',
    event: 'Seminar III & Open Forum',
    icon: Icons.Tv,
    sub: 'Short break followed by deep-dive technical session',
  },
  {
    time: '04:05 PM – 04:10 PM',
    event: 'Short Break',
    icon: Icons.Power,
    sub: 'Brief intermission before the final session',
  },
  {
    time: '04:10 PM – 05:40 PM',
    event: 'Seminar IV & Open Forum',
    icon: Icons.Star,
    sub: 'Final speaker block and industry integration wrap-up',
  },
  {
    time: '05:40 PM – 06:00 PM',
    event: 'Closing Remarks',
    icon: Icons.Star,
    sub: 'Event conclusion and final acknowledgments',
  },
];

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="relative isolate w-full py-24 bg-[#280327] overflow-hidden border-t border-white/5 font-montserrat"
    >
      {/* Background decorative image */}
      <img
        src={agendaBg.src}
        alt=""
        aria-hidden="true"
        className="absolute -left-60 top-12 z-0 pointer-events-none select-none opacity-25 w-[900px] lg:w-[1179px] h-auto"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-[3.5rem] font-bold text-white mb-4 tracking-tight">
            System <span style={{ color: '#FE594E' }}>Roadmap</span>
          </h2>

          <p
            className="text-sm md:text-base font-light tracking-wide max-w-md mx-auto"
            style={{
              color: 'rgba(255,235,247,0.6)',
              fontVariationSettings: "'wght' 300, 'wdth' 80",
            }}
          >
            A detailed look at our intensive seminar sessions.
          </p>
        </div>

        {/* Column Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mb-14">
          {['Morning Sessions', 'Afternoon Sessions'].map((label) => (
            <div key={label} className="flex items-center gap-4 pl-1">
              <h3
                className="text-xs font-bold whitespace-nowrap tracking-[0.25em] uppercase"
                style={{ color: '#C88DFF' }}
              >
                {label}
              </h3>

              <div
                className="w-48 h-[2px] flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              />
            </div>
          ))}
        </div>

        {/* Timeline Rows */}
        <div className="flex flex-col gap-y-10">
          {MORNING.map((morningSlot, index) => {
            const afternoonSlot = AFTERNOON[index];
            const isLast = index === MORNING.length - 1;

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 w-full items-start"
              >
                {[morningSlot, afternoonSlot].map((slot, sideIndex) => {
                  const IconComponent = slot?.icon;

                  return (
                    <div
                      key={sideIndex}
                      className="flex items-start gap-5 relative"
                    >
                      {/* Icon Circle */}
                      <div className="relative flex-shrink-0 z-10">
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: '#3a0830',
                            border: '1.5px solid #FF2F8E',
                            color: '#FF2F8E',
                            boxShadow:
                              '0 0 0 1px rgba(255,47,142,0.15)',
                          }}
                        >
                          {IconComponent && <IconComponent />}
                        </div>

                        {/* Connector Line */}
                        {!isLast && (
                          <div
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{
                              top: '44px',
                              width: '1px',
                              height: '52px',
                              background: 'rgba(255,47,142,0.3)',
                            }}
                          />
                        )}
                      </div>

                      {/* Text */}
                      <div className="pt-0.5 pb-1">
                        <span
                          className="text-xs font-bold block tracking-widest uppercase mb-1.5"
                          style={{
                            color: '#FF2F8E',
                            letterSpacing: '0.15em',
                          }}
                        >
                          {slot.time}
                        </span>

                        <h3 className="font-bold text-lg text-white mb-1 leading-snug">
                          {slot.event}
                        </h3>

                        {slot.sub && (
                          <p
                            className="text-sm leading-relaxed max-w-sm mt-1 block"
                            style={{
                              color: 'rgba(255,255,255,0.40)',
                              fontVariationSettings:
                                "'wght' 250, 'wdth' 80",
                              transform: 'scaleX(0.94)',
                              transformOrigin: 'left',
                              WebkitFontSmoothing: 'antialiased',
                            }}
                          >
                            {slot.sub}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}