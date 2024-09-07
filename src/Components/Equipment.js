import React from "react";
import "../CSS/custom.css";
import Grid from "@mui/material/Grid2";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Button from "@mui/material/Button";

export default function Equipment() {
  return (
    <div className="EquipmentContainer ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3  p-0">
            <div className="d-flex align-items-center iconDiv ">
              <hr className="borderhr" />
              <WorkIcon sx={{ fontSize: "50px" }} />
              <hr
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              />
            </div>
            <div className="EquipmentDivTitle mt-4">
              <h5>
                Crop <br /> Cultivation
              </h5>
              <p>lorem</p>
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: "black" }}
              >
                Read More
              </Button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 p-0">
            <div className="d-flex align-items-center iconDiv">
              <hr
                style={{
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              />
              <WorkIcon sx={{ fontSize: "50px" }} />
              <hr
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              />
            </div>
            <div className="EquipmentDivTitle mt-4">
              <h5>Safety</h5>
              <p>lorem</p>
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: "black" }}
              >
                Read More
              </Button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 p-0">
            <div className="d-flex align-items-center iconDiv">
              <hr
                style={{
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              />
              <AccessTimeIcon sx={{ fontSize: "50px" }} />
              <hr
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              />
            </div>
            <div className="EquipmentDivTitle mt-4">
              <h5>Climate Change</h5>
              <p>lorem</p>
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: "black" }}
              >
                Read More
              </Button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 p-0">
            <div className="d-flex align-items-center iconDiv">
              <hr
                style={{
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
              />
              <WbSunnyIcon sx={{ fontSize: "50px" }} />
              <hr className="borderhr" />
            </div>
            <div className="EquipmentDivTitle mt-4">
              <h5>Environment</h5>
              <p>lorem</p>
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: "black" }}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
