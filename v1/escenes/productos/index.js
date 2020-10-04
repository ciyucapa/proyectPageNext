import SceneBase from "../SceneBase";
import CardProduct from "../../component/CardText";


const Product = () => {
    return(
        <div>
            <h1>Productos</h1>
            <CardProduct/>
        </div>
    );
};

export default SceneBase(Product);
