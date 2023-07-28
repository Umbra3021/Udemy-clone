import Navbar from "./components/navbar";
import Body from "./components/body";
import Sidenav from "./components/side-nav";
import Course from "./components/course";
import "../src/App.css";
import Description from "./components/Description";
import FeaturedReview from "./components/FeaturedReview";
import AlsoBought from "./components/AlsoBought";
import Instructor from "./components/Instructor";
import Review from "./components/Review";
import MoreCourse from "./components/MoreCourse";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <Body />
      <Course />
      <Description />
      <FeaturedReview />
      <AlsoBought />
      <Instructor />
      <Review />
      <MoreCourse />
      <Footer />
    </div>
  );
}

export default App;
