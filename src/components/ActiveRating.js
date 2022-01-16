import Rating from 'react-rating';
import { Star, StarBorder } from '../assets/icons'
const ActiveRating = ({ onChange, initialRating }) => {

    return (
        <Rating
            initialRating={initialRating ?? 0}
            onChange={value => onChange(value)}
            emptySymbol={<IStar />}
            fullSymbol={<IStar active='true' />}
        />
    )
}


export function IStar({ active }) {
    return (active ?
        <div className="m-1">
            <svg width="40px" height="40px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <Star />
            </svg>
        </div>
        :
        <div className="m-1">
            <svg width="28px" className="fill-white" height="28px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <StarBorder />
            </svg>
        </div>
    )
}


export default ActiveRating