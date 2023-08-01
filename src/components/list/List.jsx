import PropTypes from 'prop-types';

import "./List.css";
function List({ products }) {
  return (
    <ol>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ol>
  );
}



List.PropTypes = {
    products: PropTypes.object
}
export default List;