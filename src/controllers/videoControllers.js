export const trending = (req, res) => {
  const videos = [
    {
      title: "First",
      rating: 5,
      comments: 3,
      createAt: "2 minutes ago",
      views: 78,
      id:1
    },
    {
      title: "second",
      rating: 1,
      comments: 6,
      createAt: "14 minutes ago",
      views: 7338,
      id:2
    },
    {
      title: "third",
      rating: 3,
      comments: 22,
      createAt: "5 minutes ago",
      views: 728,
      id:3
    },
  ]
  return res.render("home", { pageTitle: "Home", videos });
}
export const see = (req, res) => res.render("watch",{pageTitle: "Watch"})
export const edit = (req, res) => res.send("Edit Videos")
export const search = (req, res) => res.send("Search Videos")
export const upload = (req, res) => res.send("Upload Videos")
export const deleteVideo = (req, res) => res.send("Delete Videos")

