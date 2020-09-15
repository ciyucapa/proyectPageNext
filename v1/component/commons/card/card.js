const CardText = () => {
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignContent:"center", alignItems:"center"}}>
            <div style={{padding:20, backgroundColor:"pink"}}>
                <h1>Cojines Decorativos</h1>
                <img src='/spiderman.jpg' style={{border:"50%", borderRadius:"50%", width:200, height:200 }} />
            </div>
            <div style={{padding:20}}>
                <h1>Cojines</h1>
                <img src='/pizza.jpg' style={{border:"50%", borderRadius:"50%", width:200, height:200 }} />
            </div>
        </div>
    );
};

export default CardText;
