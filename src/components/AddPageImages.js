import {useState} from "react";

const AddPageImages = ({imageNames, add1}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    let data = document.getElementsByClassName('points')

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${process.env.REACT_APP_API_URL + "adds/user" + add1.userId + "/" + add1.id + "/" + imageNames[currentIndex]})`
    }

    const goToPrevious = () => {
        data[currentIndex].classList.remove('active')
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? imageNames.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        data[newIndex].classList.add('active')
    }

    const goToNext = () => {
        data[currentIndex].classList.remove('active')
        const isLastSlide = currentIndex === imageNames.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        data[newIndex].classList.add('active')
    }

    const goToSlide = (slideIndex) => {
        data[currentIndex].classList.remove('active')
        setCurrentIndex(slideIndex)
        data[slideIndex].classList.add('active')
    }

    return (
        <div className="sliderStyles">
            <div className="leftArrowStyle" onClick={goToPrevious}>
                <div className="leftArrowStyles">
                    ❰
                </div>
            </div>
            <div className="rightArrowStyle" onClick={goToNext}>
                <div className="rightArrowStyles">
                    ❱
                </div>
            </div>
            <div style={slideStyles}></div>
            <div className="dotsContainer">
                {imageNames.map((slide, slideIndex) => (
                    <div
                        className="points"
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddPageImages;