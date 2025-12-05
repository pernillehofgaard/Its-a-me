import Header from "../Components/Header"

export default function Home(){
  return(
    <div>
      <Header />
      <h1>Welcome</h1>
      <p>This webpage was developed by <a href="/About"> Pernille Hofgaard</a> to show of her <i><b>insane</b></i> frontend skillz!</p>
      <p>Developed with React</p>
    </div>
  )
}