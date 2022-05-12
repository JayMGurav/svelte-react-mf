import {render} from "react-dom"

export default (Elem, props, id) => render(<Elem {...props}/>, document.getElementById(id));