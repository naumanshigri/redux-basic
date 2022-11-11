import { connect } from "react-redux";
import Home from "../components/Home.component";
import { addToCart } from "../services/actions/home.action";

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
