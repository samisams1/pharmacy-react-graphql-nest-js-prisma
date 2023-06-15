import {SimCard } from "@material-ui/icons";
import {FirstPage,Search,Concern,Shop,Choose,Carousal,Customer,Footer,Health,Labtest,Newlaunches,Offer,Payment,Sliderr,Trending,Featurebrand,Description
} from "../../components/component/home";
const Home=()=>{
    return(
        <>
        <Search/>
        <FirstPage/>
        <Carousal/>
        <Shop  />
        <Newlaunches/>
        <Labtest/>
        <Trending/>
        <Choose />
        <Sliderr/>
        <Concern/>
        <Health/>
        <Payment/>
        <Featurebrand/>
        <Offer/>
        <Customer />
        <Description/>
        <Footer/>
        </>
    )
}
export default Home;