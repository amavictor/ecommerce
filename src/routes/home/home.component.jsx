import DirectoryComponent from "../../component/directory/directory.component";
import {Outlet} from "react-router-dom";

function Home() {
    const category =
        [
            {
                "id": 1,
                "title": "hats",
                "imageUrl": "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            },
            {
                "id": 2,
                "title": "jackets",
                "imageUrl": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
            },
            {
                "id": 3,
                "title": "sneakers",
                "imageUrl": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            },
            {
                "id": 4,
                "title": "womens",
                "imageUrl": "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                "id": 5,
                "title": "mens",
                "imageUrl": "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80"
            }
        ]

    return (
        <div>
            <DirectoryComponent categories = {category}/>
            <Outlet/>
        </div>


    );
}

export default Home;
