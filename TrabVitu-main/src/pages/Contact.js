import { Box, Typography, Link as MuiLink } from "@mui/material";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

const Contact = () => {
  return (
    <Box
      height="100vh"
      backgroundColor="#f0f0f0"
      position="relative"
      padding={4}
    >
      <Box position="absolute" top={22} left={22}>
        <Typography variant="h6" fontWeight="bold" color="#333" gutterBottom>
          Formas de Contato
        </Typography>

        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <MuiLink
            href="https://github.com/braianvfs1"
            target="_blank"
            underline="none"
            color="inherit"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <img src={githubLogo} alt="GitHub" style={{ width: "30px" }} />
              <Typography>GitHub</Typography>
            </Box>
          </MuiLink>

          <MuiLink
            href="https://www.linkedin.com/in/braian-fagundes-057808216/"
            target="_blank"
            underline="none"
            color="inherit"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                style={{ width: "30px" }}
              />
              <Typography>LinkedIn</Typography>
            </Box>
          </MuiLink>
        </Box>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <MuiLink
            href="https://github.com/evyuk"
            target="_blank"
            underline="none"
            color="inherit"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <img src={githubLogo} alt="GitHub" style={{ width: "30px" }} />
              <Typography>GitHub</Typography>
            </Box>
          </MuiLink>

          <MuiLink
            href="https://www.linkedin.com/in/eykuroda/"
            target="_blank"
            underline="none"
            color="inherit"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                style={{ width: "30px" }}
              />
              <Typography>LinkedIn</Typography>
            </Box>
          </MuiLink>
        </Box>
      </Box>

      <Box textAlign="center" mt={4}>
        <Typography variant="h4" fontFamily="fantasy" color="#333">
          Contato
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
