import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Fade, Zoom } from "react-awesome-reveal";
import { openInNewTab } from "utils/onClickUrl";
import { experienceList, otherExperienceList } from "assets/data";
import ExperienceCard from "components/ExperienceCard";
import {
  SectionTitleHeader,
  DetailsContainer,
} from "components/styledComponents";

const Experience = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pb: "2rem",
      }}
    >
      <Grid item xs={12} sm={12}>
          <SectionTitleHeader className="section-header">
            PROFESSIONAL EXPERIENCE
          </SectionTitleHeader>
      </Grid>
      {experienceList.map((experience, index) => (
        <ExperienceCard
          key={experience["name"]}
          experience={experience}
          index={index}
        />
      ))}
      <Grid item xs={12} sm={12}>
          <SectionTitleHeader className="section-header">
            VOLUNTEERING & CONFERENCES
          </SectionTitleHeader>
      </Grid>
      {otherExperienceList.map((experience) => {
        return (
          <Grid key={experience["name"]} item xs={12} sm={4}>
            <Zoom>
              <DetailsContainer elevation={2}>
                <h1>{experience["name"]}</h1>
                <h2>{experience["role"]}</h2>
                <h3>
                  {experience["period"]}
                  {"official_website" in experience && (
                    <IconButton aria-label="go to button">
                      <OpenInNewIcon
                        fontSize="small"
                        className="link-official-website"
                        onClick={() =>
                          openInNewTab(experience["official_website"])
                        }
                      />
                    </IconButton>
                  )}
                </h3>

                <ul>
                  {experience["description"].map((description) => {
                    return <li key={description}>{description}</li>;
                  })}
                </ul>
              </DetailsContainer>
            </Zoom>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Experience;
