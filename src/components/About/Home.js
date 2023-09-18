import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TypeWriter from "typewriter-effect";
import TechStack from "./TechStack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { openInNewTab } from "../../utils/onClickUrl";

const Home = ({ langChoice }) => {
  return (
    <Grid container spacing={2} sx={{ pt: "68.5px" }}>
      <IntroductionGrid item xs={12} sm={7}>
        <IntroductionContainer elevation={0}>
          <h2>
            {langChoice === "en" ? "Hello! " : "안녕하세요! "}
            <span role="img" id="hand" aria-labelledby="hand">
              👋
            </span>
          </h2>
          {langChoice === "en" ? (
            <h1>
              I am <strong>Hailey Kim</strong> -
            </h1>
          ) : (
            <h1>
              <strong>김해리</strong>입니다 -
            </h1>
          )}
          <TypeWriter
            options={{
              strings:
                langChoice === "en"
                  ? [
                      "Full-Stack / Software Developer",
                      "Professional Structural Engineer",
                    ]
                  : ["풀스택 / 소프트웨어 개발자", "미국 기술사 (P.E.)"],
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
          src={`${process.env.REACT_APP_BASE_URL}/images/avatars/1.png`}
          id="profile"
          alt="profile"
        />
      </IntroductionGrid>
      <AboutGrid item xs={12} sm={6}>
        <h1>{langChoice === "en" ? "ABOUT ME" : "소개"}</h1>
        {langChoice === "en" ? (
          <div>
            In my current role as a <strong>Software Developer</strong>, I am
            leading various digital projects at <strong>Arup</strong>, a
            globally renowned engineering consulting firm. Prior to this, I
            worked as a <strong>Licensed Structural Engineer (P.E.)</strong> in
            prominent companies. Integrating my expertise in software
            development with a strong engineering background, I am adept in
            developing innovative digital solutions that align with my passion.
          </div>
        ) : (
          <div>
            현재 글로벌 엔지니어링 컨설팅 기업 <strong>아룹 (ARUP)</strong> 에서
            <strong>풀스택/소프트웨어 개발자</strong>로, 다양한 디지털
            프로젝트들을 이끌고 있습니다. 이전에는 <strong>미국 기술사</strong>
            로써 창의적인 구조물을 설계하는 회사들에서 일하였습니다. 저의 공학적
            사고능력과 컴퓨터 공학에 대한 이해도를 바탕으로, 혁신적인 디지털
            기술을 만들어나가는 데에 큰 열정이 있습니다.
          </div>
        )}
        <h1>{langChoice === "en" ? "CONNECT" : "소개"}</h1>
        {langChoice === "en" && (
          <div id="connectText">
            Feel free to connect with me! I am always excited to talk to others,
            whether it's about exciting projects or just a friendly chat!
          </div>
        )}
        <SocialMediaContainer>
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
        </SocialMediaContainer>
      </AboutGrid>
      <AboutGrid item xs={12} sm={6}>
        <h1>{langChoice === "en" ? "TECH STACK" : "기술 스택"}</h1>
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
