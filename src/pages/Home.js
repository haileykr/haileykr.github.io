import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TypeWriter from "typewriter-effect";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <IntroductionGrid item xs={12} sm={7}>
        <IntroductionContainer elevation={0}>
          <h2>
            Hello!{"  "}
            <span role="img" id="hand" aria-labelledby="hand">
              👋
            </span>
          </h2>

          <h1>
            I am <strong>Hailey Kim</strong> -
          </h1>

          <TypeWriter
            options={{
              strings: [
                "Full-Stack / Software Developer",
                "Licensed Structural Engineer (P.E.)",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
              pauseFor: 1000,
            }}
          />
        </IntroductionContainer>
      </IntroductionGrid>
      <IntroductionGrid item xs={12} sm={5}>
        <ProfileImage
          src={`${process.env.REACT_APP_BASE_URL}/images/avatars/avatar_gif.gif`}
          id="profile"
          alt="profile"
        />
      </IntroductionGrid>
      <AboutGrid item xs={12} sm={6}>
        <h1 className="section-header">ABOUT ME</h1>

        <div>
          In my current role as a <strong>Software Developer</strong>, I lead
          diverse digital projects at Arup, a globally renowned engineering
          consulting firm. <br />I wear many hats at Arup, ranging from a Lead
          Frontend Developer in many projects, backend developer, data
          analysist, to a srcum master and a skills network champion.
          <br />
          <br />
          Prior to this, I worked as a{" "}
          <strong>Licensed Structural Engineer (P.E.)</strong> in prominent
          companies.
          <br />
          <br />
          By integrating my software development skills with a strong
          engineering foundation, I am adept in developing innovative digital
          solutions that resonate with my passion.
        </div>

        {/* <h1>{langChoice === "en" ? "CONNECT" : "소개"}</h1>
        {langChoice === "en" && (
          <div id="connectText">
            Feel free to connect with me! I am always excited to talk to others,
            whether it's about exciting projects or just a friendly chat!
          </div>
        )} */}
        {/* <SocialMediaContainer>
          <IconButton
            aria-label="LinkedIn"
            size="large"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/haileyharrykim")
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Github"
            size="large"
            onClick={() => openInNewTab("https://github.com/haileykr")}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </SocialMediaContainer> */}
        <img
          style={{ width: "100%", height: "auto" }}
          src={`${process.env.REACT_APP_BASE_URL}/images/avatars/things_i_like.png`}
          alt="Things I Like"
        />
      </AboutGrid>
      <AboutGrid item xs={12} sm={6}>
        <h1 className="section-header">TECH STACK</h1>
        <TechStack />
      </AboutGrid>
    </Grid>
  );
};

export default Home;

const IntroductionGrid = styled(Grid)(({ theme }) => ({
  height: "90vh",
  backgroundColor: theme.palette.background.paperemphasis,
  display: "flex",
}));

const IntroductionContainer = styled(Paper)(({ theme }) => ({
  display: "inline-block",
  margin: "auto",
  textAlign: "start",
  padding: "10%",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  borderRadius: 0,
  "& > h1": {
    fontSize: "2.5rem",
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
    "& strong": {
      color: theme.palette.text.emphasis,
    },
  },
  "& > h2": {
    fontSize: "2rem",
    marginBottom: 0,
  },
  "& > h3": {
    fontSize: "1.75rem",
    color: theme.palette.text.secondary,
    marginTop: "0.125rem",
    marginBottom: "0.125rem",
  },
  zIndex: 5,
}));

const ProfileImage = styled("img")({
  marginTop: "10%",
  marginLeft: "5%",
  width: "90%",
  heigth: "auto",
  aspectRatio: 1,
  objectFit: "cover",
  padding: 0,
});

const AboutGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  "& h1": {
    fontFamily: '"Cabin Sketch", "Nanum Gothic", cursive',
    fontSize: "2.5rem",
  },
  "& > div": {
    width: "100%",
    boxSizing: "border-box",
    padding: "3rem",
    paddingTop: 0,
    textAlign: "start",
    display: "inline-block",
  },
  "& strong": {
    color: theme.palette.text.emphasis,
  },

  "& #connectText": {
    paddingBottom: 0,
    marginBottom: "1rem",
  },
}));

const SocialMediaContainer = styled("div")(({ theme }) => ({
  display: "flex !important",
  justifyContent: "center",
  alignItems: "center",
  "& a": {
    display: "inline-block",
  },
}));
