import DirectoryComponent from "../../component/directory/directory.component";
import {Outlet} from "react-router-dom";

function Home() {

    return (
        <div>
            <DirectoryComponent/>
            <Outlet/>
        </div>


    );
}

export default Home;
