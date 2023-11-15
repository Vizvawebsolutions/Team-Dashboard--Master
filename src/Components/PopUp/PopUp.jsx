import React from "react";

//importing styling file
import "../PopUp/PopUp.css";
import { Button, Card, CardContent } from "@mui/material";

function PopUp(props) {
  return props.trigger ? (
    <Card className="popup" sx={{ minWidth: 475,
    backgroundColor:"transparent",
    backdropFilter:'blur(10px)'
    }}>
      <CardContent className="popup-inner">
        {props.children}
        <Button
          size="small"
          className="close-btn"
          type="contained"
          variant="contained"
          color="error"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </Button>
      </CardContent>
    </Card>
  ) : (
    ""
  );
}

export default PopUp;
