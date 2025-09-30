import React from 'react'

function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '72px', padding: '5px ' }}>
      <div className="BreadCrumbs regular margin-t-20" style={{ lineHeight: 'normal', color: '#6c757d' }}>
        <span className="crumb">
          <a className="display-name font-size-16 text-secondary" href="/">Home</a>
        </span>
        <span className="crumb"> &gt; </span>
        <span className="crumb">
          <a className="display-name font-size-16 text-secondary" href="/genie">Genie</a>
        </span>
        <span className="crumb"> &gt; </span>
      </div>

      <h1 className=" mt-3 margin-v-20" style={{ fontSize: '28px', fontWeight: 'bold' }}>
        WMG Genie Service
      </h1>

      <div
        className="genie-head relative border-1 mt-3"
        style={{
          background: 'url("https://testimage.wedmegood.com/resized-nw/1900X/uploads/Genie_Banner_Web.jpg") 50% center no-repeat',
          backgroundSize: 'cover',
          height: '350px',
          borderRadius: '10px'
        }}
      ></div>
    </div>
  )
}

export default Home
