const Matches = () => {
  return (
    <section className="schedule-section">
      <div className="container">
        <h2 className="section-title">Recent Results</h2>
        <div className="results-grid">
          <div className="result-card">
            <div className="league-name">Premier League</div>
            <div className="score-row">
              <div className="team"><span>Arsenal</span></div>
              <div className="final-score">2 - 0</div>
              <div className="team"><span>Chelsea</span></div>
            </div>
            <div className="match-meta">Oct 12, 2026 • Full Time</div>
          </div>
          <div className="result-card">
            <div className="league-name">Champions League</div>
            <div className="score-row">
              <div className="team"><span>PSG</span></div>
              <div className="final-score">1 - 3</div>
              <div className="team"><span>Man City</span></div>
            </div>
            <div className="match-meta">Oct 11, 2026 • Full Time</div>
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: '3rem' }}>Upcoming Matches</h2>
        <table className="match-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Home Team</th>
              <th>vs</th>
              <th>Away Team</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Oct 15</td>
              <td>Manchester United</td>
              <td>vs</td>
              <td>Liverpool</td>
              <td>15:00 GMT</td>
            </tr>
            <tr>
              <td>Oct 16</td>
              <td>Real Madrid</td>
              <td>vs</td>
              <td>Barcelona</td>
              <td>20:00 GMT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Matches;