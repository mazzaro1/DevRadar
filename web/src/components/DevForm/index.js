import React, {useState,useEffect} from 'react';

function DevForm({onSubmit}){
    const[github_username, setGithubUsername]=useState('');
    const[techs, setTechs]=useState('');
    const[latitude, setLatitude]=useState('');
    const[longitude, setLongitude]=useState('');
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            const {latitude, longitude} = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            //console.log(position);
        },
        (err)=>{
          console.log(err);
        },
        {
          timeout: 30000,
        }
        )
      } ,[]);

      async function handleSubmit(e){
          e.preventDefault();
         await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
          });
        setGithubUsername('');
        setTechs('');
      }
    return(
        <form onSubmit={handleSubmit}>
    
          <div className="input-block">
              <label htmlFor="github_username">Ususário GitHub</label>
              <input
               name="github_username"
               id="github_username"
               required
               value={github_username}
               onChange={e=>setGithubUsername(e.target.value)}
               />
          </div>
          <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input
               name="techs"
               id="techs"
               required
               value={techs}
               onChange={e=>setTechs(e.target.value)}
               />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="Latitude">Latitude</label>
              <input 
              type="number"
              name="Latitude"
              id="Latitude"
              required value={latitude}
              onChange={e=>setLatitude(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="Longitude">Longitude</label>
              <input 
              type="number"
              name="Longitude"
              id="Longitude"
              required value={longitude}
              onChange={e=>setLongitude (e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>

    )
}
export default DevForm;