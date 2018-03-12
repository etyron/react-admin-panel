import React , { Component } from 'react';
import './Workflow.css';
import WorkFlowList from "../organisms/WorkFlowList";

class Workflow extends Component {
    render() {
        return(
            <section className="WorkflowPage">
                <div className="container-fluid">
                    <WorkFlowList/>
                </div>
            </section>
        )
    }
}

export default Workflow;