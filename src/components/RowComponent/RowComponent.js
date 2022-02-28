import { Fragment } from "react";
import TextComponent from "../TextComponent/TextComponent";
import PrimaryButton from "../button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton/SecondaryButton";

function RowComponent(props) {
  return (
    <Fragment>
      {props.buttonType == "Primary" ? (
        <PrimaryButton text="Submit" />
      ) : (
        <SecondaryButton text="Submit" />
      )}
      <TextComponent text={props.textMessage} />
    </Fragment>
  );
}

export default RowComponent;
