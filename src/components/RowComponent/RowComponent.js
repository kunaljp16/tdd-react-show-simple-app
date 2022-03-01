import { Fragment } from "react";
import TextComponent from "../TextComponent/TextComponent";
import PrimaryButton from "../button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton/SecondaryButton";

function RowComponent(props) {
  return (
    <Fragment>
      <td>
        <TextComponent textMessage={props.textMessage} />
      </td>
      <td>
        {props.feesPaid == true ? (
          <PrimaryButton text="Submit" />
        ) : (
          <SecondaryButton text="Submit" />
        )}
      </td>
    </Fragment>
  );
}

export default RowComponent;
