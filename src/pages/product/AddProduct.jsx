import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addProduct } from '../../redux/featurs/productSlice';


function AddFile({ open, setOpen, loading }) {

    const onCloseModal = () => setOpen(false);
    const onOpenModal = () => setOpen(true);

    const dispatch = useDispatch()

    const [formData, setFormData] = useState()

    const changeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        dispatch(addProduct({ formData, toast })).then(() => {
            onCloseModal()
        })
    }
    return (
        <div className='p-3' >
            <button className='btn btn-success' onClick={() => onOpenModal(true)}>Add</button>
            <Modal open={open} onClose={onCloseModal} center>
                <div >
                    <h3 className='text-center mb-3'>Add Product</h3>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Title</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='title'
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
                                        required
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Discount (%)</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='discountPercentage
                                        required'
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Rating</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='rating'
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
                                        required
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Category</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name='category'
                                        required
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="col-md-6 col-12 mb-3">
                                    <label className='form-label'>Thumbnail</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        name='thumbnail'
                                        required
                                        onChange={(e) => setFormData(prev => ({ ...prev, thumbnail: e.target.value }))}
                                    />
                                </div>

                                <div className="col-md-12 col-12 mb-3">
                                    <label className='form-label'>Description</label>
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        name='description'
                                        required
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type='submit' className='btn btn-success' >Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default AddFile