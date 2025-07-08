import List from "../components/List";
import Navbar from "../components/Navbar";
import PostCreate from "../components/PostCreate";

const Home: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <List />
      <PostCreate />
      <div>Welcome home as we have just gottend the new docker channel</div>
    </div>
  );
}
export default Home;