import React from "react";
import Card from "@mui/material/Card";
import { CardActions, CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";
import { Typography } from "@mui/material";


 const ImageSlider = () => {
    const { loading, data } = useQuery(GET_USERS);
    const users = data?.users || [];

    const [current, setCurrent] = useState(0);
    const  [length, setLength] = useState(0);

    const nextSlide = () => {
     setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };


    if (!Array.isArray(data) || data.length <= 0) {
      return null;

    }

  return (
    <section className="slider">
       <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> 

      {users.map((User, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
             {index === current && ( 
              <div>
                <img src={User.pic} alt="dog images" className="image" />
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="div">
                      {User.name}
                   </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Age:{User.age}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      {User.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {User.bio}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button id="chatButton" size="large">
                      Like
                    </Button>
                  </CardActions>
                </Card>
              </div>
             );
          </div>
      })} 
    </section>//keepthis
  );
};
 


export default ImageSlider;
