import { Github } from '@styled-icons/feather/Github'
import { Linkedin } from '@styled-icons/feather/Linkedin'
import { Instagram } from '@styled-icons/feather/Instagram'
import { Spotify } from '@styled-icons/boxicons-logos/Spotify'

const username = 'joeyclapton'
const links = [
  {
    label: 'Github',
    url: `https://github.com/${username}`,
    icon: Github,
  },
  {
    label: 'Linkedin',
    url: `https://www.linkedin.com/in/${username}`,
    icon: Linkedin,
  },
  {
    label: 'Instagram:',
    url: `https://instagram.com/${username}`,
    icon: Instagram,
  },
  {
    label: 'Spotify',
    url:
      'https://open.spotify.com/user/pir11bvaly4zw11bjc4zb5plh?si=4uommDNuSmCiicRRvqiXfA',
    icon: Spotify,
  },
]

export default links
