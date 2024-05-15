import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateProduct } from '../../redux/featurs/productSlice';
import { FaRegEdit } from 'react-icons/fa';


function UpdateProduct({ open, setOpen, loading ,data}) {

    const onCloseModal = () => setOpen(false);
    const onOpenModal = () => setOpen(true);

    const dispatch = useDispatch()

    const [formData, setFormData] = useState(data)

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
            <FaRegEdit
                title='Update'
                className='fs-4 mx-1'
                style={{ color: "#9f59ff", cursor: "pointer" }}
                onClick={onOpenModal}
            />
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-12 col-12 mb-3">
                                    <label className='form-label'>Category</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='category'
                                        value={formData.category}
                                        required
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-12 col-12 mb-3">
                                    <label className='form-label'>Description</label>
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        name='description'
                                        value={formData.description}
                                        required
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