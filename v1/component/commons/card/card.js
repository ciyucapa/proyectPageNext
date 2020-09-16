import ItemCard from "./itemCard";

const CardText = () => {
    return(
        <div className="card-container">
            <div className="card-box">
                <h1>Cojines Decorativos</h1>
            </div>
            <div className="card">
                <ItemCard title={"Spiderman"} src='/spiderman.jpg' />
                <ItemCard title={"Pizza"} src='/pizza.jpg' />
                <ItemCard title={"Spiderman"} src='/spiderman.jpg' />
            </div>
        </div>
    );
};

export default CardText;
