import {useState} from 'react';
import './GalleryItem.css';
import Axios from 'axios';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function GalleryItem(props) {

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  }

  const deleteMoment = () => {
    console.log('in deleteMoment:', props.myMoment.id);
    Axios.delete(`/gallery/delete/${props.myMoment.id}`).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
      alert('error deleting moment');
    })
  }

  const handleLikesClick = () => {
    Axios.put(`/gallery/like/${props.myMoment.id}`).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
      alert('error updaing likes');
    })
  }

  return(
    <div className='listMoment'>
      <Card variant='outlined' sx={{maxWidth: 350}}>
        <CardContent>
          {
            show ?
            <img onClick={handleClick} src={props.myMoment.path}/>
            :
            <p onClick={handleClick}>{props.myMoment.description}</p>
          }
        </CardContent>
        <p>Likes: {props.myMoment.likes}</p>
        <CardActions>
          <ButtonGroup variant='contained'>
            <Button onClick={handleLikesClick} color='success'>Like</Button>
            <Button onClick={deleteMoment} color="secondary">Delete</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </div>
  );
}

export default GalleryItem; 