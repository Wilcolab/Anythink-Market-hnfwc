import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

const CommentInput = ({ slug, currentUser, onSubmit }) => {
  const [state, setState] = React.useState({ body: "" });

  const setBody = (ev) => {
    setState({ body: ev.target.value });
  };

  const createComment = async (ev) => {
    ev.preventDefault();
    agent.Comments.create(slug, {
      body: state.body,
    }).then((payload) => {
      onSubmit(payload);
    });
    setState({ body: "" });
  };

  return (
    <form className="card comment-form m-2" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={state.body}
          onChange={setBody}
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={currentUser.image}
          className="user-pic mr-2"
          alt={currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
