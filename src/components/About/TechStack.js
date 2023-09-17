import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const TechStack = () => {
  return (
    <div>
      <TechStackTile>
        <h2>Programming Languages</h2>
        <Button size="small" variant="contained">
          <i class="devicon-python-plain"></i>
          Python
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-typescript-plain"></i>
          TypeScript
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-javascript-plain"></i>
          JavaScript
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-html5-plain"></i>
          HTML
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-css3-plain"></i>
          CSS
        </Button>
        <Button size="small" variant="contained">
          SQL
        </Button>
      </TechStackTile>
      <TechStackTile>
        <h2>Tools</h2>
        <Button size="small" variant="contained">
          <i class="devicon-react-original"></i>
          React.js
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-redux-original"></i>
          Redux
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-nodejs-plain-wordmark"></i>
          Node.js
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-express-original"></i>
          Express.js
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-django-plain"></i>
          Django
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-mongodb-plain"></i>
          NoSQL Databases
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-postgresql-plain"></i>
          <i class="devicon-mysql-plain"></i>RDBMS
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-socketio-original"></i>
          Socket.IO
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-pytorch-original"></i>
          PyTorch
        </Button>
      </TechStackTile>
      <TechStackTile>
        <h2>DevOps / Cloud Services</h2>
        <Button size="small" variant="contained">
          <i class="devicon-azure-plain"></i>
          Azure
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-amazonwebservices-original"></i>
          AWS
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-docker-plain"></i>
          Docker
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-github-original"></i>
          GitHub Actions
        </Button>
        <Button size="small" variant="contained">
          Auth0
        </Button>
        <Button size="small" variant="contained">
          Airflow
        </Button>
        <Button size="small" variant="contained">
          <i class="devicon-kubernetes-plain"></i>
          Kubernetes
        </Button>
      </TechStackTile>

      <TechStackTile>
        <h2>Engineering</h2>
        <Button size="small" variant="contained">
          Rhino
        </Button>
        <Button size="small" variant="contained">
          Grasshopper
        </Button>
        <Button size="small" variant="contained">
          AutoCAD
        </Button>
        <Button size="small" variant="contained">
          Revit
        </Button>
        <Button size="small" variant="contained">
          ETABS
        </Button>
        <Button size="small" variant="contained">
          SAP2000
        </Button>
        <Button size="small" variant="contained">
          SAFE
        </Button>
        <Button size="small" variant="contained">
          RAM
        </Button>
        <Button size="small" variant="contained">
          Strand7
        </Button>
      </TechStackTile>
    </div>
  );
};
export default TechStack;

const TechStackTile = styled("div")(({ theme }) => ({
  borderRadius: "15px",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  "&:hover": { transform: "translateY(-5px)", transition: "0.5s" },
  "& button": {
    borderRadius: "5px",
    margin: "5px",
    backgroundColor: theme.palette.background.paperemphasis,
    color: theme.palette.text.primary,
    cursor: "unset",
    "&:hover": {
      backgroundColor: theme.palette.background.paperemphasis,
      filter: "brightness(85%)",
    },
    "& i": { marginRight: "5px" },
  },
  "& h2": {
    fontSize: "1rem",
    color: theme.palette.text.emphasis,
    marginTop: 0,
  },
}));
