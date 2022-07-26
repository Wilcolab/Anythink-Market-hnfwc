import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  let items = props.items;

  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }

  if (props.titleSearchTerm && props.titleSearchTerm.length >= 3) {
    items = items.filter((item) =>
      item.title
        .toLowerCase()
        .includes(props.titleSearchTerm.toLowerCase().trim())
    );

    if (items.length === 0) {
      return (
        <div
          id="empty"
          className="w-75 mx-auto my-4 py-4 text-center"
          style={{ backgroundColor: "hsla(100, 100%, 100%, .1)" }}
        >
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              width="50"
            >
              {/* <!--! Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM256 352C290.9 352 323.2 367.8 348.3 394.9C354.3 401.4 364.4 401.7 370.9 395.7C377.4 389.7 377.7 379.6 371.7 373.1C341.6 340.5 301 320 256 320C247.2 320 240 327.2 240 336C240 344.8 247.2 352 256 352H256zM208 369C208 349 179.6 308.6 166.4 291.3C163.2 286.9 156.8 286.9 153.6 291.3C140.6 308.6 112 349 112 369C112 395 133.5 416 160 416C186.5 416 208 395 208 369H208zM303.6 208C303.6 225.7 317.1 240 335.6 240C353.3 240 367.6 225.7 367.6 208C367.6 190.3 353.3 176 335.6 176C317.1 176 303.6 190.3 303.6 208zM207.6 208C207.6 190.3 193.3 176 175.6 176C157.1 176 143.6 190.3 143.6 208C143.6 225.7 157.1 240 175.6 240C193.3 240 207.6 225.7 207.6 208z" />
            </svg>
          </p>
          <p className="mb-0">
            No items found for <strong>"{props.titleSearchTerm}"</strong>.
          </p>
        </div>
      );
    }
  }

  return (
    <div className="container py-2">
      <div className="row">
        {items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
