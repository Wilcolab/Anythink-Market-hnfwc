import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";
import { ReactComponent as SvgFaceSadTear } from "../imgs/face-sad-tear.svg";

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
            <SvgFaceSadTear
              width="50"
              fill="currentColor"
              title="Face with sad tear"
            />
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
