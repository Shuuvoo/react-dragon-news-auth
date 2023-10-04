import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-5xl  font-poppins font-bold">This is Home Page </h1>
        </div>
    );
};

export default Home;