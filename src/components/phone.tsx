import React from 'react';

// Externals
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Button, Flex } from 'theme-ui';

interface PhoneProps {
  togglePhoneZoomed: () => void;
}

const Phone: React.FC<PhoneProps> = ({ togglePhoneZoomed }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%'
      }}
    >
      <Box sx={{ my: 4 }}>
        {getComputedStyle(document.documentElement).getPropertyValue('--theme-ui-colors-text') === '#000' && (
          <StaticImage
            alt="Logo"
            layout="constrained"
            loading="eager"
            placeholder="blurred"
            src="../images/dark_logo.png"
            width={150}
          />
        )}
        {getComputedStyle(document.documentElement).getPropertyValue('--theme-ui-colors-text') === '#fff' && (
          <StaticImage
            alt="Logo"
            layout="constrained"
            loading="eager"
            placeholder="blurred"
            src="../images/light_logo.png"
            width={150}
          />
        )}
      </Box>
      <Flex
        sx={{
          flexDirection: 'column',
          overflow: 'scroll'
        }}
      >
        {/* Location */}
        <Box as="h3" sx={{ color: 'var(--theme-ui-colors-primary)', mb: 1.5, mt: 0 }}>
          Location
        </Box>
        <Box as="p" sx={{ color: 'var(--theme-ui-colors-secondary)', m: 0 }}>
          Based in Liège, Belgium
        </Box>
        {/* Contact */}
        <Box as="h3" sx={{ color: 'var(--theme-ui-colors-primary)', mb: 1.5, mt: 3 }}>
          Contact
        </Box>
        <Box
          as="p"
          onClick={() => window.open('tel:+32473407017', '_self')}
          sx={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', m: 0 }}
        >
          +32473407017
        </Box>
        <Box
          as="p"
          onClick={() => window.open('mailto:maclotpierre@gmail.com', '_self')}
          sx={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', m: 0 }}
        >
          maclotpierre@gmail.com
        </Box>
        {/* Socials */}
        <Box as="h3" sx={{ color: 'var(--theme-ui-colors-primary)', mb: 1.5, mt: 3 }}>
          Stalk me
        </Box>
        <Box
          as="p"
          onClick={() => window.open('https://github.com/pmaclot', '_blank')}
          sx={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', m: 0 }}
        >
          Github
        </Box>
        <Box
          as="p"
          onClick={() => window.open('https://www.linkedin.com/in/pierre-maclot/', '_blank')}
          sx={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', m: 0 }}
        >
          LinkedIn
        </Box>
        <Box
          as="p"
          onClick={() => window.open('https://twitter.com/pierre_maclot', '_blank')}
          sx={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', m: 0 }}
        >
          Twitter
        </Box>
      </Flex>
      <Button
        onClick={togglePhoneZoomed}
        sx={{
          bg: 'var(--theme-ui-colors-primary)',
          color: 'var(--theme-ui-colors-background)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          my: 4
        }}
      >
        Back
      </Button>
    </Flex>
  );
};

export default Phone;
