import React,  { useState, useEffect } from 'react'
import { getImagesBySearch } from '../api/imageApi';
import sports from '../res/sports.jpg'
import videogames from '../res/videogames.jpg'
import travel from '../res/travel.jpg'

export const Interests = ({
    id
}) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        loadPhotos();
    }, [])


    const loadPhotos = async () => { 

        let res;

        try {
            res = await getImagesBySearch('sports', 1);
        } catch (error) {
            console.log(error)
        }

        const pictures = [];

        if(res?.data.status == 200){
            res.data.photos.forEach( photo => {
                pictures.push(photo.src.original)
            })
    
            setPhotos(prev => [ ...prev, pictures]);
            return;
        }

        pictures.push(sports)
        pictures.push(videogames)
        pictures.push(travel)

        setPhotos(pictures);

    }

  return (
    <div className='container interests-container p-5' id={id}>
        <h1>Interests</h1>
        <div className='container'>
            {
                photos.map( photo => {
                    return <img src={photo} alt={photo} key={photo} className='img-interests'/>
                })
            }
        </div>
    </div>
  )
}
