
function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}


function HookPage(props) {





    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}



export default HookPage;

