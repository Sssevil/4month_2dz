import {About} from "../../componets/about/About";
import {Title} from "../../componets/title/Title";

const  aboutInfo = {
    title:'Some Title',
    body:'Some body'
}
function MainPage(){
    return(
        <>
            <Title string="Hello World"/>
            <h2>Main Page</h2>
            <About info={aboutInfo}/>
        </>
    )
}

export default MainPage;