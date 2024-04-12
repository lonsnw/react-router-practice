import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <h1 className="App-title">GitHub Student List</h1>
                    <nav> 
                        <p><Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/allStudents">Students</Link></p>
                    </nav>
                </header>
                <br/>
                <Route exact path ="/">
                <StudentForm />
                </Route>
                <Route exact path="/about">
                <About /> 
                </Route>
                <Route path="/allStudents">
                <StudentList />
                </Route>
            </Router>
        </div>
    );
}

export default App;
