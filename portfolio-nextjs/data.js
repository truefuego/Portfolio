export const projectData = [
    {
        title: 'Geo Explorer',
        description: 'An interactive location guessing web based game',
        thumbnail: '/GeoExplorerCoverCrop.png',
        alt: 'geo explorer img',
        liveLink: 'https://geoblitz.onrender.com/',
        link: '/project/geo-explorer',
    },
    {
        title: 'Porsche Clone',
        description: 'Replicated the design of the Porsche Website',
        thumbnail: '/PorscheCloneCoverCrop.png',
        alt: 'porsche clone img',
        liveLink: 'https://porsche-fys5.onrender.com/',
        link: '/project/porsche-clone',
    },
    {
        title: 'Dusk',
        description: '2D action-adventure game made using Pygame',
        thumbnail: '/DuskCoverCrop.png',
        alt: 'dusk img',
        liveLink: '',
        link: '/project/dusk',
    },
    {
        title: 'Playlist Migrator',
        description: 'Migrating playlists across music streaming platforms',
        thumbnail: '/PlaylistMigratorCoverCrop.png',
        alt: 'playlist migrator img',
        liveLink: '',
        link: '/project/playlist-migrator',
    },
]

export const titles = [
    " WEB DEVELOPER ", " UI DESIGNER " , " ANDROID DEVELOPER ", " 3D ARTIST "," GAME DEVELOPER "
]

export const photographyImageData = [
    {
        imageLink: '/passion/photography/1.jpg',
        alt: '1'
    },
    {
        imageLink: '/passion/photography/2.jpg',
        alt: '2'
    },
    {
        imageLink: '/passion/photography/3.jpg',
        alt: '3'
    },
    {
        imageLink: '/passion/photography/4.jpg',
        alt: '4'
    },
    {
        imageLink: '/passion/photography/5.jpg',
        alt: '5'
    },
    {
        imageLink: '/passion/photography/6.jpg',
        alt: '6'
    },
    {
        imageLink: '/passion/photography/7.jpg',
        alt: '7'
    },
    {
        imageLink: '/passion/photography/8.jpg',
        alt: '8'
    },
    {
        imageLink: '/passion/photography/9.jpg',
        alt: '9'
    },
    {
        imageLink: '/passion/photography/10.jpg',
        alt: '10'
    },
    {
        imageLink: '/passion/photography/11.jpg',
        alt: '11'
    },
    {
        imageLink: '/passion/photography/12.jpg',
        alt: '12'
    },
]

export const renderImageData = [
    {
        imageLink: "/passion/3drender/CherryJar.jpg",
        alt: 'Jar render',
        blurredLink: "",
    },
    {
        imageLink: "/passion/3drender/Prime.png",
        alt: 'Prime',
        blurredLink: "",
    },
    {
        imageLink: "/passion/3drender/ChessPieces.png",
        alt: 'chess',
        blurredLink: "",
    },
    {
        imageLink: "/passion/3drender/SomePrime.png",
        alt: 'some prime',
        blurredLink: "",
    },
    {
        imageLink: "/passion/3drender/CoffeeGriham.png",
        alt: 'coffee griham',
        blurredLink: "",
    },
    {
        imageLink: "/passion/3drender/TIEfighter.png",
        alt: 'tie',
        blurredLink: "",
    },
]

export const projectPreviewLinkData = [
    {
        imagePath:'/project-link-preview/dusk.png',
        projectLink: 'https://github.com/truefuego/Dusk',
        projectName: 'Dusk',
        aboutProject: '2D Game, Python, Pygame',
        projectTimeline: 'Jun-2024 - Jun 2024'
    },
    {
        imagePath:'/project-link-preview/playlist.png',
        projectLink: 'https://github.com/truefuego/Playlist-Migrator',
        projectName: 'Playlist Migrator',
        aboutProject: 'Website, ReactJS, YouTubeAPI, SpotifyAPI',
        projectTimeline: 'May-2024 - Jun 2024'
    },
    {
        imagePath:'/project-link-preview/geo.png',
        projectLink: 'https://github.com/truefuego/GeoBlitz',
        projectName: 'Geo Explorer',
        aboutProject: 'Website, Front-end, ReactJS, Google Cloud',
        projectTimeline: 'Mar-2024 - Mar 2024'
    },
    {
        imagePath:'/project-link-preview/porsche.png',
        projectLink: 'https://github.com/truefuego/Porsche-Clone',
        projectName: 'Porsche Website Clone',
        aboutProject: 'Website, Front-end, ReactJS',
        projectTimeline: 'Dec-2023 - Apr 2023'
    },
]

