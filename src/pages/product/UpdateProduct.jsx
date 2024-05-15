import React, { useEffect, useState } from 'react'
import Modal from 'react-responsive-modal'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateProduct } from '../../redux/featurs/productSlice';


function UpdateProduct({ open, setOpen, loading ,data}) {

    const onCloseModal = () => setOpen(false);

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        title:"",
        price:"",
        discountPercentage:"",
        rating:"",
        stock:"",
        brand:"",
        category:"",
        thumbnail:"",
        description:""
    })

    useEffect(()=>{
            if(data)setFormData(data)
    },[data])

    const changeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        dispatch(updateProduct({ formData, toast })).then(() => {
            onCloseModal()
        })
    }
    return (
        <div className='' >
            <Modal open={open} onClose={onCloseModal} center>
                <div >
                    <h3 className='text-center mb-3'>Upadte Product</h3>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Title</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='title'
                                        value={formData.title}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Price</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='price'
                                        value={formData.price}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Discount (%)</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='discountPercentage'
                                        value={formData.discountPercentage}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Rating</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='rating'
                                        value={formData.rating}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Stock</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='stock'
                                        value={formData.stock}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Brand</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='brand'
                                        value={formData.brand}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Category</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='category'
                                        value={formData.category}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Thumbnail</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        name='thumbnail'
                                        filename={formData.thumbnail}
                                        onChange={(e) => setFormData(prev => ({ ...prev, thumbnail: e.target.value }))}
                                    />
                                </div>

                                <div className="col-md-12 col-12 mb-3">
                                    <label className='form-label'>Description</label>
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        name='description'
                                        value={formData.description}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type='submit' className='btn btn-success'>Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UpdateProduct