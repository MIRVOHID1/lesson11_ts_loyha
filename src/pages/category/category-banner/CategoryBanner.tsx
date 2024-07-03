import './CategoryBanner.scss';
import { Category } from "../../../types/index";


const CategoryBanner = ({ products }: Pick<Category, "products">) => {
    console.log(products[0].category);
    return (
        <div className="container__category">
            {
                products[0].category == "smartphones" &&
                <div className="category__banner1">
                    <h1>Smartphones</h1>
                    <p>The place to stay on the grid since 1995.</p>
                </div>
            }
            {
                products[0].category == "laptops" &&
                <div className="category__banner2">
                    <h1>Laptops</h1>
                    <p>Change from closed systems to network-oriented systems.</p>
                </div>
            }
                        {
                products[0].category == "skincare" &&
                <div className="category__banner3">
                </div>
            }
                        {
                products[0].category == "furniture" &&
                <div className="category__banner4">
                    <h1>Furniture</h1>
                    <p>Now that you know what it takes to find, judge, buy, and assemble furniture, you may just decide to build some of your own. Check out these four fun projects from the This Old House “Hammer It Out” series.</p>
                </div>
            }
            {
                 products[0].category == "tops" &&
                <div className="category__banner5">
                    <h1>Tops</h1>
                </div>
            }
            {
                 products[0].category == "fragrances" &&
                <div className="category__banner6">
                    <h1>Fragrances</h1>
                    <p>Fragrances can range from light and delicate to more complex and intense.</p>
                </div>
            }
            {
                 products[0].category == "sunglasses" &&
                <div className="category__banner7">
                    <h1>Sunglasses</h1>
                    <p>The Roman Emperor Nero is reported to have watched Gladiator fights in the Coliseum through polished emeralds.</p>
                </div>
            }
            {
                 products[0].category == "home-decoration" &&
                <div className="category__banner8">
                    <h1>Home-decoration</h1>
                </div>
            }
            {
                 products[0].category == "mens-shirts" &&
                <div className="category__banner9">
                    {/* <h1>mens-shirts</h1> */}
                </div>
            }
            {
                 products[0].category == "motorcycle" &&
                <div className="category__banner10">
                    <h1>Motorcycle</h1>
                    <p>Motorcycles also have many physical benefits. It’s riding keep mind active and speedier because you need to take care of all the people driving around you.</p>
                </div>
            }
            {
                 products[0].category == "groceries" &&
                <div className="category__banner11">
                    {/* <h1>mens-watches</h1> */}
                </div>
            }
            {
                products[0].category == "lighting" &&
                <div className="category__banner13">
                    <h1>Lighting</h1>
                    <p>Light is the smallest quantity of energy that can be transported. For this topic, we will be discussing visible light and this visible light is part of the electromagnetic spectrum. It is known as “visible” light as the visible means that it can be seen by the human eye.</p>
                </div>
            }
            {
                products[0].category == "automotive" &&
                <div className="category__banner14">
                    <h1>Lighting</h1>
                    <p>Light is the smallest quantity of energy that can be transported. For this topic, we will be discussing visible light and this visible light is part of the electromagnetic spectrum. It is known as “visible” light as the visible means that it can be seen by the human eye.</p>
                </div>
            }
            <h1>Shop by category</h1>
        </div>
    );
}

export default CategoryBanner;