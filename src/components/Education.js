import * as React from "react";
import Grid from "@mui/material/Grid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { openInNewTab } from "../utils/onClickUrl";
import { educationList, licensesList } from "../assets/data";
import {
  SectionTitleHeader,
  HeaderContainer,
  DetailsContainer,
} from "./styledComponents";
// import { useTheme } from "@mui/material";

const Education = () => {
  // const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pb: "2rem",
        // backgroundColor: theme.palette.background.paperemphasis,
      }}
    >
      <Grid item xs={12} sm={12}>
        <SectionTitleHeader>EDUCATION</SectionTitleHeader>
      </Grid>
      {educationList.map((education) => {
        return (
          <Grid container key={education["name"]}>
            <Grid item xs={12} sm={3}>
              <HeaderContainer>
                <h1>{education["period"]}</h1>
                <h2>{education["location"]}</h2>
                <img src={education["img"]} alt={education["alt"]} />
              </HeaderContainer>
            </Grid>
            <Grid item xs={12} sm={9}>
              <DetailsContainer elevation={2}>
                <h1>
                  {education["name"]}
                  <OpenInNewIcon
                    className="link-official-website"
                    onClick={() => openInNewTab(education["official_website"])}
                  />
                </h1>
                <h2>{education["degree"]}</h2>
                <h3>GPA: {education["GPA"]}</h3>
              </DetailsContainer>
            </Grid>
          </Grid>
        );
      })}
      <Grid item xs={12} sm={12}>
        <SectionTitleHeader>LICENSES & CERTIFICATES</SectionTitleHeader>
      </Grid>
      {licensesList.map((license) => {
        return (
          <Grid key={license["name"]} item xs={12} sm={4}>
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
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Education;
