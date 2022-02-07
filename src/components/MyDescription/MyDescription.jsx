import React, { useRef, useEffect, useState } from 'react';
import './my-description.css'

const MyDescription = () => {

    const conVisible = useRef(null);
    const [showAnimation, setShowAnimation] = useState(false);

    const listenerScroll = (e) => {

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleScroll = (e) => {
        const yTop = conVisible.current.getBoundingClientRect().top;
        const { innerWidth: width, innerHeight: height } = window;

        //console.log('hiii', yTop);
        if(yTop < (0.4 * width))
        {
            setShowAnimation(true);
          //  console.log('----------------------------', showAnimation.current)
        }
    }
    

    return (
        <div ref={conVisible} className="my-con-description">
            <div className="max-width-con">
                <div className="my-con-items-description">
                    <img src='/img/my_image.jpg' 
                        className={`my-image ${showAnimation ? 'my-image-animation' : ''}`} 
                        alt="me"  />
                    <div className="my-con-about-me">
                        <p 
                            className={`my-text-about-me ${showAnimation ? 'my-text-about-me-animation' : ''}`} 
                            >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a <br /> <br /> galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised 
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus 
                                PageMaker including versions of Lorem Ipsum.
                                in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus 
                                PageMaker including versions of Lorem Ipsum
                            hola
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyDescription
