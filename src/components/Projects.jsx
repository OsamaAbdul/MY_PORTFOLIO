import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import ProjectCard from './ProjectCard';

// Remove these imports since images are now in public/
// import BookList from '../images/booklist.jpg';
// import Attendance from '../images/cds.jpg';
// import Portfolio from '../images/portfolio.jpg';

const projectData = [
  {
    name: 'Token Based Attendance System',
    description: 'Built a full-stack web attendance application which uses tokens to sign attendance. Features include authentication, complaints, token generation, and CRUD operations.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://github.com/OsamaAbdul/Do-DeeL-Attendance',
    image: '/images/cds.jpg', // Updated to public path
  },
  {
    name: 'My Personal Portfolio',
    description: 'Built a personal portfolio while learning the power of React components.',
    technologies: ['React', 'Bootstrap', 'Ajax', 'Material UI'],
    link: 'https://github.com/OsamaAbdul/personal-portfolio',
    image: '/images/portfolio.jpg', // Updated to public path
  },
  {
    name: 'Book List Manager App',
    description: 'Built a web app that keeps records of book authors and their books.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'MongoDB', 'ExpressJS'],
    link: 'https://github.com/OsamaAbdul/booklist',
    image: '/images/booklist.jpg', // Updated to public path
  },
];

const Projects = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        <h1>PRO<span>JECTS</span></h1>
        <p></p>
      </Typography>
      <Grid container spacing={3}>
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;