import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Zoom } from "react-awesome-reveal";
import { openInNewTab } from "utils/onClickUrl";
import { DetailsContainer } from "components/styledComponents";

const LicenseCard = ({ license }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Zoom>
        <DetailsContainer elevation={2}>
          <h1>
            {license["name"]}
            {"  "}
            {license["field"] === "Tech" ? "👩🏻‍💻" : "👷🏻‍♀️"}
          </h1>
          <h2>{license["issuer"]}</h2>
          <h3>
            Issued in {license["issued"]}
            
            <IconButton aria-label="go to button"><OpenInNewIcon
              fontSize="small"className="link-official-website"
              onClick={() => openInNewTab(license["official_website"])}
            />
          </IconButton></h3>
        </DetailsContainer>
      </Zoom>
    </Grid>
  );
};

export default LicenseCard;
