const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  accessToken: state => state,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  role: state => state.user.role
}
export default getters
