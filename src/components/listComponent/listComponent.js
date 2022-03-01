import StudentDetailsData from "../../MockData/StudentsDetailsData";
import RowComponent from "../RowComponent/RowComponent";

function ListComponent(props) {
  return (
    <table className="">
      {StudentDetailsData.map((studentItem) => (
        <tr key={studentItem.id}>
          <RowComponent
            buttonType={studentItem.buttonType}
            textMessage={studentItem.textMessage}
          />
        </tr>
      ))}
    </table>
  );
}

export default ListComponent;
