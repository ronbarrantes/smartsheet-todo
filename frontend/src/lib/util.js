let ready = true
export const throttle = (fn, ms) => (...args) => {
  if (ready) {
    ready = false
    setTimeout(() => ready = true, ms)
    return fn(...args)
  }
}

export const promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}