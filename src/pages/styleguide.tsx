import React, { useEffect } from 'react';

// Externals
import { ColorPalette, FontFamily, HeadingStyle, TypeScale, TypeStyle } from '@theme-ui/style-guide';
import type { HeadFC, PageProps } from 'gatsby';
import {
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Paragraph,
  Radio,
  Select,
  Textarea,
  useThemeUI
} from 'theme-ui';

const StyleGuidePage: React.FC<PageProps> = () => {
  const { theme } = useThemeUI();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <Container p={4}>
      <Heading as="h2" sx={{ my: 3 }}>
        Colors
      </Heading>
      <ColorPalette />
      <Divider />
      <Heading as="h2" sx={{ my: 3 }}>
        Typography
      </Heading>
      <TypeStyle>
        Body: <FontFamily name="body" />
      </TypeStyle>
      <HeadingStyle>
        Heading: <FontFamily name="heading" />
      </HeadingStyle>
      <Divider />
      <Heading as="h2" sx={{ my: 3 }}>
        TypeScale
      </Heading>
      <TypeScale />
      <Divider />
      <Heading as="h2" sx={{ my: 3 }}>
        Form
      </Heading>
      <Box as="form" onSubmit={(e) => e.preventDefault()} sx={{ width: '100%', maxWidth: 500 }}>
        <Label htmlFor="username">Username</Label>
        <Input id="username" mb={3} />
        <Label htmlFor="password">Password</Label>
        <Input id="password" mb={3} type="password" />
        <Box>
          <Label mb={3}>
            <Checkbox />
            Remember me
          </Label>
        </Box>
        <Label htmlFor="sound">Sound</Label>
        <Select id="sound" mb={3}>
          <option>Beep</option>
          <option>Boop</option>
          <option>Blip</option>
        </Select>
        <Label htmlFor="comment">Comment</Label>
        <Textarea id="comment" mb={3} rows={6} />
        <Flex mb={3}>
          <Label>
            <Radio name="letter" /> Alpha
          </Label>
          <Label>
            <Radio name="letter" /> Bravo
          </Label>
          <Label>
            <Radio name="letter" /> Charlie
          </Label>
        </Flex>
      </Box>
      <Divider />
      <Heading as="h2" sx={{ my: 3 }}>
        Links
      </Heading>
      <Link href="#!">Hello</Link>
      {theme.buttons && (
        <>
          <Divider />
          <Heading as="h2" sx={{ my: 3 }}>
            Buttons
          </Heading>
          <Flex sx={{ flexWrap: 'wrap' }}>
            {Object.keys(theme.buttons).map((key) => (
              <Button key={`button_${key}`} m={10} variant={key}>
                {key}
              </Button>
            ))}
          </Flex>
        </>
      )}
      {theme.badges && (
        <>
          <Divider />
          <Heading as="h2" sx={{ my: 3 }}>
            Badges
          </Heading>
          <Flex sx={{ flexWrap: 'wrap' }}>
            {Object.keys(theme.badges).map((key) => (
              <Badge key={`button_${key}`} m={10} variant={key}>
                {key}
              </Badge>
            ))}
          </Flex>
        </>
      )}
      {theme.alerts && (
        <>
          <Divider />
          <Heading as="h2" sx={{ my: 3 }}>
            Alerts
          </Heading>
          <Flex sx={{ flexDirection: 'column' }}>
            {Object.keys(theme.alerts).map((key) => (
              <Alert key={`button_${key}`} m={10} variant={key}>
                {key}
              </Alert>
            ))}
          </Flex>
        </>
      )}
      <Divider />
      <Heading as="h2" sx={{ my: 3 }}>
        Navigation
      </Heading>
      <Box>
        <Flex as="nav">
          <NavLink href="#!" p={2}>
            Home
          </NavLink>
          <NavLink href="#!" p={2}>
            Blog
          </NavLink>
          <NavLink href="#!" p={2}>
            About
          </NavLink>
        </Flex>
      </Box>
      <Divider />
      <Heading as="h2" sx={{ my: 3 }}>
        Table
      </Heading>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>
      <Divider />
      <Heading as="h2" sx={{ my: 3 }}>
        Cards
      </Heading>
      <Card
        sx={{
          width: '100%',
          maxWidth: 400
        }}
      >
        <Paragraph>
          Cupcake ipsum dolor sit amet chocolate bar. Apple pie macaroon muffin jelly candy cake soufflé muffin
          croissant. Gummies jelly beans cotton candy fruitcake. Wafer lemon drops soufflé cookie. Sesame snaps
          fruitcake cheesecake danish toffee marzipan biscuit.
        </Paragraph>
      </Card>
    </Container>
  );
};

export default StyleGuidePage;

export const Head: HeadFC = () => <title>Style Guide</title>;
