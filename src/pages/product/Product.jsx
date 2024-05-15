import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProduct } from '../../redux/featurs/productSlice';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Loading from '../../assets/loader/Loading';
import { toast } from 'react-toastify';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';


function Product() {
    const dispatch = useDispatch();
    const [addOpen, setAddOpen] = useState(false)
    const [updateOpen, setUpdateOpen] = useState(false)


    const { data, loading } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    function deleteHandler(productId) {
       if(window.confirm('Are you sure you want to delete')){
           dispatch(deleteProduct({ productId, toast }))
        }
    }

    const [singleProduct, setSingleProduct] = useState()

    function UpdateHandler(data) {
        setSingleProduct(data)
        setUpdateOpen(true)
    }
    return (
        <>
            <div className="m-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Product Data</h3>
                    <AddProduct
                        open={addOpen}
                        setOpen={setAddOpen}
                        loading={loading}
                    />
                </div>
                <div className='table-responsive mt-3'>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                {/* <th scope="col">No.</th> */}
                                <th scope="col">Thumbnail</th>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Description</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Price</th>
                                <th scope="col">Discount</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!loading && data?.map((item) =>
                                <tr key={item.id}>
                                    {/* <th scope="row">{item.id}</th> */}
                                    <td>
                                    <a href={item.thumbnail}>
                                    <img src={item.thumbnail} alt=""  className='img-fluid'/>
                                    </a>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.price}</td>
                                    <td>{item.discountPercentage}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.stock}</td>
                                    <td>
                                        <div className='d-flex'>
                                            <FaRegEdit
                                                title='Update'
                                                className='fs-4 mx-1'
                                                style={{ color: "#9f59ff", cursor: "pointer" }}
                                                onClick={() => UpdateHandler(item)}
                                            />

                                            <RiDeleteBin6Line
                                                className='fs-4 mx-1'
                                                style={{ color: "red", cursor: "pointer", fontSize: "20px" }}
                                                title="Delete"
                                                onClick={() => deleteHandler(item.id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {loading && <Loading />}
                </div>
            </div>

            {singleProduct&&<UpdateProduct
                open={updateOpen}
                setOpen={setUpdateOpen}
                loading={loading}
                data={singleProduct}
            />}
        </>
    )
}

export default Product