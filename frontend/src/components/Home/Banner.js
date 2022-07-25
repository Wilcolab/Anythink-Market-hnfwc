import React from "react";
import logo from "../../imgs/logo.png";

import { connect } from "react-redux";
import { UPDATE_TITLE_SEARCH_TERM } from "../../constants/actionTypes";

const Banner = (props) => {
  const onChangeHandler = (event) => {
    event.preventDefault();
    const { value } = event.target;
    props.onChange({ titleSearchTerm: value });
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex flex-row justify-content-center align-items-baseline">
          <span id="get-part" className="">
            A place to get
          </span>
          <form className="col-7">
            <fieldset className="form-group">
              <input
                className="form-control"
                id="search-box"
                type="search"
                placeholder="What is it that you truly desire?"
                onChange={onChangeHandler}
                value={props.titleSearchTerm}
              />
            </fieldset>
          </form>
          <span className=""> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  titleSearchTerm: state.itemList.titleSearchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (payload) => dispatch({ type: UPDATE_TITLE_SEARCH_TERM, payload }),
});

// export default Banner;
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
