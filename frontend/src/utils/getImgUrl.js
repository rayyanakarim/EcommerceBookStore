function getImgUrl(bookOrImage) {
  // Handle both book object and direct image filename
  const imageName =
    typeof bookOrImage === "string" ? bookOrImage : bookOrImage.image;
  return new URL(`../assets/books/${imageName}`, import.meta.url).href;
}
export default getImgUrl;
