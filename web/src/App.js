import React, {useState, useEffect} from 'react';
import api from'./services/api';
import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';
import DevItem from  './components/DevItem';
import DevForm from  './components/DevForm';


function App() {
  const [devs, setDevs] = useState([]);
  

 

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  },
  
    []);
  
  async function  handleAddDev(data){
    
    const response = await api.post('/devs',data)
    
    setDevs([...devs,response.data]);
    //console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/> 
      </aside>
      <main>
        <ul>
        {devs.map(dev=>(
          <DevItem  key={dev._id} dev={dev}/>
           
          ))}
                    
        </ul>
      </main>
    </div>
  );
}

export default App;
/*<li key={dev._id} className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="user-info">
              <strong>{dev.name}</strong>
              <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
          <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acesse o perfil no GitHub</a>
          </li>*/
//Componente: bloco isolado de html css ou js que nao interfere na aplicação
//Estado: Informações mantidas pelos componentes (imutabilidade)
//Propriedade: Informações que um componente pai passa para o componente filho
