import config from '@/config/mapper'
export default {
  userInfo: state => null,
  G_settings: state => state.user.settings,
  G_unit_show: state => config.unit_map[state.user.settings.unit]
}