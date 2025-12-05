import Header from "../Components/Header";
import Card from '../Components/Card';
import hobbies from '../Info files/hobbiesInfo';
import './Hobbies.css';


const top5List = hobbies[3].top5.map((game) => <ul>{game.gameTitle}</ul>);

export default function Hobbies(){
  return (
    <div className="Hobbies">
      <Header />
      <div className="Hobbies-title">
        <h1>Hobbies</h1>
      </div>
        {hobbies.map((info) =>(
            <Card title={info.title} description={info.description}/>
        ))} 

        <Card title="Top 5" description={top5List} />
    </div>
  );
      
}