export const projectsPageData = [
    {
        title: 'Dusk',
        platform: 'Native Desktop App',
        duration: '1 week',
        year: '2024',
        tools: 'Python, Pygame',
        alt: 'dusk-alt',
        goal: 'The goal was to develop a 2D game that combines tough combat mechanics with visually striking art, providing a captivating and difficult gameplay experience.',
        solution: '"Dusk" a 2D action-adventure game that combines challenging combat mechanics with a contrasty art style. Built using Python and Pygame,  featuring RPG elements for a captivating and difficult gameplay experience.',
        functionality: [
            {
                title: 'Combat',
                description: 'Combat mechanics inspired by Dark Souls, including stamina management, dodging.'
            },
            {
                title: 'Art Style',
                description: 'Contrasty, high-contrast art style that sets the game apart visually.'
            },
            {
                title: 'Character Progression',
                description: 'RPG elements like character leveling, skill upgrades, and equipment management.'
            },
        ],
        technicalDetails: [
            {
                title: 'Technology Stack',
                details: [
                    {
                        title:'Programming Language',
                        description: 'Python',
                    },
                    {
                        title:'Framework',
                        description: 'Pygame',
                    },
                    {
                        title:'Art Tools',
                        description: 'Photoshop, Aseprite',
                    },
                ]
            },
            {
                title: 'Architecture',
                details: [
                    {
                        title:'Game Loop',
                        description: 'Standard Pygame loop handling events, updates, and rendering.',
                    },
                    {
                        title:'Entity-Component System',
                        description: 'Modular design for game entities (player, enemies, objects).',
                    },
                    {
                        title:'State Management',
                        description: 'Finite State Machine for handling game states and character behaviors.',
                    },
                ]
            },
            {
                title: 'Implementation Details',
                details: [
                    {
                        title:'Combat System',
                        description: 'Implemented using collision detection, hitboxes, and frame-perfect timing for actions.',
                    },
                    {
                        title:'Level Design',
                        description: 'Tiled-based level design using a custom level editor',
                    },
                ]
            },
        ],
        lessonsLearned: 'Gained valuable experience in game development, particularly in balancing game difficulty and creating visually appealing art with limited resources.',
        futureEnhancement: 'Plan to add more levels, additional enemy types, and further refine combat mechanics based on player feedback.',
        gitLink: 'https://github.com/truefuego/Dusk',
        liveLink: '',
        imageCover: '/project-link-preview/dusk.png',
        image1: '/project-link-preview/dusk1.png',
        image2: '/project-link-preview/dusk2.png',
        gitImage: '/project-link-preview/git.png',
    },
    {
        title: 'Porsche Desktop Website Clone',
        platform: 'Website',
        duration: '3 Months',
        year: '2023',
        tools: 'React.js',
        alt: 'porsche-alt',
        goal: 'Create a pixel-perfect clone of the Porsche desktop website, replicating its design, functionality, and user experience to demonstrate advanced front-end development skills.',
        solution: "Utilized HTML, CSS, JavaScript, and Bootstrap to accurately reproduce the site's structure and interactive elements, ensuring high performance and visual fidelity.",
        functionality: [
            {
                title: 'Interactive Elements',
                description: 'Includes car configurators, sliders, and smooth scrolling animations.'
            },
            {
                title: 'Navigation',
                description: ' A sticky navigation bar with dropdowns for easy access to different sections of the site.'
            },
            {
                title: 'Hero Section',
                description: 'A large, impactful hero image with overlaying text and buttons, just like the original.'
            },
        ],
        technicalDetails: [
            {
                title: 'Technology Stack',
                details: [
                    {
                        title:'Programming Language',
                        description: 'JavaScript',
                    },
                    {
                        title:'Framework',
                        description: 'ReactJS',
                    },
                ]
            },
            {
                title: 'Architecture',
                details: [
                    {
                        title:'Frontend',
                        description: "The site's architecture focuses on delivering a high-performance user experience.",
                    },
                    {
                        title:'Animation Techniques',
                        description: 'CSS animations were combined with JavaScript for more complex interactions.',
                    },
                    {
                        title:'Performance Optimization',
                        description: 'Lazy loading techniques were used for images and videos to improve initial page load times without compromising quality.',
                    },
                ]
            },
            {
                title: 'Implementation Details',
                details: [
                    {
                        title:'Custom CSS',
                        description: "For replicating Porsche's unique design elements like the color scheme, fonts, and spacing.",
                    },
                    {
                        title:'Custom JavaScript Modules',
                        description: 'Developed for handling specific interactions like the car configurator, ensuring clean, modular code that can be easily updated or expanded.',
                    },
                ]
            },
        ],
        lessonsLearned: 'Improved skills in JavaScript for handling complex UI elements',
        futureEnhancement: 'Adding backend support for a more dynamic experience, such as user accounts and a more detailed car configurator.',
        gitLink: 'https://github.com/truefuego/Porsche-Clone',
        liveLink: 'https://porsche-fys5.onrender.com/',
        imageCover: '/project-link-preview/porsche.png',
        image1: '/project-link-preview/porsche1.png',
        image2: '/project-link-preview/porsche2.png',
        gitImage: '/project-link-preview/git.png',
    },
    {
        title: 'Geo Explorer ',
        platform: 'Web Browser',
        duration: '1 Day',
        year: '2024',
        tools: 'ReactJs',
        alt: 'geo-alt',
        goal: "Create a dynamic, video-based location-guessing game to enhance players' geographical knowledge through an interactive and immersive experience.",
        solution: 'Developed a web-based game where players guess locations by analyzing video clips, with points awarded based on the accuracy of their guesses on an interactive map.',
        functionality: [
            {
                title: 'Location Guessing',
                description: 'Players watch a short video clip showing a location, drop a pin on a map to guess the location.'
            },
            {
                title: 'Multiple Rounds',
                description: 'Multiple rounds with differect locations, fluctuating the difficulty.'
            },
            {
                title: 'Score',
                description: 'Points are awarded based on the distance between the guessed location and the actual location.'
            },
        ],
        technicalDetails: [
            {
                title: 'Technology Stack',
                details: [
                    {
                        title:'Programming Language',
                        description: 'JavaScript',
                    },
                    {
                        title:'Framework',
                        description: 'ReactJS',
                    },
                ]
            },
            {
                title: 'Architecture',
                details: [
                    {
                        title:'Frontend',
                        description: "The site's architecture focuses on delivering a high-performance user experience.",
                    },
                    {
                        title:'Animation Techniques',
                        description: 'CSS animations were combined with JavaScript for more complex interactions.',
                    },
                    {
                        title:'Performance Optimization',
                        description: 'Lazy loading techniques were used for images and videos to improve initial page load times without compromising quality.',
                    },
                ]
            },
            {
                title: 'Implementation Details',
                details: [
                    {
                        title:'Game Logic',
                        description: "The game's core logic revolves around accurately calculating distances using geographical coordinates.",
                    },
                    {
                        title:'Location Categorization',
                        description: 'Videos are pre-selected and categorized by difficulty.',
                    },
                ]
            },
        ],
        lessonsLearned: 'Effective teamwork and communication can significantly enhance project outcomes.',
        futureEnhancement: 'Adding more video content for a wider variety of locations, Implementing multiplayer mode for competitive gameplay.',
        gitLink: 'https://github.com/truefuego/GeoBlitz',
        liveLink: 'https://geoblitz.onrender.com/',
        imageCover: '/project-link-preview/geo.png',
        image1: '/project-link-preview/geo1.png',
        image2: '/project-link-preview/geo2.png',
        gitImage: '/project-link-preview/git.png',
    },
    {
        title: 'Playlist Migrator ',
        platform: 'Web Browser',
        duration: '1 Month',
        year: '2024',
        tools: 'ReactJS, Spotify API, YouTube Data API',
        goal: "Automate the transfer of music playlists between Music Streaming Services to save users time and effort.",
        solution: 'A web application built with React, utilizing the Spotify API and YouTube Data API v3 to seamlessly migrate playlists across platforms.',
        functionality: [
            {
                title: 'Location Guessing',
                description: 'Players watch a short video clip showing a location, drop a pin on a map to guess the location.'
            },
            {
                title: 'Multiple Rounds',
                description: 'Multiple rounds with differect locations, fluctuating the difficulty.'
            },
            {
                title: 'Score',
                description: 'Points are awarded based on the distance between the guessed location and the actual location.'
            },
        ],
        technicalDetails: [
            {
                title: 'Technology Stack',
                details: [
                    {
                        title:'Programming Language',
                        description: 'JavaScript',
                    },
                    {
                        title:'Framework',
                        description: 'ReactJS',
                    },
                    {
                        title:'APIs',
                        description: 'Spotify API, YouTube Data API v3',
                    },
                    {
                        title:'Authentication',
                        description: 'OAuth 2.0 for both YouTube and Spotify',
                    },
                ]
            },
            {
                title: 'Architecture',
                details: [
                    {
                        title: 'Frontend',
                        description: "The frontend handles user interaction, API calls, and data management.",
                    },
                    {
                        title: 'Responsive Design',
                        description: 'The Playlist Migrator features a responsive design that ensures a seamless experience across all devices, from desktops to smartphones.',
                    },
                    {
                        title:'Modular Architecture',
                        description: 'The app uses a modular architecture where each component is responsible for a specific function.',
                    },
                ]
            },
            {
                title: 'Implementation Details',
                details: [
                    {
                        title:'OAuth Flow',
                        description: "Users authenticate with both platforms via OAuth 2.0, granting the app permission to access their playlists.",
                    },
                    {
                        title:'Track Matching',
                        description: 'Tracks are matched based on metadata such as title, artist, and album.',
                    },
                ]
            },
        ],
        lessonsLearned: 'Gained deeper insights into API integration, especially dealing with discrepancies between services.',
        futureEnhancement: 'Support for additional music streaming services such as Apple Music, Tidal, and Amazon Music. Improved matching algorithms and a manual override option for unmatched tracks.',
        gitLink: 'https://github.com/truefuego/Playlist-Migrator',
        liveLink: '',
        imageCover: '/project-link-preview/playlist.png',
        image1: '/project-link-preview/playlist1.png',
        image2: '/project-link-preview/playlist2.png',
        alt: 'playlist-alt',  
        gitImage: '/project-link-preview/git.png',
    },
]