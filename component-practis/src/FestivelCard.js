const CardStyle = {
    padding : '5px',
    margin : '10px',
    backgroundColor :' skyblue',
    border : '2px solid black ',
    width : '250px',
    borderRadius : '5px',
    textAlign : 'center'
}

export default function GanpatiCard({heading,conten,}){
    return(
   <div style={CardStyle}>
    <h2 className="heading">{heading}</h2> 
     
    <p className="content">{conten}</p>
   </div> 
    );
}