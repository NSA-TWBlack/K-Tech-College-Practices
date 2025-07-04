import News from "./components/RenderList01";
import ProductList from "./components/RenderList04";
import SalesList from "./components/RenderList05";
import ColorPicker from "./components/State01";
import RatingStar from "./components/State02";
import DeletingProductsList from "./components/State03";
import NotificationBell from "./components/State04";
import { useState } from "react";

const products = [
  {
    id: 1,
    imageUrl: "images/Apple-USBC-To-SDCard-A.jpg",
    title: "iPhone 15 Pro Max 512GB",
    priceNew: "30.990.000đ",
    discount: "-15%",
  },
  {
    id: 2,
    imageUrl: "images/type-c-20-w.png",
    title: "iPhone 15 Pro Max 512GB",
    priceNew: "30.990.000",
    priceOld: "35.990.000",
    discount: "-15%",
  },
  {
    id: 3,
    imageUrl: "images/cap-lightning-to-usb-cable-md818zma-1.jpg",
    title: "iPhone 15 Pro Max 512GB",
    priceNew: "30.990.000",
    priceOld: "35.990.000",
    discount: "-15%",
  },
  {
    id: 4,
    imageUrl: "images/airpod-3.png",
    title: "iPhone 15 Pro Max 512GB",
    priceNew: "30.990.000",
    priceOld: "35.990.000",
    discount: "-15%",
  },
];

const sales = [
  {
    id: 1,
    imageUrl: "images/1.jpg",
    title: "LG White Front Load Steam Washer",
    priceNew: "$1422.7",
    priceOld: "$1025.5",
    discount: "-39%",
    sold: "10",
    rating: "85",
  },
  {
    id: 2,
    imageUrl: "images/2.jpg",
    title: "Edifier Powered Bookshelf Speakers",
    priceNew: "$96",
    priceOld: "$85",
    discount: "-13%",
    sold: "15",
    rating: "70",
  },
  {
    id: 3,
    imageUrl: "images/3.jpg",
    title: "Amcrest Security Camera in White Color",
    priceNew: "$62.99",
    priceOld: "$45.0",
    discount: "-37%",
    sold: "20",
    rating: "70",
  },
  {
    id: 4,
    imageUrl: "images/4.jpg",
    title: "Grand Slam Indoor Of Show Jumping Novel",
    priceNew: "$41.99",
    priceOld: "$32.99",
    discount: "-27%",
    sold: "22",
    rating: "70",
  },
  {
    id: 5,
    imageUrl: "images/5.jpg",
    title: "Sound Intone i65 Earphone White Version",
    priceNew: "$106.96",
    priceOld: "$100.99",
    discount: "-6%",
    sold: "10",
    rating: "85",
  },
  {
    id: 6,
    imageUrl: "images/6.jpg",
    title: "Korea Long Sofa Fabric In Blue Navy Color",
    priceNew: "$670.2",
    priceOld: "$567.8",
    discount: "-18%",
    sold: "79",
    rating: "100",
  },
];

const initialDeletingProducts = [
  {
    id: 1,
    imageUrl: "images/1.jpg",
    title: "Korea Long Sofa Fabric In Blue Navy Color",
    price: "4.410.000đ",
  },
  {
    id: 2,
    imageUrl: "images/2.jpg",
    title: "Korea Long Sofa Fabric In Blue Navy Color",
    price: "4.410.000đ",
  },
  {
    id: 3,
    imageUrl: "images/3.jpg",
    title: "Korea Long Sofa Fabric In Blue Navy Color",
    price: "4.410.000đ",
  },
  {
    id: 4,
    imageUrl: "images/4.jpg",
    title: "Korea Long Sofa Fabric In Blue Navy Color",
    price: "4.410.000đ",
  },
  {
    id: 5,
    imageUrl: "images/5.jpg",
    title: "Korea Long Sofa Fabric In Blue Navy Color",
    price: "4.410.000đ",
  },
];

