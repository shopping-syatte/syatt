import PropTypes from 'prop-types';

AdminProducts.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    section: PropTypes.string,
  }).isRequired,
};

export default function AdminProducts({ product }) {
  const { image, title, category, price, section } = product;

  return (
    <li className="width">
      <img className="" src={image} />
      <div className="">{title}</div>
      <div className="">{category}</div>
      <div className="">{price}</div>
      <div className="">{section}</div>
    </li>
  );
}
