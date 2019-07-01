import React from "react";
import { Dispatch } from "redux";

import { GlobalState } from "../../store";
import { connect } from "react-redux";
import { INSERT_GOOD } from "../../store/good";

import style from "./style.less";

type GoodOwnProps = {
  content: string;
};

type GoodDispatchProps = {
  dispatch: Dispatch;
};

type GoodProps = GoodOwnProps & GoodDispatchProps;

const mapState2Props = (state: GlobalState) => {
  return {
    content: state.good.hello
  };
};

const mapAction2Props = (dispatch: Dispatch) => {
  return {
    dispatch
  };
};

const Good = React.memo(function Good({ content, dispatch }: GoodProps) {
  return (
    <div
      className={style.hello}
      onClick={() => {
        dispatch({
          type: INSERT_GOOD,
          payload: "jfdjfkdjsfs"
        });
      }}
    >
      {content}
    </div>
  );
});

export default connect(
  mapState2Props,
  mapAction2Props
)(Good);
