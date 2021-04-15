import './FancyCard.css';

function FancyCard(props) {
  return (
    <div className={"FancyCard mx-auto p-4 " + (props.className || "") + (/(^| )mb-\d( |$)/.exec(props.className) ? "" : " mb-5")}
      style={
        (props.image && {background: "url(" + props.image + ") no-repeat bottom", backgroundSize: "cover"})
        ||
        (props.background && {background: props.background, backgroundSize: "cover"})
        }>
      <h1 className="mt-5">{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default FancyCard;