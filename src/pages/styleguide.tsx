import React, { useEffect } from 'react';

// Externals
import { ColorPalette, FontFamily, HeadingStyle, TypeScale, TypeStyle, useTheme } from '@theme-ui/style-guide';
import type { HeadFC, PageProps } from 'gatsby';
import { Box, Checkbox, Container, Divider, Flex, Input, Label, Radio, Select, Textarea } from 'theme-ui';

const StyleGuidePage: React.FC<PageProps> = () => {
  const theme = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <Container p={4}>
      <h2>Colors</h2>
      <ColorPalette />
      <Divider />
      <h2>Typography</h2>
      <TypeStyle>
        Body: <FontFamily name="body" />
      </TypeStyle>
      <HeadingStyle>
        Heading: <FontFamily name="heading" />
      </HeadingStyle>
      <Divider />
      <h2>TypeScale</h2>
      <TypeScale />
      <Divider />
      <h2>Form</h2>
      <Box as="form" onSubmit={(e) => e.preventDefault()} pb={3} sx={{ width: '100%', maxWidth: '500px' }}>
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
      {/* More examples */}
    </Container>
  );
};

export default StyleGuidePage;

export const Head: HeadFC = () => <title>Style Guide</title>;
