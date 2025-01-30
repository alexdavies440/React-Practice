

export default function Dog(props) {

    const style = {
        marginLeft: props.xAxis + 'px',
        marginTop: props.yAxis + 'px',
    }

    return(
        <div>
            <h1 id="dog" style={style}>🐕</h1>
        </div>
    );
}