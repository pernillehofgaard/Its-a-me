import Header from "../Components/Header";

export default function Contact(){
    return(
        <div>
            <Header />
            <h1>Concat info</h1>
            <p>If you want to contact Pernille, please do so one email or via LinkedIn</p>
            <p type="mailto:pernille.hofgaard@hotmail.com"><a href="mailto:pernille.hofgaard@hotmail.com">Mail to Pernille</a></p>
            <p type="url"><a href="https://www.linkedin.com/in/pernille-hofgaard">LinkedIn</a></p>
        </div>
    )
}