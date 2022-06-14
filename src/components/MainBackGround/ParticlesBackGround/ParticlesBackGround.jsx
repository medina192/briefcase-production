import React from 'react';
import Particles from "react-tsparticles";

const ParticlesBackGround = React.memo(() => {

    const particlesInit = (main) => {
        //console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        //console.log(container);
    };




  return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            width='100vw'
            height="100vh"
            
            options={{
                fullScreen: { enable: false, zIndex: 1  },
                background: {
                    
                //image: "url('https://particles.js.org/images/background3.jpg')",
                //image: `url('../../img/network.jpg')`,  
                image: `url('../../img/world.jpg')`,    
                position: '50% 50%',
                repeat: 'no-repeat',
                size: 'cover',
                opacity: {
                    value: 1,
                },
                color: {
                    value: "#0047a1",
                },
                },
                fpsLimit: 30,
                interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: true,
                    //mode: "repulse",
                    //mode: 'trail',
                    //mode: 'bubble',
                    //mode: 'grab',
                    //mode: 'connect'
                    //mode: 'slow'
                    //mode: 'pull'
                    //mode: 'light'
                    //mode: 'attract'
                    // mode: 'bounce'
                    mode: [
                        "repulse"
                    ]
                    },
                    resize: true,
                },
                rotate: {
                    value: 0,
                    random: true,
                    direction: "counter-clockwise",
                    animation: {
                    enable: true,
                    speed: 15,
                    sync: false
                    }
                },
                modes: {
                    bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    },
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 100,
                    duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                    //attract: {
                    //  enable: true,
                        //rotateX: 600,
                        //rotateY: 1200
                // }
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 80,
                },

                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 2,
                },
                },
                detectRetina: true,
                /*
                config_demo: {
                    hide_card: false,
                    background_color: "#ffffff",
                    background_image: "url('./img/my-image.jpg')",
                    background_position: "50% 50%",
                    background_repeat: "no-repeat",
                    background_size: "cover"
                }
                */
                
            }}
            />
  )
})

export default ParticlesBackGround