function App() {
  const [deletingProducts, setDeletingProducts] = useState(
    initialDeletingProducts
  );
  const [open, setOpen] = useState(false);
  return (
    // ----------------------------------------------------------render-list-01-----------------------------------------
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "100vh",
    //     width: "100vw",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //       width: "90%",
    //     }}
    //   >
    //     <h3>TIN MỚI</h3>
    //     <h6>Xem thêm</h6>
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //       width: "90%",
    //       gap: "20px",
    //       overflowX: "auto",
    //     }}
    //   >
    //     <News
    //       imageUrl="https://news.khangz.com/wp-content/uploads/2025/03/cach-lap-gmail-tren-dien-thoai-1-360x180.jpg"
    //       title="Cách lập Gmail trên điện thoại đơn giản chỉ trong 2 bước"
    //       view={140}
    //     />
    //     <News
    //       imageUrl="https://news.khangz.com/wp-content/uploads/2025/02/cai-dat-mau-sac-cho-dien-thoai-samsung-1-360x180.jpg"
    //       title="Cách chỉnh, cài đặt màu sắc cho điện thoại Samsung tối ưu nhất"
    //       view={127}
    //     />
    //     <News
    //       imageUrl="https://news.khangz.com/wp-content/uploads/2025/06/icloud-keychain-la-gi-2-1-360x180.jpg"
    //       title="iCloud Keychain là gì? Mẹo sử dụng iCloud Keychain để đạt hiệu quả tốt nhất?"
    //       view={55}
    //     />
    //     <News
    //       imageUrl="https://news.khangz.com/wp-content/uploads/2025/06/iphone-6s-plus-dung-luong-2-360x180.jpg"
    //       title="Pin iPhone 6S Plus dung lượng bao nhiêu mAh?"
    //       view={55}
    //     />
    //   </div>
    // </div>

    // ----------------------------------------------------------render-list-04-----------------------------------------
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "100vh",
    //     width: "100vw",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "start",
    //       justifyContent: "space-between",
    //       width: "90%",
    //       overflowX: "auto",
    //     }}
    //   >
    //     <h3>Phụ kiện tương thích</h3>
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       flexWrap: "wrap",
    //       justifyContent: "space-between",
    //       width: "90%",
    //       gap: "20px",
    //     }}
    //   >
    //     <ProductList data={products} />
    //   </div>
    // </div>

    // ----------------------------------------------------------render-list-05-----------------------------------------
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     minHeight: "100vh",
    //     width: "100vw",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       flexWrap: "wrap",
    //       justifyContent: "space-between",
    //       width: "90%",
    //       gap: "20px",
    //     }}
    //   >
    //     <h4>Deal of the day</h4>
    //     <div
    //       style={{
    //         flex: "1",
    //       }}
    //     >
    //       <span
    //         style={{
    //           background: "#ff6200",
    //           padding: "5px 10px",
    //           color: "#fff",
    //           borderRadius: "5px",
    //         }}
    //       >
    //         End in: 6:17:17:39
    //       </span>
    //     </div>
    //     <div style={{ width: "50px", fontSize: "14px" }}>
    //       View all
    //       <hr />
    //     </div>
    //   </div>
    //   <hr style={{ width: "90%", margin: "0" }} />
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       flexWrap: "wrap",
    //       justifyContent: "space-between",
    //       marginTop: "20px",
    //       width: "90%",
    //       gap: "20px",
    //     }}
    //   >
    //     <SalesList data={sales} />
    //   </div>
    // </div>

    // ----------------------------------------------------------state-01-----------------------------------------
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "100vh",
    //     width: "100vw",
    //   }}
    // >
    //   <ColorPicker />
    // </div>

    // ----------------------------------------------------------state-02-----------------------------------------
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "100vh",
    //     width: "100vw",
    //   }}
    // >
    //   <RatingStar />
    // </div>

    // ----------------------------------------------------------state-03-----------------------------------------
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     minHeight: "100vh",
    //     width: "100vw",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       flexWrap: "wrap",
    //       justifyContent: "space-between",
    //       width: "90%",
    //       gap: "20px",
    //     }}
    //   >
    //     <h4>Sản phẩm đã xem</h4>
    //     <div
    //       onClick={() => setDeletingProducts([])}
    //       style={{ fontSize: "10px", color: "#a2a2a2", cursor: "pointer" }}
    //     >
    //       Xóa lịch sử
    //     </div>
    //   </div>
    //   <hr style={{ width: "90%", margin: "0" }} />
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       flexWrap: "wrap",
    //       justifyContent: "start",
    //       marginTop: "20px",
    //       width: "90%",
    //       gap: "50px",
    //       overflowX: "auto",
    //     }}
    //   >
    //     <DeletingProductsList
    //       data={deletingProducts}
    //       setData={setDeletingProducts}
    //     />
    //   </div>
    // </div>

    // ----------------------------------------------------------state-04-----------------------------------------
    <div style={{ padding: 40 }}>
      <NotificationBell />
    </div>
  );
}

export default App;
