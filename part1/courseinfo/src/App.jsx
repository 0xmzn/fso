const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
};

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    );
};


const Content = (props) => {
    return (
        <div>
            {props.data.map( (e, index) => 
                <Part key={index} part={e.name} exercises={e.exercises}/>
            )}
        </div>
    );
};

const Footer = (props) => {
    return (
        <p>Number of exercises {props.sum}</p>
    );
};

const App = () => {
    const course = 'Half Stack application development';
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ];

    return (
        <div>
            <Header course={course} />
            <Content data={parts}/>
            <Footer />
        </div>
    );
};

export default App;