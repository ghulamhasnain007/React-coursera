import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


const projects = [
{
    title: "Weather App",
    description: "A Weather App Using React with the use of API which shown the temperature....",
    imageSrc: "https://www.pickcel.com/assets/img/apps/weather/weather-app.webp", // Use the URL of an online image
  },
  {
    title: "Resturant App",
    description: "A Resturant App using HTML, CSS and Javascript in which user can register himself and....",
    imageSrc: "https://images.websitebuilderexpert.com/wp-content/uploads/2020/04/20053423/third-party-app-food-ordering-shake-shack-uber-eats-example.png", // Use the URL of an online image
  },
  {
    title: "Quiz App",
    description: "An Amazing Quizz App which registered user can give quiz and ....",
    imageSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20230607123724/Peek-2023-06-07-12-36.gif", // Use the URL of an online image
  },
  {
    title: "React Space",
    description: "Handy tool belt to create amazing AR components in a React app...",
    imageSrc: "https://screenshots.codesandbox.io/iwfy7/46.png", // Use the URL of an online image
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
