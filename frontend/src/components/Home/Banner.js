import React from "react";
import logo from "../../imgs/logo.png";

import { connect } from "react-redux";
import { UPDATE_TITLE_SEARCH_TERM } from "../../constants/actionTypes";

const Banner = (props) => {
  const [isSearchHidden, setIsSearchHidden] = React.useState(true);

  const onClickHandler = (event) => {
    event.preventDefault();
    setIsSearchHidden(!isSearchHidden);
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    const { value } = event.target;
    props.dispatch({
      type: UPDATE_TITLE_SEARCH_TERM,
      payload: { titleSearchTerm: value },
    });
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex flex-row justify-content-center align-items-baseline">
          <span
            id="get-part"
            style={{ cursor: "pointer" }}
            onClick={onClickHandler}
          >
            A place to get
          </span>
          {isSearchHidden ? (
            <span>&nbsp;</span>
          ) : (
            <form className="col-7">
              <fieldset className="form-group">
                <input
                  className="form-control"
                  id="search-box"
                  type="search"
                  placeholder="What is it that you truly desire?"
                  onChange={onChangeHandler}
                />
              </fieldset>
            </form>
          )}
          <span>the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect()(Banner);
