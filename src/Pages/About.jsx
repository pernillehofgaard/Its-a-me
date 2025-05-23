import profilePic from '../Images/Portrett.jpg';
import Header from '../Components/Header';

export default function About(){
  return(
    <div>
      <Header />
      <div className="App-body">
        <h1>About</h1>
        <img src={profilePic} className="ProfilePic"/>
        <p>Pernille is a fullstack developer with 5 years of experiance. She is mainly a backend developer, but like to try her hand at some frontend from time to time
        At her spare time she likes to play games (both bordgames and video games), 3D-modeling, 3D-printing. If you are interested in more of Pernille's hobbies, you can read about it more <a href="/">here</a>.</p>
      </div>
    </div>
  );
}
