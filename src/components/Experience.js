import * as React from "react";
import Grid from "@mui/material/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { experienceList, otherExperienceList } from "../assets/data";
import { openInNewTab } from "../utils/onClickUrl";
import {
  SectionTitleHeader,
  HeaderContainer,
  DetailsContainer,
} from "./styledComponents";
// import { useTheme } from "@mui/material";

const Experience = () => {
  // const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pb: "2rem",
      }}
    >
      <Grid item xs={12} sm={12}>
        <SectionTitleHeader>PROFESSIONAL EXPERIENCE</SectionTitleHeader>
      </Grid>
      {experienceList.map((experience) => {
        return (
          <Grid container key={experience["name"]}>
            <Grid item xs={12} sm={3}>
              <HeaderContainer>
                <h1>{experience["period"]}</h1>
                <h2>{experience["location"]}</h2>
                <img src={experience["img"]} alt={experience["alt"]} />
              </HeaderContainer>
            </Grid>
            <Grid item xs={12} sm={9}>
              <DetailsContainer elevation={2}>
                <h1>
                  {experience["name"]}
                  <OpenInNewIcon
                    className="link-official-website"
                    onClick={() => openInNewTab(experience["official_website"])}
                  />
                </h1>
                <h2>{experience["title"]}</h2>
                <ul>
                  {experience["description"].map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })}
                </ul>
                {experience["projects"] && (
                  <>
                    <h4>Key Projects</h4>
                    <ul>
                      {experience["projects"].map((project) => {
                        return (
                          <li key={project}>
                            <strong>{project.split("|")[0]}</strong>
                            {"  " + project.split("|")[1]}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </DetailsContainer>
            </Grid>
          </Grid>
        );
      })}

      <Grid item xs={12} sm={12}>
        <SectionTitleHeader>VOLUNTEERING & CONFERENCES</SectionTitleHeader>
      </Grid>
      {otherExperienceList.map((experience) => {
        return (
          <Grid key={experience["name"]} item xs={12} sm={4}>
            <DetailsContainer elevation={2}>
              <h1>{experience["name"]}</h1>
              <h2>{experience["role"]}</h2>
              <h3>
                {experience["period"]}
                {"official_website" in experience && (
                  <OpenInNewIcon
                    className="link-official-website"
                    onClick={() => openInNewTab(experience["official_website"])}
                  />
                )}
              </h3>

              <ul>
                {experience["description"].map((description) => {
                  return <li key={description}>{description}</li>;
                })}
              </ul>
            </DetailsContainer>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Experience;
