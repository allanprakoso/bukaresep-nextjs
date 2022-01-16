import Rating from 'react-rating';
import { Star, StarBorder, StarNull, StarRating } from '../assets/icons'
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
        <div className="mr-4">
            <svg width="36px" height="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <StarRating />
            </svg>
        </div>
        :
        <div className="mr-4">
            <svg width="36px" className="fill-white" height="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <StarNull />
            </svg>
        </div>
    )
}


export default ActiveRating