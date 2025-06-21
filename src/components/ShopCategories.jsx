import CategoryCard from "./CategoryCard";
import categories from "../data/categories";

const ShopCategories = () => {
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        {categories.map((cat,index) => (
            <CategoryCard
            key={index}
            title={cat.title} 
            items={cat.items}
            image={cat.image}/>
        ))}
    </div>
        
    )
}

export default ShopCategories;