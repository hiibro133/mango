import React from "react";
import { useRouter } from 'next/router';
import ItemsCom from "@/components/item-box";



function MenuTable({  Items }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }



  // Assuming table is an object with a property called tableNumber
  //const tableNumber = table?.tableNumber;

  //const tables = table;

  //console.log(tables)



  return (
    <>
      <div>
        <h1>hii</h1>
        

        <div className= "grid gap-4 p-6'">
        <div className='flex justify-center p-3'></div>
          {Items.map((item)  => (   //blogPosts   //blogPosts.slice().reverse().map((post) //blogPosts.map((post)  // encodeURIComponent(post.title)
            <div key={item._id}>
        
              <ItemsCom item={item} />
          

            </div>
          ))}
         
        </div>
     
      </div>
    </>
  );
}

export default MenuTable;

/*export async function getServerSideProps({ params }) {
  const data = params;

  return {
    props: {
      table: data,
    },
  };
} */


export async function getServerSideProps({ params }) {

  const {TableNum} = params;

  try {
    const res = await fetch(`http://localhost:3000/api/ItemsAPI`);
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const Items  = await res.json();

    return {
      props: { Items },
     
    };
  } catch (error) {
    console.error('Error fetching menu items:', error.message);

    return {
      props: { Items : [] }, // Return an empty array or handle error state accordingly
     
    };
  }
} 