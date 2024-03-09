export default function Todo({ task, isDone }) {
    // if (isDone) {
    //     return <li>Fishished :  {task}</li>
    // }
    // return <li>Do it :  {task}</li>

    // return (
    //     <li>{isDone ? "Finished" : "Do It"} : {task}</li>
    // )

    // return (
    //     <li>{isDone && "Finished"} : {task}</li>
    // )

    return (
        <li>{isDone || "Do it"} : {task}</li>
    )
}
