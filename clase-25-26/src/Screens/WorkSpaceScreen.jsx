import React from "react";
import { useParams } from "react-router-dom";

const WorkSpaceScreen = () => {
    const params = useParams();
    const workspace_id = params.workspace_id
    return (
        <div>
            <h1>Workspace {workspace_id}</h1>
        </div>
    )
};

export default WorkSpaceScreen;