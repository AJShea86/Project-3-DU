import React, { useEffect, useState} from "react";
import Card from "@mui/material/Card";
import { CardActions, CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";
import { Typography } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { useMutation } from "@apollo/client";
import { LIKE_USER } from "../utils/mutations";
import Axios from 'axios';



const ImageSlider = () => {
  const { loading, data:users, error } = useQuery(GET_USERS);
  const [likeUser,{ errorUser, data}] = useMutation(LIKE_USER)

  useEffect(()=> {
    console.log(users);
    console.log(error, loading)
  }, [users, error, loading])

    const [current, setCurrent] = useState(0);
    // const  [length, setLength] = useState(0);
    const length = users.users.length

    const nextSlide = () => {
     setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };


    const handleLike = async (user) => {
      console.log(user)
      // try {
      //   const { data }  = await likeUser({
      //     variables: { user: user },
      //   });
  
      //   // Auth.login(data.addUser.token, data.addUser.user._id);
      // } catch (e) {
      //   console.error(e);
      // }
      const currentUserId= localStorage.getItem('current_user_id')
      Axios.post('/user-like', {id: user._id, myId: currentUserId}).then(res=> {console.log(res)})
      .catch(err => console.log(err))
  
      
    }


    // if (!Array.isArray(users) || users.length <= 0) {
    //   return null;

    // }

  return (
    <section className="slider">
      <PetsIcon  className="right-arrow" onClick={nextSlide} fontSize='large'style={{verticalAlign:"middle", transform:'rotate(90deg)'}}/>
      <PetsIcon  className="left-arrow" onClick={prevSlide} fontSize='large'style={{verticalAlign:"middle", transform:'rotate(270deg)'}}/>

      {users?.users.map((User, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
              {index === current && (
              <div>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="dog photo"
                    height="140"
                    image={User.pic}//need to put user pic here
                  />
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
                    <Button id="chatButton" size="large" onClick={()=> handleLike(User)} >
                      Like
                    </Button>
                  </CardActions>
                </Card>
              </div>
              )}
          </div>
        );
      })} 
    </section>//keepthis
  );
};
 


export default ImageSlider;
