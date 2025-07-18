import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import { createPost } from "./api/httpService";
import { useDispatch } from "react-redux";
import { getAllPosts } from "./storeSlice/posts";

const App = () => {
  const dispatch = useDispatch()


  const handleSubmit =async (event,data) => {
    event.preventDefault();
  
    // const formData = new FormData()
    
    // formData.append("title",data.title)
    // formData.append("message",data.message)
    // formData.append("creator",data.creator)
    // formData.append("tags",data.tags.split(","))
    // formData.append("selectedFile",data.selectedFile)

    
    const formData = {...data}
    formData.tags = data.tags.split(",")

    try {
    const {data}=await createPost(formData)
    console.log(data)
    dispatch(getAllPosts());
    } catch (error) {
      throw new Error('error occure ',error)
      // console.log(error,'wasnt created ')
    } 
  };

  return (
    <div className="w-4/5 mx-auto my-10">
      <header className=" bg-white text-2xl h-[3rem] rounded-md flex items-center justify-center ">
        Memory App
        <img className=" mx-4 w-8 h-8" src="src/assets/img.svg" />
      </header>
      <main className="bg-white rounded-md grid grid-cols-12  gap-2 my-2 p-6">
        <div className="col-span-8">
          <div className="flex flex-wrap gap-4 ">
            <Posts />
          </div>
        </div>
        <div className="col-span-4 ">
          <Form onSubmit={handleSubmit}/>
        </div>
      </main>
      <footer className="bg-white text-center text-sm h-[3rem] rounded-md flex items-center justify-center mt-4">
        <p className="">Made with ❤️ by Som3a</p>
      </footer>
    </div>
  );
};

export default App;
