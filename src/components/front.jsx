import React, { useEffect } from 'react';
import './front.css';

const eventsData = [
  { id: 1, title: "Tech Talk", date: "2024-09-20", description: "An insightful talk on the latest in tech." },
  { id: 2, title: "AI Workshop", date: "2024-10-05", description: "Hands-on workshop on AI technologies." },
  { id: 3, title: "Networking Event", date: "2024-11-15", description: "Network with industry professionals." }
];

function EventCard({ title, date, description }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p className="event-date">{date}</p>
      <p className="event-description">{description}</p>
    </div>
  );
}

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroTitle = document.querySelector('.hero-section h1');
      const upcomingEvents = document.querySelector('#upcoming-events');
      const previousEvents = document.querySelector('#previous-events');

      if (heroTitle) {
        const scale = Math.max(1, 1 + scrollY / 300); // Faster zoom effect
        heroTitle.style.transform = `scale(${scale})`;
      }

      if (upcomingEvents) {
        const upcomingOffset = upcomingEvents.getBoundingClientRect().top;
        const opacity = Math.min(1, (scrollY + window.innerHeight - upcomingOffset) / 300); // Fade in effect
        upcomingEvents.style.opacity = opacity;
      }

      if (previousEvents) {
        const previousOffset = previousEvents.getBoundingClientRect().top;
        const parallax = scrollY * 0.5; // Parallax effect
        previousEvents.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <main>
        <section id="home" className="hero-section">
          <h1>Tech Spectrum</h1>
        </section>
        <section id="upcoming-events" className="events-section">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {eventsData.map(event => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
              />
            ))}
          </div>
        </section>
        <section id="previous-events" className="events-section">
          <h2>Previous Events</h2>
          <div className="events-list">
            {/* Previous events will be listed here */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
