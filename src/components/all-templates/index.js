"use client";

import Link from 'next/link';
import { cards } from '../../data/vcards';
import Card from '../../components/all-templates/Card';

export default function AllTemplatespage() {
  const themes = [
    { id: 1, name: 'Theme One', image: 'https://vcard.waptechy.com/assets/uploads/themes/one.png', preview: '/preview/theme_one' },
    { id: 2, name: 'Theme Two', image: 'https://vcard.waptechy.com/assets/uploads/themes/two.png', preview: '/preview/theme_two' },
    { id: 3, name: 'Theme Three', image: 'https://vcard.waptechy.com/assets/uploads/themes/three.png', preview: '/preview/theme_three' },
    { id: 4, name: 'Theme Four', image: 'https://vcard.waptechy.com/assets/uploads/themes/four.png', preview: '/preview/theme_four' },
    { id: 5, name: 'Theme Five', image: 'https://vcard.waptechy.com/assets/uploads/themes/five.png', preview: 'https://vcard.waptechy.com/amazingllll/theme_five' },
    { id: 6, name: 'Theme Six', image: 'https://vcard.waptechy.com/assets/uploads/themes/six.png', preview: 'https://vcard.waptechy.com/amazingllll/theme_six' },
    { id: 7, name: 'Theme Seven', image: 'https://vcard.waptechy.com/assets/uploads/themes/seven.png', preview: '/preview/theme_seven' },
    { id: 8, name: 'Theme Eight', image: 'https://vcard.waptechy.com/assets/uploads/themes/eight.png', preview: '/preview/theme_eight' },
    { id: 9, name: 'Theme Nine', image: 'https://vcard.waptechy.com/assets/uploads/themes/nine.png', preview: '/preview/theme_nine' },
    { id: 10, name: 'Theme Ten', image: 'https://vcard.waptechy.com/assets/uploads/themes/ten.png', preview: '/preview/theme_ten' },
    { id: 11, name: 'Theme Eleven', image: 'https://vcard.waptechy.com/assets/uploads/themes/eleven.png', preview: 'https://vcard.waptechy.com/amazingllll/theme_eleven' },
    { id: 12, name: 'Theme Twelve', image: 'https://vcard.waptechy.com/assets/uploads/themes/twelve.png', preview: 'https://vcard.waptechy.com/amazingllll/theme_twelve' },
  ];

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
        {themes.map((theme) => (
          <div
            key={theme.id}
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
            <label className="imagecheck">
              <input
                type="radio"
                name="theme_name"
                value={theme.name}
                className="imagecheck-input"
              />
              <figure className="imagecheck-figure">
                <img
                  src={theme.image}
                  alt={theme.name}
                  style={{ width: '100%', borderRadius: '5px' }}
                />
                <figcaption style={{ color: '#555', fontSize: '1.1rem', marginTop: '10px' }}>
                  {theme.name}
                </figcaption>
              </figure>
            </label>
            <Link
              href={theme.preview}
              target="_blank"
              style={{
                display: 'inline-block',
                backgroundColor: '#ff0000',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '10px',
              }}
            >
              Preview
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}