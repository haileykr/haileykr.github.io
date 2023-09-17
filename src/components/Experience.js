import * as React from "react";
import Grid from "@mui/material/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { experienceList } from "../assets/data";
import { openInNewTab } from "../utils/onClickUrl";
import {
  SectionTitleHeader,
  HeaderContainer,
  DetailsContainer,
} from "./styledComponents";
// import { useTheme } from "@mui/material";

const Experience = ({ langChoice }) => {
  // const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pt: "1rem",
        pb: "2rem",
        // backgroundColor: theme.palette.background.paperemphasis,
      }}
    >
      <Grid item xs={12} sm={12}>
        <SectionTitleHeader>
          {langChoice === "en" ? "EXPERIENCE" : "경력"}
        </SectionTitleHeader>
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
                        return <li key={project}>{project}</li>;
                      })}
                    </ul>
                  </>
                )}
              </DetailsContainer>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Experience;
