function Hoc(Component) {  
    return (props) => (
        <div className="neka-klasa">
            <Component {...props} />
        </div>
    );
}
  
export default Hoc;
  