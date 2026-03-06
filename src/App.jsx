import { useState } from 'react';
import { episodeList } from './data';
import './index.css';

function List({ episodes, onSelect, activeId }) {
  return (
    <ul className="episode-list">
      {episodes.map((ep) => (
        <li 
          key={ep.id}
          className={ep.id === activeId ? 'selected' : ''}
          onClick={() => onSelect(ep)}
        >
          {ep.title}
        </li>
      ))}
    </ul>
  );
}

function Details({ episode, index }) {
  return (
    <div className="details-container">
      <h2 className="ep-number">Episode {index + 1}</h2>
      <h3 className="ep-title">{episode.title}</h3>
      <p className="ep-description">{episode.description}</p>
      <button className="watch-btn">Watch now</button>
    </div>
  );
}

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const currentIndex = episodes.findIndex(e => e.id === selectedEpisode?.id);

  return (
    <div className="dark-echoes-app">
      <div className="main-layout">
        <aside className="sidebar">
          <h1 className="brand-title">Dark Echoes</h1>
          <h2 className="sidebar-heading">Episodes</h2>
          <List 
            episodes={episodes} 
            onSelect={setSelectedEpisode} 
            activeId={selectedEpisode?.id} 
          />
        </aside>

        <main className="content-area">
          {selectedEpisode ? (
            <Details episode={selectedEpisode} index={currentIndex} />
          ) : (
            <div className="placeholder">
              <p>Select an episode to begin.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

