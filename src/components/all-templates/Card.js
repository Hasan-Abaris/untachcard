import Link from 'next/link';

export default function Card({ card }) {
  return (
    <div className='h-auto'>
      <div className={`card ${card.style}`}>
        <img src={card.photo} alt={card.name} />
        <h3>{card.name}</h3>
        <p>{card.designation}</p>
        <Link href={`cardDetails/${card.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}