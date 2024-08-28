import { useLoaderData } from "react-router-dom";
import ProductsCard from "../components/ProductsCard";

const Products = () => {

    const {products} = useLoaderData();

    return (
        <div className="grid grid-cols-3 gap-3 p-3">
            {
                products.map(product =><ProductsCard key={product.id} product= {product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;