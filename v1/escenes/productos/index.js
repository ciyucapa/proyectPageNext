import SceneBase from "../SceneBase";
import CardTextHorizontal from "../../component/cardHorizontal";


const Product = () => {
    return(
        <div>
            <h1>Productos</h1>
            <CardTextHorizontal/>
        </div>
    );
};

export default SceneBase(Product);
