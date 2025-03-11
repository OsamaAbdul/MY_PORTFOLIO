import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Stack } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={project.name}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          {project.technologies.map((tech, index) => (
            <Typography
              key={index}
              variant="caption"
              sx={{
                backgroundColor: '#f0f0f0',
                padding: '2px 8px',
                borderRadius: '10px'
              }}
            >
              {tech}
            </Typography>
          ))}
        </Stack>
      </CardContent>
      <Stack direction="row" spacing={1} sx={{ p: 2 }}>
        {project.link && (
          <Button
            size="small"
            variant="contained"
            color="primary"
            href={project.link}
            target="_blank"
          >
            GitHub
          </Button>
        )}
        {project.live && (
          <Button
            size="small"
            variant="outlined"
            href={project.live}
            target="_blank"
          >
            Live Demo
          </Button>
        )}
      </Stack>
    </Card>
  );
};

export default ProjectCard;
