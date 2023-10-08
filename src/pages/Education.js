import React from "react";
import Grid from "@mui/material/Grid";
import { Slide } from "react-awesome-reveal";
import { educationList, licensesList } from "../assets/data";
import { SectionTitleHeader } from "../components/styledComponents";
import EducationCard from "../components/EducationCard";
import LicenseCard from "../components/LicenseCard";

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
      {educationList.map((education, index) => (
        <EducationCard
          key={education["name"]}
          education={education}
          index={index}
        />
      ))}
      <Grid item xs={12} sm={12}>
        <Slide direction="down">
          <SectionTitleHeader className="section-header">
            LICENSES & CERTIFICATES
          </SectionTitleHeader>
        </Slide>
      </Grid>
      {licensesList.map((license) => (
        <LicenseCard key={license["name"]} license={license} />
      ))}
    </Grid>
  );
};
export default Education;
