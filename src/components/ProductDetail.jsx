const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.node.title}</h2>
      <figure style={{ maxWidth: "200px" }}>
        <img
          src={product.node.featuredImage.url}
          alt={product.node.title}
          style={{ width: "100%", maxWidth: "100%", height: "auto" }}
        />
      </figure>
    </div>
  );
};

export default ProductDetail;
