import React from 'react';

function Hobbies() {
  return (
    <div
      id="hobbies"
      style={{
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#2E8B57',
      }}
    >
      <h2 style={{ fontSize: '2rem', color: '#5754ff', marginBottom: '30px' }}>Hobbies</h2>

      {/* Hobbies Section */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Pets */}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Pets</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          {/* Cats */}
          <div>
            <img
              src="https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/51_afi_article1_the-secret-language-of-cats.png"
              alt="Cats"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Cats</p>
          </div>
          {/* Dogs */}
          <div>
            <img
              src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTk2Njc0ODUxNzAyODQzMTk4/colors-of-siberian-huskies.webp"
              alt="Dogs"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Dogs</p>
          </div>
        </div>

        {/* Sports */}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Sports</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          {/* Bike */}
          <div>
            <img
              src="https://www.badmintonavenue.com/cdn/shop/files/badminton-grass-racket.webp?v=1707584672&width=600"
              alt="Badminton"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Badminton</p>
          </div>
          {/* Skate */}
          <div>
            <img
              src="https://www.rockstaracademy.com/lib/images/news/basketball.jpeg"
              alt="Skate"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Basketball</p>
          </div>
        </div>

        {/* Games */}
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Games</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {/* Game 1 */}
          <div>
            <img
              src="https://mrwallpaper.com/images/high/mobile-legends-logo-with-collage-5qzynxldv7kqbi0o.webp"
              alt="Game 1"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Mobile Legends</p>
          </div>
          {/* Game 2 */}
          <div>
            <img
              src="https://i0.wp.com/gamingonphone.com/wp-content/uploads/2022/07/honor-of-kings-poster-cover-wallpaper.jpg"
              alt="Game 2"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Honor Of Kings</p>
          </div>
          {/* Game 3 */}
          <div>
            <img
              src="https://media.pocketgamer.biz/images/84849/69280/pubglogo_s470.webp"
              alt="Game 3"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>PUBG Mobile</p>
          </div>
          {/* Game 4 */}
          <div>
            <img
              src="https://icon-library.com/images/clash-of-clans-icon-png/clash-of-clans-icon-png-24.jpg"
              alt="Game 4"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Clash Of Clans</p>
          </div>
          {/* Game 5 */}
          <div>
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-call-of-duty-mobile-codm-game-official-logo-png-7017516947877289uky0ombog.png"
              alt="Game 5"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Call Of Duty Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
