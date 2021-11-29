import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {

  const text = 'Edited by Timothy Yu Zhiwen • Copyright © ';

  return (
    <Box component="footer" className="secondary-background-color-dark">
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          color="text.dark"
          component="p"
          sx={{ paddingTop: '10px' }}>
          {text}
          <Link color="inherit" href="https://kyzure.github.io/">
            Kyzure
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;