import React from "react";
import { Flex, IconButton, Link, FlexProps } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

interface SocialItem {
  name: string;
  href: string;
  icon: React.ReactElement;
}

interface SocialLinksProps extends FlexProps {
  usernameGithub?: string;
  usernameInstagram?: string;
  usernameLinkedin?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  usernameGithub = "andrepp97",
  usernameInstagram = "andre_pp_",
  usernameLinkedin = "andreputera",
  ...flexProps
}) => {
  const socialData: SocialItem[] = [
    {
      name: "GitHub",
      href: `https://github.com/${usernameGithub}`,
      icon: <IoLogoGithub size={20} />,
    },
    {
      name: "Instagram",
      href: `https://instagram.com/${usernameInstagram}`,
      icon: <IoLogoInstagram size={20} />,
    },
    {
      name: "LinkedIn",
      href: `https://linkedin.com/in/${usernameLinkedin}`,
      icon: <IoLogoLinkedin size={20} />,
    },
  ];

  return (
    <Flex
      gap={2}
      mt={2}
      justify={{ base: "center", sm: "start" }}
      {...flexProps}
    >
      {socialData.map((item) => (
        <IconButton
          key={item.name}
          as={Link}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          icon={item.icon}
          aria-label={`Visit ${item.name} profile`}
        />
      ))}
    </Flex>
  );
};
