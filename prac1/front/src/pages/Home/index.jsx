import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Grid from '@mui/material/Grid2';
import { BASE_URL } from '../../constants/script';
import { FaRegHeart } from "react-icons/fa6";
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
const [sortBy, setSortBy] = useState('title')

const nav = useNavigate()

const sortedProducts = (listedProducts)=>{
  const copied = [...listedProducts]
  if(sortBy === 'asc'){
    return copied.sort((a,b)=>a.price-b.price)
  }
  else if(sortBy === 'desc'){
    return copied.sort((a, b)=>b.price-a.price)
  }
  return copied
}


  const getProducts = async()=>{
    try {
      const res = await axios(`${BASE_URL}/products`)
      setProducts(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  const filteredProducts = products.filter((c)=>c.title?.toLowerCase().includes(search.toLowerCase().trim()))
  const sortedAndFiltered = sortedProducts(filteredProducts)

  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    <>
    <section className={styles['home']}>
    <div className={styles["container"]}>
      <div className={styles["texts"]}>
        <h1>Shop With Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
      <div className={styles["buttons"]}>
        <button className={styles['shop']}>SHOP NOW</button>
        <button className='member'>CLUB MEMBERSHIP</button>
      </div>
      </div>
    </div>
    </section>

    <div className={styles["containerr"]}>
    <h1>
      Our Products
    </h1>
      <div className={styles["search"]}>
      <TextField id="standard-basic" label="Search" variant="standard" onChange={(e)=>{setSearch(e.target.value)}}/>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
          <option value="default">DEFAULT</option>
        </select>
      </div>
    


    <div className={styles["products"]}>

          <Grid container spacing={2}>

          { sortedAndFiltered.length > 0 && sortedAndFiltered.map((c)=>{
            return(
              <Grid size={4} key={c._id} onClick={()=>{nav(`../details/${c._id}`)}}>
              <div className={styles["card"]}>
                <img className={styles["card-img"]} src={c.image} alt={c.title}/>
                <p className={styles["title"]}>{c.title}</p>
                <p className={styles["desc"]}>{c.description}</p>
                <p className={styles["price"]}>${c.price}</p>
                <div className={styles["fav"]}>
                <FaRegHeart/>
                </div>
              </div>     
            </Grid>
            )
          })}

          </Grid>
        </div>
    </div>




    </>
  )
}

export default Home