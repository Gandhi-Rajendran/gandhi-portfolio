import { FaLongArrowAltUp } from "react-icons/fa";
import { ScrollContainer } from "./scrollToTop.styled";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // window.scrollTo(0, 0);
    // console.log(window);
    // window.scrollX(0);
    console.log("clicked");
  };

  return (
    <ScrollContainer onClick={handleScrollToTop}>
      <FaLongArrowAltUp />
    </ScrollContainer>
  );
};

export default ScrollToTop;
