import React from 'react';

function Home() {
  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>
      <h1>My Personal Website</h1>
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1, 
        }}
      >
        <img
          src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/365881059_1026574948500196_2084143770827490395_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG9kmxiAWCEMDy1UBMdPeZTjdNrMMvnDceN02swy-cNx9euN92mPkCQwpI6S21iLPh0gbIFLgjnX_6Crzrlwxb6&_nc_ohc=XrSYs68n-EwQ7kNvgHaw94-&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=AOIS2lnUD7m5cexUalJupVH&oh=00_AYBjfGHCRUkdLaT2SAIJp0ZL825mi9d8MYVsiibNKfePbQ&oe=67444F6B"
          alt="Profile"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid white', 
          }}
        />
       
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          Good day! I'm Eruel Mazo, studying at Naga College Foundation, Inc. Taking a course of Bachelor of Science in Computer Science. 
          This is my first project creating my personal website. 
        </p>
      </div>
    </div>
  );
}

export default Home;
