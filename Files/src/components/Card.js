import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      bgColor="white"
      p={4}
      spacing={4}
    >
      {/* Use the Image component with the provided imageSrc URL */}
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack align="start" spacing={2}>
        <Heading as="h2" fontSize="xl">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack justify="space-between" w="100%" mt={2}>
        <Text color="blue.500" fontWeight="bold">
          Learn More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
