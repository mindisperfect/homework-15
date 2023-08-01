import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../src/redux/slices/productsSlice"; // addProductToCart
import { Fragment, useEffect } from "react";
// import { LIMIT } from "../const";

const HomeP = () => {
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  const user = useSelector((state) => state.user);



  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // let pages = 20 / LIMIT;
  return (
    <div className="container">
      <div>
        {user.loading && <div>...Loading</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.users.length ? (
          <Fragment>
            {/* <div>Total Product: {totalProducts}</div> */}
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "20px", }}
            >
              {user.users.map(
                (el, index) => (
                  <div className="card" key={index}>
                    <img style={{display: "flex", justifyContent: "center"}} height={220} src={el.image} alt="" />
                    <div className="content">
                    <h1>{el.category}</h1>
                    <h3 className="line-clamp">{el.title}</h3>
                    <p>{el.price}</p>
                    <p className="line-clamp">{el.description}</p>
                    </div>
                    {/* <button onClick={() => dispatch(addProductToCart(id))}>
                  Add to the Cart {el.id}
                </button> */}
                  </div> )
              )}
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              {/* {Array(pages)
              .fill(1)
              .map((_, i) => (
                <button
                  style={{
                    marginRight: "20px",
                    backgroundColor: page == i + 1 ? "red" : "grey",
                  }}
                  key={i}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))} */}
            </div>
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default HomeP;
