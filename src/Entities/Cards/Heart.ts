const heartIcon = document.getElementById("heartIcon") as HTMLDivElement;

let isFavorite = false;

heartIcon.addEventListener("click", () => {
  isFavorite = !isFavorite;
  heartIcon.style.backgroundImage = isFavorite
    ? "url('red_heart_icon.png')"
    : "url('/src/Widgets/CoursesWidgets/photo/Check Circle.png')";
});
