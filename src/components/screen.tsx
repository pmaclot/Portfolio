import React from 'react';

// Externals
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Button, Flex } from 'theme-ui';

interface ScreenProps {
  toggleScreenZoomed: () => void;
}

const Screen: React.FC<ScreenProps> = ({ toggleScreenZoomed }) => {
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
      {getComputedStyle(document.documentElement).getPropertyValue('--theme-ui-colors-text') === '#000' && (
        <StaticImage
          alt="Logo"
          layout="constrained"
          loading="eager"
          placeholder="blurred"
          src="../images/dark_logo.png"
          width={120}
        />
      )}
      {getComputedStyle(document.documentElement).getPropertyValue('--theme-ui-colors-text') === '#fff' && (
        <StaticImage
          alt="Logo"
          layout="constrained"
          loading="eager"
          placeholder="blurred"
          src="../images/light_logo.png"
          width={120}
        />
      )}
      {/* On mobile & tablet, change layout */}
      <Flex
        sx={{
          flexDirection: 'column'
        }}
      >
        {/* Revomon DMCC */}
        <Flex
          sx={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: ['none', 'none', 'block'],
              flex: '0 1 350px',
              mr: 3
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', m: 0, textAlign: 'right' }}>
              August 2021 &ndash; August 2023
            </Box>
          </Box>
          <Box
            sx={{
              flex: '0 1 450px'
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', display: ['block', 'block', 'none'], m: 0 }}>
              August 2021 &ndash; August 2023
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-primary)', m: 0 }}>
              Lead Developer &bull; Revomon DMCC
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-secondary)', mb: 3, mt: 1.5 }}>
              In charge of developing and coordinating the development of server infrastructure, databases, web
              applications and their interaction with smart contracts.
            </Box>
          </Box>
        </Flex>
        {/* Sparkle SRL */}
        <Flex
          sx={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: ['none', 'none', 'block'],
              flex: '0 1 350px',
              mr: 3
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', m: 0, textAlign: 'right' }}>
              June 2018 &ndash; March 2023
            </Box>
          </Box>
          <Box
            sx={{
              flex: '0 1 450px'
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', display: ['block', 'block', 'none'], m: 0 }}>
              June 2018 &ndash; March 2023
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-primary)', m: 0 }}>
              Software Developer &bull; Sparkle SRL
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-secondary)', mb: 3, mt: 1.5 }}>
              In charge of developing web and mobile solutions for startups that don't have the necessary development
              teams to get them off the ground.
            </Box>
          </Box>
        </Flex>
        {/* Microsoft Innovation Center Belgium */}
        <Flex
          sx={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: ['none', 'none', 'block'],
              flex: '0 1 350px',
              mr: 3
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', m: 0, textAlign: 'right' }}>
              February 2018 &ndash; June 2018
            </Box>
          </Box>
          <Box
            sx={{
              flex: '0 1 450px'
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', display: ['block', 'block', 'none'], m: 0 }}>
              February 2018 &ndash; June 2018
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-primary)', m: 0 }}>
              Internship &bull; Microsoft Innovation Center Belgium
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-secondary)', mb: 0, mt: 1.5 }}>
              In charge of developing a website aimed at offering paid challenges to students by companies.
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Button
        onClick={toggleScreenZoomed}
        sx={{
          bg: 'var(--theme-ui-colors-primary)',
          color: 'var(--theme-ui-colors-background)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit'
        }}
      >
        Back
      </Button>
    </Flex>
  );
};

export default Screen;
