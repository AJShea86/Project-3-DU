import React, { useState } from "react";
import Card from "@mui/material/Card";
// import { User } from "../../../server/models";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";

function AllUser () {
        const { loading, error, data } = useQuery(GET_USERS);
        if(loading) return `Loading`;
        if(error) return `Error!`
        return { data };
        console.log({data});
}
AllUser();
  const ImageSlider = () => {
          <Card>
            <div>
                <p>
                  {/* {data} */}
                </p>
            </div>
            </Card> 
      }

export default ImageSlider;
