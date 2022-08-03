import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProductDetails from "../Modals/ProductDetails";
import ShopProduct from "./ShopProduct";
import Sidebar from "./Sidebar";

export default function ShopContents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sideBarFilter, setSideBarFilter] = useState({
    rebook: false,
    shoes: false,
    large: false,
    nike: false,
    medium: false,
    small: false,
  });
  const [productFiltered, setProductFiltered] = useState([]);
  const [productModal, setProductModal] = useState(false);
  const [viewProduct, setViewProduct] = useState({});
  const [allProducts, setallProducts] = useState([
    {
      name: "First Product",
      image:
        "https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1",
      category: "shoes",
      brand: "rebook",
      size: "large",
      price: "1000",
      year: "2020",
    },
    {
      name: "Second Product",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
      category: "shoes",
      brand: "nike",
      size: "medium",
      price: "1000",
      year: "2020",
    },
    {
      name: "Third Product",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      category: "shoes",
      brand: "nike",
      size: "large",
      price: "1000",
      year: "2020",
    },
    {
      name: "Fourth Product",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      category: "shoes",
      brand: "rebook",
      size: "small",
      price: "1000",
      year: "2020",
    },
    {
      name: "Fifth Product",
      image:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
      category: "shoes",
      brand: "rebook",
      size: "large",
      price: "1000",
      year: "2020",
    },
  ]);

  const searchField = (data) => {
    return data.filter((value) =>
      value.name.toLowerCase().includes(searchQuery)
    );
  };

  const sideBarHandler = (e) => {
    const { name } = e.target;
    setSideBarFilter({
      ...sideBarFilter,
      [name]: !sideBarFilter[name],
    });
  };

  useEffect(() => {
    filterFromSideBar();
  }, [sideBarFilter, searchQuery]);

  const filterFromSideBar = () => {
    const checkedProducts = Object.entries(sideBarFilter)
      .filter((value) => value[1])
      .map((item) => item[0]);
      setProductFiltered(allProducts.filter(({ brand, category }) =>
      checkedProducts.includes(brand)
      ));
  };

  const productDetailHandler = (item) => {
    setViewProduct(item);
    setProductModal(true);
  };

  let listedProducts = searchField(productFiltered).length === 0 ? allProducts : searchField(productFiltered);

  return (
    <>
      <Container className="my-4">
        <Row>
          <Col xs={12} sm={12} md={3}>
            <Sidebar sideBarHandler={sideBarHandler} />
          </Col>
          <Col xs={12} sm={12} md={9}>
            <Row className="mb-3">
              <Col></Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              {listedProducts.map((item, i) => {
                return (
                  <ShopProduct
                    key={i}
                    item={item}
                    sideBarFilter={sideBarFilter}
                    productDetailHandler={productDetailHandler}
                  />
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <ProductDetails
        show={productModal}
        viewProduct={viewProduct}
        onHide={() => setProductModal(false)}
      />
    </>
  );
}
