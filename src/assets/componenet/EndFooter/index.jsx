import Button from "../../componenet/Button/button";
import "./style.css";
function EndFooter() {
  return (
    <>
      <div className="endInfo">
        <h4>Download the app now.</h4>
        <p>
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="btnDiv">
          <Button text={"Playstore"} />
          <Button text={"App store"} />
        </div>
      </div>
    </>
  );
}

export default EndFooter;
