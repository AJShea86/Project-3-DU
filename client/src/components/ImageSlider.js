import React from "react";
import Card from "@mui/material/Card";
// import { User } from "../../../server/models";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";
//card
  const ImageSlider = () => {
    const { loading, data } = useQuery(GET_USERS);
    const users = data?.users || [];
        
          <Card>
            <div>
                <p>
                  {users}
                </p>
            </div>
            </Card> 
      }

export default ImageSlider;
