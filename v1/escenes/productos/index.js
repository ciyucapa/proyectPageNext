import SceneBase from "../SceneBase";
import CardTextHorizontal from "../../component/cardHorizontal";


const Product = () => {
    return(
        <div style={{backgroundColor: '#f4f1bb', width: '100%', height: 800}}>
            <h1>Productos</h1>
            <CardTextHorizontal/>
        </div>
    );
};

export default SceneBase(Product);
