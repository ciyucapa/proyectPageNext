import ItemCard from "./itemCard";

const CardText = () => {
    return(
        <div className="card-container">
            <div className="card">
                <ItemCard title={"Cojin Decorativo"} text={"Spiderman"} src='/spiderman.jpg' alt="cojin" />
                <ItemCard title={"Cojin Infantil"} text={"Estrella"} src='/pizza.jpg' alt="cojin"/>
                <ItemCard title={"Cojin Navideño"} text={"Santa Closs"} src='/spiderman.jpg' alt="cojin"/>
            </div>
        </div>
    );
};

export default CardText;
