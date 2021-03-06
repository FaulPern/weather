import geneve from '../../../mocks/cities/geneve.json'
import lausanne from '../../../mocks/cities/lausanne.json'
import fribourg from '../../../mocks/cities/fribourg.json'
import montreux from '../../../mocks/cities/montreux.json'
import roDesc from '../../../mocks/description/ro.json'

const ro = {
  geneve,
  lausanne,
  fribourg,
  montreux
}

export default (req, res) => {
  res.status(200).json({ cities: { ...ro }, description: roDesc })
}
