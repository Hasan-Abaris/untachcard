"use client"
import { cards } from '../../data/vcards';
import Card from '../../components/all-templates/Card';

export default function AllTemplates() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 120px)', // Adjust based on Header2 (80px) + Footer2 (40px)
        padding: '20px',
      }}
    >
      <h1 style={{ color: '#333', fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px' }}>
        All Visiting Card Templates
      </h1>
      <div
        className="card-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '15px',
              textAlign: 'center',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Card card={card} />
            <p style={{ color: '#555', fontSize: '1.1rem', margin: '10px 0' }}>{card.designation}</p>
            <a
              href={`/card/${card.id}`}
              style={{
                display: 'inline-block',
                backgroundColor: '#007BFF',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
