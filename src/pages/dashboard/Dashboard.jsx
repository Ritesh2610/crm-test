import React, { useEffect } from 'react'
import ProductChart from './ProductChart'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/featurs/productSlice'


function Dashboard() {
  const { data } = useSelector((state) => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct())
  }, [])

  return (
    <div className='m-3'>
      {/* <h3>Dashboard</h3> */}
      <div>
        {data && <ProductChart products={data} />}
      </div>
    </div>
  )
}

export default Dashboard