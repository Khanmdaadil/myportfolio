import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Mingle-Verse(A social media Platform)',
        description: "I developed a full-stack web application using Node.js and Express.js, with a focus on file handling and security. The project included features like file uploads, enhanced security measures, MongoDB integration, and a well-structured RESTful API, all prepared for deployment.",
        tools: ['ReactJs','NodeJs','MongoDb','ExpressJs','JWT','Bcrypt'],
        role: 'Backend Developer',
        code: 'https://github.com/Khanmdaadil/MingleVerse-frontened',
        demo: 'https://mingle-verse-frontened.vercel.app/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Tic-Tac-Toe game',
        description: 'Created a React-based Tic-Tac-Toe game with interactive squares, move history tracking, and a winning condition check. Demonstrated React state management and modular component design.',
        tools: ['ReactJs'],
        role: 'Full Stack Developer',
        code: 'https://github.com/Khanmdaadil/Tic-Tac-Toe',
        demo: 'https://magical-toffee-843ddd.netlify.app/',
        image: travel,
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },