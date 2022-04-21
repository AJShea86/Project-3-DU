import React from "react";
import Card from "@mui/material/Card";
import { CardActions, CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
// import { User } from "../../../server/models";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";
//card
  // const ImageSlider = () => {
   
  //     console.log(users) ; 
  //         <Card>
  //           <div>
  //               <p>
  //                 {users[0].name}
  //               </p>
  //           </div>
  //           </Card> 
  //     }


 const ImageSlider = () => {
    const { loading, data } = useQuery(GET_USERS);
    const users = data?.users || [];
  // const [current, setCurrent] = useState(0);
  // const  [length, setLenght] = useState(0);
  // const {loading, error, data} = useQuery("")

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };


  // if (!Array.isArray(User) || User.length <= 0) {
  //   return null;

  // }

  return (
    <section className="slider">
      {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}

      {users.map((User, index) => {
        return (
          <div
            // className={index === current ? "slide active" : "slide"}
            // key={index}
          >
            {/* {index === current && ( */}
              <div>
                {/* <img src={slide.image} alt="dog images" className="image" /> */}

                {/* <div>hello</div> */}
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={User.pic}
                  />
                  <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="div">
                      Name */}
                    {/* </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Location
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button id="chatButton" size="large">
                      Chat
                    </Button>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
              </div>
            
          </div>
        );//keep
      })} //keep
    </section>//keepthis
  );
};
 


export default ImageSlider;
