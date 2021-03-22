import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => console.log('form submitted', data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        < form className="ship-form" onSubmit={handleSubmit(onSubmit)} >
            < input name="Name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name"/>
            { errors.name && <span className="error">Name is required</span>}

            < input name="Email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
            { errors.Email && <span className="error">Email is required</span>}

            < input name="Address" ref={register({ required: true })}  placeholder="Your Address"/>
            { errors.Address && <span className="error">Address is required</span>}

            < input name="Phone" ref={register({ required: true })}  placeholder="Your Phone Number"/>
            { errors.Phone && <span className="error">Phone Number is required</span>}
            <input type="submit" />
        </form >
    );
};

export default Shipment;
