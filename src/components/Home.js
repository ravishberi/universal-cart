import React,{Component} from 'react';
import '../components/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formTextField: null,
            formButton: null,
        }
    }
    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-25">
                        <label for="fname">Paste Link</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Paste Here"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Priority</label>
                    </div>
                    <div className="col-75">
                        <select id="country" name="country">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <input type="button" value="ADD" placeholder='ADD'></input>
                </div>

            </div>

        )
    }

}

export default Home;