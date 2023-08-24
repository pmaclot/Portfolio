import React from 'react';

// Externals
import { StaticImage } from 'gatsby-plugin-image';
import { Button, Flex } from 'theme-ui';

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
      {getComputedStyle(document.documentElement).getPropertyValue('--theme-ui-colors-text') === '#000' && (
        <StaticImage
          alt="Logo"
          layout="constrained"
          loading="eager"
          placeholder="blurred"
          src={`../images/dark_logo.png`}
          width={150}
        />
      )}
      {getComputedStyle(document.documentElement).getPropertyValue('--theme-ui-colors-text') === '#fff' && (
        <StaticImage
          alt="Logo"
          layout="constrained"
          loading="eager"
          placeholder="blurred"
          src={`../images/light_logo.png`}
          width={150}
        />
      )}
      <Flex
        sx={{
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'center',
          height: 'auto'
        }}
      >
        {/* Location */}
        <h3 style={{ color: 'var(--theme-ui-colors-primary)', marginTop: 0, marginBottom: 10 }}>Location</h3>
        <p style={{ color: 'var(--theme-ui-colors-secondary)', margin: 0 }}>Based in Liège, Belgium</p>
        {/* Contact */}
        <h3 style={{ color: 'var(--theme-ui-colors-primary)', marginTop: 30, marginBottom: 10 }}>Contact</h3>
        <p
          onClick={() => window.open('tel:+32473407017', '_self')}
          style={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', margin: 0 }}
        >
          +32473407017
        </p>
        <p
          onClick={() => window.open('mailto:maclotpierre@gmail.com', '_self')}
          style={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', margin: 0 }}
        >
          maclotpierre@gmail.com
        </p>
        {/* Socials */}
        <h3 style={{ color: 'var(--theme-ui-colors-primary)', marginTop: 30, marginBottom: 10 }}>Stalk me</h3>
        <p
          onClick={() => window.open('https://github.com/pmaclot', '_blank')}
          style={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', margin: 0 }}
        >
          Github
        </p>
        <p
          onClick={() => window.open('https://www.linkedin.com/in/pierre-maclot/', '_blank')}
          style={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', margin: 0 }}
        >
          LinkedIn
        </p>
        <p
          onClick={() => window.open('https://twitter.com/pierre_maclot', '_blank')}
          style={{ color: 'var(--theme-ui-colors-secondary)', cursor: 'pointer', margin: 0 }}
        >
          Twitter
        </p>
      </Flex>
      <Button
        onClick={togglePhoneZoomed}
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

export default Phone;
