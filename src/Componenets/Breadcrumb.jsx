import React from 'react';

function Breadcrumb({title,subPages, imageUrl}) {
  

  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
 
  };

  const imageOverlayStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with 50% opacity
  };

  const textOverlayStyle = {
    position: 'relative',
    zIndex: 10, // Adjust the z-index to ensure text is above the overlay
  };

  return (
    <div className="relative h-[600px] text-center" style={containerStyle}>
      <div style={imageOverlayStyle}></div>
      <div className='grid place-items-center h-full' style={textOverlayStyle}>
        <div>
        <ul className="flex p-4 text-white space-x-2 text-center">
          <li>
            <a href="/" className="hover:text-blue-300">HAB &raquo;  Home</a>
          </li>
          <li>/</li>



          {
            subPages.map((page)=>(
              <>
               <li>
            <a href={page.link} className="hover:text-blue-300">{page.title}</a>
          </li>
          <li>/</li>
              
              </>
            ))
          }
 
        </ul>
        <h1 className='text-white text-5xl text-shadow-4xl font-bold text-center'> {title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
