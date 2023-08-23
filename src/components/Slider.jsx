import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const CarouselImg = styled.img`
  user-select: none;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.5;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

export default function Carousel(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 500);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };

  return (
    <div className="carousel" id="inicio">
      {props.showButtons ? (
        <div className="carousel-buttons">
          <div onClick={previous}>
            <HiChevronLeft className="carousel-icon-left fade" />
          </div>
          <div onClick={next}>
            {" "}
            <HiChevronRight className="carousel-icon-right fade" />
          </div>
        </div>
      ) : (
        <></>
      )}
      <CarouselImg
        src={require(`../assets/img/${selectedImage}`)}
        alt="carousel Image"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
