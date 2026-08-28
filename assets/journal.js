const filters = document.querySelectorAll("[data-filter]");
const posts = document.querySelectorAll("[data-categories]");
const emptyState = document.querySelector(".empty-state");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visiblePosts = 0;

    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    posts.forEach((post) => {
      const categories = post.dataset.categories.split(" ");
      const visible = filter === "all" || categories.includes(filter);
      post.hidden = !visible;
      if (visible) visiblePosts += 1;
    });

    if (emptyState) emptyState.hidden = visiblePosts !== 0;
  });
});
