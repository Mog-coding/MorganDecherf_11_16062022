import starEmpty from '../../assets/icon/star_empty.svg';
import starFull from '../../assets/icon/star_full.svg';
import './RatingComponent.css';

function RatingComponent({ starNb }) {
    let arrayRating = ['empty', 'empty', 'empty', 'empty', 'empty'];
    for (let i = 0; i < starNb; i++) {
        arrayRating[i] = 'full';
    }
    return (
        <div>
            {
                arrayRating.map((el, index) => {
                    return el === 'empty' ? (
                        <img
                            className="starEmpty"
                            src={starEmpty}
                            alt=""
                            key={`${el}-${index}`}
                        />
                    ) : (
                        <img
                            className="starFull"
                            src={starFull}
                            alt=""
                            key={`${el}-${index}`}
                        />
                    );
                })
            }
        </div>
    );
}

export default RatingComponent;
