import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '50px',
        backgroundColor: '##2E8B57',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
          color: '#5754ff',
        }}
      >
        My Education
      </h2>

      {/* Education Rows */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Elementary Row */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Elementary</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Villa Grande Elementary School
            Graduation: March 2008
          </p>

          {/* Carousel for Elementary */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/453878652_473080628814120_6824923078011147037_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFqWZu36k7wy78r6y3fVGK-6ywvi6qr8IPrLC-Lqqvwg2vg7OxXFx2s5ml8JbQ7BPT7T3E-4mAzAt_Uif2NBBi8&_nc_ohc=KsAtDvymT4YQ7kNvgFAFqJR&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=Achf1iJK0FWMranT5j9NXC3&oh=00_AYCjdd4npQH__BOhtCLZwdeje7gQ05METYycbJNsISDp6A&oe=6745C0A9"
                alt="First slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Villa Grande Elemntary School</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/361610274_251238204331698_3594594831691302821_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=XysxQ2OJ3aIQ7kNvgFrxSQk&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=A8qXyDnIUnSJVZnBa1TPLD6&oh=00_AYDak4VhA0nwJbZSwXV4JEM1NIuIoo7xdHWGy5JSgD5-Ug&oe=6745CBA3"
                alt="Second slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Villa Grande Elemntary School</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/464140889_525106156944900_4498684746065711658_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFoskCgNO-pdtjnmYjnykzEsienqwZ6T3OyJ6erBnpPc52ZoZbqbFgQ0eNX9Cw0CuetWysnEHGdCbkv9vXPOSo7&_nc_ohc=eN6UW_obKTgQ7kNvgE2lamu&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AJ9O9CwR3ukjr8FalWDts_z&oh=00_AYAmITc8Kq2kiwFXOvmX5oWuFbUFCYR1yq1nSKI1KkuYWg&oe=6745C1CB"
                alt="Third slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Villa Grande Elemntary School</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Highschool Row */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Highschool</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Camarines Sur National Highschool
            Graduation: May 2011 -2012
          </p>

          {/* Carousel for Highschool (7 slides) */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVB4I8PitqIqZGjgT4FzevsdbOjVg5zs0oB6HAj-pfDSeoTaxPcQT-8CO2jBn0_FKzq7KK-8S4nA9ZpqALnEDSvRsMF8YFil-tHnWFE9o8m5JY0NE4LYohyfV7gLBFt-Iqy2PE1D6zk-Qi/s1600/205291_350640858343154_1987671026_n.jpg"
                alt="First slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Camarines Sur National Highschool</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/CSNHS_Gabaldon_RWDA.jpg/1920px-CSNHS_Gabaldon_RWDA.jpg"
                alt="Second slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Camarines Sur National Highschool</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static.wixstatic.com/media/93486f_918960994cf64a21b725a67a2f99065e~mv2.jpg"
                alt="Third slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Camarines Sur National Highschool</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www2.naga.gov.ph/wp-content/uploads/2021/10/Students-2.jpg"
                alt="Fourth slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Camarines Sur National Highschool</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.pagcor.ph/images/news/pagcor-inaugurates-four-storey-school-building-in-angeles-city-1.jpg"
                alt="Fifth slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Camarines Sur National Highschool</p>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        </div>

        {/* College Row */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>College</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Naga College Foundation, Inc.
            Graduation: Soon TO Be
          </p>

          {/* Carousel for College */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/462541559_886615760285446_7312045914345035480_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEzR1GhTDQPmHkEn8KqPldpC2Q1rv3Yvq0LZDWu_di-rYGIyhNqyil13_OiU6OYkDy_qj2keFtN87M5eABQXiS_&_nc_ohc=l2nCR7EDgAwQ7kNvgEZJedc&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QH2C-0RfTsIRUyp4Um6PXY2e32q_ST4-mkTMANg5fhR3Q&oe=67676D26"
                alt="First slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Naga College Foundation, Inc.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/462547722_946388660794007_2406354220220321113_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGOFa4XZXgkzurINEyZWxSKWV1uTR6n3gZZXW5NHqfeBtSnLGoErQ2ckZ6RgcjsdO_CBhGy_NiWid7jRLiQ04c8&_nc_ohc=xa9WOTiKlwEQ7kNvgEjscr4&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QG2go9NWp_HTPA59YEQ-Pvl8rz5O27mqTJZF7HxRrlSTg&oe=67676788"
                alt="Second slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Naga College Foundation, Inc.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/462543176_554520413960039_9130039946915519523_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFHzEScu9DJOrqc1KDm5p9SdOZRoSMX2AV05lGhIxfYBU2t_A6euY5tWyZFiqmBq7bE9kw7vy3MDi6cCOZeZoSk&_nc_ohc=vTCrrtCixfwQ7kNvgGfbAAR&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QEtK6lVCDLK98GsYiNWAvXILHI1MgTSxMJOpNITAs0YrA&oe=67676F68"
                alt="Third slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Naga College Foundation, Inc.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/462549041_1272844280804602_2328390490788769023_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF25h1LU65bGgxcn0BmhfN6RBL9JKavl-1EEv0kpq-X7ZEhl0j6fTejKj3YMG76qPmxkwIbYv5IphZPoxIo2WTy&_nc_ohc=D8liJpoMvTIQ7kNvgFOWxPS&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QGw11fXbW3DLwdT-WUm_FMnicHqA-IN0sndqIWNJgHwqw&oe=67675631"
                alt="Fourth slide"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Naga College Foundation, Inc.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;
