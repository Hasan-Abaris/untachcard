import { cards } from '../../../data/vcards';

export async function generateStaticParams() {
  return cards.map((card) => ({
    id: card.id.toString(), // must be a string
  }));
}

export default function CardDetail({ params }) {
  const cardId = parseInt(params.id);
  const card = cards.find(c => c.id === cardId);

  if (!card) return <p>Card not found!</p>;

  // Define a color palette for unique gradients
  const colorGradients = [
    'linear-gradient(135deg, #3498db 50%, #000000 50%)',
    'linear-gradient(135deg, #e74c3c 50%, #000000 50%)',
    'linear-gradient(135deg, #2ecc71 50%, #000000 50%)',
    'linear-gradient(135deg, #f1c40f 50%, #000000 50%)',
    'linear-gradient(135deg, #9b59b6 50%, #000000 50%)',
    'linear-gradient(135deg, #1abc9c 50%, #000000 50%)',
    'linear-gradient(135deg, #d35400 50%, #000000 50%)',
    'linear-gradient(135deg, #8e44ad 50%, #000000 50%)',
    'linear-gradient(135deg, #27ae60 50%, #000000 50%)',
    'linear-gradient(135deg, #c0392b 50%, #000000 50%)',
    // Add more gradients for 50 cards, repeating if needed
    'linear-gradient(135deg, #2980b9 50%, #000000 50%)',
    'linear-gradient(135deg, #e67e22 50%, #000000 50%)',
    'linear-gradient(135deg, #16a085 50%, #000000 50%)',
    'linear-gradient(135deg, #f39c12 50%, #000000 50%)',
    'linear-gradient(135deg, #8e44ad 50%, #000000 50%)',
    'linear-gradient(135deg, #2c3e50 50%, #000000 50%)',
    'linear-gradient(135deg, #d35400 50%, #000000 50%)',
    'linear-gradient(135deg, #7f8c8d 50%, #000000 50%)',
    'linear-gradient(135deg, #3498db 50%, #000000 50%)',
    'linear-gradient(135deg, #e74c3c 50%, #000000 50%)',
    'linear-gradient(135deg, #2ecc71 50%, #000000 50%)',
    'linear-gradient(135deg, #f1c40f 50%, #000000 50%)',
    'linear-gradient(135deg, #9b59b6 50%, #000000 50%)',
    'linear-gradient(135deg, #1abc9c 50%, #000000 50%)',
    'linear-gradient(135deg, #d35400 50%, #000000 50%)',
    'linear-gradient(135deg, #8e44ad 50%, #000000 50%)',
    'linear-gradient(135deg, #27ae60 50%, #000000 50%)',
    'linear-gradient(135deg, #c0392b 50%, #000000 50%)',
    'linear-gradient(135deg, #2980b9 50%, #000000 50%)',
    'linear-gradient(135deg, #e67e22 50%, #000000 50%)',
    'linear-gradient(135deg, #16a085 50%, #000000 50%)',
    'linear-gradient(135deg, #f39c12 50%, #000000 50%)',
    'linear-gradient(135deg, #8e44ad 50%, #000000 50%)',
    'linear-gradient(135deg, #2c3e50 50%, #000000 50%)',
    'linear-gradient(135deg, #d35400 50%, #000000 50%)',
    'linear-gradient(135deg, #7f8c8d 50%, #000000 50%)',
    'linear-gradient(135deg, #3498db 50%, #000000 50%)',
    'linear-gradient(135deg, #e74c3c 50%, #000000 50%)',
    'linear-gradient(135deg, #2ecc71 50%, #000000 50%)',
    'linear-gradient(135deg, #f1c40f 50%, #000000 50%)',
    'linear-gradient(135deg, #9b59b6 50%, #000000 50%)',
    'linear-gradient(135deg, #1abc9c 50%, #000000 50%)',
    'linear-gradient(135deg, #d35400 50%, #000000 50%)',
    'linear-gradient(135deg, #8e44ad 50%, #000000 50%)',
    'linear-gradient(135deg, #27ae60 50%, #000000 50%)',
    'linear-gradient(135deg, #c0392b 50%, #000000 50%)',
    'linear-gradient(135deg, #2980b9 50%, #000000 50%)',
    'linear-gradient(135deg, #e67e22 50%, #000000 50%)',
    'linear-gradient(135deg, #16a085 50%, #000000 50%)',
    'linear-gradient(135deg, #f39c12 50%, #000000 50%)',
    'linear-gradient(135deg, #8e44ad 50%, #000000 50%)',
  ];

  const getGradient = () => colorGradients[(cardId - 1) % colorGradients.length];
  const getCardStyle = () => {
    const styles = {
      style1: { border: '2px solid #fff', padding: '15px' },
      style2: { border: '2px dashed #3498db', padding: '10px' },
      style3: { border: '2px solid #e74c3c', padding: '15px' },
      style4: { border: 'none', background: 'rgba(255, 255, 255, 0.1)', padding: '20px' },
      style5: { border: '2px dotted #2ecc71', padding: '12px' },
      // Add more styles for style6 to style50, repeating or varying as needed
      style6: { border: '2px solid #f1c40f', padding: '15px' },
      style7: { border: '2px dashed #9b59b6', padding: '10px' },
      style8: { border: 'none', background: 'rgba(255, 255, 255, 0.2)', padding: '20px' },
      style9: { border: '2px dotted #1abc9c', padding: '12px' },
      style10: { border: '2px solid #d35400', padding: '15px' },
      // Continue pattern for all 50 styles
      style11: { border: '2px dashed #8e44ad', padding: '10px' },
      style12: { border: 'none', background: 'rgba(255, 255, 255, 0.1)', padding: '20px' },
      style13: { border: '2px dotted #27ae60', padding: '12px' },
      style14: { border: '2px solid #c0392b', padding: '15px' },
      style15: { border: '2px dashed #2980b9', padding: '10px' },
      // Repeat and vary for style16 to style50
    };
    return styles[card.style] || { border: '2px solid #fff', padding: '15px' }; // Default style
  };

  return (
    <div
      style={{
        background: getGradient(),
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className={`card-detail ${card.style}`}
        style={{
          backgroundColor: '#000',
          width: '300px',
          ...getCardStyle(),
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
            background: 'linear-gradient(135deg, transparent 50%, #3498db 50%)',
            zIndex: 0,
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <img
            src={card.photo}
            alt={card.name}
            style={{
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              marginBottom: '15px',
              border: '4px solid #fff',
            }}
          />
          <h2 style={{ color: '#fff', marginBottom: '5px', fontSize: '1.5rem' }}>{card.name}</h2>
          <p style={{ color: '#fff', marginBottom: '15px', fontSize: '1.1rem', opacity: 0.8 }}>{card.designation}</p>
          <p style={{ color: '#fff', marginBottom: '20px', fontSize: '0.9rem', opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor bibendum turpis, at rutrum nunc venenatis vitae.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href={`tel:${card.phone}`} style={{ color: '#fff', textDecoration: 'none' }}>
              <span style={{ marginRight: '10px' }}>☎</span> {card.phone}
            </a>
            <a href={`https://wa.me/${card.whatsapp || card.phone}`} style={{ color: '#fff', textDecoration: 'none' }}>
              <span style={{ marginRight: '10px' }}>💬</span> {card.whatsapp || card.phone}
            </a>
            <a href={`mailto:${card.email}`} style={{ color: '#fff', textDecoration: 'none' }}>
              <span style={{ marginRight: '10px' }}>✉</span> {card.email}
            </a>
            <a href={card.website} style={{ color: '#fff', textDecoration: 'none' }}>
              <span style={{ marginRight: '10px' }}>🌐</span> {card.website}
            </a>
            <a href={`https://instagram.com/${card.instagram}`} style={{ color: '#fff', textDecoration: 'none' }}>
              <span style={{ marginRight: '10px' }}>📷</span> Follow me Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}