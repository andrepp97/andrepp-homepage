import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        height={150}
        width={150}
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: "6px",
          display: "block",
        }}
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
