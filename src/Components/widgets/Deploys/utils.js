import m from 'moment'

export const byDay = (data, days) => {
  const countByDay = {}
  const today = m()

  data.forEach((e) => {
    const diffInDays = today.diff(e.created, 'days');
    
    if (diffInDays >= 0 && diffInDays < days) {
      countByDay[diffInDays] = countByDay[diffInDays]
        ? countByDay[diffInDays]++
        : 1
    }
  })

  const results = []
  for (let i = days - 1; i >= 0; i--) {
    const day = m().subtract(i, 'days').format('MMM D')
    results.push({
      name: day,
      value: countByDay[i] || 0
    })
  }

  return results
}