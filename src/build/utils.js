const httpsReg = /^https:\/\//

// ...

export function createProxy(_list) {
  if (!_list) return {}

  const list = JSON.parse(_list)

  const rst = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsReg.test(target)

    // https://github.com/http-party/node-http-proxy#options
    rst[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {})
    }
  }

  return rst
}
