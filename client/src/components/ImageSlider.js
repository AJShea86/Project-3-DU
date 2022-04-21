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


//  const ImageSlider = () => {
//   const [current, setCurrent] = useState(0);
//   const  [length, setLenght] = useState(0);
//   const {loading, error, data} = useQuery("")

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };


  // if (!Array.isArray(User) || User.length <= 0) {
  //   return null;

  // }
//   function Users({GET_USERS}) {
//     const { loading, error, data } = useQuery(GET_USERS);
//     if(loading) return `Loading`;
//     if(error) return `Error!`



  

  
//   return (
//     <section className="slider">
//       {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
//       <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}

//       {data.map((User, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <div>
//                 {/* <img src={slide.image} alt="dog images" className="image" /> */}

//                 {/* <div>hello</div> */}
//                 <Card sx={{ maxWidth: 345 }}>
//                   <CardMedia
//                     component="img"
//                     alt="green iguana"
//                     height="140"
//                     image={User.pic}
//                   />
//                   <CardContent>
//                     {/* <Typography gutterBottom variant="h5" component="div">
//                       Name */}
//                     {/* </Typography>
//                     <Typography gutterBottom variant="h6" component="div">
//                       Location
//                     </Typography>

//                     <Typography variant="body2" color="text.secondary">
//                       Lizards are a widespread group of squamate reptiles, with
//                       over 6,000 species, ranging across all continents except
//                       Antarctica
//                     </Typography> */}
//                   </CardContent>
//                   <CardActions>
//                     <Button id="chatButton" size="large">
//                       Chat
//                     </Button>
//                     {/* <Button size="small">Learn More</Button> */}
//                   </CardActions>
//                 </Card>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };
//  }


export default ImageSlider
