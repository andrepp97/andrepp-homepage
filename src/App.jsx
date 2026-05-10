import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BioSection,
  BioYear,
  Paragraph,
  Section,
  GridItem,
} from "./components";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { timeline } from "./constant/timeline";
import profileAndre from "./assets/images/andre.webp";
import thumbMovielabs from "./assets/images/movielabs.jpg";
import thumbTwidd from "./assets/images/twidd.png";

const App = () => {
  return (
    <Container maxW="container.sm">
      <Box
        my={8}
        p={4}
        borderRadius="lg"
        textAlign="center"
        css={{ backdropFilter: "blur(12px)" }}
        bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.200")}
      >
        Hello from Indonesia, I am a Frontend React Developer.
      </Box>

      <Section delay={0.1}>
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          gap={4}
        >
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Andre Putera Pratama
            </Heading>
            <p>Frontend Developer | React, Next.js, TypeScript</p>
            <Flex gap={2} mt={2} justify={{ base: "center", sm: "start" }}>
              <Link href="https://github.com/andrepp97" target="_blank">
                <Button variant="ghost">
                  <IoLogoGithub size={20} />
                </Button>
              </Link>
              <Link href="https://instagram.com/andre_pp_" target="_blank">
                <Button variant="ghost">
                  <IoLogoInstagram size={20} />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/andreputera" target="_blank">
                <Button variant="ghost">
                  <IoLogoLinkedin size={20} />
                </Button>
              </Link>
            </Flex>
          </Box>
          <Box flexShrink={0} textAlign="center">
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={3}
              borderStyle="solid"
              w="115px"
              h="115px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <img
                src={profileAndre}
                alt="Profile image"
                width="115"
                height="115"
              />
            </Box>
          </Box>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Profile
        </Heading>
        <Paragraph>
          Frontend Developer based in Jakarta with 5 years of experience
          building and developing responsive and user-friendly web applications.
          Proficient in modern frameworks such as React, Next.js, and Tailwind
          CSS. Possesses a solid understanding of UI/UX and best practices in
          frontend development, and is experienced in team collaboration using
          Agile and Scrum methodologies.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        {timeline.map((item, index) => (
          <BioSection key={"bio" + index}>
            <BioYear>{item.year}</BioYear>
            {item.text}
          </BioSection>
        ))}
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Individual Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} mt={6}>
          <Section>
            <GridItem
              id="movielabs"
              href="https://movielabs.vercel.app/"
              title="Movielabs"
              thumbnail={thumbMovielabs}
            >
              A movie database website built with Next.js, Framer Motion and The
              Movie Database (TMDb) API.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="twidd"
              href="https://twidd.vercel.app/"
              title="Twidd"
              thumbnail={thumbTwidd}
            >
              A twitter-inspired website built with Next.js, Tailwind CSS and
              Firebase.
            </GridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default App;
