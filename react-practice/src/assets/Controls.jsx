import Button from "./Button";

export default function Controls(props) {

    function moveUp() {
        if (props.yAxis > -50) {
            props.setYAxis(props.yAxis - 50);
        } 
      }
      function moveDown() {
        if (props.yAxis < 500) {
            props.setYAxis(props.yAxis + 50);
        }
      }
      function moveLeft() {
        if (props.xAxis > 0) {
            props.setXAxis(props.xAxis - 50);
        }
      }
      function moveRight() {
        if (props.xAxis < 1300) {
            props.setXAxis(props.xAxis + 50);
        }
      }

    return(
        <div>
            <Button direction="Up" method={moveUp} />
            <Button direction="Down" method={moveDown} />
            <Button direction="Left" method={moveLeft} />
            <Button direction="Right" method={moveRight} />
        </div>
    );
}