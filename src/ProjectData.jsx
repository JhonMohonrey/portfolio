
import project1 from './Image/blurry-gradient-haikei.png'
import projectImage1 from './Image/IMG1.png'
import projectImage2 from './Image/IMG2.png'
export default {
    "success": true,
    "data": {
        projectData: [
            {
                "id": `${Math.random()}`,
                "image": `${projectImage1}`,
                "isFlip": false,
                "title":"Car-Shop Demo",
                "description": "Crafted with ReactJS for a seamless experience and SCSS for a sleek design, discover your dream car and elevate your journeys. Browse our inventory and contact us today for a test drive.",
                "link": "https://jhonmohonrey.github.io/project-car-website-demo/",
                "CodeLink": "https://github.com/JhonMohonrey/project-car-website-demo",
            },
            {
                "id": `${Math.random()}`,
                "image": `${projectImage2}`,
                "isFlip": true,
                "title":"Real-Estate Demo",
                "description": "Explore my real estate portfolio on this professional landing page, crafted with ReactJS for a dynamic experience and SCSS for stylish design. Discover my expertise and contact me for your real estate needs.",
                "link": "https://jhonmohonrey.github.io/project-real-estate-demo/",
                "CodeLink": "https://github.com/JhonMohonrey/project-real-estate-demo",
            },
            
        ]
    }
}