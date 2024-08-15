import backgroundImage from "@/assets/images/medikal.jpeg";
const imageBackground = {
  mounted(el) {
    el.style.backgroundImage = `url('${backgroundImage}')`;
  },
};

export default imageBackground;
