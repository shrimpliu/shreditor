import React from 'react';
import ReactDOM from 'react-dom';
import Shreditor from './index';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleEditorChange(editorState) {
        this.setState({
            editorState
        });
    }

    render() {
        const { editorState } = this.state;
        const contentStyle = {
            width: '100%',
            height: '400px',
            border: '1px solid #F1F1F1',
            padding: '5px',
            marginTop: '20px'
        };
        return (
            <div style={{padding: '20px'}}>
                <h2>demo</h2>
                <Shreditor onChange={this.handleEditorChange.bind(this)}/>
                <textarea style={contentStyle} disabled value={editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))}/>
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('app'));
