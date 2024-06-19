import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SiteContext } from '../../../../context/ContextProvider';
import CustomButton from '../../../shared/CustomButton';
import Spinner from '../../../shared/Spinner';
import SubmitButton from '../../../shared/SubmitButton';

const TagCreate = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [nameCheck, setNameCheck] = useState(null);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        name: '',
    });


    const submitTag = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.name.value;

        // Validation
        let formIsValid = true;
        const errorsCopy = { ...errors };

        if (name.trim() === '') {
            errorsCopy.name = 'The name is required!';
            formIsValid = false;
        } else {
            errorsCopy.name = '';
        }


        setErrors(errorsCopy);

        // Create FormData object
        const formData = new FormData();
        formData.append('name', name);

        // Proceed with form submission only if form is valid
        if (!formIsValid) {
            setLoading(false);
            return;
        }
        axios.post(`${MAIN_URL}/api/tag/store`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response?.data?.code === 200) {
                    toast.success(response?.data?.message);
                    navigate("/dashboard/post/tag", { replace: true });
                } else {
                    setNameCheck(response?.data?.message);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };

    return (
        <>
            <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4">
                <div className="flex justify-between border-b-2 pb-4 mb-2">
                    <h3>Add new role</h3>

                    <div>
                        <CustomButton text="<< Back" path="/dashboard/post/tag" />
                    </div>
                </div>
                <form onSubmit={submitTag}>
                    <div className="mb-4">
                        <input name='name'
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            placeholder="Enter tag name" />
                        {errors.name !== '' && <p className='text-red-600'>{errors.name}</p>}
                        {nameCheck && <p className='text-red-600'>{nameCheck}</p>}
                    </div>

                    <div className="flex justify-between">
                        <div></div>

                        <div>
                            {loading ? (
                                <Spinner />
                            ) : (
                                <SubmitButton />
                            )}
                        </div>
                    </div>


                </form>
            </div>



            {/* <div className="content-wrapper">
                <Breadcrumb name={'Add new tag'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Create new tag</h3>

                                        <div className="card-tools">
                                            <button className="float-right">
                                                <Link to={'/dashboard/tag'}>Back</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit((data) => regiPermission(data))}>
                                            <div className="form-group">
                                                <label for="name">Name</label>
                                                <input {...register('name', { required: true })} type="text" className="form-control" id="name" placeholder="Enter name" />
                                                {errors.name && <p className='text-danger'>The name is required.</p>}
                                                {nameCheck && <p className='text-danger'>{nameCheck}</p>}
                                            </div>

                                            {
                                                loading ? (
                                                    <SubmitSpinner />
                                                ) : (
                                                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                                                )
                                            }





                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
        </>
    );
};

export default TagCreate;
