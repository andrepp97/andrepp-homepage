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
import thumbMovielabs from "/public/images/movielabs.jpg";
import thumbTwidd from "/public/images/twidd.png";

const App = () => {
  return (
    <Container maxW="container.sm">
      <Box
        my={8}
        p={4}
        borderRadius="lg"
        textAlign="center"
        css={{ backdropFilter: "blur(1rem)" }}
        bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.200")}
      >
        Hello from Indonesia, I am a Frontend React Developer.
      </Box>

      <Section delay={0.1}>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Andre Putera Pratama
            </Heading>
            <p>Frontend Developer | React - Next.js</p>
            <Flex gap={2} mt={2}>
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
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <img
                src="/images/andre.webp"
                alt="Profile image"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Profile
        </Heading>
        <Paragraph>
          I am a Web Developer with a passion for Frontend Development. With 5
          years of experience building and developing responsive and
          user-friendly web applications. Proficient in modern technologies such
          as HTML, CSS, and JavaScript, as well as frameworks like React and
          Next.js. Possesses an adequate understanding of UI/UX and best
          practices in frontend development. Experienced working collaboratively
          in agile teams, and is detail-oriented with a focus on code quality.
        </Paragraph>
      </Section>

      <Section delay={0.5}>
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

      <Section delay={0.6}>
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
              A movie database website built with Next.js, Vanilla CSS, Framer
              Motion and The Movie Database (TMDb) API.
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
