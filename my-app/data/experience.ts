interface Experience {
  id: number
  company: string
  date: string
  position: string
  active: boolean
}

export const experience: Experience[] = [
  {
    id: 1,
    company: 'WNC',
    date: '2024-Present',
    position: 'Frontend Developer',
    active: true,
  },
  {
    id: 2,
    company: 'UDOX',
    date: '2023-2024',
    position: 'Frontend Developer',
    active: false,
  },
  {
    id: 3,
    company: 'Creator IT Academy',
    date: '2021-2022',
    position: 'Frontend Developer',
    active: false,
  },
]