// https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg
const getCroppedImageUrl = (url: string) => {
    const TARGET = "media/";

    const index = url.indexOf(TARGET) + TARGET.length;
    return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
};

export default getCroppedImageUrl;
