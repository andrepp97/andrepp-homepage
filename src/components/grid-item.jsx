import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <img
        src={thumbnail}
        alt={title}
        style={{ borderRadius: "6px" }}
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
        <Text fontWeight="medium" my={2}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);
