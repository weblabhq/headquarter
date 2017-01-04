export function cpuUsage (data) {
  if (!data) return 0.0

  let cpuPercent = 0.0
  // calculate the change for the cpu usage of the container in between readings
  const cpuDelta = data.cpu_stats.cpu_usage.total_usage - data.precpu_stats.cpu_usage.total_usage
  // calculate the change for the entire system between readings
  const systemDelta = data.cpu_stats.system_cpu_usage - data.precpu_stats.system_cpu_usage

  if (systemDelta > 0.0 && cpuDelta > 0.0) {
    cpuPercent = (cpuDelta / systemDelta) * data.cpu_stats.cpu_usage.percpu_usage.length * 100.0
  }

  return cpuPercent.toFixed(2)
}

export function MB (bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + 'MB'
}

export function memUsage (data) {
  if (!data) return 0.0

  return data.memory_stats.usage
}

export function memMaxUsage (data) {
  if (!data) return 0.0

  return data.memory_stats.max_usage
}

export function memLimit (data) {
  if (!data) return 0.1

  return data.memory_stats.limit
}
