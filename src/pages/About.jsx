import React from 'react';

function About() {
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
          src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/316955656_881155509708808_3374217445794225115_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEDRJFwiSpUwbJKRCD11C5WtXRpeY1IZhm1dGl5jUhmGbXe5ggvKPH2jmT7nsvllgoro5S9fZ6kOOHOv2UCs6es&_nc_ohc=fh40sN-lvtEQ7kNvgGksNVd&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=Ab4HQ6Pe1tHZLhEDcsifB4e&oh=00_AYCrGokVMBt0V25UKZQTJGHdaBPueReC4N29QgilJ1sZpA&oe=67444E9E"
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
        "Hi! I'm Eruel Alim Mazo, a dedicated college student currently pursuing Computer Science in the "Home of the Champion" at Naga College Foundation, Inc. 
        I’m passionate about technology and reaching my goal, and I’m always eager to learn and grow. In my free time, I enjoy coding, reading sci-fi novels, and playing online games.
        I’m constantly exploring new opportunities to improve myself and contribute to the community."
        
        </p>
      </div>
    </div>
  );
}

export default About;
