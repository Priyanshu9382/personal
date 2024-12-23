import ProfileImg from "./components/ProfileImg";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { websiteLists } from "./constants";
function App() {
  return (
    <main className="">
      <div className="bg-[url('../public/backgroundImg.jpg')] bg-cover bg-center h-auto min-h-screen  ">
        <div className="profileImgContainer p-10 w-full h-48  flex justify-center items-center">
          <ProfileImg />
        </div>
        <div className="listContainer flex flex-col items-center mt-10 gap-4">
          {websiteLists.map((web,i)=>(
            <Card key={i} name={web.Name} link={web.link} />
          ))}
        </div>
      <div className="FooterContainer bg-gradient-to-b from-[#280A4B90] to-[#140032CC] bg-opacity-5 flex justify-center w-full h-auto mt-20">
        <Footer />
      </div>
      </div>
    </main>
  );
}

export default App;
