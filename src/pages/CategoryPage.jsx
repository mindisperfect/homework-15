import { useEffect, useState } from "react"
import { request } from "../server";
import { toast } from "react-toastify";

const CategoryPage = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        async function getPosts() {
          try {
            let { data } = await request.get("products/categories");
            setCategory(data);
            console.log(data);
          } catch (err) {
            toast.error(err.message);
          }
        }
        getPosts();
      }, []);
  return (
    <div className="container">
         {category.map((pr) => (
              <div key={String(pr)}>{pr}</div>
            ))} 
    </div>
  )
}

export default CategoryPage