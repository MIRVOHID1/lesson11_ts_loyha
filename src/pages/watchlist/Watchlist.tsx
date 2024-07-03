import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './Watchlist.scss'

const Watchlist = () => {
    interface Type {
        watchListData: {
            watchList: {
                map: (arg0: (product: any, index: any) => JSX.Element) => JSX.Element;
                images: string
                thumbnail: string
            }
        };
    }
    const watchList = useSelector((state: Type) => state.watchListData.watchList);
    console.log(watchList);
    return (
        <div className="watchlist__container">
            <div className="watchlist__wrapper">
                {
                    watchList.map((product, index) => (
                        <Link to={`/single-product/${product.id}`} key={index} className="watchlist__item">
                            <img className="watchlist__image" src={product.images[0]} alt={product.thumbnail} />
                            <p className="watchlist__text">{product.title}</p>
                            <p className="watchlist__text">${product.price}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Watchlist;


// import React from 'react';
// import { useSelector } from 'react-redux';

// const Watchlist = () => {
//     interface WatchListState {
//         products: {
//           watchList: {
//             products: any[];
//           }
//           id: number;
//           name: string;
//           // other properties
//         }[];
//       }
//     // `useSelector` yordamida `watchList` holatini Redux-dan oling
//     const watchList = useSelector<WatchListState>((state) => state.watchList.watchList);

//     console.log(watchList);

//     // `watchList`ni tekshiring va agar mavjud bo'lsa, mahsulotlarni ro'yxat bilan ko'rsating
//     return (
//         <div>
//             {/* <h2>Watchlist</h2>
//             {watchList && watchList.length > 0 ? (
//                 <ul>
//                     {watchList.map((product, index) => (
//                         <li key={index}>{product.name}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Watchlistda hech qanday mahsulot mavjud emas.</p>
//             )} */}
//         </div>
//     );
// };

// export default Watchlist;
