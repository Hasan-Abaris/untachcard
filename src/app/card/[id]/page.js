import { cards } from '../../../data/vcards';
import Image from 'next/image';


export async function generateStaticParams() {
  return cards.map((card) => ({
    id: card.id.toString(), // must be a string
  }));
}

export default function CardDetail({ params }) {
  const cardId = parseInt(params.id);
  const card = cards.find(c => c.id === cardId);

  if (!card) return <p>Card not found!</p>;

  // Define unique color gradients for each card
  const colorGradients = [
    'linear-gradient(135deg, #3498db, #000000)',
    'linear-gradient(135deg, #e74c3c, #000000)',
    'linear-gradient(135deg, #2ecc71, #000000)',
    'linear-gradient(135deg, #f1c40f, #000000)',
    'linear-gradient(135deg, #9b59b6, #000000)',
    'linear-gradient(135deg, #1abc9c, #000000)',
    'linear-gradient(135deg, #d35400, #000000)',
    'linear-gradient(135deg, #8e44ad, #000000)',
    'linear-gradient(135deg, #27ae60, #000000)',
    'linear-gradient(135deg, #c0392b, #000000)',
    'linear-gradient(135deg, #2980b9, #000000)',
    'linear-gradient(135deg, #e67e22, #000000)',
    'linear-gradient(135deg, #16a085, #000000)',
    'linear-gradient(135deg, #f39c12, #000000)',
    'linear-gradient(135deg, #2c3e50, #000000)',
    'linear-gradient(135deg, #7f8c8d, #000000)',
    'linear-gradient(135deg, #e84393, #000000)',
    'linear-gradient(135deg, #00cec9, #000000)',
    'linear-gradient(135deg, #6c5ce7, #000000)',
    'linear-gradient(135deg, #fd79a8, #000000)',
    'linear-gradient(135deg, #00b894, #000000)',
    'linear-gradient(135deg, #d63031, #000000)',
    'linear-gradient(135deg, #0984e3, #000000)',
    'linear-gradient(135deg, #fdcb6e, #000000)',
    'linear-gradient(135deg, #e17055, #000000)',
    'linear-gradient(135deg, #2d3436, #000000)',
    'linear-gradient(135deg, #fdcb6e, #000000)',
    'linear-gradient(135deg, #00cec9, #000000)',
    'linear-gradient(135deg, #6c5ce7, #000000)',
    'linear-gradient(135deg, #fd79a8, #000000)',
    'linear-gradient(135deg, #00b894, #000000)',
    'linear-gradient(135deg, #d63031, #000000)',
    'linear-gradient(135deg, #0984e3, #000000)',
    'linear-gradient(135deg, #fdcb6e, #000000)',
    'linear-gradient(135deg, #e17055, #000000)',
    'linear-gradient(135deg, #2d3436, #000000)',
    'linear-gradient(135deg, #fdcb6e, #000000)',
    'linear-gradient(135deg, #00cec9, #000000)',
    'linear-gradient(135deg, #6c5ce7, #000000)',
    'linear-gradient(135deg, #fd79a8, #000000)',
    'linear-gradient(135deg, #00b894, #000000)',
    'linear-gradient(135deg, #d63031, #000000)',
    'linear-gradient(135deg, #0984e3, #000000)',
    'linear-gradient(135deg, #fdcb6e, #000000)',
    'linear-gradient(135deg, #e17055, #000000)',
    'linear-gradient(135deg, #2d3436, #000000)',
    'linear-gradient(135deg, #e84393, #000000)',
    'linear-gradient(135deg, #00cec9, #000000)',
    'linear-gradient(135deg, #6c5ce7, #000000)',
    'linear-gradient(135deg, #fd79a8, #000000)',
    'linear-gradient(135deg, #00b894, #000000)',
    'linear-gradient(135deg, #d63031, #000000)',
    'linear-gradient(135deg, #0984e3, #000000)',
    'linear-gradient(135deg, #fdcb6e, #000000)',
  ];

  // Define card style variants
  const cardStyles = [
    { border: '2px solid #fff', padding: '15px' },
    { border: '2px dashed #3498db', padding: '10px' },
    { border: '2px solid #e74c3c', padding: '15px' },
    { border: 'none', background: 'rgba(255, 255, 255, 0.1)', padding: '20px' },
    { border: '2px dotted #2ecc71', padding: '12px' },
    { border: '2px solid #f1c40f', padding: '15px' },
    { border: '2px dashed #9b59b6', padding: '10px' },
    { border: 'none', background: 'rgba(255, 255, 255, 0.2)', padding: '20px' },
    { border: '2px dotted #1abc9c', padding: '12px' },
    { border: '2px solid #d35400', padding: '15px' },
  ];

  const overlayGradient = colorGradients[(cardId - 1) % colorGradients.length];
  const cardStyle = cardStyles[(cardId - 1) % cardStyles.length];

  return (
    <div
      style={{
        background: overlayGradient,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className={`card-detail`}
        style={{
          backgroundColor: '#000',
          width: '300px',
          ...cardStyle,
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: overlayGradient,
            zIndex: 0,
            opacity: 0.5,
          }}
        ></div>

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
         <Image
  src={card.photo}
  alt={card.name}
  width={100}
  height={100}
  style={{
    borderRadius: "50%",
    marginBottom: "15px",
    border: "4px solid #fff",
    objectFit: "cover",
  }}
/>

          <h2 style={{ marginBottom: '5px', fontSize: '1.5rem' }}>{card.name}</h2>
          <p style={{ marginBottom: '15px', fontSize: '1.1rem', opacity: 0.8 }}>{card.designation}</p>
          <p style={{ marginBottom: '20px', fontSize: '0.9rem', opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor bibendum turpis, at rutrum nunc venenatis vitae.
          </p>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {card.phone && <a href={`tel:${card.phone}`} style={{ color: '#fff', textDecoration: 'none' }}>☎ {card.phone}</a>}
            {card.whatsapp && <a href={`https://wa.me/${card.whatsapp}`} style={{ color: '#fff', textDecoration: 'none' }}>💬 {card.whatsapp}</a>}
            {card.email && <a href={`mailto:${card.email}`} style={{ color: '#fff', textDecoration: 'none' }}>✉ {card.email}</a>}
            {card.website && <a href={card.website} style={{ color: '#fff', textDecoration: 'none' }}>🌐 {card.website}</a>}
            {card.instagram && <a href={`https://instagram.com/${card.instagram}`} style={{ color: '#fff', textDecoration: 'none' }}>📷 Instagram</a>}
          </div>
        </div>
      </div>
    </div>
  );
}
