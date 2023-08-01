import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from "./Model.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const element = document.getElementById("overlays");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, element)};
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, element)}
    </Fragment>
  );
};

export default Model;
