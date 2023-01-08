import"../COMPONENT/Herostyle.css"

function Hero(props){
    return(<>
    <div className={props.cName}>
        <img alt="herpImg" src={props.HeroImg}/>
    
        <div className='Hero-text'>
        <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.buttonText}</a> 
        </div>
        </div>
        </>);
}
export default Hero;