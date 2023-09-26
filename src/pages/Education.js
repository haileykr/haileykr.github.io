import React from "react";
import Grid from "@mui/material/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { openInNewTab } from "../utils/onClickUrl";
import { educationList, licensesList } from "../assets/data";
import {
  SectionTitleHeader,
  HeaderContainer,
  DetailsContainer,
} from "../components/styledComponents";
import { Slide } from "react-awesome-reveal";

const Education = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pb: "2rem",
      }}
    >
      <Grid item xs={12} sm={12}>
        <Slide direction="down">
          <SectionTitleHeader className="section-header">
            EDUCATION
          </SectionTitleHeader>
        </Slide>
      </Grid>
      {educationList.map((education, index) => {
        return (
          <Grid container key={education["name"]} sx={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                zIndex: -1,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255,255,255,0.5)",
                backgroundImage:
                  index < 1
                    ? `url(${process.env.REACT_APP_BASE_URL}/images/bg/abstract-futuristic-circuit-board-pattern-illustration-free-vector.jpg)`
                    : `url(${process.env.REACT_APP_BASE_URL}/images/bg/city-seamless-pattern_100478-1292.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                opacity: 0.1,
              }}
            />
            <Grid item xs={12} sm={3}>
              <Slide direction="down">
                <HeaderContainer>
                  <h1>{education["period"]}</h1>
                  <h2>{education["location"]}</h2>
                  <img src={education["img"]} alt={education["alt"]} />
                </HeaderContainer>
              </Slide>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Slide direction="down">
                <DetailsContainer elevation={2}>
                  <h1>
                    {education["name"]}
                    <OpenInNewIcon
                      className="link-official-website"
                      onClick={() =>
                        openInNewTab(education["official_website"])
                      }
                    />
                  </h1>
                  <h2>{education["degree"]}</h2>
                  <h3>GPA: {education["GPA"]}</h3>
                </DetailsContainer>
              </Slide>
            </Grid>
          </Grid>
        );
      })}
      <Grid item xs={12} sm={12}>
        <Slide direction="down">
          <SectionTitleHeader className="section-header">
            LICENSES & CERTIFICATES
          </SectionTitleHeader>
        </Slide>
      </Grid>
      {licensesList.map((license) => {
        return (
          <Grid key={license["name"]} item xs={12} sm={4}>
            <Slide direction="down">
              <DetailsContainer elevation={2}>
                <h1>
                  {license["name"]}
                  {"  "}
                  {license["field"] === "Tech" ? "👩🏻‍💻" : "👷🏻‍♀️"}
                </h1>
                <h2>{license["issuer"]}</h2>
                <h3>
                  Issued in {license["issued"]}
                  <OpenInNewIcon
                    className="link-official-website"
                    onClick={() => openInNewTab(license["official_website"])}
                  />
                </h3>
              </DetailsContainer>
            </Slide>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Education;
